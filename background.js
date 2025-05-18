chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    func: () => {
      let numCookies = 0;
      const cookieArray = document.cookie.split("; ");
      for (let i = 0; i < cookieArray.length && cookieArray[i]; i++) {
        numCookies++;
        for (let subDomain = "." + location.host; subDomain; subDomain = subDomain.replace(/^(?:\.|[^\.]+)/, "")) {
          for (let curPath = location.pathname; curPath; curPath = curPath.replace(/.$/, "")) {
            document.cookie = cookieArray[i] + "; domain=" + subDomain + "; path=" + curPath + "; expires=" + new Date(0).toUTCString();
          }
        }
      }

      localStorage.clear();
      sessionStorage.clear();
      console.log(chrome.i18n.getMessage("clearedStorage"));

      function reloadAndNotify() {
        alert(chrome.i18n.getMessage("alertMessage", numCookies.toString()));
        location.href = location.href.split("?")[0] + "?cleared=" + Date.now();
      }

      if (indexedDB && indexedDB.databases) {
        indexedDB.databases().then(dbs => {
          dbs.forEach(db => {
            console.log(chrome.i18n.getMessage("deletingDB"), db.name);
            indexedDB.deleteDatabase(db.name);
          });
          setTimeout(reloadAndNotify, 200);
        }).catch(e => {
          console.warn(chrome.i18n.getMessage("indexedDBFailed"), e);
          reloadAndNotify();
        });
      } else {
        console.warn(chrome.i18n.getMessage("unsupportedDB"));
        reloadAndNotify();
      }
    }
  });
});
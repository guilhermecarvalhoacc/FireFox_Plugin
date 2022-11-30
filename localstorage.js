const getLocalStorage = async (tabs) => {
    let tab = tabs.pop();
    const Elemento_LS = document.getElementById("LocalStorage");
    const response = await browser.tabs.sendMessage(tab.id, {
      method: "localStorage",
    });
    const Tamanho_lista_storage = response.data.length;
    var numstorage = document.getElementById("num-storage");
    if (Tamanho_lista_storage > 0) {
      for (let localStorage of response.data) {
        let li = document.createElement("li");
        let content = document.createTextNode(localStorage[0]);
        li.appendChild(content);
        Elemento_LS.appendChild(li);
      }
      let content = document.createTextNode(Tamanho_lista_storage + " Dados armazenados na Página");
      numstorage.appendChild(content);
    } else {
      let li = document.createElement("li");
      let content = document.createTextNode(
        "Sem local storage"
      );
      li.appendChild(content);
      Elemento_LS.appendChild(li);
    }
  };
  function getActiveTab() {
    return browser.tabs.query({
      currentWindow: true,
      active: true,
    });
  }
  getActiveTab().then(getLocalStorage);
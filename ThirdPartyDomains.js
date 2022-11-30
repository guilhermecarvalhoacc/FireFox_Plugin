const showDomains = async(tabs) => {
    let tab = tabs.pop();
    const response = await browser.tabs.sendMessage(tab.id, {
        method: "getLinks",
    });
    const Numero_Doms = document.getElementById("third-party-domains-number");
    var dom = document.getElementById("third-party-domains");
    var num_doms  = response.data.length;
    var domains = response.data;
    for (let domain of domains){
        let li = document.createElement("li");
        let content = document.createTextNode(domain);
        li.appendChild(content);
        dom.appendChild(li);
    }
    let content = document.createTextNode(num_doms + " third party links in this page!");
    Numero_Doms.appendChild(content);
    Numero_Doms.setAttribute("value", num_doms);
};
function getActiveTab(){
    return browser.tabs.query({
        currentWindow: true,
        active: true
    });
}
getActiveTab().then(showDomains);
const getAllCookies = (tabs) => {
  let tab = tabs.pop();
  let dominio = tab.url.split("/")[2];
  let count_cookies = 0;
  var AllCookies = browser.cookies.getAll({
      url: tab.url,
  });
  AllCookies.then((cookies) => {
      count_cookies = cookies.length;
      var TotalCookies = document.getElementById("TotalCookies");
      var FPCookies = document.getElementById("FirstPartyCookies");
      var TPCookies = document.getElementById("ThirdPartyCookies");
      if (cookies.length > 0){
          let content = document.createTextNode(count_cookies + " Cookies Encontrados");
          TotalCookies.appendChild(content);
          TotalCookies.setAttribute("value", count_cookies);
          for (let cookie of cookies){
              let li = document.createElement("li");
              if (cookie.session){
                  var tipo_cookie = "sessão";
              }
              var tipo_cookie = "navegação";
              li.appendChild(document.createTextNode(cookie.name + "É um cookie de " + tipo_cookie));
              if ((cookie.domain ==  dominio)      || 
              (cookie.domain == "." + dominio)     || 
              (cookie.domain == "www" + dominio)   || 
              (cookie.domain == "www." + dominio)  || 
              ("." + cookie.domain == dominio)     || 
              ("www." + cookie.domain == dominio)  || 
              ("www" + cookie.domain == dominio)
              ){
                FPCookies.appendChild(li);
              } else{
                TPCookies.appendChild(li);
              }
          }
      } 
  });
};
function getActiveTab(){
  return browser.tabs.query({
      currentWindow: true,
      active: true
  });
}

getActiveTab().then(getAllCookies);



//referencias:
//https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementById


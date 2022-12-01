const Rating = () => {
    var rating = document.getElementById("rating");
    let number_of_cookies = Number(document.getElementById('TotalCookies').getAttribute("value"));
    let number_storage = Number(document.getElementById('num-storage').getAttribute("value"));
    let numbers_domain = Number(document.getElementById('TP_Domains').getAttribute("value"));
    var score = (0.5 * number_of_cookies) + (0.3 * number_storage) + (0.2 * numbers_domain);
    let content = document.createTextNode("Perigo: " + score.toFixed(1) + "%");
    rating.appendChild(content);
};
function getActiveTab(){
    return browser.tabs.query({
        currentWindow: true,
        active: true
    });
}
setTimeout(() => {
    getActiveTab().then(Rating);
}, 100);
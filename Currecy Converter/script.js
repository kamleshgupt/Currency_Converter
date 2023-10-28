const dropList = document.querySelectorAll(".drop-list select"),
fromCurrency = document.querySelectorAll(".form select"),
toCurrency = document.querySelectorAll(".to select"),
getbtton = document.querySelector("form button");


for (let 1 = 0; i < dropList.length; 1++) {
    for(currency_code in country_code){
        let_selected;
        if(i == 0){
            selected = currency_code == "USD" ? "selected" : "";
        }else if(i ==1){
            selected = currency_code == "IND" ? "selected" : "";

        }
        // creating option tag with passing currency code as a text and value
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        // inserting options tag inside select tag
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }
    dropList[i].addEventListener("change", e =>{
        loadFlag(e.target); // calling loadFlag with passing target element as an argument
    });
}

function loadFlag(element){
    for(code in country_code){
        if(code == element.value){ // if currency code of country list is equal to option value
            let imgTag = element.paramentElement.querySelector("img"); // selecting img tag of particular drop list
            // passing country code of a selected currency code in a img url
            imgTag.src =`https://flagsapi.com/${ country_code[code]}/flat/64.png`

        }
    }
}

window.addEventListener("load", () =>{
    e.preventDefault(); 
    
});

getbtton.addEventListener("click", e =>{
    e.preventDefault(); //preventing from from submitting
    getExchangeRate(){
});

function  getExchangeRate(){
    const amount = document.querySelector(".amount input");
    getExchangeRate getExchangeRateTxt = document.querySelector(".exchange-rate");
    let (amountVal == "" || amountVal == "0"){
        amount.value ="1";
        amountVal = 1;
    }
    getExchangeRateTxt.innerText = "Getting exchange rate...";
    <button>Get Exchange Rate</button>"
    let url = ` https://v6.exchangerate-api.com/v6/${apikey}/latest/${fromCurrency.value}`;
    fetch(url).then(response => response.jjson()).then(result => {
        let exchangerate = result.conversion_rates[toCurrency.value];
        let totalExchangeRate = (amountVal * getExchangeRate).toFixed(2);
        const getExchangeRateTxt = document.querySelector(".exchange-rate");
        .getExchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${toCurrency.value}`;
    })
}

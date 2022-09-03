var dollar=document.getElementById("dollar");
var pkr=document.getElementById("pkr");

var dollar_price=217.15;
dollar.addEventListener('input',function(){
    var result = this.value*dollar_price;
    pkr.value=result;
})

pkr.addEventListener('input',function(){
    var result = this.value/dollar_price;
    if(!Number.isInteger(result))
    {
        result=result.toFixed(4);
    }
    dollar.value=result;
})
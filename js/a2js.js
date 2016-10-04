function findTax(x){
    if (x==""){
        alert("Error. Please enter a number.");
        return;
    }
    var tax=(x*0.20);
    if (isNaN(tax)){
        alert("Error");
        return;
    }
    document.taxes.taxResult.value=tax;
    return tax;
}

function findTotal(x){
    if (x==""){
        alert("Error. Please enter a number.");
        return;
    }
    var total=parseFloat(x)+parseInt(findTax(x));
    if (isNaN(total)){
        return;
    }
    document.taxes.totalResult.value=total;
}
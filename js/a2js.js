function findTip(x){
  if (x==""){
    alert("Error. Please enter a number.");
      return;
  }
  var tip=(x*0.20);
  if (isNaN(tip)){
    alert("Error: " + x + " is not a valid price.");
    return;
  }
  document.tips.tipResult.value=tip;
  return tip;
}

function calculate(x){
  document.getElementById("tips").style.display="none";
  if (x==""){
    alert("Error. Please enter a number.");
    return;
  }
  var total=parseFloat(x)+parseFloat(findTip(x));
  console.log(total);
  if (isNaN(total)){
    return;
  }
  total="Total:$" + total;
  document.getElementById("tipResult").style.display="inline";
  document.getElementById("tipResult").innerHTML = total;
}

$("document").ready(function () {
  $('#tips').submit(function (e) {
    e.preventDefault();
  })
})

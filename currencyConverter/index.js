document.getElementById('convert').onclick = function(){
    let temp = parseFloat(document.getElementById("temp").value);
    let unit = document.getElementById("unit").value;

    let convertedTemp = unit === "c"
    ?(temp * 9/5) +32 //convert c to f
    :(temp -32 )* 5/9 //convert f to c

    document.getElementById("converted").textContent = convertedTemp.toFixed(2);


}
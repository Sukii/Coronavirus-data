function calculate() {
    var n = parseInt(document.getElementById("xcsv").value);
    var f = document.getElementById("ycsv").value;
    var o = document.getElementById("ocsv");
    o.value += "x," +  f + "\n";
    for(var x=1; x<n+1; x++) {
	o.value += x + "," + eval(f) + "\n";
    }
}

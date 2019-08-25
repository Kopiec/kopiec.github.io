function przemianaR(){
    var tekst = document.getElementById('TuJestR');
    var outPut = document.getElementById('TuWychodziR');
    var reg = tekst.value.replace(/r/g, "ł");
    var reg2 = reg.replace(/R/g, "Ł");
    outPut.value = reg2;
    tekst.placeholder=tekst.value;
    tekst.value="";
}

function odmianaR(){
    var text = document.getElementById('TuWychodziR');
    var wyjscie = document.getElementById('TuJestR');
    var wyr = text.value.replace(/ł/g, "r");
    var wyr2 = wyr.replace(/Ł/g, "R");
    wyjscie.value=wyr2;
    text.placeholder=text.value;
    text.value="";
}

/*
Pozdro byq malinowy, jezeli to czytasz odezwij sie na discordzie priv :)
*/
var handler = document.getElementById('counter');

var eventTime = new Date(2021, 0, 17, 20, 00, 00);

function stopFunction() {
  clearInterval(inter);
}

function counterTime(){
    var time = new Date();
    
    var remainedTime = eventTime.getTime() - time.getTime();
    
    if(remainedTime>0){
        var s = remainedTime / 1000; //seconds
        var m = s / 60;  //minutes
        var h = m / 60; //hours
        
        var sLeft = Math.floor(s % 60);
        var mLeft = Math.floor(m % 60);
        var hLeft = Math.floor(h);
        var D = hLeft / 24;
        var Dleft= Math.floor(D);
        
        if(mLeft<10){
            mLeft = "0" + mLeft;
        }
        if(sLeft<10){
            sLeft = "0" + sLeft;
        }
        while(hLeft>=24){
            hLeft=hLeft-24;
        }

        if(hLeft<10){
            hLeft = "0" + hLeft;
        }
        
        return Dleft+" Dni "+hLeft+":"+mLeft+":"+sLeft;
    }
    else{
        stopFunction();
        return "0 Dni 00:00:00";
    }
}

var inter = setInterval("handler.innerHTML = counterTime()", 1000);

window.onload = function(){
    handler.innerHTML = counterTime();
    inter;
}
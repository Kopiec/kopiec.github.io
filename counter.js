var handler = document.getElementById('counter');

var eventTime = new Date(2020, 6, 24, 15, 55, 15);

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
        var hLeft = Math.floor(h % 60);
        
        if(mLeft<10){
            mLeft = "0" + mLeft;
        }
        if(sLeft<10){
            sLeft = "0" + sLeft;
        }
        if(hLeft<10){
            hLeft = "0" + hLeft;
        }
        
        return hLeft + " : " + mLeft + " : " + sLeft;
    }
    else{
        stopFunction();
        return '<iframe width="1120" height="630" src="https://www.youtube.com/embed/-sNWKbnaFkg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    }
}

var inter = setInterval("handler.innerHTML = counterTime()", 1000);

window.onload = function(){
    handler.innerHTML = counterTime();
    inter;
}
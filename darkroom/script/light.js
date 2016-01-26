lastX=0;
lastY=0;
battery = 100;
LIGHT_MAX=200;

$(document).ready(function() {
    lit = false;
    
    flickSound = new Audio("sound/flicker.wav");
    flickSound.volume=0.8;
    
    $("#darkness").css({
        "background-color": "black"
        }
    );
    
    $("body").mousemove(function(e) {
        lastX = e.pageX;
        lastY = e.pageY;
        if (lit) {
            setLight();
            castShadow();
        }
    });
    
    flicker();
    $("body").click(function(e) {
        switchLight();
    
    });
    checkBattery();
});

function switchLight() {
    flickSound.play();
    if (battery>0) {
        lit=!lit;
    }
    if (!lit) {
        $("#darkness").css("background","black");
    }
}

function checkBattery() {
    if (lit) {
        battery--;
        $("#battery").animate({'width':battery});
        if (battery<=1) { switchLight(); }
    }
    else if (battery<100){ 
        battery++; 
        $("#battery").animate({'width':battery});
    }
    setTimeout(function() {checkBattery();},1000);
}

function setLight(x,y) {
    var x = lastX;
    var y = lastY;
    $("#darkness").css({
        "background": "-webkit-radial-gradient(circle "+(LIGHT_MAX+battery)+"px at "+x+"px "+y+"px ,rgba(0,0,0,0), rgba(170,170,120,0.4),rgb(0,0,0))",
        "background": "-o-radial-gradient(circle "+(LIGHT_MAX+battery)+"px at "+x+"px "+y+"px ,rgba(0,0,0,0), rgba(170,170,120,0.4),rgb(0,0,0))",
        "background": "-moz-radial-gradient(circle "+(LIGHT_MAX+battery)+"px at "+x+"px "+y+"px ,rgba(0,0,0,0), rgba(170,170,120,0.4),rgb(0,0,0))", 
        "background": "radial-gradient(circle "+(LIGHT_MAX+battery)+"px at "+x+"px "+y+"px ,rgba(235,225,200,0.01), rgba(170,170,120,0.5),rgb(0,0,0))" 
    });
}

function castShadow() {
    $(".thing").each(function() {
        var position = $(this).offset();
        var dX = position.left+$(this).width()/2-lastX;
        var dY = position.top+$(this).height()/2-lastY;
        $(this).css({
            'boxShadow':dX/10+"px "+dY/10+"px 20px black"
        });
    });
    
}

function flicker() {
    if (lit) {
        flickSound.play();
        $("#darkness").css("background","black");
        lit=false;
        setTimeout(function() {
            setLight();
            lit=true;
        },Math.floor(10+Math.random()*100))
    }
    setTimeout(function() {flicker()}, Math.floor(Math.random()*6000+1));
    
}






















    
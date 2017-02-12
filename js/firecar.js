/**
 * Created by Administrator on 2016/12/10.
 */
var mapbox = $$("map1");
var sun = $$("sun");
var moon = $$("moon");
var content = $$("content");
var fcar = $$("fcar");
var startbtn = $$("startbtn");
var countrywrap = $$("countrywrap");
var cwp = $$("cwp");
//±³¾°Í¼¶¯
startbtn.ondblclick = function () {
    animate(startbtn,{"opacity":0},function () {
        startbtn.display = "none";
        
    });
  playshow();
}
function playshow() {
    function map1show() {
        var i = 0;
        function map1sshow() {
            i-=5;
            mapbox.style.marginLeft = i+"px";
            if(i<-3465) {
                clearInterval(timer1);
                animate4(fcar,{"left":800},100,function () {
                    content.style.transform = "scale(0)";
                });
            }
        }
        var timer1=setInterval(map1sshow,20);
    }
    map1show();



    var j;
    function sunshow() {
        j = 600;
        var k = 200;
        var l = 255;
        function sundownshow() {
            k=k+5;
            l = l-10;
            var uplenght = j--;
            var leftlenght = k;
            sun.style.bottom = uplenght+"px";
            sun.style.left = leftlenght+"px";
            content.style.backgroundColor = "rgb("+l+","+l+","+l+")";
            if(j<350) {
                clearInterval(timer2);
            }
        }
        timer2 = setInterval(sundownshow,20);

    }
    sunshow();
    function moonshow() {
        var m = 300;
        var b = -40;
        var v = 0;
        function mnshow() {
            var  muplt = m++;
            b = b+5;
            v = v+3;
            moon.style.bottom = muplt+"px";
            moon.style.left = b+"px";
            if(v==255) {
                content.style.backgroundColor = "rgb(255,255,255)";
            }else{
                content.style.backgroundColor = "rgb("+v+","+v+","+v+")";
            }
            if(b>1200) {
                clearInterval(timer3);
            }
        }
        var timer3 = setInterval(mnshow,20);
    }
    setTimeout(moonshow,7000);
}



//=================
function animate4(tag, obj,cc, fn) {
    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
        var flag = true;
        for (var k in obj) {
            if (k == "opacity") {
                var target = obj[k] * 100;
                var leader = getStyle(tag, k) * 100 || 0;
                var step = (target - leader) /10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                tag.style[k] = leader / 100;
            } else if (k == "zIndex") {
                tag.style.zIndex = obj[k];
            } else {
                var target = obj[k];
                var leader = parseInt(getStyle(tag, k)) || 0;
                var step = (target - leader) / cc;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                tag.style[k] = leader + "px";
            }
            if (leader != target) {
                //×èÖ¹Çå³ý¶¨Ê±Æ÷
                flag = false;
            }
        }
        if (flag) {
            clearInterval(tag.timer);
            if (typeof fn == "function") {
                fn();
            }
        }
    }, 20);
}
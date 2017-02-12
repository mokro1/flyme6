/**
 *
 * Created by Administrator on 2016/12/6.
 */
var hbTitle = document.getElementById("hb_title");
var hbTitle1 = document.getElementById("hb_title1");
var hbcontent = document.getElementById("hb_content");
var zuce = document.getElementById("zuce");
var zhuceBox = document.getElementById("zhuceBox");
var closeZCbox = document.getElementById("closeZCbox");
//按钮
var btn = document.getElementById("btn");
var btnarr = btn.children;
var yPicbox = document.getElementById("yPicbox");
var yPicboxchild = yPicbox.children;
var young = document.getElementById("young");
var yanjin = document.getElementById("yanjin");
//经验部分
var yjP1 = $$("yjP1");
var yjP2 = $$("yjP2");
//协奏曲变量声明
var multitask = $$("multitask");
var mutask = $$("mutask");
//时钟视频
var icondetails = $$("icondetails");
var clock = $$("clock");
//得分
var defeng = $$("defeng");
var resultfeedback = $$("resultfeedback");
//天气
var weatherflow = $$("weatherflow");
var weather = $$("weather");
//灵动部分变量声明

var ldpic1 = $$("ldpic1");
var ldpic3 = $$("ldpic3");
var ldpic4 = $$("ldpic4");
//游戏部分声明变量;
var gsjbg = $$("gsjbg");
var gfemale = $$("gfemale");
var gmale = $$("gmale");
//进程收割者部分变量声明
var pro1 = $$("pro1");
var pro2 = $$("pro2");
var pro3 = $$("pro3");
var pro4 = $$("pro4");
var pro5 = $$("pro5");
var pro6 = $$("pro6");
var pro7 = $$("pro7");
var pro2_0 = $$("pro2_0");
var pro3_0 = $$("pro3_0");
var pro4_0 = $$("pro4_0");
var pro1_0 = $$("pro1_0");
var pro5_0 = $$("pro5_0");
var pro6_0 = $$("pro6_0");
//平行空间视频的播放变量声明
var pxbox1 = $$("pxbox1");
var pxbox2 = $$("pxbox2");
var pxbox3 = $$("pxbox3");
var visitorMode = $$("visitorMode");
var normalMode = $$("normalMode");
var privacyMode = $$("privacyMode");
//访客，正常，隐私模式下视屏变量声明
var pxpic1 = $$("pxpic1");
var pxpic2 = $$("pxpic2");
var pxpic3 = $$("pxpic3");
var sgsj = $$("sgsj");
var time = $$("time");
//输入法部分变量声明
var srfpicv1 = $$("srfpicv1");
var srfpicv2 = $$("srfpicv2");
var srfpicv3 = $$("srfpicv3");
var srfpicc3 = $$("srfpicc3");
var srfpicc2 = $$("srfpicc2");
var srfpicc1 = $$("srfpicc1");
//安全动图
var safec1 = $$("safec1");
var safec2 = $$("safec2");
var safec3 = $$("safec3");
var syspic1 = $$("syspic1");
var syspic2 = $$("syspic2");
var syspic3 = $$("syspic3");
var syspic4 = $$("syspic4");
var syspic5 = $$("syspic5");
//回到顶部
var toTop = $$("toTop");
toTop.onclick = function () {
  document.body.scrollTop = 0+"px";
}




function syspic1show() {
  setInterval(function () {
      animate3(syspic1,{"width":680,"height":680,"top":-38,"right":140,"opacity":0},9,function () {
          syspic1.style.width = 10+"px";
          syspic1.style.height = 10+"px";
          syspic1.style.top = 280+"px";
          syspic1.style.right = 465+"px";
          syspic1.style.opacity = 0.7;
      });
  },2000);
}
syspic1show();
function syspic2show() {
    setInterval(function () {
        animate3(syspic2,{"width":680,"height":680,"top":-38,"right":140,"opacity":0},9,function () {
            syspic2.style.width = 10+"px";
            syspic2.style.height = 10+"px";
            syspic2.style.top = 280+"px";
            syspic2.style.right = 465+"px";
            syspic2.style.opacity = 0.7;
        });
    },2000);
}
function syspic3show() {
    setInterval(function () {
        animate3(syspic3,{"width":680,"height":680,"top":-38,"right":140,"opacity":0},9,function () {
            syspic3.style.width = 10+"px";
            syspic3.style.height = 10+"px";
            syspic3.style.top = 280+"px";
            syspic3.style.right = 465+"px";
            syspic3.style.opacity = 0.7;
        });
    },2000);
}
function syspic4show() {
    setInterval(function () {
        animate3(syspic4,{"width":680,"height":680,"top":-38,"right":140,"opacity":0},9,function () {
            syspic4.style.width = 10+"px";
            syspic4.style.height = 10+"px";
            syspic4.style.top = 280+"px";
            syspic4.style.right = 465+"px";
            syspic4.style.opacity = 0.7;
        });
    },2000);
}
function syspic5show() {
    setInterval(function () {
        animate3(syspic5,{"width":680,"height":680,"top":-38,"right":140,"opacity":0},9,function () {
            syspic5.style.width = 10+"px";
            syspic5.style.height = 10+"px";
            syspic5.style.top = 280+"px";
            syspic5.style.right = 465+"px";
            syspic5.style.opacity = 0.7;
        });
    },2000);
}
setTimeout(syspic2show,1200);
setTimeout(syspic3show,2400);
setTimeout(syspic4show,3600);
setTimeout(syspic5show,4800);
//安全特效
function safeshow() {
    animate3(safec1,{"bottom":20,"left":-350},1000,function () {
        animate3(safec1,{"left":-20,"bottom":-400},1000);
    });
    animate3(safec2,{"bottom":-400,"right":350},1000,function () {
        animate3(safec2,{"right":-100,"bottom":-100},1000);
    });
}
safeshow();
setInterval(function () {
  safeshow();
},30000);
//输入法视频动画
srfpicv1.onmouseover = function () {
    srfpicv1.play();
};
srfpicv1.onclick = function () {
  animate(srfpicc1,{"left":167,"top":150,"opacity":1});
};
srfpicc1.onclick = function () {
    animate(srfpicc1,{"opacity":0,"left":339,"top":180});
};
srfpicv2.onmouseover = function () {
    srfpicv2.play();
};
srfpicv2.onclick = function () {
    animate(srfpicc2,{"left":416,"top":150,"opacity":1});
};
srfpicc2.onclick = function () {
    animate(srfpicc2,{"opacity":0,"left":589,"top":180});
};
srfpicv3.onmouseover = function () {
    srfpicv3.play();
};
srfpicv3.onclick = function () {
    animate(srfpicc3,{"left":655,"top":150,"opacity":1});
};
srfpicc3.onclick = function () {
    animate(srfpicc3,{"opacity":0,"left":829,"top":180});
};
//时光机案例的运动动画
time.onmouseover = function () {
  time.play();
};
sgsj.ondbclick = function () {
  time.pause();
};

//平行空间视频的播放--------------
pxbox1.onmouseover = function () {
    animate(pxpic1,{"opacity":0},function () {
        visitorMode.play();
        function pxpic1show() {
            animate(pxpic1,{"opacity":1});
        }
        setTimeout(pxpic1show,5000);
    });
};
pxbox1.ondbclick = function () {
    visitorMode.pause();
};

pxbox2.onmouseover = function () {
    animate(pxpic2,{"opacity":0},function () {
        normalMode.play();
        function pxpic2show() {
            animate(pxpic2,{"opacity":1});
        }
        setTimeout(pxpic2show,5000);
    });
};
pxbox2.ondbclick = function () {
    normalMode.pause();
};

pxbox3.onmouseover = function () {
    animate(pxpic3,{"opacity":0},function () {
        privacyMode.play();
        function pxpic3show() {
            animate(pxpic3,{"opacity":1});
        }
        setTimeout(pxpic3show,5000);
    });
};
pxbox3.ondbclick = function () {
    privacyMode.pause();
};



// 惊艳视频部分------------------------------
//视频1
multitask.onmouseover = function () {
    multitask.play();
};
mutask.ondblclick = function () {
    multitask.pause();
};
//视频2
icondetails.onmouseover = function () {
    icondetails.play();
};
clock.ondblclick = function () {
    icondetails.pause();
};
//视频3
resultfeedback.onmouseover = function () {
    resultfeedback.play();
};
defeng.ondblclick = function () {
    resultfeedback.pause();
};
//视频4
weatherflow.onmouseover = function () {
    weatherflow.play();
};
weather.ondblclick = function () {
    weatherflow.pause();
};

//页面滚动触发的动画-------------------------
window.onscroll = function () {
    var wh = parseInt(myScroll().top);
    if (wh > 2100) {
        animate(yjP1, {"top": 260});
    }
    if (wh < 2840) {
        yanjin.style.backgroundColor = "#DBEDFA";
        //animate(yanjin,{"backgroundColor":E7F3F9});
    } else {
        //animate(yanjin,{"backgroundColor":F9F2E7});
        yanjin.style.backgroundColor = "#F9F2E7";
        animate(yjP2, {"bottom": 120});
    }
    if (wh > 4570) {
        animate(ldpic1, {"left": 315});
        animate(ldpic3, {"left": 565});
        animate(ldpic4, {"left": 690});
    }
    if (wh > 5700) {
        animate(gsjbg, {"bottom": -46});
        animate(gfemale, {"left": 235});
        animate(gmale, {"left": 255});
    }
    if(wh>6900) {
      animate(pro1,{"top":315,"left":512,"opacity":0.2},function () {
        animate(pro1_0,{"opacity":1});
      });
      animate(pro2,{"top":315,"left":640,"opacity":0.2},function () {
          animate(pro2_0,{"opacity":1});
      });
      animate(pro3,{"top":315,"left":768,"opacity":0.2},function () {
          animate(pro3_0,{"opacity":1});
      });
      animate(pro4,{"top":443,"left":512,"opacity":0.2},function () {
          animate(pro4_0,{"opacity":1});
      });
      animate(pro5,{"top":443,"left":640,"opacity":0.2},function () {
          animate(pro5_0,{"opacity":1});
      });
      animate(pro6,{"top":443,"left":768,"opacity":0.2},function () {
          animate(pro6_0,{"opacity":1});
      });
    }
    if(wh>10900) {
          animate(safec3,{"top":260});
    }
};
//微信动态圆
function weixin() {
    setInterval(function () {
        var pro3t = parseInt(pro3.style.top);
        if(pro3t==315) {
            pro7.style.display = "block";
            animate2(pro7,{"width":250,"height":250,"top":230,"left":690,"opacity":0},function () {
                pro7.style.width = 100+"px";
                pro7.style.height = 100+"px";
                pro7.style.top = 300+"px";
                pro7.style.left = 750+"px";
                pro7.style.opacity = 1;
                pro7.style.display = "none";
            });
        }
    },50);
}
weixin();
//点击按钮换图片，young部分
for (var i = 0; i < btnarr.length; i++) {
    btnarr[i].index = i;
    btnarr[i].onclick = function () {
        for (var i = 0; i < yPicboxchild.length; i++) {
            btnarr[i].style.marginTop = 19 + "px";
            animate(yPicboxchild[i], {"opacity": 0});
        }
        young.style.backgroundImage = "url(img/designbg" + (this.index + 2) + ".png)";
        this.style.marginTop = 26 + "px";
        animate(yPicboxchild[this.index], {"opacity": 1});
    }
}

hbTitle1.onmouseover = function () {
    hbTitle1.style.transform = "rotateY(180deg)";
};
hbTitle1.onmouseout = function () {
    hbTitle1.style.transition = 1 + "s";
    hbTitle1.style.transform = "rotateY(0deg)";
};
function nonePic() {
    animate(hbTitle, {"top": 90, "opacity": 0}, function () {
        animate(hbTitle1, {"opacity": 1, "top": 140}, function () {
            animate(hbcontent, {"bottom": 0});
        });
    });
}
function flymell() {

    animate(hbTitle1, {"left": 200}, function () {
        animate(zhuceBox, {"right": 290, "opacity": 0.8})
    });
}
zuce.onclick = function () {
    flymell();
};
//登录窗口关闭事件
function closeevent() {
    animate(zhuceBox, {"right": -740}, function () {
        animate(hbTitle1, {"opacity": 1, "left": 680});
    });
}
closeZCbox.onclick = function () {
    closeevent();
};
//初始化6的样式
window.onload = function () {
    setTimeout(nonePic, 1500);
};

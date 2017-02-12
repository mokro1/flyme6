/**
 * Created by Administrator on 2016/11/22.
 */
/**
 * 定义了一个没有兼容性的获取标签内容的函数
 * @param element
 * @returns {*}
 */
//function getText(element){ //形参
//    // 能力检测   就是要看当前的浏览器，是否支持此对象的属性或是方法
////        var b = typeof element.innerText;
//    if(typeof element.innerText=="string"){
//        return    element.innerText;
//    }else {
//        return   element.textContent; // 低版本的火狐浏览器支持
//    }
//}

/**
 * 定义了一个没有兼容性的设置标签内容的函数
 * @param element
 * @param value
 */
//function setText(element,value){
//    if(typeof element.innerText=="string"){
//        element.innerText = value; //IE8及之前的低版本的浏览器
//    }else {
//        element.textContent = value;//低版本的火狐浏览器
//    }
//}


var txtElement = {
    getText: function (element) {
        // 能力检测   就是要看当前的浏览器，是否支持此对象的属性或是方法
//        var b = typeof element.innerText;
        if (typeof element.innerText == "string") {
            return element.innerText;
        } else {
            return element.textContent; // 低版本的火狐浏览器支持
        }
    },
    setText: function (element, value) {
        if (typeof element.innerText == "string") {
            element.innerText = value; //IE8及之前的低版本的浏览器
        } else {
            element.textContent = value;//低版本的火狐浏览器
        }
    }
};


var eleElement = {
    getNextElement: function (element) {
        // 能力检测  就是要看当前的浏览器是否支持此对象的属性或是方法
        if (element.nextElementSibling) {
            return element.nextElementSibling;//高级浏览器支持的方式
        } else { // 是IE8及之前的低版本的浏览器支持的方式
            var ele = element.nextSibling;
            while (ele && ele.nodeType != 1) { // 每一个条件是保证对象得真实存，不是undefined，再一个就是这个节点不是标签
                ele = ele.nextSibling; //继续在当前标签对象往后找
            }
            return ele;
        }
    },
    getPreviousElement: function (element) {
        // 能力检测
        if (element.previousElementSibling) {
            return element.previousElementSibling; // 高级浏览器支持的获取当前标签的上一个标签节点
        } else {
            var ele = element.previousSibling;
            while (ele && ele.nodeType != 1) {
                ele = ele.previousSibling;
            }
            return ele;
        }
    },
    getFirstElement: function (element) {
        // 能力检测
        if (element.firstElementChild) { // 高级浏览器支持的方式
            return element.firstElementChild;
        } else {
            //低版本的浏览器支持的方式
            var ele = element.firstChild;
            while (ele && ele.nodeType != 1) {
                ele = ele.nextSibling;
            }
            return ele;
        }
    },
    getLastElement: function (element) {
        // 能力检测
        if (element.lastElementChild) {
            return element.lastElementChild;
        } else {
            var ele = element.lastChild;
            while (ele && ele.nodeType != 1) {
                ele = ele.previousSibling;
            }
            return ele;
        }
    }
};

/**
 * 封装了一个兼容性版本的获取下一个相邻的标签节点的函数
 * @param element
 * @returns {*}
 */

//function getNextElement(element){
//    // 能力检测  就是要看当前的浏览器是否支持此对象的属性或是方法
//    if(element.nextElementSibling) {
//        return element.nextElementSibling;//高级浏览器支持的方式
//    }else { // 是IE8及之前的低版本的浏览器支持的方式
//        var ele = element.nextSibling;
//        while(ele&&ele.nodeType!=1){ // 每一个条件是保证对象得真实存，不是undefined，再一个就是这个节点不是标签
//            ele =  ele.nextSibling; //继续在当前标签对象往后找
//        }
//        return ele;
//    }
//}
/**
 * 封装了一个兼容版本的获取上一个标签节点的函数
 * @param element
 * @returns {*}
 */
//function getPreviousElement(element){
//    // 能力检测
//    if(element.previousElementSibling){
//        return element.previousElementSibling; // 高级浏览器支持的获取当前标签的上一个标签节点
//    }else {
//        var ele = element.previousSibling;
//        while(ele&&ele.nodeType!=1){
//            ele=  ele.previousSibling;
//        }
//        return ele;
//    }
//}
/**
 * 封装了一个兼容版本的获得子标签节点的函数
 * @param element
 * @returns {element}
 */
//function  getFirstElement(element){
//    // 能力检测
//    if(element.firstElementChild){ // 高级浏览器支持的方式
//        return element.firstElementChild;
//    }else {
//        //低版本的浏览器支持的方式
//        var ele = element.firstChild;
//        while(ele&&ele.nodeType!=1){
//            ele= ele.nextSibling;
//        }
//        return ele;
//    }
//}

/**
 * 封装了一个兼容版本的获取父元素的最后一个子标签节点函数
 * @param element
 * @returns {*}
 */
//function getLastElement(element){
//    // 能力检测
//    if(element.lastElementChild){
//        return element.lastElementChild;
//    }else {
//        var ele = element.lastChild;
//        while(ele&&ele.nodeType!=1){
//            ele= ele.previousSibling;
//        }
//        return ele;
//    }
//}
//表格隔行变色函数的封装
//function stripeTables() {
//    var tables = document.getElementsByTagName("table");
//    var odd, rows;
//    for (var i = 0; i < tables.length; i++) {
//        odd = false;
//        rows = tables[i].getElementsByTagName("tr");
//        for (var j = 0; j < rows.length; j++) {
//            if (odd == true) {
//                rows[j].style.backgroundColor = "#ffc";
//                odd = false;
//            } else {
//                odd = true;
//            }
//        }
//    }
//}
function $$(id) {
    return document.getElementById(id);
}


//移动全部
function moveAll(element1, element2) {
    var all = $$(element1);
    var sel = $$(element2);
    var options = all.innerHTML;
    sel.innerHTML += options;
    all.innerHTML = "";
    //for (var i = 0; i < options.length; i++) {
    //    sel.appendChild(options[i]);
    //    i--;
    //}
}
//移动选中的元素
function moveSelect(element1, element2) {
    var all = $$(element1);
    var sel = $$(element2);
    var options = all.children;
    for (var i = 0; i < options.length; i++) {
        if (options[i].selected) {
            sel.appendChild(options[i]);
            i--;
        }
    }
}


//让某个盒子运动到某一个位置
//让图片移动到指定位置
//function animate(tag,attr,target) {
//    clearInterval(tag.timer);
//    tag.timer = setInterval(function () {
//        //var leader = tga.offsetLeft;
//        var leader = parseInt(getStyle(tag, attr)) || 0;
//        var step = (target - leader) / 15;
////            step = leader > target ? -step : step;
////            step = Math.ceil(step);
//        //
//        if (step >= 0) {
//            step = Math.ceil(step);
//        } else {
//            step = Math.floor(step);
//        }
//        leader += step;
//        tag.style[attr] = leader + "px";
//        if (leader == target) {
//            clearInterval(tag.timer);
//        }
//    }, 17);
//}
//修改animate，可以修改任意的属性
//function animate(tag, attr, target) {
//    clearInterval(tag.timer);
//    tag.timer = setInterval(function () {
//        //改点1 - 获取某个属性的当前状态
//        //由于具有单位，需要取整
//        //parseInt("hehe") => NaN    NaN || 0
//        //为了应对auto转换为NaN的问题，我们使用短路操作，保证程序的健壮性
//        var leader = parseInt(getStyle(tag, attr)) || 0;
//        //缓动公式的一部分是更改step的值
//        var step = (target - leader ) / 10;
//        //由于offsetLeft在取值的时候会四舍五入，我们的step如果比较小，会造成无法运动的问题
//        //根据步数的正负，更改取整方式
//        step = step > 0 ? Math.ceil(step) : Math.floor(step);
//        //缓动公式
//        leader = leader + step;
//        //改点2 - 设置给某一个属性
//        tag.style[attr] = leader + "px";
//        //检测是否走到了指定位置
//        if (leader == target) {
//            clearInterval(tag.timer);
//        }
//    }, 17);
//}

//function animate(tag, target,speed) {
//    //每次传入一个标签准备进行运动
//    //我们可以将定时器的id保存在tag的某一个自定义属性上
//    clearInterval(tag.timer);
//    tag.timer = setInterval(function () {
//        //leader的值的获取,元素的当前位置
//        var leader = tag.offsetLeft;
//        //step的值设置,step需要根据leader和target的关系判断正负
//        var step = speed;
//        //检测
//        step = leader > target ? -step : step;
//        //如果说当前位置和目标位置之间的距离不足一步，就不能再正常走了
//        if (Math.abs(leader - target) > Math.abs(step)) {
//            //匀速运动公式
//            //标签的位置（新） = 标签的位置（旧） + 步长
//            leader = leader + step;
//            //设置给left属性
//            tag.style.left = leader + "px";
//        } else {
//            //进入else，说明不足一步了
//            //直接设置盒子运动到指定目标位置
//            tag.style.left = target + "px";
//            clearInterval(tag.timer);
//        }
//
//    }, 17);
//}
//获取样式
function getStyle(tga, attr) {
    //检测支持哪一个
    //box.currentStyle//如果不存在值为undefined
    //getComputedStyle如果浏览器不支持。相当于变量未声明，报错
    if (tga.currentStyle) {
        //ie支持
        return tga.currentStyle[attr];
    } else {
        //标准方法
        return getComputedStyle(tga, null)[attr];
    }
}

//function animate(tag, obj) {
//    clearInterval(tag.timer);
//    tag.timer = setInterval(function () {
//        var flag = true;
//        //true表示所有属性的数值都到达目标了
//        //先假设所有属性都到达目标了
//        for (var k in obj) {
//            if (k == "opacity") {
//                var target = obj[k] * 100;
//                var leader = getStyle(tag, k) * 100 || 0;
//                var step = (target - leader) / 10;
//                step = step > 0 ? Math.ceil(step) : Math.floor(step);
//                leader += step;
//                tag.style[k] = leader / 100;
//            } else if (k == "zIndex") {
//                tag.style[k] = obj[k];
//            } else {
//                //json {属性名：属性值} {k:json[k]}
//                var leader = parseInt(getStyle(tag, k)) || 0;
//                var target = obj[k];
//                var step = (target - leader) / 10;
//                step = step > 0 ? Math.ceil(step) : Math.floor(step);
//                leader = leader + step;
//                console.log("target: " + target + "leader: " + leader + "step: " + step);
//                tag.style[k] = leader + "px";
//            }
//            if (leader != target) {
//                flag = false;//告诉人家 我还有没到的呢
//            }
//        }
//        //最后再判断 如果标记仍然是true说明 没有没到达的了
//        //也就是都到达了
//        if (flag) {
//            clearInterval(tag.timer);
//        }
//    }, 15);
//}


//修改任意属性
//需求分析：
//再一次运动结束后，再执行新的运动
//遇到的问题:
//直接调用两次，后一次调用会清除前一次调用的定时器
//解决方式:
//我们在函数内找到了当前调用结束的位置:清除定时器以后

//新的需求：
//我们可能会在当前运动结束后进行不同的代码执行
//解决方案:
//在函数内，某段功能不确定，使用函数参数(回调函数)
function animate(tag, obj, fn) {
    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
        //假设成立法:假设当前这次定时器可以清除
        var flag = true;

        //需要同时修改多个属性
        //对对象中的每一个属性进行操作
        for (var k in obj) {
            if (k == "opacity") {
                //k - 属性名 - 字符串形式 - attr
                //obj[k] - 属性值 - target
                var target = obj[k] * 100;
                //获取结果可能是一个小数
                var leader = getStyle(tag, k) * 100 || 0;
                //缓动运动公式
                var step = (target - leader) / 20;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                //设置的时候
                tag.style[k] = leader / 100;
            } else if (k == "zIndex") {
                //直接设置层级，不需要渐变
                tag.style.zIndex = obj[k];
            } else {
                //普通的，带单位的样式

                //k - 属性名 - 字符串形式 - attr
                //obj[k] - 属性值 - target
                var target = obj[k];
                var leader = parseInt(getStyle(tag, k)) || 0;
                //缓动运动公式
                var step = (target - leader) / 12;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);

                leader = leader + step;

                //设置的时候
                tag.style[k] = leader + "px";
            }

            //检测，当前这个属性是否到达了指定位置
            if (leader != target) {
                //阻止清除定时器
                flag = false;
            }
        }

        //我们需要保证obj中每一个obj都运动到位置
        if (flag) {
            clearInterval(tag.timer);
            if (typeof fn == "function") {
                fn();
            }
        }
    }, 20);
}
//animate2
//animate2在函数内，某段功能不确定，使用函数参数(回调函数)
function animate2(tag, obj, fn) {
    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
        var flag = true;
        for (var k in obj) {
            if (k == "opacity") {
                var target = obj[k] * 100;
                var leader = getStyle(tag, k) * 100 || 0;
                var step = (target - leader) / 20;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                tag.style[k] = leader / 100;
            } else if (k == "zIndex") {
                tag.style.zIndex = obj[k];
            } else {
                var target = obj[k];
                var leader = parseInt(getStyle(tag, k)) || 0;
                var step = (target - leader) / 40;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                tag.style[k] = leader + "px";
            }
            if (leader != target) {
                //阻止清除定时器
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
//卷曲宽度和高度
function myScroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}
//浏览器可视区大小
function myClient() {
    return {
        wid: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        heit: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
    };
}
//封装page系列函数
function getpageX(e) {
    if (e.pageX) {
        return e.pageX;
    } else {
        return e.clientX + myScroll().left;
    }
}
function getpageY(e) {
    if (e.pageY) {
        return e.pageY;
    } else {
        return e.clientY + myScroll().top;
    }
}


//=================================
function animate3(tag, obj,cc, fn) {
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
                //阻止清除定时器
                flag = false;
            }
        }
        if (flag) {
            clearInterval(tag.timer);
            if (typeof fn == "function") {
                fn();
            }
        }
    }, 100);
}
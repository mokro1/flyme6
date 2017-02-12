/**
 * Created by Administrator on 2016/11/22.
 */
/**
 * ������һ��û�м����ԵĻ�ȡ��ǩ���ݵĺ���
 * @param element
 * @returns {*}
 */
//function getText(element){ //�β�
//    // �������   ����Ҫ����ǰ����������Ƿ�֧�ִ˶�������Ի��Ƿ���
////        var b = typeof element.innerText;
//    if(typeof element.innerText=="string"){
//        return    element.innerText;
//    }else {
//        return   element.textContent; // �Ͱ汾�Ļ�������֧��
//    }
//}

/**
 * ������һ��û�м����Ե����ñ�ǩ���ݵĺ���
 * @param element
 * @param value
 */
//function setText(element,value){
//    if(typeof element.innerText=="string"){
//        element.innerText = value; //IE8��֮ǰ�ĵͰ汾�������
//    }else {
//        element.textContent = value;//�Ͱ汾�Ļ�������
//    }
//}


var txtElement = {
    getText: function (element) {
        // �������   ����Ҫ����ǰ����������Ƿ�֧�ִ˶�������Ի��Ƿ���
//        var b = typeof element.innerText;
        if (typeof element.innerText == "string") {
            return element.innerText;
        } else {
            return element.textContent; // �Ͱ汾�Ļ�������֧��
        }
    },
    setText: function (element, value) {
        if (typeof element.innerText == "string") {
            element.innerText = value; //IE8��֮ǰ�ĵͰ汾�������
        } else {
            element.textContent = value;//�Ͱ汾�Ļ�������
        }
    }
};


var eleElement = {
    getNextElement: function (element) {
        // �������  ����Ҫ����ǰ��������Ƿ�֧�ִ˶�������Ի��Ƿ���
        if (element.nextElementSibling) {
            return element.nextElementSibling;//�߼������֧�ֵķ�ʽ
        } else { // ��IE8��֮ǰ�ĵͰ汾�������֧�ֵķ�ʽ
            var ele = element.nextSibling;
            while (ele && ele.nodeType != 1) { // ÿһ�������Ǳ�֤�������ʵ�棬����undefined����һ����������ڵ㲻�Ǳ�ǩ
                ele = ele.nextSibling; //�����ڵ�ǰ��ǩ����������
            }
            return ele;
        }
    },
    getPreviousElement: function (element) {
        // �������
        if (element.previousElementSibling) {
            return element.previousElementSibling; // �߼������֧�ֵĻ�ȡ��ǰ��ǩ����һ����ǩ�ڵ�
        } else {
            var ele = element.previousSibling;
            while (ele && ele.nodeType != 1) {
                ele = ele.previousSibling;
            }
            return ele;
        }
    },
    getFirstElement: function (element) {
        // �������
        if (element.firstElementChild) { // �߼������֧�ֵķ�ʽ
            return element.firstElementChild;
        } else {
            //�Ͱ汾�������֧�ֵķ�ʽ
            var ele = element.firstChild;
            while (ele && ele.nodeType != 1) {
                ele = ele.nextSibling;
            }
            return ele;
        }
    },
    getLastElement: function (element) {
        // �������
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
 * ��װ��һ�������԰汾�Ļ�ȡ��һ�����ڵı�ǩ�ڵ�ĺ���
 * @param element
 * @returns {*}
 */

//function getNextElement(element){
//    // �������  ����Ҫ����ǰ��������Ƿ�֧�ִ˶�������Ի��Ƿ���
//    if(element.nextElementSibling) {
//        return element.nextElementSibling;//�߼������֧�ֵķ�ʽ
//    }else { // ��IE8��֮ǰ�ĵͰ汾�������֧�ֵķ�ʽ
//        var ele = element.nextSibling;
//        while(ele&&ele.nodeType!=1){ // ÿһ�������Ǳ�֤�������ʵ�棬����undefined����һ����������ڵ㲻�Ǳ�ǩ
//            ele =  ele.nextSibling; //�����ڵ�ǰ��ǩ����������
//        }
//        return ele;
//    }
//}
/**
 * ��װ��һ�����ݰ汾�Ļ�ȡ��һ����ǩ�ڵ�ĺ���
 * @param element
 * @returns {*}
 */
//function getPreviousElement(element){
//    // �������
//    if(element.previousElementSibling){
//        return element.previousElementSibling; // �߼������֧�ֵĻ�ȡ��ǰ��ǩ����һ����ǩ�ڵ�
//    }else {
//        var ele = element.previousSibling;
//        while(ele&&ele.nodeType!=1){
//            ele=  ele.previousSibling;
//        }
//        return ele;
//    }
//}
/**
 * ��װ��һ�����ݰ汾�Ļ���ӱ�ǩ�ڵ�ĺ���
 * @param element
 * @returns {element}
 */
//function  getFirstElement(element){
//    // �������
//    if(element.firstElementChild){ // �߼������֧�ֵķ�ʽ
//        return element.firstElementChild;
//    }else {
//        //�Ͱ汾�������֧�ֵķ�ʽ
//        var ele = element.firstChild;
//        while(ele&&ele.nodeType!=1){
//            ele= ele.nextSibling;
//        }
//        return ele;
//    }
//}

/**
 * ��װ��һ�����ݰ汾�Ļ�ȡ��Ԫ�ص����һ���ӱ�ǩ�ڵ㺯��
 * @param element
 * @returns {*}
 */
//function getLastElement(element){
//    // �������
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
//�����б�ɫ�����ķ�װ
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


//�ƶ�ȫ��
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
//�ƶ�ѡ�е�Ԫ��
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


//��ĳ�������˶���ĳһ��λ��
//��ͼƬ�ƶ���ָ��λ��
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
//�޸�animate�������޸����������
//function animate(tag, attr, target) {
//    clearInterval(tag.timer);
//    tag.timer = setInterval(function () {
//        //�ĵ�1 - ��ȡĳ�����Եĵ�ǰ״̬
//        //���ھ��е�λ����Ҫȡ��
//        //parseInt("hehe") => NaN    NaN || 0
//        //Ϊ��Ӧ��autoת��ΪNaN�����⣬����ʹ�ö�·��������֤����Ľ�׳��
//        var leader = parseInt(getStyle(tag, attr)) || 0;
//        //������ʽ��һ�����Ǹ���step��ֵ
//        var step = (target - leader ) / 10;
//        //����offsetLeft��ȡֵ��ʱ����������룬���ǵ�step����Ƚ�С��������޷��˶�������
//        //���ݲ���������������ȡ����ʽ
//        step = step > 0 ? Math.ceil(step) : Math.floor(step);
//        //������ʽ
//        leader = leader + step;
//        //�ĵ�2 - ���ø�ĳһ������
//        tag.style[attr] = leader + "px";
//        //����Ƿ��ߵ���ָ��λ��
//        if (leader == target) {
//            clearInterval(tag.timer);
//        }
//    }, 17);
//}

//function animate(tag, target,speed) {
//    //ÿ�δ���һ����ǩ׼�������˶�
//    //���ǿ��Խ���ʱ����id������tag��ĳһ���Զ���������
//    clearInterval(tag.timer);
//    tag.timer = setInterval(function () {
//        //leader��ֵ�Ļ�ȡ,Ԫ�صĵ�ǰλ��
//        var leader = tag.offsetLeft;
//        //step��ֵ����,step��Ҫ����leader��target�Ĺ�ϵ�ж�����
//        var step = speed;
//        //���
//        step = leader > target ? -step : step;
//        //���˵��ǰλ�ú�Ŀ��λ��֮��ľ��벻��һ�����Ͳ�������������
//        if (Math.abs(leader - target) > Math.abs(step)) {
//            //�����˶���ʽ
//            //��ǩ��λ�ã��£� = ��ǩ��λ�ã��ɣ� + ����
//            leader = leader + step;
//            //���ø�left����
//            tag.style.left = leader + "px";
//        } else {
//            //����else��˵������һ����
//            //ֱ�����ú����˶���ָ��Ŀ��λ��
//            tag.style.left = target + "px";
//            clearInterval(tag.timer);
//        }
//
//    }, 17);
//}
//��ȡ��ʽ
function getStyle(tga, attr) {
    //���֧����һ��
    //box.currentStyle//���������ֵΪundefined
    //getComputedStyle����������֧�֡��൱�ڱ���δ����������
    if (tga.currentStyle) {
        //ie֧��
        return tga.currentStyle[attr];
    } else {
        //��׼����
        return getComputedStyle(tga, null)[attr];
    }
}

//function animate(tag, obj) {
//    clearInterval(tag.timer);
//    tag.timer = setInterval(function () {
//        var flag = true;
//        //true��ʾ�������Ե���ֵ������Ŀ����
//        //�ȼ����������Զ�����Ŀ����
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
//                //json {������������ֵ} {k:json[k]}
//                var leader = parseInt(getStyle(tag, k)) || 0;
//                var target = obj[k];
//                var step = (target - leader) / 10;
//                step = step > 0 ? Math.ceil(step) : Math.floor(step);
//                leader = leader + step;
//                console.log("target: " + target + "leader: " + leader + "step: " + step);
//                tag.style[k] = leader + "px";
//            }
//            if (leader != target) {
//                flag = false;//�����˼� �һ���û������
//            }
//        }
//        //������ж� ��������Ȼ��true˵�� û��û�������
//        //Ҳ���Ƕ�������
//        if (flag) {
//            clearInterval(tag.timer);
//        }
//    }, 15);
//}


//�޸���������
//���������
//��һ���˶���������ִ���µ��˶�
//����������:
//ֱ�ӵ������Σ���һ�ε��û����ǰһ�ε��õĶ�ʱ��
//�����ʽ:
//�����ں������ҵ��˵�ǰ���ý�����λ��:�����ʱ���Ժ�

//�µ�����
//���ǿ��ܻ��ڵ�ǰ�˶���������в�ͬ�Ĵ���ִ��
//�������:
//�ں����ڣ�ĳ�ι��ܲ�ȷ����ʹ�ú�������(�ص�����)
function animate(tag, obj, fn) {
    clearInterval(tag.timer);
    tag.timer = setInterval(function () {
        //���������:���赱ǰ��ζ�ʱ���������
        var flag = true;

        //��Ҫͬʱ�޸Ķ������
        //�Զ����е�ÿһ�����Խ��в���
        for (var k in obj) {
            if (k == "opacity") {
                //k - ������ - �ַ�����ʽ - attr
                //obj[k] - ����ֵ - target
                var target = obj[k] * 100;
                //��ȡ���������һ��С��
                var leader = getStyle(tag, k) * 100 || 0;
                //�����˶���ʽ
                var step = (target - leader) / 20;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                //���õ�ʱ��
                tag.style[k] = leader / 100;
            } else if (k == "zIndex") {
                //ֱ�����ò㼶������Ҫ����
                tag.style.zIndex = obj[k];
            } else {
                //��ͨ�ģ�����λ����ʽ

                //k - ������ - �ַ�����ʽ - attr
                //obj[k] - ����ֵ - target
                var target = obj[k];
                var leader = parseInt(getStyle(tag, k)) || 0;
                //�����˶���ʽ
                var step = (target - leader) / 12;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);

                leader = leader + step;

                //���õ�ʱ��
                tag.style[k] = leader + "px";
            }

            //��⣬��ǰ��������Ƿ񵽴���ָ��λ��
            if (leader != target) {
                //��ֹ�����ʱ��
                flag = false;
            }
        }

        //������Ҫ��֤obj��ÿһ��obj���˶���λ��
        if (flag) {
            clearInterval(tag.timer);
            if (typeof fn == "function") {
                fn();
            }
        }
    }, 20);
}
//animate2
//animate2�ں����ڣ�ĳ�ι��ܲ�ȷ����ʹ�ú�������(�ص�����)
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
                //��ֹ�����ʱ��
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
//������Ⱥ͸߶�
function myScroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}
//�������������С
function myClient() {
    return {
        wid: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        heit: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
    };
}
//��װpageϵ�к���
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
                //��ֹ�����ʱ��
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
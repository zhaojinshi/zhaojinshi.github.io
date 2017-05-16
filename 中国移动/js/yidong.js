/**
 * Created by zhao on 2017/4/21.
 */
$(function () {
    //头部
    const btn=$(".denglu");
    const con=$(".loginlist");
        btn[0].onmousemove=function () {
            btn[0].children[0].classList.add("open");
            con[0].style.display="block";
        }
        btn[0].onmouseout=function () {
            btn[0].children[0].classList.remove("open");
            con[0].style.display="none";
        }
    btn[1].onmousemove=function () {
        btn[1].children[0].classList.add("open1");
        con[1].style.display="block";
    }
    btn[1].onmouseout=function () {
        btn[1].children[0].classList.remove("open1");
        con[1].style.display="none";
    }
//    太原
    const taiyuan=$(".taiyuan")[0];
    const shanxi=$(".shanxi");
    const fanhui=$(".fanhui")[0];
    const body=$("body")[0];
    //console.log(taiyuan,shanxi,fanhui)
    taiyuan.onclick=function(e){
            e.stopPropagation();
            shanxi[0].style.display="block";
            shanxi[1].style.display="none";

    }
    fanhui.onclick=function(e){
        e.stopPropagation();
        shanxi[1].style.display="block";
        shanxi[0].style.display="none";

    }
    body.onclick=function(){
        shanxi[0].style.display="none";
        shanxi[1].style.display="none";
    }
//    banner轮播
    zulunbo(".bannerbox img",".bannerbox",".bannertu",[],".lunbo li",".zbtnn",".ybtnn",3000,500,"active")
// banner右
    const huafei=$(".HUAFEI")[0];
    const btns1=$(".btns1")[0];
    const btns2=$(".btns2")[0];
    const fanhui1=$(".FANHUI")[0];
    huafei.onclick=function(){
        btns1.style.display="block";
    }
    fanhui1.onclick=function(){
        btns1.style.display="none";
        btns2.style.display="block";
    }

//    banner下轮播
    jielunbo(".bannerxia",".lcbx ul",".lcbx ul li",".zuobtn",".youbtn",1,2000,500);
    ydjielunbo(".gonggaoDABOX",".gonggao_center",".gonggao_center1",".gonggaoabiaoz",".gonggaoabiaoy",2,3000);
//右固定
    const tupian=$(".youguding a img");
    //console.log(tupian)
    Array.from(tupian).forEach(function(tupian,index){
        tupian.onmousemove=function(){
            tupian.style.left="-84px";
        }
        tupian.onmouseout=function(){
            tupian.style.left="-20px";
        }
    })

    function Title(pic){
        const titpics=$(pic);
        const BODY=$("body")[0];
        var titk=document.createElement("div");
        BODY.appendChild(titk);
        var TITLE;
        var x=10;
        var y=20;
        titpics.forEach(function (titpic) {
            titpic.onmouseover=function (e) {
                titk.className="picK";
                TITLE=titpic.title;
                titpic.title="";
                titk.innerHTML=TITLE;
                titk.style.left=e.pageX+x+"px";
                titk.style.top=e.pageY+y+"px";
            };
            titpic.onmousemove=function (e) {
                titk.style.left=e.pageX+x+"px";
                titk.style.top=e.pageY+y+"px";
            };
            titpic.onmouseout=function () {
                titk.className="";
                titpic.title=TITLE;
                titk.innerHTML="";
            };
        });
    }
    Title(".gzqArea img");
    Title(".bannerxia img");
    Title(".bannerbox img");

});


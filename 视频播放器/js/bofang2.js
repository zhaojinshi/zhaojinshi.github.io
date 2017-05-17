/**
 * Created by zhao on 2017/5/4.
 */
var video=document.querySelector("video");
var startbtn=document.querySelector(".start");
var reload=document.querySelector(".reload");
var progress=document.querySelector(".progress");
var inner=document.querySelector(".inner");
var now=document.querySelector("#now");
var all=document.querySelector("#all");
var volume=document.querySelector(".volume");
var bg=document.querySelector(".bg");
var vol=document.querySelector(".vol");
var volinner=document.querySelector(".volinner");
var mask=document.querySelector(".mask");
var volicon=document.querySelector(".volume span");
var fullscreen=document.querySelector(".fullscreen");
var container=document.querySelector(".container");
var l=progress.offsetWidth;
var startflag=true;
startbtn.onclick=function () {
    if(startflag){
        video.play();
        startbtn.innerHTML="&#xe60b;";
    }else{
        video.pause();
        startbtn.innerHTML="&#xe607;";
    }
    startflag=!startflag;
};
reload.onclick=function () {
    video.load();
    startbtn.innerHTML="&#xe607;";
    startflag=true;
};
var duration=0;
var nowtime=0; //当前播放时间
//当视频可以播放事件
video.oncanplay=function () {
    duration=video.duration;
    all.innerHTML=time(duration);
};
//进度改变事件
video.ontimeupdate=function () {
    nowtime=video.currentTime;
    now.innerHTML=time(nowtime);
    var width=nowtime/duration;
    inner.style.width=width*100+"%";
};
function time(t) {
    var mins=Math.floor(t/60);
    var secs=Math.floor(t%60);
    return mins+":"+(secs<10?"0"+secs:secs);
}
progress.onmousedown=function (e) {
    var ox=e.offsetX;
    var bili=ox/l;
    var pos=duration*bili;
    video.currentTime=pos;
    document.onmousemove=function (e) {
        var ox=e.clientX-progress.offsetLeft;
        var bili=ox/l;
        var pos=duration*bili;
        video.currentTime=pos;
    }
    document.onmouseup=function () {
        document.onmousemove=null;
        document.onmouseup=null;
    }
};
//volume.onmouseover=function () {
//
//    bg.style.display="block";
//}
//volume.onmouseout=function () {
//    bg.style.display="none";
//}
hover(volume,function () {
    bg.style.display="block";
},function () {
    bg.style.display="none";
    mask.onmousemove=null;
    mask.onmouseup=null;
});
function fnvol(e) {
    var oy=e.offsetY;
    oy=oy>95?95:oy;
    var v=1-oy/95;
    video.volume=v;
    if(v==0){
        volicon.innerHTML="&#xe621;";
    }else{
        volicon.innerHTML="&#xe609;";
    }
    volinner.style.top=oy+"px";
}
mask.onmousedown=function (e) {
    fnvol(e);
    mask.onmousemove=function (e) {
        fnvol(e);
    };
    mask.onmouseup=function () {
        mask.onmousemove=null;
        mask.onmouseup=null;
    }
};
var volflag=true;
volicon.onclick=function () {
    if(volflag){
        volicon.innerHTML="&#xe621;";
        video.muted=true;
    }else{
        volicon.innerHTML="&#xe609;";
        video.muted=false;
    }
    volflag=!volflag;
};
var fullflag=true;
fullscreen.onclick=full;
video.ondblclick=full;
function full() {
    if(fullflag){
        fullscreen.innerHTML="&#xe66a;";
        container.style.width="100%";
        container.style.height="100%";
    }else{
        fullscreen.innerHTML="&#xe665;";
        container.style.width="1000px";
        container.style.height="700px";
    }
    fullflag=!fullflag;
    l=progress.offsetWidth;
}
document.onkeydown=function (e) {
    if(e.keyCode==27){
        fullflag=false;
        full();
    }
};

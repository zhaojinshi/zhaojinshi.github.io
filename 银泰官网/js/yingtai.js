/**
 * Created by zhao on 2017/4/18.
 */
$(function () {
    const liss=$(".liss");
    const kiss=$(".erweima");
    const cenji=$(".cenji");
    for(let i=0;i<liss.length;i++){
        liss[i].onmouseover=function () {
            kiss[i].style.display="block";
            cenji[i].style.zIndex=5;
        }
        liss[i].onmouseout=function () {
            kiss[i].style.display="none";
            cenji[i].style.zIndex=1;
        }
    }
    toumingdu(".banner img",".banner",".lunbotiao",[],1,"#e5004f",1000,0,"#211616",".left",".right");
    jielunbo(".mp_zuoxn",".mp_zuoxnpicbox",".xpicbox img",".mp_zuojian",".mp_youjian",3,1000,500);
    jielunbo(".mp_zuoxn1",".mp_zuoxnpicbox1",".xpicbox1 img",".mp_zuojian1",".mp_youjian1",3,1000,500);
    jielunbo(".mp_zuoxn2",".mp_zuoxnpicbox2",".xpicbox2 img",".mp_zuojian2",".mp_youjian2",3,1000,500);
    jielunbo(".mp_zuoxn3",".mp_zuoxnpicbox3",".xpicbox3 img",".mp_zuojian3",".mp_youjian3",3,1000,500);
    jielunbo(".mp_zuoxn4",".mp_zuoxnpicbox4",".xpicbox4 img",".mp_zuojian4",".mp_youjian4",3,1000,500);
    jielunbo(".mp_zuoxn5",".mp_zuoxnpicbox5",".xpicbox5 img",".mp_zuojian5",".mp_youjian5",3,1000,500);
    jielunbo(".mp_zuoxn6",".mp_zuoxnpicbox6",".xpicbox6 img",".mp_zuojian6",".mp_youjian6",3,1000,500);
    jielunbo(".mp_zuoxn7",".mp_zuoxnpicbox7",".xpicbox7 img",".mp_zuojian7",".mp_youjian7",3,1000,500);
    jielunbo(".mp_zuoxn8",".mp_zuoxnpicbox8",".xpicbox8 img",".mp_zuojian8",".mp_youjian8",3,1000,500);
    zulunbo(".mp_zhongpic1 img",".mp_zhong1",".mp_zhongpic1",[],".zulbiao li",".ZJT",".YJT",1000,500,"activeClass");
    zulunbo(".mp_zhongpic2 img",".mp_zhong2",".mp_zhongpic2",[],".zulbiao2 li",".ZJT2",".YJT2",1000,500,"activeClass");

    function xiantiao(BTOP,BBOTTOM,BLEFT,BRIGHT,dabiankuan,Width,Height) {
        const btop=$(BTOP);
        const bbottom=$(BBOTTOM);
        const bleft=$(BLEFT);
        const bright=$(BRIGHT);
        const picbox=$(dabiankuan);
        // let flag=true;
        for(let i=0;i<picbox.length;i++){
            picbox[i].onmouseover=function () {
                btop[i].style.width=Width+"px";
                bleft[i].style.height=Height+"px";
                bbottom[i].style.width=Width+"px";
                bright[i].style.height=Height+"px";
            }
            picbox[i].onmouseout=function () {
                btop[i].style.width=0;
                bleft[i].style.height=0;
                bbottom[i].style.width=0;
                bright[i].style.height=0;
            }
        }
    }
    xiantiao(".BTOP1",".BBOTTOM1",".BLEFT1",".BRIGHT1",".temaizuoxpic_1",220,260);
    xiantiao(".BTOP2",".BBOTTOM2",".BLEFT2",".BRIGHT2",".mp_youpic",270,180);
    xiantiao(".BTOP3",".BBOTTOM3",".BLEFT3",".BRIGHT3",".tongkuanxy_x ul li",198,251);
    xuanxiangka(".yixuan",".temaizuoxpic",".spanbiao1",".yiabiao");
    xuanxiangka(".erxuan",".tongkuanxy_x",".spanbiao2",".tongabiao");
    louceng(".loucen a","Section",".loucen",".loucen .fangTop",500,630);
})

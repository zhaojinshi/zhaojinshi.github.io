$(function(){
	const btn =$(".btnn");
	const con =$(".bannerlist");
	xuanxiangka(btn,con);
	zjlunbo(".tupiana",".lunbotu",".lunbotu ul li",".zuojian",".youjian",[],2,"red",2000,1,"#fff");
	jielunbo(".haohuozuobox",".haohuozuo",".haohuo",".zuojiant",".youjiant",5,1000,500);
	jielunbo(".guand",".guand ul",".XIAOTU",".ZJbtn",".YJbtn",6,1000,500);
	jielunbo(".guand2",".guand2 ul",".XIAOTU2",".ZJbtn2",".YJbtn2",6,1000,500);
	jielunbo(".guand3",".guand3 ul",".XIAOTU3",".ZJbtn3",".YJbtn3",6,1000,500);

	xuanxiangka1(".paihang a",".paihangx",".hongtiao");
	xuanxiangka1(".youzhongs a",".youzhongx",".HONG");


	const H=$(".Hover2")[0];
	const M=$(".Hover1")[0];
	const S=$(".Hover")[0];
	var t=setInterval(function(){
		S.innerHTML-=1;
		if(S.innerHTML==0){
			S.innerHTML=60;
			M.innerHTML-=1;
		}
		if(M.innerHTML==0){
			M.innerHTML=60;
			H.innerHTML-=1;
		}
		if(S.innerHTML<10){
			S.innerHTML=`0${S.innerHTML}`;
		}
		// if(M.innerHTML<10){
		// 	M.innerHTML=`0${M.innerHTML}`;
		// }
		// if(H.innerHTML<10){
		// 	H.innerHTML=`0${H.innerHTML}`;
		// }
	},1000)
	louceng(".btn li","section",".btn","nav",".ddaohang",500,480,"#666", ["#d70b1c","#d70b1c","#d70b1c","#d70b1c"]);

	toumingdu(".zhibo",".xinpinglunbo",".xinpingbodian li",[],1,"#f10215",2000,0,"#fff",".ZJT",".YJT");

	const guding=$(".iteam0");
	const huadong=$(".HUA");
	let left=175;
	for(let i=0;i<guding.length;i++){
		guding[i].onmouseover=function(){
			animate(huadong[i],{left:51},500);
		}
		guding[i].onmouseout=function(){
			animate(huadong[i],{left:175},500);
		}
	}

	const DIBU=$(".HUAfang")[0];
	let scroll= scrollobj();
	DIBU.onclick=function(){
		scroll.scrollTop=0;

	}

})
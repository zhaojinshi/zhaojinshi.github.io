// 选项卡 
// btn选项卡按钮 con选项卡内容
	function xuanxiangka(btn,con){
		for(let i=0;i<btn.length;i++){   //for里let不能改成var
			btn[i].onmouseover=function(){
			// for(let j=0;j<con.length;j++){
			// 	con[j].style.display="none";
			// }
			con[i].style.display="block";
		}
		btn[i].onmouseout=function(){
			con[i].style.display="none";
		}
	}	
	}


// 遮罩
// btn底下的块，con遮罩的块
	function zhe(btn,con){
	for(let i=0;i<btn.length;i++){
		btn[i].onmouseover=function(){
		con[i].style.display="block";
			}
		btn[i].onmouseout=function(){
			con[i].style.display="none";
			}
		}
	}


// 函数简化
	function $(select,obj=document){
		if(typeof select=="function"){
			window.onload=function(){
				select();//回调函数
			}
		}
		if(typeof select=="string"){
			return obj.querySelectorAll(select);
		}
	}
	// $(".box")
	// $(function(){})


	
//解决scrollTop兼容性 
function scrollobj(){
		// let body=document.body;
		// let html=document.documentElement;
		// body.scrollTop=1;
		// html.scrollTop=1;
		// let obj;
		// if(body.scrollTop==0){
		// 	obj=html;
		// }else{
		// 	obj=body;
		// }
		// obj.scrollTop=0;
		// return obj;

		// 第二种方法
		document.body.scrollTop=100;
		document.documentElement.scrollTop=100;//赋不上值
		let obj=document.body.scrollTop?document.body:document.documentElement;
		document.body.scrollTop=0;
		document.documentElement.scrollTop=0;//赋不上值

			return obj;

}



//层级轮播
	// pic轮播图填 字符串的选择器 
	// bigbannerBox通屏banner盒子 字符串的选择器
	// lunbodian轮播点 字符串选择器
	// colorArr通屏banner颜色 数组 ["red","blue"]
	// tuBigZ高层级
	// liactivebgColor轮播点获得焦点时背景颜色
	// lunboTime时间间隔
	// tuZ普通层级
	// lisColor轮播点普通颜色
	// type 不传值时默认层级轮播 type==1时，透明度轮播
	function Zlunbo(pic,bigbannerBox,lunbodian,colorArr,tuBigZ,liactivebgColor,lunboTime,tuZ,lisColor,tupiangeshu,type=0){
		if(type==0){
		const tupian=$(pic);
		const banner=$(bigbannerBox)[0];
		const li=$(lunbodian);
		const color=colorArr;
		tupian[0].style.zIndex=tuBigZ;
		li[0].style.background=liactivebgColor;
		banner.style.background=color[0];
		var num=0;
		var t=setInterval(move,lunboTime);
		banner.onmouseover=function(){
			clearInterval(t);
		}
		banner.onmouseout=function(){
			t=setInterval(move,lunboTime);
		}
		
			for(let j=0;j<li.length;j++){
			li[j].onmouseover=function(){
			for(let i=0;i<tupian.length;i++){
				tupian[i].style.zIndex=tuZ;
				li[i].style.background=lisColor;
			}
			tupian[j].style.zIndex=tuBigZ;
			li[j].style.background=liactivebgColor;
			banner.style.background=color[j];
			num=j;
			}
		}
		function move(){
			num++;
			if(num>tupiangeshu){
				num=0;
			}
			console.log(num);
			for(let i=0;i<tupian.length;i++){
				tupian[i].style.zIndex=tuZ;
				li[i].style.background=lisColor;
			}
			tupian[num].style.zIndex=tuBigZ;
			li[num].style.background=liactivebgColor;
			banner.style.background=color[num];
		}
		}
		


		else{
			const tupian=$(pic);
			const banner=$(bigbannerBox)[0];
			const li=$(lunbodian);
			const color=colorArr;
			tupian[0].style.zIndex=tuBigZ;
			li[0].style.background=liactivebgColor;
			banner.style.background=color[0];
			var num=0;
			var t=setInterval(move,lunboTime);
			banner.onmouseover=function(){
				clearInterval(t);
			}
			banner.onmouseout=function(){
				t=setInterval(move,lunboTime);
			}
			for(let j=0;j<li.length;j++){
				li[j].onmouseover=function(){
				for(let i=0;i<tupian.length;i++){
					tupian[i].style.opacity=tuZ;
					li[i].style.background="orange";

				}
				tupian[j].style.opacity=tuBigZ;
				animate(tupian[num],{opacity:0},500);
				li[j].style.background="white";
				banner.style.background=color[j];
				num=j;
				}
			}
			function move(){
				num++;
				if(num>tupiangeshu){
					num=0;
				}
				console.log(num);
				for(let i=0;i<tupian.length;i++){
					tupian[i].style.opacity=tuZ;
					li[i].style.background="orange";
				}
				tupian[num].style.opacity=tuBigZ;
				animate(tupian[num],{opacity:0},500);
				li[num].style.background="white";
				banner.style.background=color[num];

			}
		}
	}

// 层级箭头轮播
function zjlunbo(pic,bigbannerBox,lunbodian,left,right,colorArr,tuBigZ,liactivebgColor,lunboTime,tuZ,lisColor){
			const tu=document.querySelectorAll(pic);
			const banner=document.querySelectorAll(bigbannerBox)[0];
			const li=document.querySelectorAll(lunbodian);
			const leftbtn=document.querySelectorAll(left)[0];
			const rightbtn=document.querySelectorAll(right)[0];
			const color=colorArr;
			tu[0].style.zIndex=tuBigZ;
			li[0].style.background=liactivebgColor;
			banner.style.background=color[0];
			var num=0;
			var t=setInterval(move,lunboTime);
			banner.onmouseover=function(){
				clearInterval(t);
			}
			banner.onmouseout=function(){
			 	t=setInterval(move,lunboTime);
			}

			for(let i=0;i<li.length;i++){
				li[i].onmouseover=function(){
					// clearInterval(t);
					for(let j=0;j<tu.length;j++){
						tu[j].style.zIndex=tuZ;
						li[j].style.background=lisColor;
						banner.style.background=color[j];
					}
					tu[i].style.zIndex=tuBigZ;
					li[i].style.background=liactivebgColor;
					banner.style.background=color[i];

					num=i;
				}
			}
			leftbtn.onclick=function(){
				move("r");
			}
			rightbtn.onclick=function(){
				move("l");
			}
			function move(type="l"){
				if(type=="l"){
					num++;
					if(num>tu.length-1){
						num=0;
					}	
				}else if(type=="r"){
					num--;
					if(num<0){
						num=tu.length-1;
					}
				}
				
				for(let i=0;i<tu.length;i++){
					tu[i].style.zIndex=tuZ;
					li[i].style.background=lisColor;
					banner.style.background=color[i];

				}
				tu[num].style.zIndex=tuBigZ;
				li[num].style.background=liactivebgColor;
				banner.style.background=color[num];
			}
}

// 下拉导航
//num 第几个孩子的下标

function xiahuaNav(anniu,neirong,num){
	const item=$(anniu);
	const ul=$(neirong);
	for(let i=0;i<ul.length;i++){
		let h=parseInt(attr(ul[i],"height"));
		ul[i].setAttribute("h",h);
		ul[i].style.height=0;
	}
	for(let i=0;i<item.length;i++){
		hover (item[i],function(){
			if(item[i].children[num]){
				let ul=item[i].children[num];
				animate(ul,{height:ul.getAttribute("h")},500);
			}
		},function(){
			if(item[i].children[num]){
				let ul=item[i].children[num];
				animate(ul,{height:0},500);
			}
		})
	}
}


//attr(obj,style);
//获得obj元素的style（width，height等）样式值
//obj 类型 DOM元素
//style 类型 string 字符串
function attr(obj,style){
	return window.getComputedStyle(obj,null)[style];
}



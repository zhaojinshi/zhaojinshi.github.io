// 选项卡 
// btn选项卡按钮 con选项卡内容
	function xuanxiangka(btn1,con1){
		const btn=$(btn1);
		const con=$(con1);
		for(let i=0;i<btn.length;i++){   //for里let不能改成var
			btn[i].onmouseover=function(){
			for(let j=0;j<con.length;j++){
				con[j].style.display="none";
			}
			con[i].style.display="block";
		}
		btn[i].onmouseout=function(){
			con[i].style.display="none";
		}
	}	
	}


// 遮罩
// btn底下的块，con遮罩的块
	function zhe(btn1,con1){
		const btn=$(btn1);
		const con=$(con1);
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
		}else if(typeof select=="string"){
			// alert(/^<\w+>$/.test(select));
			if(/^<\w+>$/.test(select)){
				return document.createElement(select.slice(1,-1));
			}else{
				return obj.querySelectorAll(select);	
			}
			
		}
	}
	// $(".box")
	// $(function(){})


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
	function Zlunbo(pic,bigbannerBox,lunbodian,colorArr,tuBigZ,liactivebgColor,lunboTime,tuZ,lisColor,type=0){
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
			if(num>tupian.length-1){
				num=0;
			}
			for(let i=0;i<tupian.length;i++){
				tupian[i].style.zIndex=tuZ;
				li[i].style.background=lisColor;
			}
			tupian[num].style.zIndex=tuBigZ;
			li[num].style.background=liactivebgColor;
			banner.style.background=color[num];
		}
		}
		


		else if(type==1){
			const tupian=$(pic);
			const banner=$(bigbannerBox)[0];
			const li=$(lunbodian);
			const color=colorArr;
			tupian[0].style.opacity=tuBigZ;
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
					li[i].style.background=lisColor;

				}
				tupian[j].style.opacity=tuBigZ;
				animate(tupian[num],{opacity:0},500);
				li[j].style.background=liactivebgColor;
				banner.style.background=color[j];
				num=j;
				}
			}
			function move(){
				num++;
				if(num>tupian.length-1){
					num=0;
				}
				for(let i=0;i<tupian.length;i++){
					tupian[i].style.opacity=tuZ;
					li[i].style.background=lisColor;
				}
				tupian[num].style.opacity=tuBigZ;
				animate(tupian[num],{opacity:0},500);
				li[num].style.background=liactivebgColor;
				banner.style.background=color[num];

			}
		}
	}



// 左右轮播
	function zylunbo(pic,bigbannerBox,left,right,lunbodian,liactivebgColor,lunboTime,donghuaTime,lisColor){	
		const tu=$(pic);
		const img=$(bigbannerBox)[0];
		const imgW=parseInt(window.getComputedStyle(img,null).width);
		const leftbtn=$(left)[0];
		const rightbtn=$(right)[0];
		const li=$(lunbodian);
		//初始化
		li[0].style.background=liactivebgColor;
		var flag=true;
		// console.log(imgW)
		for(let i=0;i<tu.length;i++){
			tu[i].style.left=imgW+"px";
		}
		tu[0].style.left=0;
		var t=setInterval(move,lunboTime);
		var now=0;
		var next=0;

		function move(type="l"){
			flag=false;
			if(type=="l"){
			next++;
			if(next>tu.length-1){
				next=0;
				}
			tu[next].style.left=imgW+"px";
			animate(tu[now],{left:-imgW},donghuaTime);
			
			}else if(type=="r"){
				next--;
				if(next<0){
					next=tu.length-1;
				}
				tu[next].style.left=-imgW+"px";
				animate(tu[now],{left:imgW},donghuaTime);

			}
			

			animate(tu[next],{left:0},500,function(){
				flag=true;
				// for(let i=0;i<li.length;i++){
				// 	li[i].style.background="orange";
				// }
				li[next].style.background=liactivebgColor;
				li[now].style.background=lisColor;
				now=next;
			});
			
		}
		img.onmouseover=function(){
			clearInterval(t);
		}
		img.onmouseout=function(){
			 t=setInterval(move,lunboTime);
			
		}
		leftbtn.onmouseover=function(){
			clearInterval(t);
		}
		leftbtn.onclick=function(){
			if(flag){
			move("l");	
			}
			
		}
		rightbtn.onmouseover=function(){
			clearInterval(t);
		}
		rightbtn.onclick=function(){
			if(flag){
			move("r");	
			}
		}

		for(let i=0; i<li.length;i++){
			li[i].onmouseover=function(){
				clearInterval(t);
					if(flag){		
					if(i<now){
						// next=i-1;
						now=i;
						move("r");
					}else if(i>now){
						// next=i-1;
						now=i;
						move("l");
					}
				}
			}
		}


		window.onblur=function(){
			clearInterval(t);
		}
		window.onfocus=function(){
			t=setInterval(move,1000);
		}
	}





// 左右轮播 类名
	// lunbotupian 轮播图
	// lunbodakuai 放轮播块的大盒子
	// lunbokuai 放轮播图的轮播快
	// colorArr 放轮播块的大盒子的背景颜色集合
	// lunbodian 轮播点
	// zuojian 左按钮
	// youjian 右按钮
	// lunboTime 轮播时间
	// activeClass 给第一个轮播点加上的类名，定义轮播点选中的颜色
	function zulunbo(lunbotupian,lunbodakuai,lunbokuai,colorArr,lunbodian,zuojian,youjian,lunboTime,activeClass){
		const tu=document.querySelectorAll(lunbotupian);
		const banner=document.querySelector(lunbodakuai);
		const img=document.querySelector(lunbokuai);
		const color=colorArr;
		const lis=document.querySelectorAll(lunbodian);
		const imgw=parseInt(window.getComputedStyle(img,null).width);
		const zuobtn=document.querySelector(zuojian);
		const youbtn=document.querySelector(youjian);
		for(i=0;i<tu.length;i++){
			tu[i].style.left=imgw+"px";
		}
		tu[0].style.left=0;
		var now=0;
		var next=1;
		var t=setInterval(move,lunboTime);
		function move(type="r"){
			flag=false;
			if(type=="r"){
				animate(tu[now],{left:-imgw},500);
				tu[next].style.left=imgw+"px";
				animate(tu[next],{left:0},500,function(){
					flag=true;
					now=next;
					next++;			
					if(next>tu.length-1){
					next=0;
					}
				})
			}else if(type=="l"){
				animate(tu[now],{left:imgw},500);
				tu[next].style.left=-imgw+"px";
				animate(tu[next],{left:0},500,function(){
					flag=true;
					now=next;
					next--;			
					if(next<0){
					next=tu.length-1;
					}
				})
			}
			
			lis[now].classList.remove(activeClass);
			lis[next].classList.add(activeClass);
		}
		banner.onmouseover=function(){
			clearInterval(t);
		}
		banner.onmouseout=function(){
			t=setInterval(move,lunboTime);
		}
		zuobtn.onclick=function(){
			if(flag){
				move("l");	
			}
		}
		youbtn.onclick=function(){
			if(flag){
				move("r");	
			}
		}
		for(let i=0;i<tu.length;i++){
			lis[i].onmouseover=function(){
				if(flag){
					if(i<now){
						next=i;
						move("l");
					}else if(i>now){
						next=i;
						move("r");
					}
				}
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

function scrollobj(){

	 //都可以 兼容
	 //body 1
	document.body.scrollTop=100;
	//html  0
	document.documentElement.scrollTop=100;
	//判断
	let scrollobj=document.body.scrollTop?document.body:document.documentElement;
	// window.onscroll=function(){
	// 弹出滚动条高度 
	// console.log(document.body.scrollTop); 谷歌
	// console.log(document.documentElement.scrollTop);  //火狐
	// }
	scrollobj.scrollTop=0;
	return scrollobj

}


function loucen(anniu,Section,daohang,dingbu,anniukuai,donghuaTime,anniuyuanse,colorArr,bannergaodu,pic,imgUrl){
//按钮跳转
	const btn=$(anniu);
	const section=$(Section);
	const nav=$(daohang)[0];
	const color=colorArr;
	const obj=scrollobj();
	const CH=document.documentElement.clientHeight;
	const btnbox=$(anniukuai)[0];
	const dibu=$(dingbu)[0];
	dibu.onclick=function(){
		animate(obj,{scrollTop:0},donghuaTime);

	}
	for(let i=0;i<btn.length;i++){
		btn[i].onclick=function(){
			// obj.scrollTop=section[i].offsetTop
			animate(obj,{scrollTop:section[i].offsetTop},donghuaTime);
		}
	}

	
	let flagx=true;
	let flags=false;
	btnbox.style.width=0;
	btnbox.style.height=0;
//按钮变色
	window.onscroll=function(){
		for(let i=0;i<section.length;i++){
			if(obj.scrollTop+0.5*CH>=section[i].offsetTop){
				for(let j=0;j<btn.length;j++){
				btn[j].style.background=anniuyuanse;
				}
				btn[i].style.background=color[i];
			}
//按需加载
			if(obj.scrollTop+CH>=section[i].offsetTop){
				let img=$(pic,section[i]);
				for(let j=0;j<img.length;j++){
				img[j].src=img[j].getAttribute(imgUrl);
				}	
			}
		}
//导航滚动
		if(obj.scrollTop>=bannergaodu){
			//设备一  消息 往下走
			if(flagx){
				//收到消息 往下走 关闭设备一
				flagx=false;
				flags=true;
				//规划往下走 执行往下走
				animate(nav,{top:0},donghuaTime,function(){
					//已经走完
					//打开设备一
					flagx=true;
				});
			btnbox.style.display="block";
			animate(btnbox,{width:36,height:360},500);
			}
		}else{
			if(flags){
				flags=false;
				//设备二 消息 往上走
				//设备一打开

				flagx=true;
				animate(nav,{top:-50},donghuaTime,function(){
					flags=true;
				});
			btnbox.style.display="none";
			animate(btnbox,{width:0,height:0},500);
			}

		}
			

	}
	setTimeout(function(){
		animate(nav,{top:-50},function(){
			flags=true;
		});
	},1000)
}


// 天猫右侧特效
function cldt(btn,con){
		const img=$(btn);
		const Lis=$(con);
		for(let i=0;i<img.length;i++){
			img[i].onmouseover=function(){
				Lis[i].style.display="block";
				animate(Lis[i],{opacity:1,left:-90},500);
			}
			img[i].onmouseout=function(){
				Lis[i].style.display="none";
				animate(Lis[i],{opacity:0,left:-140},500);
			}
		}
		
	}


	// 左右节点多图轮播
	// bigbannerBox 最大的盒子
	// picbox 放图片的盒子
	// pic 图片
	// left 左箭头
	// right 右箭头
	// num 轮播的图片个数
	// lunboTime 轮播时间
	// donghuaTime 动画时间
function jielunbo(bigbannerBox,picbox,pic,left,right,num,lunboTime,donghuaTime){
		const win=$(bigbannerBox)[0];
		const box=$(picbox)[0];
		const lis=$(pic);
		const boxchildrenlen=box.children.length;
		var n=num;
		const imgw=parseInt(window.getComputedStyle(document.querySelector(pic),null).width)*n;
		win.style.width=imgw;
		const leftbtn=$(left)[0];
		const rightbtn=$(right)[0];
		var flag=true;		
		// var t=setInterval(move,lunboTime);
		function move(type="l"){
			flag=false;

			if(type=="l"){
				animate(box,{marginLeft:-imgw},donghuaTime,function(){
				flag=true;
				for(let i=0;i<n;i++){
					let first = box.children[0];
					let last = box.children[boxchildrenlen-1];
					box.appendChild(first);
				}				
				box.style.marginLeft=0;
			});	
			}else if(type=="r"){
				for(let i=0;i<n;i++){
					let first = box.children[0];
					let last = box.children[boxchildrenlen-1];
					box.insertBefore(last,first);	
				}				
				box.style.marginLeft=-imgw+"px";
				animate(box,{marginLeft:0},donghuaTime,function(){
					flag=true;															
				})
			}
			
		}
		// win.onmouseover=function(){
		// 	clearInterval(t);
		// }
		// win.onmouseout=function(){
		// 	 t=setInterval(move,lunboTime);
		// }
		leftbtn.onclick=function(){
			if(flag){
			move("r");
			leftbtn.style.display="none";
			rightbtn.style.display="block";
			}
			
		}
		rightbtn.onclick=function(){
			if(flag){
			move("l");
			rightbtn.style.display="none";
			leftbtn.style.display="block";
			}
		}

		// window.onblur=function(){
		// 	clearInterval(t);
		// }
		// window.onfocus=function(){
		// 	t=setInterval(move,1000);
		// }
}
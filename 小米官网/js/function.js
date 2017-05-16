// $(function(){
// 	alert(1);

// })
function $(select,obj=document){
	if(typeof select=="function"){
		window.onload=function(){
		select();
		}
	}
	else if(typeof select=="string"){
		// return obj.querySelectorAll(select);
		return obj.querySelectorAll(select);

	}
}


/*选项卡的功能xuanxiang(btn,con)
		btn是选项卡按钮，con选项卡内容

	*/
	function xuanxiang(btn,con){
		for(let i=0;i<btn.length;i++){
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

// pic （轮播图）字符串的选择器，
	// bigbannerBox(通屏的banner盒子)
	// lis  （轮播点 ） 字符串的选择器
	// colorArr（ 通屏的banner盒子的所有颜色）是个数组 例如["red","blue","black"]
	// tuActiveBigZ  （图轮播时的层级）
	// liactiveBgColor （轮播获得焦点的颜色）
	// lunboTime （轮播时间）  填的是数字
	// tuChushiZ  （图的初始层级）
	// liscolor （轮播的颜色）
// function Zlunbo(pic,bigbannerBox,lis,colorArr,tuActiveBigZ,liactiveBgColor,lunboTime,tuChushiZ,liscolor){
// 	const tu=$(pic);
// 	const banner=$(bigbannerBox)[0];
// 	const li = $(lis);
// 	const color = colorArr;
// 	tu[0].style.zIndex=tuActiveBigZ;
// 	li[0].style.background=liactiveBgColor;
// 	banner.style.background=color[0];
// 	var num=0;
// 	var t=setInterval(move,lunboTime);
// 	banner.onmouseover=function(){
// 		clearInterval(t);
// 	}
// 	banner.onmouseout=function(){
// 		t=setInterval(move,lunboTime);

// 	}

// 	for(let j=0;j<li.length;j++){
// 		li[j].onmouseover=function(){
// 			for(let i=0;i<tu.length;i++){
// 				tu[i].style.zIndex=tuChushiZ;
// 				li[i].style.background=liscolor;
			
// 			}
// 			tu[j].style.zIndex=tuActiveBigZ;
// 			li[j].style.background=liactiveBgColor;
// 			banner.style.background=color[j];
// 			num=j;
// 		}
// 	}

// 	function move(){
// 		num++;
// 		if(num>=tu.length){
// 			num=0;
// 		}
// 		console.log(num)
// 		for(let i=0;i<tu.length;i++){
// 			tu[i].style.zIndex=tuChushiZ;
// 			li[i].style.background=liscolor;
		
// 		}
// 		tu[num].style.zIndex=tuActiveBigZ;
// 		li[num].style.background=liactiveBgColor;
// 		banner.style.background=color[num];

// 	}
// }



// 透明度轮播
function toumingdu(pic,bigbannerBox,lis,colorArr,tuActiveBigZ,liactiveBgColor,lunboTime,tuChushiZ,liscolor,zuo,you){

	const tu=$(pic);
	const banner=$(bigbannerBox)[0];
	const li = $(lis);
	const color = colorArr;
	const leftbtn=$(zuo)[0];
	const rightbtn=$(you)[0];
	// const leftbtn = document.querySelectorAll(zuo);
	var flag=true;

	tu[0].style.opacity=tuActiveBigZ;
	li[0].style.background=liactiveBgColor;
	banner.style.background=color[0];
	var num=0;
	var t=setInterval(move,lunboTime);
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
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
	for(let j=0;j<li.length;j++){
		li[j].onmouseover=function(){
			
				for(let i=0;i<tu.length;i++){
					tu[i].style.opacity=tuChushiZ;
					li[i].style.background=liscolor;
				}
				// tu[j].style.opacity=tuActiveBigZ;
				animate(tu[j],{opacity:1},500);//用animate时需要将li的opac注释 以及tu[j].style.opacity=1;注释掉
				li[j].style.background=liactiveBgColor;
				banner.style.background=color[j];
				num=j;
		}
	}

	function move(type="l"){
		flag=false;
		if(type=="l"){
			num++;
			if(num>tu.length-1){
				num=0;
			}
		}
		else if(type=="r"){
			num--;
			if(num<0){
				num=tu.length-1;
			}	
		}
		for(let i=0;i<tu.length;i++){
			tu[i].style.opacity=tuChushiZ;
			li[i].style.background=liscolor;
		
		}
		// tu[num].style.opacity=tuActiveBigZ;
		animate(tu[num],{opacity:1},500,function(){
			flag=true;
		});
		li[num].style.background=liactiveBgColor;
		banner.style.background=color[num];

	}

}



//左右轮播
// function zylunbo(pic,tpHezi,zuo,you,lix,liactiveBgColor,lunboTime,liscolor){
// 	//获取轮播图
// 	const tu=$(pic);
// 	// 获取放轮播图的盒子
// 	const img=$(tpHezi)[0];
// 	// 获取轮播图盒子的宽度转为整型
// 	const imgW=parseInt(window.getComputedStyle(img,null).width);
// 	// banner图上左边按钮
// 	const leftbtn=$(zuo)[0];
// 	// banner图上右边按钮
// 	const rightbtn=$(you)[0];
// 	// 获取轮播点
// 	// const lis=$(lix);
	

// 	// 初始化
// 	for(let i=0;i<2;i++){
// 		tu[i].style.left=imgW+"px";
// 	}
	
// 	tu[0].style.left=0;
// 	// lis[0].style.background=liactiveBgColor;
// 	var t=setInterval(move,lunboTime);
// 	var num=0;
// 	var next=0;
// 	var flag=true;

// 	// 鼠标移进轮播点时发生的
// 	// for(let i=0;i<lis.length;i++){
// 	// 	lis[i].onmouseover=function(){
// 	// 		if(flag){
// 	// 			for(let j=0;j<lis.length;j++){
// 	// 				lis[j].style.background=liscolor;
// 	// 				tu[j].style.left=imgW+"px";
// 	// 			}
// 	// 			tu[i].style.left=0;
// 	// 			lis[i].style.background=liactiveBgColor;
// 	// 			clearInterval(t);
// 	// 			num=i;
// 	// 			next=i;
// 	// 		}
			
// 	// 	}
// 	// }

// 	function move(type="l"){
// 		flag=false;
// 		// 左轮播
// 		if(type=="l"){
// 			next++;
// 			if(next>2){
// 				next=0;
// 			}
// 			tu[next].style.left=imgW+"px";
// 			// tu[next].style.left=imgW+"px";
// 			// lis[next].style.background="#fff";
// 			animate(tu[num],{left:-imgW},500);
// 		}
// 		// 右轮播
// 		else if(type=="r"){
// 			next--;
// 			if(next<0){
// 				next=1;
// 			}
// 			tu[next].style.left=-imgW+"px";
// 			// lis[next].style.background="#fff";
// 			animate(tu[num],{left:imgW},500);
// 		}
		
// 		animate(tu[next],{left:0},500,function(){
// 			//轮播结束
// 			flag=true;
// 			// lis[next].style.background=liactiveBgColor;
// 			// lis[num].style.background=liscolor;
// 			// console.log(num+"--"+next);
// 			num=next;
// 		});		
// 	}	
// 	img.onmouseover=function(){
// 		clearInterval(t);
// 	}
// 	img.onmouseout=function(){
// 		t=setInterval(move,lunboTime);
// 	}
// 	leftbtn.onmouseover=function(){
// 		clearInterval(t);
// 	}
// 	leftbtn.onclick=function(){
// 		if(flag){
// 			move("l");
// 		}
// 	}
// 	rightbtn.onmouseover=function(){
// 		clearInterval(t);
// 	}
// 	rightbtn.onclick=function(){
// 		if(flag){
// 			move("r");
// 		}		
// 	}			
// }
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

function zy(pic,tpHezi,zuo,you,lix,liactiveBgColor,lunboTime,liscolor){
	const tu=$(pic);
	// 获取放轮播图的盒子
	const img=$(tpHezi)[0];
	// 获取轮播图盒子的宽度转为整型
	const imgW=parseInt(window.getComputedStyle(img,null).width);
	// banner图上左边按钮
	const leftbtn=$(zuo)[0];
	// banner图上右边按钮
	const rightbtn=$(you)[0];
	// 获取轮播点
	const lis=$(lix);
	

	// 初始化
	for(let i=0;i<3;i++){
		tu[i].style.left=imgW+"px";
	}
	
	tu[0].style.left=0;
	lis[0].style.background=liactiveBgColor;
	// var t=setInterval(move,lunboTime);
	var num=0;
	var next=0;
	var flag=true;

	// 鼠标移进轮播点时发生的
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			if(flag){
				for(let j=0;j<lis.length;j++){
					lis[j].style.background=liscolor;
					tu[j].style.left=imgW+"px";
				}
				tu[i].style.left=0;
				lis[i].style.background=liactiveBgColor;
				// clearInterval(t);
				num=i;
				next=i;
			}
			
		}
	}

	function move(type="l"){
		flag=false;
		// 左轮播
		if(type=="l"){
			next++;
			if(next>2){
				next=0;
			}
			tu[next].style.left=imgW+"px";
			// tu[next].style.left=imgW+"px";
			lis[next].style.background="#fff";
			animate(tu[num],{left:-imgW},500);
		}
		// 右轮播
		else if(type=="r"){
			next--;
			if(next<0){
				next=1;
			}
			tu[next].style.left=-imgW+"px";
			lis[next].style.background="#fff";
			animate(tu[num],{left:imgW},500);
		}
		
		animate(tu[next],{left:0},500,function(){
			//轮播结束
			flag=true;
			// console.log(num+"--"+next);
			num=next;
		});		
			lis[next].style.background=liactiveBgColor;
			lis[num].style.background=liscolor;
	}	
	// img.onmouseover=function(){
	// 	clearInterval(t);
	// }
	// img.onmouseout=function(){
	// 	t=setInterval(move,lunboTime);
	// }
	// leftbtn.onmouseover=function(){
	// 	clearInterval(t);
	// }
	leftbtn.onclick=function(){
		if(flag){
			move("r");
		}
	}
	// rightbtn.onmouseover=function(){
	// 	clearInterval(t);
	// }
	rightbtn.onclick=function(){
		if(flag){
			move("l");
		}		
	}			
}


//attr(obj,style);
//获得obj元素的style（width，height等）样式值
//obj 类型 DOM元素
//style 类型 string 字符串
function attr(obj,style){
	return window.getComputedStyle(obj,null)[style];
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
				ul.style.borderTop="1px solid #ccc";
				animate(ul,{height:ul.getAttribute("h")},300);
			}
		},function(){
			if(item[i].children[num]){
				let ul=item[i].children[num];
				ul.style.borderTop=0;
				animate(ul,{height:0},300);
			}
		})
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
			}
			
		}
		rightbtn.onclick=function(){
			if(flag){
			move("l");
			}
		}

		// window.onblur=function(){
		// 	clearInterval(t);
		// }
		// window.onfocus=function(){
		// 	t=setInterval(move,1000);
		// }
}
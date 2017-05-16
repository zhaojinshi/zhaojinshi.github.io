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
			// window.onload=function(){
			// 	select();//回调函数
			// }
			window.addEventListener("load",select,false);
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
	function Zlunbo(pic,bigbannerBox,lunbodian,colorArr,tuBigZ,liactivebgColor,lunboTime,donghuaTime,tuZ,lisColor,type=0){
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
				animate(tupian[num],{opacity:0},donghuaTime);
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
				animate(tupian[num],{opacity:0},donghuaTime);
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
	function zulunbo(lunbotupian,lunbodakuai,lunbokuai,colorArr,lunbodian,zuojian,youjian,lunboTime,donghuaTime,activeClass){
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
		var flag=true;
		var t=setInterval(move,lunboTime);
		function move(type="r"){
			flag=false;
			if(type=="r"){
				animate(tu[now],{left:-imgw},donghuaTime);
				tu[next].style.left=imgw+"px";
				animate(tu[next],{left:0},donghuaTime,function(){
					flag=true;
					now=next;
					next++;
					if(next>tu.length-1){
					next=0;
					}
				})
			}else if(type=="l"){
				animate(tu[now],{left:imgw},donghuaTime);
				tu[next].style.left=-imgw+"px";
				animate(tu[next],{left:0},donghuaTime,function(){
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
			lis[i].onclick=function(){
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
		const imgw=parseInt(window.getComputedStyle(document.querySelector(pic),null).width);
		win.style.width=imgw;
		const leftbtn=$(left)[0];
		const rightbtn=$(right)[0];
		var flag=true;		
		var t=setInterval(move,lunboTime);
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
		win.onmouseover=function(){
			clearInterval(t);
		}
		win.onmouseout=function(){
			 t=setInterval(move,lunboTime);
		}
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

		window.onblur=function(){
			clearInterval(t);
		}
		window.onfocus=function(){
			t=setInterval(move,1000);
		}
}
//移动
function ydjielunbo(bigbannerBox,picbox,pic,left,right,num,lunboTime){
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
    var t=setInterval(move,lunboTime);
    function move(type="l"){
        flag=false;

        if(type=="l"){
            	box.style.marginLeft=-imgw+"px";
                flag=true;
                for(let i=0;i<n;i++){
                    let first = box.children[0];
                    let last = box.children[boxchildrenlen-1];
                    box.appendChild(first);
                }
                box.style.marginLeft=0;

        }else if(type=="r"){
            for(let i=0;i<n;i++){
                let first = box.children[0];
                let last = box.children[boxchildrenlen-1];
                box.insertBefore(last,first);
            }
            box.style.marginLeft=-imgw+"px";
           	box.style.marginLeft=0;
                flag=true;
        }

    }
    win.onmouseover=function(){
        clearInterval(t);
    }
    win.onmouseout=function(){
        t=setInterval(move,lunboTime);
    }
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

    window.onblur=function(){
        clearInterval(t);
    }
    window.onfocus=function(){
        t=setInterval(move,1000);
    }
}


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

// 楼层跳转 按需加载
	// anniu  楼层的按钮
	// Section  section
	// anniukuai  按钮的大块
	// daohang   导航
	// pic   图片
	// picurl  放图片的地址属性名
	// chushise 按钮本来的颜色
	// activese  按钮点住的颜色
	// donghuaTime  动画时间
	// num  导航出现的高度
function louceng(anniu,Section,anniukuai,daohang,dingbu,donghuaTime,num,chushise,colorArr){
	const btn=$(anniu);
	const section=$(Section);
	const btnbox=$(anniukuai)[0];
	const nav=$(daohang)[0];
	const CH=document.documentElement.clientHeight;
	const color=colorArr;
	const dibu=$(dingbu)[0];
	btn[0].style.background=chushise;
	let scroll= scrollobj();
	dibu.onclick=function(){
		animate(scroll,{scrollTop:0},donghuaTime);

	}
	for(let i=0;i<btn.length;i++){
		btn[i].onclick=function(){
			animate(scroll,{scrollTop:section[i].offsetTop},donghuaTime);
		}
	}
	for(let i=0;i<btn.length;i++){
		btn[i].onmouseover=function(){			
				for(let j=0;j<btn.length;j++){
					if(scroll.scrollTop+CH*0.5>=section[j].offsetTop){
					for(let k=0;k<btn.length;k++){
						btn[k].style.background=chushise;
					}
					btn[j].style.background=color[j];
				}else{
					btn[j].style.background=chushise;
				}				
			}
		btn[i].style.background=color[i];

		}
		btn[i].onmouseout=function(){
		 btn[i].style.background=chushise;			
				for(let j=0;j<btn.length;j++){
					if(scroll.scrollTop+CH*0.5>=section[j].offsetTop){
					for(let k=0;k<btn.length;k++){
						btn[k].style.background=chushise;
					}
					btn[j].style.background=color[j];
				}else{
					btn[j].style.background=chushise;
				}				
			}

		}
	}
	let flagx=true;
	let flags=true;
	window.onscroll=function(){
		for(let i=0;i<section.length;i++){
			if(scroll.scrollTop+0.5*CH>=section[i].offsetTop){
				for(let j=0;j<btn.length;j++){
					btn[j].style.background=chushise;
				}
				btn[i].style.background=color[i];
			}
			// if(scroll.scrollTop+CH>=section[i].offsetTop){
			// 	let img=$(pic,section[i]);
			// 	for(let k=0;k<img.length;k++){
			// 		img[k].src=img[k].getAttribute(picurl);
			// 	}
			// }
		}
		if(scroll.scrollTop>=num){
			if(flagx){
				flagx=false;
				flags=true;
				animate(nav,{top:0},donghuaTime,function(){
					flagx=true;
				})
			}
			btnbox.style.display="block";
		}else{
				if(flags){
				flags=false;
				flagx=true;
				animate(nav,{top:-50},donghuaTime,function(){
					flags=true;
				})
				}
				
			btnbox.style.display="none";

			}
	}
}





function tuozhuai(obj){
		const box=$(obj);

		let winW=document.documentElement.clientWidth;
		let winH=document.documentElement.clientHeight;
		
		// console.log(boxW);
		for(let i=0;i<box.length;i++){
		box[i].style.position="absolute";
		let boxW=box[i].offsetWidth;
		let boxH=box[i].offsetHeight;
		box[i].addEventListener("mousedown",down,false);
		
		let x;
		let y;
		let boxx;
		let boxy;
		function down(e){
			x=e.clientX;
			y=e.clientY;
			boxx=box[i].offsetLeft;
			boxy=box[i].offsetTop;
			window.addEventListener("mousemove",move,false);
			window.addEventListener("mouseup",up,false);
			
		}
		function up(){
			window.removeEventListener("mousemove",move,false);
			window.removeEventListener("mouseup",up,false);
		}
		function move(e){
			let mx=e.clientX;
			let my=e.clientY;
			let chax=mx-x;
			let chay=my-y;
			let lefts=boxx+chax;
			let tops=boxy+chay;
			if(lefts<=0){
				lefts=0;
			}else if(lefts>=winW-boxW){
				lefts=winW-boxW;
			}
			if(tops<=0){
				tops=0;
			}else if(tops>=winH-boxH){
				tops=winH-boxH;
			}
			box[i].style.left=lefts+"px";
			box[i].style.top=tops+"px";
		}
	}
	window.onresize=function(){
		winW=document.documentElement.clientWidth;
		winH=document.documentElement.clientHeight;
	}
}



// 执行一次后不再执行
	function one(obj,type,fn){
		const box=$(obj)[0];
		box.addEventListener(type,fn,false);
		box.addEventListener(type,function(){
			box.removeEventListener(type,fn,false);
		},false);

	}

// 鼠标滚轮事件
// mousewheel(obj,shang,xia);

function mousewheel(obj,shang,xia){
	obj.addEventListener("mousewheel",scrollFn,false);
	obj.addEventListener("DOMMouseScroll",scrollFn,false);
	function scrollFn(e){
		e.preventDefault();
		if(e.wheelDelta){
			// 谷歌
			if(e.wheelDelta>0){
				shang();
			}else{
				xia();
			}
		}else{
			// 火狐
			if(e.detail>0){
				xia();
			}else{
				shang();
			}
		}
		
	}
}

// 获得obj的style样式
// obj 获取的对象  元素
// style 类型 string
function attr(obj,style){
	return window.getComputedStyle(obj,null)[style];
}

// 下拉导航 
// num 表示下拉的东西在btn的第几个元素
function XLdaohang(btn,con,num){
			const item=$(btn);
			const ul=$(con);
			for(let i=0;i<ul.length;i++){
				let h=parseInt(attr(ul[i],"height"));
				ul[i].setAttribute("h",h);
				ul[i].style.height=0;
			}
			for(let i=0;i<item.length;i++){
				hover(item[i],function(){
					
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

	// cookie的添加删除查看
	// 添加
	// add(key,val,[time])  time可填可不填 单位为秒
	function addCookie(key,val,time){
		val=escape(val);
		if(time){
			let date=new Date();
			time*=1000;
			date.setTime(date.getTime()+time);
			date=date.toGMTString();
			document.cookie=`${key}=${val};expires=${date}`;
		}else{
			document.cookie=`${key}=${val}`;
		}
	}
	// 查看
	function getCookie(key){
		let cookies=document.cookie;
		let cookiearr=cookies.split("; ");
		let val;
		for(i=0;i<cookiearr.length;i++){
			let arr=cookiearr[i].split("=");
			if(key==arr[0]){
				val=arr[1];
			}
		}
		return unescape(val);
	}
	// 删除
	function delCookie(key){
		let date=new Date();
		date.setTime(date.getTime()-10000);
		date=date.toGMTString();
		document.cookie=`${key}=aa;expires=${date}`;
	}	
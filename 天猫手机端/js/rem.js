//当页面加载之后
window.onload=function (){
	//定义常量
	const designWidh=750;
	const fontSize= 100;
	// document.querySelector("html").style.fontSize=fontSize+"px";
function resizeFont(){
		var CW = document.documentElement.clientWidth;
		// console.log(CW);
		var radio=CW/designWidh;
		var newFontSize=fontSize*radio;
		document.querySelector("html").style.fontSize=newFontSize+"px";
		}
		resizeFont();
		window.onresize=resizeFont;
	}

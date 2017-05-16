
// 当页面加载之后
window.onload=function () {
	//常量
	const designWidh=750;
	const fontSize=100;
	// document.querySelector("html").style.fontSize=fontSize+"px";
	// 文档中 有个选择器
	function resizeFont(){
		var CW = document.documentElement.clientWidth;
	// cw屏幕大小  文档   文档元素       客户端宽
	// console.log(CW);
		var radio = CW/designWidh;
		// 比例      屏幕宽除以设计宽度
		var newFontSize= fontSize*radio;

		document.querySelector("html").style.fontSize= newFontSize + "px";
	}
	resizeFont();
	window.onresize= resizeFont;
}
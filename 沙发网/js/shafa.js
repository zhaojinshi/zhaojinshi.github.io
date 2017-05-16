	$(function(){
		const img=$(".dianshi img");
		const box=$(".dianshi")[0];
		var num=0;
		img[0].style.opacity=1;
		var t=setInterval(move,2000);
		box.onmouseover=function(){
			clearInterval(t);
		}
		box.onmouseout=function(){
			t=setInterval(move,2000);
		}
		function move(){
			num++;
			if(num>1){
				num=0;
			}
			for(let i=0;i<img.length;i++){
				img[i].style.opacity=0;
			}
			animate(img[num],{opacity:1},500);
		}
		const btn=$(".libox");
		const con=$(".xuanxiangbox");

		xuanxiangka(btn,con);
		const di=$(".dianpic");
		const shang=$(".piczhe");
		zhe(di,shang);
	})
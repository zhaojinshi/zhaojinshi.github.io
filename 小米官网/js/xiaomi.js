$(function(){
	const lis=$(".btnn");
	const bannerNavLis=$(".bannerNavLis");
	xuanxiang(lis,bannerNavLis);

	toumingdu(".banner img",".banner",".yuan",[],1,"#fff",2000,0,"#999",".zjt",".yjt");
	// const nav_box_1=$(".nav_box_1");
	// const navLis=$(".navLis");
	// xuanxiang(nav_box_1,navLis);

	const gouwu=$(".headerNavGou");
	const gouwuLis=$(".gouwuLis");
	xuanxiang(gouwu,gouwuLis);


	xiahuaNav(".nav_box_1",".navLis",1);

	zy(".neirongBox2_1",".neirong_xq1",".neirongBox2_1_jiantouleft",".neirongBox2_1_jiantouright",".neirongBox2_1_lunbo1","#fff",5000,"#666");
	zy(".neirongBox2_2",".neirong_xq2",".neirongBox2_2_jiantouleft",".neirongBox2_2_jiantouright",".neirongBox2_2_lunbo1","#fff",5000,"#666");
	zy(".neirongBox2_3",".neirong_xq3",".neirongBox2_3_jiantouleft",".neirongBox2_3_jiantouright",".neirongBox2_3_lunbo1","#fff",5000,"#666");
	zy(".neirongBox2_4",".neirong_xq4",".neirongBox2_4_jiantouleft",".neirongBox2_4_jiantouright",".neirongBox2_4_lunbo1","#fff",5000,"#666");

	jielunbo(".danpinBOX",".danPIN",".starTU",".danpin_jiantou_zuo",".danpin_jiantou_you",5,2000,500);
	jielunbo(".starBOX",".tuijianTU",".tuijiantu",".danpin_jiantou_zuo2",".danpin_jiantou_you2",5,2000,500);


	const yidong=$(".zntyhua");
	const zhe=$(".dapeiBox2_2_tu1Lis");
	for(let i=0;i<yidong.length;i++){
		hover(yidong[i],function(){
		zhe[i].style.bottom="-80px";
		zhe[i].style.display="block";
		animate(zhe[i],{bottom:0},10);
		},function(){
			zhe[i].style.display="none";
		});
	}

	const anniu=$(".zhinenyouzi1");
	const bianhuan=$(".bianhuan1");
	for(let i=0;i<anniu.length;i++){
			console.log(i)
		anniu[i].onmouseover=function(){
			for(let j=0;j<bianhuan.length;j++){
				bianhuan[j].style.zIndex=1;
			}
			bianhuan[i].style.zIndex=2;
		}
	}

	const anniu1=$(".zhinenyouzi2");
	const bianhuan1=$(".bianhuan2");
	for(let i=0;i<anniu1.length;i++){
			console.log(i)
		anniu1[i].onmouseover=function(){
			for(let j=0;j<bianhuan1.length;j++){
				bianhuan1[j].style.zIndex=1;
			}
			bianhuan1[i].style.zIndex=2;
		}
	}

	const anniu2=$(".zhinenyouzi3");
	const bianhuan2=$(".bianhuan3");
	for(let i=0;i<anniu2.length;i++){
			console.log(i)
		anniu2[i].onmouseover=function(){
			for(let j=0;j<bianhuan2.length;j++){
				bianhuan2[j].style.zIndex=1;
			}
			bianhuan2[i].style.zIndex=2;
		}
	}

})
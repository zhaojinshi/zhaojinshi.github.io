$(function(){
	zhe(".you1",".zhezhao");
	xuanxiangka(".btnn",".bannerNavLis");

	Zlunbo(".tupiana",".bannerAear",".bannerdian ul li",["#e8e8e8","#910fff","#e8e8e8","#910fff","#e8e8e8","#910fff"],2,"#fff",2000,1,"#bbb");
	loucen(".btn li","section","nav",".ddaohang",".btn",500,"#666",["#ea5f8d","#0aa6e8","#64c333","#f15453","#19c8a9","#f7a945","#DD2727"],500,"section img","imgurl");

	const mao=$(".xiaomao");
	const maokuai=$(".daohangNav a");
	for(let i=0;i<maokuai.length;i++){
			maokuai[i].onmouseover=function(){
				animate(mao[i],{top:-12},300);
				}
			maokuai[i].onmouseout=function(){
				animate(mao[i],{top:0},300);
			}
		}


			cldt(".celan_zichan",".ZC");
			cldt(".celan_yhfk",".celan_yhfkLis");
			cldt(".right_cl_mao",".celan_Mao");
			cldt(".celan_top",".celan_topLis");
			
			const BTN =$(".celan_top")[0];

			let scroll=scrollobj();
			window.addEventListener("scroll",function(){
				if(scroll.scrollTop>0){
					BTN.style.display="block";
				}else{
					BTN.style.display="none";
				}
			},false)
			BTN.onclick=function(){
				animate(scroll,{scrollTop:0},500)
			}

		const Zkuai=$(".box1kz-box");
		for(let i=0;i<Zkuai.length;i++){	
			var t=setInterval(function(){
				animate(Zkuai[i],{top:-30},500,function(){
					let first=Zkuai[i].children[0];
					Zkuai[i].appendChild(first);
					Zkuai[i].style.top=0;
				})
			},1000);
		}

		jielunbo(".xiaotubig",".xiaotubox",".xiaotu",".zuo",".you",3,1000,500);

    const sxlb=$(".spq_t3");
    for(let i=0;i<sxlb.length;i++){
        var t=setInterval(function(){
            animate(sxlb[i],{top:-30},500,function(){
                let first=sxlb[i].children[0];
                sxlb[i].appendChild(first);
                sxlb[i].style.top=0;
            })
        },3000);
    }


		// const XM1=$(".xiaotu");
		// 	const img=$(".XM1 img");
		// 	const imgb=$(".XM1");
		// 	for(let i=0;i<XM1.length;i++){
				
		// 	img[i].style.width="45px";
		// 	img[i].style.height="40px";
		// 		XM1[i].onmouseover=function(){
		// 			for(let j=0;j<imgb.length;j++){
		// 				imgb[j].style.display="none";
		// 			// animate(img[j],{width:0,height:0},500);

		// 			}
		// 			imgb[i].style.display="block";
		// 			animate(img[i],{width:36,height:29},500);
		// 	}
		// 	}
	

});

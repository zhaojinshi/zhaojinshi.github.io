$(function(){
	$(window).resize(function(){
		let width=$(window).width();
		if(width<=735){
			$('.small-screen .top a:first-child').off().click(function(){
				$(this).find('div').toggleClass('active');
				$('header').toggle();
				$('html,body').toggleClass('hidden');
				$('nav.small-screen > div >ul').slideToggle().find('li').toggleClass('active');
			})
			$('h4').next().css('display','none');
			$('h4 ').click(function(index,value){
				$(this).next().stop().slideToggle();
				$(this).children().eq(1).toggleClass('active')
			})

		}else{
			$('h4').next().css('display','block');
		}
		
	})
	$(window).triggerHandler('resize');
	let n=0;
	let now=0,next=0;
	$('div.line > ul > li > div').eq(n).addClass('active');
	$('div.line > ul > li > div').on('animationend',function(){
		$('div.line > ul > li > div').eq(n).removeClass('active');
		now=n;
		n++;
		if(n>=3){
			n=0;
		}
		movel();
		$('div.line > ul > li > div').eq(n).addClass('active');
	})
	let lis=$('.banner > ul > li');
	function movel(){
		lis.removeClass();
		next=now+1;
		if(next>=lis.length){
			next=0;
		}
		lis.eq(now).addClass('one');
		lis.eq(next).addClass('three');
		now=next;
	}
	function mover(){
		lis.removeClass();
		next=now-1;
		if(next<0){
			next=lis.length-1;
		}
		lis.eq(now).addClass('four');
		lis.eq(next).addClass('two');
		now=next;
	}
	$('.btn-left > div').click(function(){
		$('div.line > ul > li > div').off('animationend');
		mover();
		$('div.line > ul > li > div').removeClass();
		$('div.line > ul > li > div').eq(next).addClass('show');
	})
	$('.btn-right > div').click(function(){
		$('div.line > ul > li > div').off('animationend');
		movel();
		$('div.line > ul > li > div').removeClass();
		$('div.line > ul > li > div').eq(next).addClass('show');
	})
	$('div.line > ul > li').click(function(){
		let index=$(this).index();
		if(index<now){
			$('div.line > ul > li > div').off('animationend');
			now=index+1;
			mover();
			$('div.line > ul > li > div').removeClass();
			$('div.line > ul > li > div').eq(index).addClass('show');
		}
		if(index>now){
			$('div.line > ul > li > div').off('animationend');
			now=index-1;
			movel();
			$('div.line > ul > li > div').removeClass();
			$('div.line > ul > li > div').eq(index).addClass('show');
		}
	})
})
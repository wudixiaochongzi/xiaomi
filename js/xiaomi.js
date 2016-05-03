window.onload=function(){

//banner轮播
	var bannerBox=$('.banner-right')[0];
	var imgs=$('a',bannerBox);
	var imgNum=$('span',bannerBox);
	var btnRight=$('.lunbo-right',bannerBox)[0];
	var btnLeft=$('.lunbo-left',bannerBox)[0];
	bannerwheel(bannerBox,imgs,imgNum,btnRight,btnLeft,'quanquan-style',600);
	


// 选项卡
	for(var k=0; k<getClass('dp').length; k++){  //把父元素遍历出来
		var titleRight=getClass('top-right',getClass('dp')[k])[0].getElementsByTagName('li');
		var dpContentRight=getClass('right',getClass('dp')[k]);
		// console.log(titleRight);
		// alert(titleRight.length);
		// console.log(dpContentRight);
		// alert(dpContentRight.length);
		tab(titleRight,dpContentRight,"title-right-style");  //调用选项卡函数
	}

//按需加载
	var floors=$('.floor');  //把所有楼层的大框获取到
	var ch=document.documentElement.clientHeight;  //获取浏览器窗口高度
	var arr=[];
	for(var i=0; i<floors.length; i++){
		arr.push(floors[i].offsetTop);   //把每层楼的offsetTop值保存到数组中
	}
	window.onscroll=function(){
		var tops=document.body.scrollTop||document.documentElement.scrollTop; //谷歌支持给body加，其他支持的是给<html>加
		for(var i=0; i<floors.length; i++){
			var imgs=$('img',floors[i]);
			for(var j=0; j<imgs.length; j++){
				if (tops>arr[i]-ch) {
					imgs[j].src=imgs[j].getAttribute('asrc');
				};
			}
		}
	}

//明星单品轮播
	var mxdp=$('.mxdp-new')[0];
	var anniuBox=$('.anniu')[0];
	// console.log(anniuBox);
	var anniuLeft=$('a',anniuBox)[0];
	var anniuRight=$('a',anniuBox)[1];
	// console.log(anniuRight);
	var flag=true;
	setInterval(move,5000);
	function move(){
		if (flag) {
			animate(mxdp,{marginLeft:-1240},400,function(){
				flag=false;
			});
			animate(anniuLeft,{color:'#b0b0b0'},400);
			animate(anniuRight,{color:'#e0e0e0'},400);
		}
		else{
			animate(mxdp,{marginLeft:0},400,function(){
				flag=true;
			});
			animate(anniuRight,{color:'#b0b0b0'},400);
			animate(anniuLeft,{color:'#e0e0e0'},400);
		}
	}
	anniuLeft.onclick=function(){
		animate(mxdp,{marginLeft:0},400);
		animate(anniuRight,{color:'#b0b0b0'},400);
		animate(anniuLeft,{color:'#e0e0e0'},400);
	}
	anniuRight.onclick=function(){
		animate(mxdp,{marginLeft:-1240},400);
		animate(anniuLeft,{color:'#b0b0b0'},400);
		animate(anniuRight,{color:'#e0e0e0'},400);
	}

//产品review、
	var cpBox=$('.review_box');
	var review=$('.review');
	var flag=true;
	for(var i=0; i<cpBox.length; i++){
		cpBox[i].index=i;
		cpBox[i].onmouseover=function(){
			animate(review[this.index],{height:76,opacity:1},200);
		}
		cpBox[i].onmouseout=function(){
			animate(review[this.index],{height:0,opacity:0},200);
		}
	}

}

	
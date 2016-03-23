//导航
window.onload=function(){
//无缝轮播	
	var win=$(".window")[0];
	var imgs=$("a",win);
	var liss=$("li",win);
	var btns=$(".btn",win);
//当前
	var index=0;
	//下一张
	var num=0;
	var flag=true;
	var t;

	for(var i=0;i<imgs.length;i++){
		if(i==0){
			continue;
		}
		var imgW=parseInt(getstyle(imgs[i],"width"));
		imgs[i].style.left=imgW+"px";

	}
	liss[0].style.background='red';
	 t=setInterval(move,1000);


	 function move(){
	 	if(!flag){
	 		return;
	 	}
	 	flag=false;
	 	num++;
	 	if(num==imgs.length){
	 		num=0;
	 	}
	 	imgs[num].style.left=imgW+"px";
	 	animate(imgs[index],{left:-imgW},600,function(){
	 		flag=true;
	 	});
	 	animate(imgs[num],{left:0},600);
	 	for(var i=0;i<imgs.length;i++){
	 	liss[i].className='hotss';
	 }
	 liss[num].className='hotss';
	 	index=num=this.index;
	 }



	 //按钮
	 for(var i=0;i<liss.length;i++){
	 	liss[i].index=i;
	 	liss[i].onclick=function(){
	 		if(index==this.index){
	 			return;
	 		}
	 		for(var i=0;i<imgs.length;i++){
	 			liss[i].style.background='#fff';
	 		}
	 		liss[this.index].style.background='red';
	 		imgs[this.index].style.left=imgW+"px";
	 		animate(imgs[index],{left:-imgW},600);
	 		animate(imgs[this.index],{left:o},600);
	 		index=num=this.index;
	 	}
	 }

	 //btn
	 btns[1].onclick=function(){
	 	move();

	 }
btns[0].onclick=function(){
	 	moveL();

	 }

	 function moveL(){
	 	if(!flag){
	 		return;
	 	}
	 	flag=flase;
	 	num++;
	 	if(num==imgs.length){
	 		num=0;
	 	}
	 	imgs[num].style.left=-imgW+"px";
	 	animate(imgs[index],{left:imgW},600,function(){
	 		flag=true;
	 	});
	 	animate(imgs[num],{left:0},600);
	 	for(var i=0;i<imgs.length;i++){
	 	liss[i].className='hotss';
	 }
	 liss[num].className='hotss';
	 	index=num=this.index;
	 }














	//根据输入的要获取的元素名 获取符合的元素  class id 标签名
	function $(selecter,ranges){
			var ranges=ranges?ranges:document;
			var first=selecter.charAt(0);//返回在指定位置的字符串
			if(first=='#'){
				return document.getElementById(selecter.substring(1));//截取字符串 substring(起始，结束)不包括结束位置
			}
			else if(first=='.'){
				return getClass(selecter.substring(1),ranges);//类函数
			}else if(/^[a-z][a-z1-6]{0,10}$/.test(selecter)){//匹配名字是否符合标准//正则表达式
				return ranges.getElementsByTagName(selecter);

			}
			}


//获取类名元素时的兼容性问题
	function getClass(className,range){
	var range=range?range:document;
	if(range.getElementsByClassName){
		return range.getElementsByClassName(className);

	}else{
		var all=range.getELementsByTagName('*');
		var newarr=[];
		for(var i=0;i<all.length;i++){
// 			if(all[i].className==className)
			if(checkClass(all[i],className))//检查class名中有没有要找的class名字符串
			{
					newarr.push(all[i]);
			}
		}
		return newarr;
	}
}

//检查元素的类名是否满足所要获取的类名
function checkClass(obj,classname){
	var arrC=obj.className.split("");//按空格分割
	for(var i=0;i<arrC.length;i++){
		if(arrC[i]==classname){
			return true;
		}
	}
	return false;
}




function getstyle(obj,attr){
			// return getComputedStyle(obj,null)[attr];
			if(obj.currentStyle){
				return obj.currentStyle[attr];
			}
			else{
				return getComputedStyle(obj,null)[attr];
			}
		}
}




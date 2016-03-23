//导航
window.onload=function(){
	var tab=document.getElementsByClassName('dhtab')[0];
	var lis=document.getElementsByClassName('item');
	// console.log(lis);
	var downMenu=document.getElementsByClassName('downMenu');
	// downMenu[0].style.display='block'
	for(var i=0;i<lis.length;i++){//在javascript中 先执行循环
		lis[i].index=i;//添加属性 存放i 每次循环的值
		lis[i].onmouseover=function(){//在事件触发时 函数才开始执行

			for(var j=0;j<lis.length;j++){
				downMenu[j].style.display='none';
			}
			downMenu[this.index].style.display='block';
			
		}
		lis[i].onmouseout=function(){
			for(var j=0;j<lis.length;j++){
				downMenu[j].style.display='none';
			}
		}
	}

	var win=$(".window")[0];
	var imgs=$("a",win);
	var liss=$("li",win);
	var btns=$(".btn",win);
	var num=0;
	liss[0].className='hotss';
	var t=setInterval(move,1000);
	win.onmouseover=function(){
		clearInterval(t);
	}
	win.onmouseout=function(){
		clearInterval(t);
		t=setInterval(move,1000);
	}
	for(var i=0;i<imgs.length;i++){
		liss[i].index=i;
		// alert(this.index)
		liss[i].onclick=function(){
			num=this.index;
			for(var i=0;i<imgs.length;i++){
			//添加动画
			animate(imgs[i],{opacity:0},500);
			// imgs[i].style.zIndex=0;#BBC4D2
			colorAnimate (liss[i],"background","#BBC4D2",100)
			// liss[i].className='hots';
		}
		animate(imgs[this.index],{opacity:1},500);
		// imgs[this.index].style.zIndex=3;
		colorAnimate (liss[this.index],"background","#74586F",100)
		// liss[this.index].className='hotss';
		}
	}
	


//按钮 左
		btns[0].onclick=function(){
			num--;
		if(num==-1){
			num=imgs.length-1;

		}
			for(var i=0;i<imgs.length;i++){
			animate(imgs[i],{opacity:0},500);	
			// imgs[i].style.zIndex=0;
			colorAnimate (liss[i],"background","#BBC4D2",100)
			// liss[i].className='hots';
		}
		animate(imgs[num],{opacity:1},500);
		// imgs[num].style.zIndex=3;
		colorAnimate (liss[num],"background","#74586F",100)
		// liss[num].className='hotss';
		}
//按钮 右
		btns[1].onclick=function(){
			num++;
		if(num==imgs.length){
			num=0;

		}
			for(var i=0;i<imgs.length;i++){
			animate(imgs[i],{opacity:0},500);
			// imgs[i].style.zIndex=0;
			colorAnimate (liss[i],"background","#BBC4D2",100)
			// liss[i].className='hots';
		}
		animate(imgs[num],{opacity:1},500);
		// imgs[num].style.zIndex=3;
		colorAnimate (liss[num],"background","#74586F",100)
		// liss[num].className='hotss';
		}
		

//banner 上一个覆盖下一个
	function move(){
		//改变当前下标
		num++;
		//限定范围
		if(num==imgs.length){
			num=0;

		}
		//所有层级都降低
		for(var i=0;i<imgs.length;i++){
			animate(imgs[i],{opacity:0},500);
			// imgs[i].style.zIndex=0;
			colorAnimate (liss[i],"background","#BBC4D2",100)
			// liss[i].className='hots';
		}
		//当前的层级调高
		animate(imgs[num],{opacity:1},500);
		// imgs[num].style.zIndex=3;colorAnimate (liss[num],"background","#E525288",500)
		colorAnimate (liss[num],"background","#74586F",100)
		// liss[num].className='hotss';
	
	}






	//获取元素
	 var win=$(".nodewindow")[0];//window用来显示  看的见的
	 var box=$(".nodebox",win)[0];
	 var as=$("div",box);
	 var len=as.length;
	 var btnw=$(".nodebtn",win)[0];
	 var btnL=$(".nodebtnl",btnw)[0];
	 var btnR=$(".nodebtnr",btnw)[0];
	 var aW=parseInt(getstyle(as[0],"width"));
	 box.style.width=1500+"px";//box用来存放 图片
	 var flag=true;
	 var t;
	 t=setInterval(move,1500);

	 btnL.onmouseover=function(){
	 	clearInterval(t);
	 }
	 btnL.onmouseout=function(){
	 	t=setInterval(move,1500);
	 }
	 btnR.onmouseover=function(){
	 	clearInterval(t);
	 }
	 btnR.onmouseout=function(){
	 	t=setInterval(mover,1500);
	 }
	 btnL.onclick=function(){
	 	move();
	 }
	 btnR.onclick=function(){
	 	mover();
	 }
	 
//移动 动画
	 function move(){
	 	if(!flag){
	 		return;
	 	}
	 	flag=false;
	 	//box 在window中  通过控制定位的left值控制 大小 位置
	 	animate(box,{left:-aW},function(){
	 		var first=getfirst(box);//获取盒子box中的第一个元素
	 		box.style.left="15px";
	 		box.appendChild(first);//将第一个元素  放到box 的最后
	 		flag=true;
	 	})
	 }

	 	function mover(){
	 	if(!flag){
	 		return;
	 	}
	 	flag=false;
	 		var first=getfirst(box);
	 		var last=getlast(box);
	 		box.style.left=-aW+"px";
	 		box.insertBefore(last,first);
	 	animate(box,{left:15},function(){
	 		
	 		flag=true;
	 	})
	 	
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




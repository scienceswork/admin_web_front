
window.onload=function(){
	var oSiderbtn=document.getElementById('siderbtn');
	var oSiderbar=document.getElementById('siderbar');
	var oLis=document.getElementsByClassName('lis');
	var osubmenu=document.getElementsByClassName('submenu');
	var timer=null;
	function sidermove(iTarget,speed){
		clearInterval(timer);
		timer=setInterval(function(){
			if(oSiderbar.style.width==iTarget){
				clearInterval(timer);
			}else{
				oSiderbar.style.width = oSiderbar.offsetWidth+speed+"px";
			}
		}, 30);
	}
	for(i=0;i<oLis.length;i++){
		oLis[i].index=i;
		oLis[i].onOff='';
		oLis[i].onclick=function(){
			if (this.onOff=='') {
				for(var i=0;i<oLis.length;i++){
					oLis[i].onOff='';
					osubmenu[i].style.display = 'none';
					oLis[i].style.borderLeft="";
				}
				oLis[this.index].style.borderLeft="4px solid #19aa8d";
				osubmenu[this.index].style.display="block";
				this.onOff='a';
				oSiderbar.style.width = '200px';

			}else{
				oLis[this.index].style.borderLeft="";
				osubmenu[this.index].style.display="none";
				this.onOff='';
			}
		}
	}
	oSiderbtn.onclick=function(){
		if(oSiderbar.offsetWidth<=50){
			sidermove("200px",10);
			// onOff1=true;
			// 
		}else {
			sidermove("50px",-10);
			// onOff1=false;
			// oSiderbar.style.width = '50px';
			for(i=0;i<oLis.length;i++){
				osubmenu[i].style.display = 'none';
				oLis[i].style.borderLeft="";
			}
		}
	}
	// for(i=0;i<aLis.length;i++){
	// 	aLis.num=i;
	// 	aLis[i].onclick=function(){
			
	// 	}
	// }
}
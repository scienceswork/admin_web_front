window.onload=function(){
	var oSiderbar=document.getElementById('siderbar');
	var oSiderbtn=document.getElementById('siderbtn');
	var oLis=document.getElementsByClassName('link');
	var osubmenu=document.getElementsByClassName('submenu');
	var onOff1=true;
	var onOff2=true;
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
	oSiderbtn.onclick=function(){
		if(oSiderbar.offsetWidth==200){
			sidermove("50px",-10);
			onOff1=false;
			for(i=0;i<oLis.length;i++){
				osubmenu[i].style.display = 'none';
			}
		}else {
			sidermove("200px",10);
			onOff1=true;
		}
	}
	for(i=0;i<oLis.length;i++){
		oLis[i].index=i;
		oLis[i].onclick=function(){
			if (this.onOff=='') {
				for(var i=0;i<oLis.length;i++){
					oLis[i].onOff='';
					osubmenu[i].style.display = 'none';
				}
				osubmenu[this.index].style.display="block";
				sidermove("200px",10);
				this.onOff='a';
			}else{
				osubmenu[this.index].style.display="none";
				this.onOff='';
			}
		}
	}

}
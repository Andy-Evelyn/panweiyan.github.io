var PanWeiYan = function(){
	this.Height  = 300;
	this.obtn = document.getElementById('btn');
	this.timer = null;
	this.flag = true;
	this.init();
}
PanWeiYan.prototype = {
	init:function(){
		this.backTop();
	},
	backTop:function(){
		var that = this;
		this.obtn.onclick = function(){
			that.timer = setInterval(function(){
				var osTop = document.documentElement.scrollTop || document.body.scrollTop;
				var speed =  Math.floor(-osTop / 5);
				document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
				that.flag = true;
				if(osTop == 0){  
		    		clearInterval(that.timer);
		    	}
			},30);
		};
		window.onscroll = function(){
			var osTop = document.documentElement.scrollTop || document.body.scrollTop;
			if(osTop >= that.Height){
				that.obtn.style.display = 'block';
			}else{
				that.obtn.style.display = 'none';
			}
			/*判断用户是否滑动滚动条*/
			if(!that.flag){
				clearInterval(that.timer);
			}
			that.flag = false;
		};
	}
}
var panweiyan = new PanWeiYan();




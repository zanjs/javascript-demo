;(function($){

	var LightBox = function(){
		var self = this;

		//创建遮罩和弹出框
		this.zMask = $('<div id="z-lightbox-mask">');
		this.zWin  = $('<div id="z-lightbox">');

		this.bodyNode = $(document.body);

		// 渲染DOM
		this.renderDOM();
		
	};

	LightBox.prototype = {

		renderDOM:function(){
			console.log("red");
			var strDom = '<div class="lightbox-view">'+
								'<span class="lightbox-btn lightbox-prev-btn lightbox-prev-btn-show"><</span>'+
								'<img src="./images/1-1.png" alt="" class="lightbox-img">'+
								'<span class="lightbox-btn lightbox-next-btn">></span>'+
							'</div>'+
							'<div class="lightbox-pic-caption">'+
								'<div class="lightbox-caption-area">'+
									'<p class="lihthbox-pic-title">标题</p>'+
									'<span class="lightbox-of-index">当前索引：1 of 0</span>'+
								'</div>'+
								'<span class="lightbox-close-btn"></span>'+
							'</div>';
			this.zWin.html(strDom);

			this.bodyNode.append(this.zMask,this.zWin);
		},
		renderCss:function(){
			console.log("css");
		}

	};

	window['LightBox'] = LightBox;

})(jQuery);
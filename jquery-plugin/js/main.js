(function($){
	$.fn.codifySlider = function(){
		this.each( function(){
			$(document).ready(function(){
				var totalWidth = 0;
				$(".gallery__item").each(function(){
					totalWidth = totalWidth + $(this).outerWidth(true);
					console.log(totalWidth);
				});
				var maxScrollPosition = totalWidth - $(".gallery-wrap").outerWidth();
				console.log(maxScrollPosition);
				function toGalleryItem($targetItem){
					if ($targetItem.length) {
						var newPosition = $targetItem.position().left;
						if (newPosition <= maxScrollPosition) {
							$targetItem.addClass("gallery__item--active");
							$targetItem.siblings().removeClass("gallery__item--active");
							$(".gallery").animate({
								left: -newPosition
							});
						} else{
							$(".gallery").animate({
								left: -maxScrollPosition
							});
						};
					};
				};
				$(".gallery").width(totalWidth);
				$(".gallery__item:first").addClass("gallery__item--active");
				$(".gallery__controls-prev").on("click", function(){
					var $targetItem = $(".gallery__item--active").prev();
					toGalleryItem($targetItem);
				});
				$(".gallery__controls-next").on("click", function(){
					var $targetItem = $(".gallery__item--active").next();
					toGalleryItem($targetItem);
				});
			});
		});
	}
}($));
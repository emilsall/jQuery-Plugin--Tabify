/* Tabify function (by Emil Säll) 

tabs: .tabs > li
containers: .tab-containers > article

call function on mutual parent
*/
(function ($) {
	$.fn.tabify = function() {
		return this.each(function(i){
			var $tabparent = $(this);
			$('.tabs li', $tabparent).click(function (e) {
				e.preventDefault();
				var index = $(this).index();
				
				// set current tab
				$('.tabs li', $tabparent).removeClass('current').eq(index).addClass('current');
				
				// display current container
				$('.tab-containers article', $tabparent).removeClass('current').eq(index).addClass('current');
			});
		});
	};
})(jQuery);


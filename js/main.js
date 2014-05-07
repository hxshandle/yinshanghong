var WW, WH;
function landingLayout() {
	$('.landing-section').css({
		height: WH + 'px'
	});
	$('.scroll-down').css({
		left: (WW / 2 - 31) + 'px'
	});
	TweenLite.to('.scroll-down', 2, {
		bottom: '20px',
		ease: Elastic.easeOut
	});
}

function doResize() {
	WW = $(window).width();
	WH = $(window).height();
	landingLayout();
}
function doScrollSpy() {
	$('#landing,#about-brand,#brand-news').each(function() {
		var position = $(this).position();
    var $this = $(this);
		$(this).scrollspy({
			min: position.top - WH / 2,
			max: position.top + $this.height() + 823,
			onEnter: function(element, position) {
				console.log('change bubble');
        var $el = $(element);
        var id = $el.attr('id');
        $('#parallax-nav .active').removeClass('active');
        $('#parallax-nav a[href="#'+id+'"]').parent().addClass('active');
			}
		});
	});
}


$(function() {
	$('.jScrollPane').jScrollPane();
	$(".img-liquid-fill").imgLiquid();
	$(".img-liquid-fill-top").imgLiquid({
		verticalAlign: 'top'
	});
	$('.top-menu a,.scroll-down,.scroll-up,#parallax-nav a,#move-top').smoothScroll();
	$('.center').center({
		against: 'parent'
	});
	doResize();
	doScrollSpy();
	$(window).resize(doResize);
});


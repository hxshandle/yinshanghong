$(function() {
	var defaultSeries = $('.default-series').val();
	var defaultType = $('.default-type').val();
	$('.' + defaultSeries).addClass('active');
	$('.' + defaultType).addClass('active');

  /*
	$('.img-gallery .holder').each(function() {
		var $this = $(this);
		var containerId = $this.parent(".img-gallery").children(".collocation").eq(0).attr("id");
		$this.jPages({
			containerID: containerId,
			perPage: 9,
			previous: '上一页',
			next: '下一页'
		});
	});
	$('.video .holder').each(function() {
		var $this = $(this);
		var containerId = $this.parent(".video-nav").children(".video").eq(0).attr("id");
		$this.jPages({
			containerID: containerId,
			perPage: 4,
			previous: '上一页',
			next: '下一页'
		});
	});
  */

	function _processJPages(root, containerId, perPage) {
		var $holder = $('.holder', root);
		$holder.jPages({
			containerID: containerId,
			perPage: perPage,
			previous: '上一页',
			next: '下一页'
		});
	}

	function switchView() {
		var year = $('#year-sel').val();
		var series = $('.series .active').eq(0).data('ref');
		var type = $('.img-type .active').eq(0).data('ref');
		$('.img-gallery.active,.video-gallery.active').removeClass('active');
		var prefix = type == "collocation" ? "#y-": "#v-";
		var perPage = type == "collocation" ? 9: 4;
		var id = prefix + year + "-" + series;
		$(id).addClass('active');
		var subC = type == "collocation" ? '.collocation': '.video';
		var containerId =$(id + ' ' + subC).eq(0).attr('id') ;
    _processJPages($(id),containerId,perPage);
	}

	switchView();

  $('#year-sel').change(function(){
    switchView();
  });

  $('ul.series li').click(function(){
    $('ul.series .active').removeClass('active');
    $(this).addClass('active');
    switchView();
  });
  $('ul.img-type li').click(function(){
    $('ul.img-type .active').removeClass('active');
    $(this).addClass('active');
    switchView();
  });

	$('#mask .close').click(function() {
		$('#mask').removeClass('active');
	});
	function ShowImg(src) {
		var _m = new Image();
		_m.onload = function() {
			var w = this.width;
			var h = this.height;
			var mt = (WH - h) / 2;
			$('.disp-wrapper').css({
				width: w,
				"margin-top": mt
			});
			$('.disp-img').attr('src', this.src);
		}
		_m.src = src;

	}
	var imgCounts = $('.img-item').length;
	var curIdx = null;
	$('.img-item').click(function() {
		var $m = $('#mask');
		$m.addClass('active');
		var $this = $(this);
		var ref = $this.data('ref');
		curIdx = $this.index();
		ShowImg(ref);
	});
  $('.video-item').click(function(){
    var $this = $(this);
    var root = $this.parents('.video-gallery');
    var iframe = $('iframe',root).attr("src",$this.data('ref'));
  });
	$('#mask .pre').click(function() {
		if (curIdx == 0) {
			return;
		}
		curIdx--;
		var ref = $('.img-item').eq(curIdx).data('ref');
		ShowImg(ref);
	});
	$('#mask .next').click(function() {
		if (curIdx == imgCounts - 1) {
			return;
		}
		curIdx++;
		var ref = $('.img-item').eq(curIdx).data('ref');
		ShowImg(ref);
	});
});


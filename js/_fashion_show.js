$(function() {
  var defaultSeries = $('.default-series').val();
  var defaultType = $('.default-type').val();
  $('.'+defaultSeries).addClass('active');
  $('.'+defaultType).addClass('active');
  $('.holder').jPages({
    containerID: 'img-gallery',
    perPage: 9,
    previous: '上一页',
    next: '下一页'
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
      $('.disp-img').attr('src',this.src);
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
  $('#mask .pre').click(function(){
    if(curIdx ==0){
      return;
    }
    curIdx--;
    var ref = $('.img-item').eq(curIdx).data('ref');
    ShowImg(ref);
  });
  $('#mask .next').click(function(){
    if(curIdx == imgCounts-1){
      return;
    }
    curIdx++;
    var ref = $('.img-item').eq(curIdx).data('ref');
    ShowImg(ref);
  });
});


$(function(){
  $('#collaction .img-gallery li').mouseenter(function() {
    var $this = $(this);
    var pos = $this.data("pos");
    var ref = $this.data("ref");

    TweenLite.to('#collaction-selector', 1, {
      left: pos+"px"
    });
  });
});

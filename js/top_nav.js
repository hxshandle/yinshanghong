$(function() {
  $('.top-menu a').each(function(idx, el) {
    var $el = $(el);
    var _w = parseInt($el.width()) + 45;
    $el.parent().css({
      width: _w + 'px'
    });
  });

  $('.top-menu li').hover(
  function() {
    var $this = $(this).find('a');
    $this.data('en', $this.text());
    $this.text($this.data('zh'));
    $this.css({'text-decoration':'underline'});
  },
  function() {
    var $this = $(this).find('a');
    $this.text($this.data('en'));
    $this.css({'text-decoration':'none'});
  });
});


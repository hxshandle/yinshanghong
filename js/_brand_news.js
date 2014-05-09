$(function() {
  /*
  var defaultYear = $('.default-year').eq(0).val();
  var defaultMonth = $('.default-month').eq(0).val();
  var arrYear = [];
  var years = $('.d-year');
  for (var i = 0; i < years.length; i++) {
    var y = years.eq(i);
    arrYear.push({
      id: y.data('id'),
      label: y.data('label')
    });
  }
  rebuildSelectBox('year-sel', arrYear);
  var arrMonth = getSubData(arrYear[0].id);
  rebuildSelectBox('month-sel', arrMonth);
  */
  $('select').selectbox();
  $('a.more,a.less').click(function(){
    var $this = $(this);
    $this.parents('.news-content-wrapper').toggleClass('unlimit');
  });
  $('.holder').jPages({
    containerID:'news-list',
    perPage:3,
    previous:'上一页',
    next:'下一页'
  });

});


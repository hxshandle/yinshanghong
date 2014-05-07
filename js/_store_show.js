$(function() {

  var canMove = true;
  $('.next').click(function() {
    if (!canMove) {
      return;
    }
    var $el = $('.store-images.active').eq(0);
    var curIdx = $el.data('curidx');
    if (curIdx == 0) {
      return;
    }
    canMove = false;
    var pos = $el.position();
    $el.data('curidx',--curIdx);
    TweenLite.to('.store-images.active', 1, {
      left: pos.left + 1000,
      onComplete: function() {
        canMove = true;
      }
    });
  });
  $('.pre').click(function(){
    if (!canMove) {
      return;
    }
    var $el = $('.store-images.active').eq(0);
    var curIdx = $el.data('curidx');
    var total = $el.data('totalCount');
    if (curIdx == total-1) {
      return;
    }
    canMove = false;
    var pos = $el.position();
    $el.data('curidx',++curIdx);
    TweenLite.to('.store-images.active', 1, {
      left: pos.left - 1000,
      onComplete: function() {
        canMove = true;
      }
    });
  });

  $('.search-img').click(function(){
    console.log('click');
    var $d = $('#district-sel').eq(0);
    var id = $d.val();
    $('.store-images.active').fadeOut().removeClass('active');
    $('#store-'+id).addClass('active').fadeIn(1000);

  });

  function getSubData(id) {
    var $el = $('#' + id);
    var ref = $el.data('ref');
    var arrData = [];
    if (ref) {
      var $subData = $('.' + ref);
      for (var i = 0; i < $subData.length; i++) {
        var p = $subData.eq(i);
        arrData.push({
          id: p.data('id'),
          label: p.data('label')
        });
      }
    }
    return arrData;
  }

  function rebuildSelectBox(sel, data) {
    var h = '<select class=" fl ' + sel + '" name="' + sel + '" id="' + sel + '">';
    for (var i = 0; i < data.length; i++) {
      var p = data[i];
      h += '<option value="' + p.id + '">' + p.label + '</option>';
    }
    h += '</select>';
    $('.' + sel + '-box').html(h);
    $('#' + sel).selectbox({
      onChange: function(val, inst) {
        var $el = $('#' + val);
        var subMenu = $el.data('sub');
        if (!subMenu) {
          return
        }
        var arrData = getSubData(val);
        rebuildSelectBox(subMenu, arrData);
        if (subMenu == "city-sel") {
          var arrDistrict = getSubData(arrData[0].id);
          rebuildSelectBox('district-sel', arrDistrict);
        }

      }
    });
  }

  var defaultProvince = $('.default-province').eq(0).attr('value');
  var $provinces = $('.' + defaultProvince);
  var arrProvince = [];
  var arrCity = [];
  var arrDistrict = [];
  var curProvince, curCity, curDistrict;
  for (var i = 0; i < $provinces.length; i++) {
    var p = $provinces.eq(i);
    if (i === 0) {
      curProvince = p.data('id');
    }
    arrProvince.push({
      id: p.data('id'),
      label: p.data('label')
    });

  }
  rebuildSelectBox('province-sel', arrProvince);
  var arrCity = getSubData(curProvince);
  rebuildSelectBox('city-sel', arrCity);
  var arrDistrict = getSubData(arrCity[0].id);
  rebuildSelectBox('district-sel', arrDistrict);
  $('.store-images').each(function() {
    var count = $(this).children().length;
    $(this).css({
      width: 1000 * count
    });
    $(this).data('totalCount', count);
  });
  $('.store-images:first').addClass('active');

});


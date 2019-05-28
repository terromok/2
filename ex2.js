var stroki = [1,2,3,4,5,6,7,8];
var stolbi = ["A", "B", "C", "D", "E", "F", "G", "H"];

(function($) {
  $(function() {
    $('.form').on('click', '.button', function() {
      $('.rezult').empty();
      start = document.getElementById("one").value;
      point = start.split('');
      var str = parseInt(point[1]);
      for (var i = 0; i < stolbi.length; i++) {
        if (stolbi[i]==point[0]) {var stlb=i}
      };
      if (stlb-2>=0 && str-1>0) {
        var $p = $('<p />', {
          text: `${stolbi[stlb-2]}${stroki[str-2]},`,
          class: 'rezult' 
          });
        $('.otvet1').append($p);
      }
      if (stlb-2>=0 && str+1<8) {
        var $p1 = $('<p />', {
          text: `${stolbi[stlb-2]}${stroki[str]},`,
          class: 'rezult' 
          });
        $('.otvet1').append($p1);
      }
      if (stlb-1>=0 && str-2>0) {
        var $p = $('<p />', {
          text: `${stolbi[stlb-1]}${stroki[str-3]},`,
          class: 'rezult' 
          });
        $('.otvet1').append($p);
      }
      if (stlb-1>=0 && str+2<8) {
        var $p1 = $('<p />', {
          text: `${stolbi[stlb-1]}${stroki[str+1]},`,
          class: 'rezult' 
          });
        $('.otvet1').append($p1);
      }
      if (stlb+2<8 && str-1>0) {
        var $p = $('<p />', {
          text: `${stolbi[stlb+2]}${stroki[str-2]},`,
          class: 'rezult' 
          });
        $('.otvet1').append($p);
      }
      if (stlb+2<8 && str+1<8) {
        var $p1 = $('<p />', {
          text: `${stolbi[stlb+2]}${stroki[str]},`,
          class: 'rezult' 
          });
        $('.otvet1').append($p1);
      }
      if (stlb+1<8 && str-2>0) {
        var $p = $('<p />', {
          text: `${stolbi[stlb+1]}${stroki[str-3]},`,
          class: 'rezult' 
          });
        $('.otvet1').append($p);
      }
      if (stlb+1<8 && str+2<8) {
        var $p1 = $('<p />', {
          text: `${stolbi[stlb+1]}${stroki[str+1]},`,
          class: 'rezult' 
          });
        $('.otvet1').append($p1);
      }      
    });
    $('.otvet').css('display','block')
  });
})(jQuery);


    
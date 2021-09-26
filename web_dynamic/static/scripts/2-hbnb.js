const $ = window.$;
let aid = []
let aname = []
$('input[type="checkbox"]').change(function(){
    if($(this).is(':checked')) {
        aid.push($(this).attr('data-id'))
        aname.push($(this).attr('data-name'))
    } else {
        let indexi = aid.indexOf($(this).attr('data-id'));
        let indexn = aname.indexOf($(this).attr('data-name'));
        aid.splice(indexi, 1);
        aname.splice(indexn, 1);
    }
    $('.amenities h4').text(aname);
});

$.ajax({
    type: 'GET',
    url: 'http://0.0.0.0:5001/api/v1/status/',
    complete: function (response) {
      if (response.status === 'OK')
        $('div#api_status').addClass('available');
      else {
        $('div#api_status').removeClass('available');
      }
    }
  });

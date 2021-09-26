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

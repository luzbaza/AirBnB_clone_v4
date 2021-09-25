const $ = window.$;
let amenities = []
$('input[type="checkbox"]').change(function(){
    if($(this).is('checked')) {
        amenities.push($(this).attr('data-name'))
        console.log(amenities);
    } else {
        amenities.pop('data-id')
    }
});

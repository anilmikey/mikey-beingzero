// JQUERY makes our life very easy

//1.  how to make backend call
$.getJSON('/data', function(d){
    //alert(JSON.stringify(d));

    $('#name').text(d.name);
    $('#collage').text(d.collage);
    $('#regno').text(d.regno);

})
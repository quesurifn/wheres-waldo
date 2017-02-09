jQuery(function($) {
 var x,y;
 $("#waldo1").mousemove(function(event) {
     var offset = $(this).offset();
     x = event.pageX- offset.left;
     y = event.pageY- offset.top;
     $("#coords").html("(X: "+x+", Y: "+y+")");
 });
});

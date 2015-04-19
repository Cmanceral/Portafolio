$(document).ready(function() {
//alert('todo bien');
	$(.galeria img).toggle(
		function(){
			$(this).addClass("fullsize");
		}, function(){
			$(this).removeClass("galeria img");
		});
});

$( "td" ).toggle(
  function() {
    $( this ).addClass( "selected" );
  }, function() {
    $( this ).removeClass( "selected" );
  }
);
/*-----------------------------------------------------------------------------/
/ Custom Theme JS
/-----------------------------------------------------------------------------*/

// Insert any custom theme js here...

$(function() {
	$('#returnTop').on('click', function() {
		$('html, body').animate({scrollTop : 0},1000);
		return false;
	})

	$('ul.tabs').each(function(){
	      var active, content, links = $(this).find('a');
	      active = links.first().addClass('active');
	      content = $(active.attr('href'));
	      links.not(':first').each(function () {
	        $($(this).attr('href')).hide();
	      });
	      $(this).find('a').click(function(e){
	        active.removeClass('active');
	        content.hide();
	        active = $(this);
	        content = $($(this).attr('href'));
	        active.addClass('active');
	        content.show();
	        return false;
	      });
	    });
})

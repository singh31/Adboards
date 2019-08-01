$(document).ready(function(event) {
	let scroll_top=$(".scroll_top");
	scroll_top.hide('slow');
	$(window).scroll(function()
	{
		if($(window).scrollTop()>200)
		{
			scroll_top.show('slow');
		}
       else
       {
       	scroll_top.hide('slow');
       }
	

	});

    scroll_top.click(function() {
        $('html, body').animate({scrollTop: 0}, 300);
    });
    $('#login');
});

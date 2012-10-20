$(function(){
	$('body').on('click.data-api', '[data-component]', function(e){
		e.preventDefault()
		var component = $(this).attr('data-component');
		var source = $(this).attr('data-source');
		if (history && history.pushState) {
			history.pushState({a:1}, document.title, $(this).attr('href'));
		}
		$(component).html(jade.render(source))
	})
	$(window).bind("popstate", function(e) {
		console.log(e.originalEvent.state)
	});
})



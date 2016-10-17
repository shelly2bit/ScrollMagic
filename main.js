$(document).ready(function(){
	// init ScrollMagic controller
	var controller = new ScrollMagic.Controller();
	
	// create scene
	var infographic = new ScrollMagic.Scene({
		triggerElement: '#shape1',
		//duration: '70%',
		triggerHook: 0.6,
		reverse:false
	})
	.setClassToggle('#shape1', 'fly-in-1')
	.addIndicators({
		name: "first box",
		indent: "200"
	})
	.addTo(controller);
		var infographic2 = new ScrollMagic.Scene({
		triggerElement: '#shape1',
		//duration: '70%',
		triggerHook: 0.4,
		reverse:false
	})
	.setClassToggle('#shape2', 'fly-in-2')
	.addIndicators({
		name: "second box",
		indent: "200"
	})
	.addTo(controller);
	
			var infographic3 = new ScrollMagic.Scene({
		triggerElement: '#shape1',
		//duration: '70%',
		triggerHook: 0.2,
		reverse:false
	})
	.setClassToggle('#shape3', 'fly-in-3')
	.addIndicators({
		name: "third box",
		indent: "200"
	})
	.addTo(controller);
})
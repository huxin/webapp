$(function() {
	// document ready
	console.log("Start!")

	$("#compute").click(function(){
		console.log("clicked compute")
		// get val1 and val2 and call server
		var val1 = $("#val1").val()
		var val2 = $("#val2").val()
		url = "compute?v1="+val1+"&v2="+val2
		$.get(url, function(rTxt){
			$("#result").slideUp(function(){
				$("#result").text(val1 + " + " + val2 + " = " + rTxt).slideDown()
			})
		})
	})

	$("#viz").click(function(){
		console.log("clicked visualize")
		$("#result").slideUp(function(){
			$("#result").empty()	
			// show image 
			$("#result").prepend('<img src="static/img/img.jpeg" />').slideDown()
		})
		

		
	})
})
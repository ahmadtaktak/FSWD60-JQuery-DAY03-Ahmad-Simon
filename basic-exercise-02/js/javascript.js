$(document).ready(function() {
 //create 5 tasks
	for(i = 1; i < 6; i++) {
	var tasks = "";
	tasks += "<li>This is the " + i + "." + " task.</li>";
	$(".todotasks").append(tasks);
}
	//remove function start
	$("li").on('click', function() {
	$(this).animate({opacity:0.5, paddingRight: "+= 300"}, 1000
		, function() {
		$(this).remove();

	});

});

//add tasks on add button click
$("#addbtn").on('click', function() {

	var get_input = $("#input").val();

	$(".todotasks").append("<li>" + get_input + "</li>");
	$("#input").val("");

	//remove function start
	$("li").on('click', function() {
	$(this).animate({opacity:0.5, paddingRight: "+= 300"}, 1000
		, function() {
		$(this).remove();

		});

	});
});

//add tasks on enter clicks

$(document).keypress(function(e) {
	var enterkey = e.which;
	if(enterkey === 13) {
	var get_input = $("#input").val();
	$(".todotasks").append("<li>" + get_input + "</li>");
	$("#input").val("");
	
	//remove function start
	$("li").on('click', function() {
	$(this).animate({opacity:0.5, paddingRight: "+= 300"}, 1000
		, function() {
		$(this).remove();

			});
		});
	}
});

//remove all on button click<
$("#removebtn").on('click', function() {
	$("li").remove();

		});
	});





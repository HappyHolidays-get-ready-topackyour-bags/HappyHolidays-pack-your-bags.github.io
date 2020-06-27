
$(function(){

	//$("#portfolio").draggable();
	$("#portfolio").sortable();
	$("#portfolio").disableSelection();
	$("#filter").accordion();

	var cur_li;
	$("#portfolio video").click(function(){
		console.log($(this).attr("src"));
		var src = $(this).attr("src");
		cur_li = $(this).parent();
		$("#main").attr("src", src);
		/*$.get("txt/Album_notes.txt", function(data)
		{
			console.log(data);
		});*/
		this.load();
			this.play();
		$("#overlay").fadeIn();
		$("#frame").fadeIn();

	});

	$("#overlay").click(function(){
		$("#overlay").fadeOut();
		$("#frame").fadeOut();
	});

	$("#right, #left").mouseenter(function(){
		$(this).css("opacity", 1)
	});
	$("#right, #left").mouseleave(function(){
		$(this).css("opacity", 0.5)
	});

	$("#left").click(function(){

		var prev_li;
		if(cur_li.is(":first-child"))
			prev_li = $("#portfolio li").last();
		else
			prev_li = cur_li.prev();
				
		var prev_src = prev_li.children("video").attr("src");
		$("#main").attr("src", prev_src);
		cur_li = prev_li;
	});

	$("#right").click(function(){

		var next_li;
		if(cur_li.is(":last-child"))
			next_li = $("#portfolio li").first();
		else
			next_li = cur_li.next();

		var next_src = next_li.children("video").attr("src");
		$("#main").attr("src", next_src);
		cur_li = next_li;
	});

	$("#filter li").click(function(){

		var category = $(this).attr("id");
		console.log(category);
		if(category == "all")
			$("#portfolio li").show();  //fadeIn();
		else
		{
			console.log("else");
			$("#portfolio li").hide(); //fadeOut();
			$("#portfolio li").each(function(){

				console.log("each");
				if($(this).attr("class") == category)
					$(this).show(); //fadeIn();
			});
		}
		
	});
});
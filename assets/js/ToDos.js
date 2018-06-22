//check off specific Todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("complited")
})

//click on x to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>")
	}
});

$("h1").on("click", ".fa-pencil-alt", function(){
	$("input[type='text']").fadeToggle();
});

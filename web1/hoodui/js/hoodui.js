$(document).ready(function () {
	initComponent();
	
	$("#menu a").click(function (e) {
		e.preventDefault();
		var p = $(this).parent();
		$(p).parent().find('li').removeClass("active").removeClass("prev").removeClass("next");
		var i = $(p).index();
		console.log(i);
		drawMenu(i+1);
	});
});

function initComponent() {
	drawMenu(2);
}

function drawMenu(i) {
	var f = $("#menu li:nth-child(" + i + ")");
	$(f).addClass("active");
	f.prev().addClass('prev');
	f.next().addClass('next');
	$("#menu ul").css("transform", "translateX(" + (i-2)*-102 +"px)");
	$("#content").css("transform", "translateX(" + (i-2)*-204 +"px)");
}

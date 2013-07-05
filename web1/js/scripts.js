/* JavaScript for Chapter 3 */

$(document).ready(function(){
	dynamicFaq();
});

function dynamicFaq(){
	$('.faq dd').hide();
	$('.faq dt').bind('click', function(){
		$(this).toggleClass('open').next().slideToggle();;
	});
}
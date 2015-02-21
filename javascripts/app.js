$(document).ready(function(){
    $('.niceCheck').mousedown(
        function() {
            changeCheck(jQuery(this));     
});


$('.niceCheck').each(
    function() {     
        changeCheckStart(jQuery(this));     
    });
});

function changeCheck(el) {
    var el = el,
        input = el.find('input').eq(0);
   	        if(!input.attr('checked')) {
		        el.css('background-position','0 -18px');	
		        input.attr('checked', true)
	      } else {
		        el.css('background-position','0 0');	
		        input.attr('checked', false)
	}
     return true;
}

function changeCheckStart(el) {
    var el = el,
        input = el.find('input').eq(0);
            if(input.attr('checked')) {
		    el.css('background-position','0 -18px');	
		}
     return true;
}

$(function () {
    $('#fileupload').fileupload({
        dataType: 'json',
        done: function (e, data) {
            $.each(data.result.files, function (index, file) {
                $('<p/>').text(file.name).appendTo(document.body);
            });
        }
    });
});


var menu = $('.menu');
(function toggleMenu() {
    menu.on('click', function() {
        $('main, .logo, footer').toggle();
        $('body').toggleClass('overlay');
        $('header .navbar').toggle();
    });
})();
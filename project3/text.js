$('document').ready(function () {

    $('#text-2').hide();
    $('#text-3').hide();
    $('#text-4').hide();
    $('#text-5').hide();
    $('#text-6').hide();
    $('#text-7').hide();
    $('#text-8').hide();
    $('#text-9').hide();
    $('#text-10').hide();
    $('#text-11').hide();
    $('#text-12').hide();
    $('#text-13').hide();
    $('#text-14').hide();
    $('#text-15').hide();
    $('#text-16').hide();
    $('#text-17').hide();
    $('#text-18').hide();
    $('#text-19').hide();
    $('#text-20').hide();
    $('#text-21').hide();

    $('#text-1').click(function () {
        $(this).fadeOut(1000);
        $('#text-2').delay(1300);
        $('#text-2').fadeIn(1300);
    })
    $('#text-2').click(function () {
        $(this).fadeOut(1000);
        $('#text-3').delay(1300);
        $('#text-3').fadeIn(1300);
    })
    $('#text-3').click(function () {
        $(this).fadeOut(1000);
        $('#text-4').delay(1600);
        $('#text-4').fadeIn(1200);
    })
    $('#text-4').click(function () {
        $(this).fadeOut(1000);
        $('#text-5').delay(1600);
        $('#text-5').fadeIn(1200);
    })
    $('#text-5').click(function () {
        $(this).fadeOut(1000);
        $('#text-6').delay(1400);
        $('#text-6').fadeIn(1200);
    })
    $('#text-6').click(function () {
        $(this).fadeOut(1000);
        $('#text-7').delay(2000);
        $('#text-7').fadeIn(1800);
    })
    $('#text-7').click(function () {
        $(this).fadeOut(1000);
        $('#text-8').delay(1300);
        $('#text-8').fadeIn(1000);
    })
    $('#text-8').click(function () {
        $(this).fadeOut(1000);
        $('#text-9').delay(1700);
        $('#text-9').fadeIn(1000);
    })
    $('#text-9').click(function () {
        $(this).fadeOut(1000);
        $('#text-10').delay(1300);
        $('#text-10').fadeIn(1000);
    })
    $('#text-10').click(function () {
        $(this).fadeOut(1000);
        $('#text-11').delay(1300);
        $('#text-11').fadeIn(1000);
    })
    $('#text-11').click(function () {
        $(this).fadeOut(1000);
        $('#text-12').delay(1300);
        $('#text-12').fadeIn(1000);
    })
    $('#text-12').click(function () {
        $(this).fadeOut(1000);
        $('#text-13').delay(1300);
        $('#text-13').fadeIn(1000);
    })
    $('#text-13').click(function () {
        $(this).fadeOut(1000);
        $('#text-14').delay(1800);
        $('#text-14').fadeIn(1000);
    })
    $('#text-14').click(function () {
        $(this).fadeOut(1000);
        $('#text-15').delay(1300);
        $('#text-15').fadeIn(1000);
    })
    $('#text-15').click(function () {
        $(this).fadeOut(1000);
        $('#text-16').delay(1300);
        $('#text-16').fadeIn(1000);
    })
    $('#text-16').click(function () {
        $(this).fadeOut(1000);
        $('#text-17').delay(1300);
        $('#text-17').fadeIn(1000);
    })
    $('#text-17').click(function () {
        $(this).fadeOut(1000);
        $('#text-18').delay(1300);
        $('#text-18').fadeIn(1000);
    })
    $('#text-18').click(function () {
        $(this).fadeOut(1000);
        $('#text-19').delay(1300);
        $('#text-19').fadeIn(1000);
    })
    $('#text-19').click(function () {
        $(this).fadeOut(1000);
        $('#text-20').delay(2000);
        $('#text-20').fadeIn(1700);
    })
    $('#text-20').click(function () {
        $(this).fadeOut(1000);
        $('#text-21').delay(2000);
        $('#text-21').fadeIn(1700);
    })
    $('#text-21').click(function () {
        $(this).fadeOut(1000, function () {
            window.location.href = "page4.html";
         
        })

    })

    $('document').click(function () {
        $(".slider").animate({
            top: '+=200px'
        });
    });



});

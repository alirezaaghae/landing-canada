$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


// just get 11 number input
var alireza = document.querySelectorAll(".alireza_validator input"),i;
// Restricts input for the given textbox to the given inputFilter.
function setInputFilter(textbox, inputFilter) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
    textbox.addEventListener(event, function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      }
    });
  });
}
for (i = 0; i < alireza.length; ++i) {
  alireza[i].maxLength = 11;
  // Restrict input to digits and '.' by using a regular expression filter.
  setInputFilter(alireza[i], function(value) {
  return /^[0-9۰-۹]*$/i.test(value);
});
}


//$(document).ready(function(){
//    $(".button button").on('click', function() {
//        var pName=$(this).data('nameproduct');
//        var pCost=$(this).data('costproduct');
//        if($(".index-page").hasClass('blur')){
//        $(".index-page").removeClass('blur');        
//        $(".pop-up").fadeOut("500");
//        }else{
//            $(".index-page").addClass('blur');
//            $(".pop-up").css("display", "flex");
//            $(".pop-up").hide();
//            $(".pop-up").fadeIn("500");
//            $('#name_product').html(pName);
//            $('#cost_product').html(pCost);
//            $('.mjfield4').val(pName);
//            $('html').css('overflow','hidden');
//        }
//    });
//});
//$('.less-content,.advice-form').hide();
setTimeout(function(){$('.less-content').fadeIn();},100);
setTimeout(function(){$('.advice-form').fadeIn();},300);

$(document).on('click','.more-info',function(){
$('body').addClass('second');
setTimeout(function(){$('.less-content').fadeOut();},500);
setTimeout(function(){$('.more-content').fadeIn(1000);},800);
setTimeout(function(){$('.advice-form').fadeOut(0).css({'max-width':'50px'});},700);
setTimeout(function(){$('.back').fadeIn();},1000);
});
$(document).on('click','.less-info',function(){
$('body').removeClass('second');
setTimeout(function(){$('.more-content').fadeOut(0);},800);
setTimeout(function(){$('.less-content').fadeIn();},800);
setTimeout(function(){$('.back').fadeOut(0);},500);
setTimeout(function(){$('.advice-form').fadeIn().css({'max-width':'700px'});},550);
});


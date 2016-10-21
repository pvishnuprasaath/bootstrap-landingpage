    $(document).ready(function(){
      $(window).scroll(function() { 
        if ($(document).scrollTop() > 60) {
          $("#navb").css("background-color", "white"); 
			$("#logo").css("width", "75%");
			$("#logo").css("height", "75%");
        } else {
          $("#navb").css("background-color", "transparent"); 
			$("#logo").css("width", "100%");
			$("#logo").css("height", "100%");
        }
		  if ($(document).scrollTop() > 100) {
          $(".top").show(); 
			
        } else {
          $(".top").hide(); 
			
        }
		  
		  
		  $(".slideanim").each(function(){
			var pos = $(this).offset().top;

			var winTop = $(window).scrollTop();
			if (pos < winTop + 600) {
			  $(this).addClass("slide");
			}
		  });

		  
		  
      });
		
		$('[data-toggle="tooltip"]').tooltip();
		
		$('.carousel').carousel({
  			interval: 3000});
		
				
		

		
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage'], .service_bak a, .top a").on('click', function(event) {

   // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } // End if
  });

		
		
		
    });
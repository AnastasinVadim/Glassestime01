jQuery(function ($) {
    $(document).ready(function() {
        $(".slider").slick({
          arrows: true,
          dots: true,
          prevArrow: '<button type="button" class="slick-prev">Previous</button>',
          nextArrow: '<button type="button" class="slick-next">Next</button>',
          responsive: [
            {
              breakpoint: 560,
              settings: {
                arrows: true,
                dots: true,
                slidesToScroll: 1,
                slidesToShow: 1
              }
            }
          ],
          slidesToScroll: 1,
          slidesToShow: 3
        });
        
        var slider = $(".slider");
        var currentPage = $("#current-page");
        var totalPages = $("#total-pages");
    
        slider.on("afterChange", function(event, slick, currentSlide) {
          currentPage.text(currentSlide + 1);
        });
    
        slider.on("init reInit afterChange", function(event, slick, currentSlide) {
          var slides = slick.slideCount;
          totalPages.text(slides);
        });
      });
});

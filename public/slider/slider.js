$(document).ready(function(){
    

    // center mode
    $('.items').slick({
        autoplay: false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              arrows: true,
              centerMode: true,
              // centerPadding: '40px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 700,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });

      
    $('.sneaker-items').slick({
        autoplay: false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 1345,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 700,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
    

});
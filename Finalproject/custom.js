      $(document).ready(function () {
        $(".carousel-one").owlCarousel({
          loop: false,
          margin: 10,
          nav: false,
          dots: false,
          autoplay: true,
          autoplayTimeout: 1000,
          autoplayHoverPause: true,
          responsive: {
            0: { items: 2 },
            600: { items: 3 },
            1000: { items: 6 }
          }
        });
      });
      
      $(".carousel-two").owlCarousel({
        loop:false,
        margin: 0,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: true
          },
          600: {
            items: 3,
            nav: false
          },
          1000: {
            items: 5,
            nav: true,
            loop: false
          }
        }
      });
      $(".carousel-three").owlCarousel({
        loop: false,
        margin: 0,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: true
          },
          600: {
            items: 2,
            nav: false
          },
          1000: {
            items: 3,
            nav: true,
            loop: false
          }
        }
      });

       document.addEventListener("DOMContentLoaded", function () {
        setTimeout(function () {
          const tooltipTriggerList = [].slice.call(
            document.querySelectorAll('[data-bs-toggle="tooltip"]')
          );
          tooltipTriggerList.forEach(function (tooltipTriggerEl) {
            new bootstrap.Tooltip(tooltipTriggerEl);
          });
        }, 1000);
      });

      document.addEventListener("DOMContentLoaded", function () {
        const tooltips = document.querySelectorAll(
          '[data-bs-toggle="tooltip"]'
        );
        tooltips.forEach((t) => {
          new bootstrap.Tooltip(t);
        });
      });

     new WOW().init();
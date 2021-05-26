$(function () {
  "use strict";
  /* ===== Back To Top ===== */
  $(window).scroll(function () {
    $(this).scrollTop() > 100
      ? $("#scroll").fadeIn()
      : $("#scroll").fadeOut()
  });
  $("#scroll, .scroll-top").on("click", function (e) {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

  /* ================================================
        Video popup
        ================================================ */

  let $magnificPopup = $(".popup-youtube");

  if ($magnificPopup.length && $.fn.magnificPopup) {
    $magnificPopup.magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
  }

  /* ===== Video Play Button Effect ===== */
  $("#play-video").on("click", function (e) {
    e.preventDefault();
    $("#video-overlay").addClass("open");
    $("#video-overlay").append(
      '<iframe width="560" height="315" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>'
    );
  });

  $(".video-overlay, .video-overlay-close").on("click", function (e) {
    e.preventDefault();
    close_video();
  });

  $(document).keyup(function (e) {
    if (e.keyCode === 27) {
      close_video();
    }
  });

  function close_video() {
    $(".video-overlay.open").removeClass("open").find("iframe").remove();
  }

  /* ===== Banner Slider ===== */
  let $bannerSlider = $(".banner-slider");

  if ($bannerSlider.length && $.fn.slick) {
    $bannerSlider.slick({
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      vertical: true,
      verticalSwiping: true,
      autoplay: true,
      infinite: false,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            vertical: false,
            verticalSwiping: false,
          },
        },
      ],
    });
  }

  /* ===== Main Slider ===== */
  let $mainSlider = $(".main-slider");

  if ($mainSlider.length && $.fn.slick) {
    $mainSlider.slick({
      dots: false,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: true,
      autoplay: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            arrows: false,
            dots: false,
          },
        },
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
  }
  /* ===== Service Slider ===== */
  let $serviceSlider = $(".service-slider");

  if ($serviceSlider.length && $.fn.slick) {
    $serviceSlider.slick({
      dots: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
  }

  /* ================================================
        Doctors Slider
        ================================================ */
  let $doctorSlider = $(".doctors-slider");

  if ($doctorSlider.length && $.fn.slick) {
    $doctorSlider.slick({
      dots: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
  }

  /* ================================================
        Testi Slider
        ================================================ */
  let $testiSlider = $(".testi-slider");

  if ($testiSlider.length && $.fn.slick) {
    $testiSlider.slick({
      dots: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
  }

  /* ================================================
        Our team
        ================================================ */
  let $ourteamSlider = $(".our-team-slider");

  if ($ourteamSlider.length && $.fn.slick) {
    $ourteamSlider.slick({
      dots: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            dots: true,
          },
        },
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
  }

  /* ================================================
       Testimonial Style 2
        ================================================ */
  let $testiSlider2 = $(".testi-slider-style2");

  if ($testiSlider2.length && $.fn.slick) {
    $testiSlider2.slick({
      infinite: true,
      slidesToShow: 1,
      speed: 300,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      // asNavFor: ".testi-slider-style2-nav",
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
  }

  let $testiSliderstyle2nav = $(".testi-slider-style2-nav");

  if ($testiSliderstyle2nav.length && $.fn.slick) {
    $testiSliderstyle2nav.slick({
      slidesToShow: 5,
      slidesToScroll: 0,
      asNavFor: ".testi-slider-style2",
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
  }

  /* ================================================
      Dropdown Menu
      ================================================ */

  if ($(".dropdown-menu a.dropdown-toggle").length) {
    $(".dropdown-menu a.dropdown-toggle").on("click", function (e) {
      if (!$(this).closest(".dropdown").hasClass("show")) {
        $(this).closest(".dropdown").first().find(".show").removeClass("show");
      }
      let $subMenu = $(this).closest(".dropdown");
      $subMenu.toggleClass("show");

      $(this)
        .parents("li.nav-item.dropdown.show")
        .on("hidden.bs.dropdown", function (e) {
          $(".dropdown-submenu .show").removeClass("show");
        });

      return false;
    });
  }
  /* ================================================
      Before After Slider
      ================================================ */
  if ($.fn.twentytwenty) {
    $(".twentytwenty-container[data-orientation!='vertical']").twentytwenty();
    $(".twentytwenty-container[data-orientation='vertical']").twentytwenty({
      default_offset_pct: 0.5,
      orientation: "vertical",
      no_overlay: true
    });
  }
});

/* ===== Contact Forms Powered by Web3forms.com ===== */
const form = document.getElementById("form");
const result = document.getElementById("result");

form && form.addEventListener("submit", e => {
  e.preventDefault();
  const formData = new FormData(form);
  // Array.from(formData).reduce((formData, field) => formData[field[+[]]] = field[+!![]], {});

  let object = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
  let json = JSON.stringify(object);
  result.innerHTML = "Please wait...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      if (response.status == 200) {
        let json = await response.json();
        result.innerHTML = json.body.message;
      } else {
        console.log(response);
        result.innerHTML = "Something went wrong!";
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
    })
    .then(function () {
      form.reset();
      result.innerHTML = "Form submitted successfully! We'll get back to you ASAP.";
      setTimeout(() => {
        result.style.display = "none";
      }, 5000);
    });
  });
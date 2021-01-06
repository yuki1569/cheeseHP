'use strict'
{

  $(function () {
    $(window).scroll(function () {//スクロールメソッド
      $('.fadein').each(function () {
        var position = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > position - windowHeight + 100) {
          $(this).addClass('active');
        }
      });
    });
  });

  $('.nav-button-ABOUT').click(function () {
    $('html, body').animate({ scrollTop: $('#ABOUT').offset().top - 70 }, 500);
  });

  $('.nav-button-COURSE').click(function () {
    $('html, body').animate({ scrollTop: $('#COURSE').offset().top - 70 }, 500);
  });
  $('.nav-button-NEWS').click(function () {
    $('html, body').animate({ scrollTop: $('#NEWS').offset().top - 70 }, 500);
  });
  $('.nav-button-ACCESS').click(function () {
    $('html, body').animate({ scrollTop: $('#ACCESS').offset().top - 70 }, 500);
  });
  $('.nav-button-CONTACT').click(function () {
    $('html, body').animate({ scrollTop: $('#CONTACT').offset().top - 70 }, 500);
  });

  $('.button-ABOUT').click(function () {
    $('html, body').animate({ scrollTop: $('#ABOUT').offset().top - 70 }, 500);
  });
  $('.button-COURSE').click(function () {
    $('html, body').animate({ scrollTop: $('#COURSE').offset().top - 70 }, 500);
  });
  $('.button-NEWS').click(function () {
    $('html, body').animate({ scrollTop: $('#NEWS').offset().top - 70 }, 500);
  });
  $('.button-ACCESS').click(function () {
    $('html, body').animate({ scrollTop: $('#ACCESS').offset().top - 70 }, 500);
  });
  $('.button-CONTACT').click(function () {
    $('html, body').animate({ scrollTop: $('#CONTACT').offset().top - 70 }, 500);
  });


  $(function () {
    // let panel_button = [".button-ABOUT", ".button-COURSE", ".button-NEWS", ".button-ACCESS", ".button-CONTACT"];
    $(window).scroll(function () {
      //about
      if ($(this).scrollTop() > $('#ABOUT').offset().top-110 && $(this).scrollTop() < $('#COURSE').offset().top-100) {
        $(".nav-button-ABOUT").addClass("nav-button-active");
        $(".nav-button-ABOUT").removeClass("nav-button-nonactive");
        $(".nav-button-ABOUT>a").addClass("nav-button-active_font");
        $(".nav-button-ABOUT>a").removeClass("nav-button-nonactive_font");
      } else {
        $(".nav-button-ABOUT").removeClass("nav-button-active");
        $(".nav-button-ABOUT").addClass("nav-button-nonactive");
        $(".nav-button-ABOUT>a").removeClass("nav-button-active_font");
        $(".nav-button-ABOUT>a").addClass("nav-button-nonactive_font");
      }
      //course
      if ($(this).scrollTop() > $('#COURSE').offset().top-110 && $(this).scrollTop() < $('#NEWS').offset().top-100) {
        $(".nav-button-COURSE").addClass("nav-button-active");
        $(".nav-button-COURSE").removeClass("nav-button-nonactive");
        $(".nav-button-COURSE>a").addClass("nav-button-active_font");
        $(".nav-button-COURSE>a").removeClass("nav-button-nonactive_font");
      } else {
        $(".nav-button-COURSE").removeClass("nav-button-active");
        $(".nav-button-COURSE").addClass("nav-button-nonactive");
        $(".nav-button-COURSE>a").removeClass("nav-button-active_font");
        $(".nav-button-COURSE>a").addClass("nav-button-nonactive_font");
      }
      //news
      if ($(this).scrollTop() > $('#NEWS').offset().top-110 && $(this).scrollTop() < $('#ACCESS').offset().top-100) {
        $(".nav-button-NEWS").addClass("nav-button-active");
        $(".nav-button-NEWS").removeClass("nav-button-nonactive");
        $(".nav-button-NEWS>a").addClass("nav-button-active_font");
        $(".nav-button-NEWS>a").removeClass("nav-button-nonactive_font");
      } else {
        $(".nav-button-NEWS").removeClass("nav-button-active");
        $(".nav-button-NEWS").addClass("nav-button-nonactive");
        $(".nav-button-NEWS>a").removeClass("nav-button-active_font");
        $(".nav-button-NEWS>a").addClass("nav-button-nonactive_font");
      }
      //access
      if ($(this).scrollTop() > $('#ACCESS').offset().top-110 && $(this).scrollTop() < $('#CONTACT').offset().top-100) {
        $(".nav-button-ACCESS").addClass("nav-button-active");
        $(".nav-button-ACCESS").removeClass("nav-button-nonactive");
        $(".nav-button-ACCESS>a").addClass("nav-button-active_font");
        $(".nav-button-ACCESS>a").removeClass("nav-button-nonactive_font");
      } else {
        $(".nav-button-ACCESS").removeClass("nav-button-active");
        $(".nav-button-ACCESS").addClass("nav-button-nonactive");
        $(".nav-button-ACCESS>a").removeClass("nav-button-active_font");
        $(".nav-button-ACCESS>a").addClass("nav-button-nonactive_font");
      }
      //contact
      if ($(this).scrollTop() > $('#CONTACT').offset().top-110) {
        $(".nav-button-CONTACT").addClass("nav-button-active");
        $(".nav-button-CONTACT").removeClass("nav-button-nonactive");
        $(".nav-button-CONTACT>a").addClass("nav-button-active_font");
        $(".nav-button-CONTACT>a").removeClass("nav-button-nonactive_font");
      } else {
        $(".nav-button-CONTACT").removeClass("nav-button-active");
        $(".nav-button-CONTACT").addClass("nav-button-nonactive");
        $(".nav-button-CONTACT>a").removeClass("nav-button-active_font");
        $(".nav-button-CONTACT>a").addClass("nav-button-nonactive_font");
      }
    });

  });

  $(function () {
    var pagetop = $('#page_top');
    // ボタン非表示
    pagetop.hide();
    //変数初期化
    var pos = 0;
    //スクロールが発生した際に実行
    $(window).on('scroll', function () {
      //スクロール位置取得＆スクロール方向で分岐
      if ($(this).scrollTop() < pos) {
        pagetop.fadeOut();
      } else {
        pagetop.fadeIn();
      }

      //スクロールが停止した位置を保持
      pos = $(this).scrollTop();
    });
    pagetop.click(function () {
      $("html,body").animate({ scrollTop: 0 }, 500);
      //どうしてhtmlとbodyを同時に選択するかといいますと、WEBブラウザによっては、bodyに効くけどhtmlだと効かない、逆にhtmlに効くけどbodyだと効かないみたいなことがあるからです。WebKit系ブラウザでは、bodyに効き、それ以外のブラウザではhtmlに効きくみたい。
      return false;
    });
  });

  $('#panel-btn').on('click', function () {
    if ($('.panel-menu').hasClass('active-menu')) {
      $('.panel-menu').removeClass('active-menu');
      $('.panel-menu').addClass('active-menu-remove');
      $('main').removeClass('on');

    } else {
      $('.panel-menu').addClass('active-menu');
      $('.panel-menu').removeClass('active-menu-remove');
      $('main').addClass('on');
    }
  });

  //サイドメニューが表示された時、ほかの部分をクリックするとサイドメニューが閉じる
  $('main').on('click', function () {
    $('.panel-menu').removeClass('active-menu');
    $('.panel-menu').addClass('active-menu-remove');
    $('main').removeClass('on');
    $("#panel-btn-icon").toggleClass("close");
  });

  //パネルボタンのアニメーション
  $(function () {
    $("#panel-btn").click(function () {
      $("#panel").slideToggle(200);
      $("#panel-btn-icon").toggleClass("close");
      $("*").removeClass("panel-button-active");
      return false;
    });
  });

  //パネルボタンがクリックされたときに色がついた状態にする
  //クリックや閉じるを押したときは色が外れるようにする
  $(function () {
    let panel_button = [".button-ABOUT", ".button-COURSE", ".button-NEWS", ".button-ACCESS", ".button-CONTACT"];
    panel_button.forEach(button_name => {
      $(button_name).click(function () {
        $("*").removeClass("panel-button-active");
        $(button_name).addClass("panel-button-active");
      });
    });
  });






}
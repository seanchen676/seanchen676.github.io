"use strict";

$(function () {
  $('#ranking-tabs').tabs();
  $('#news-tabs').tabs();
  $('#board-tabs').tabs();
  var swiperPc = new Swiper('.swiper-container-pc', {
    navigation: {
      nextEl: '.swiper-container-pc .swiper-button-next',
      prevEl: '.swiper-container-pc .swiper-button-prev'
    },
    pagination: {
      el: '.swiper-container-pc .swiper-pagination',
      clickable: true
    },
    loop: true,
    noSwiping: false,
    allowTouchMove: false,
    breakpoints: {
      1024: {
        noSwiping: true,
        allowTouchMove: true
      }
    }
  });
  var swiperMobile = new Swiper('.swiper-container-mobile', {
    pagination: {
      el: '.swiper-container-mobile .swiper-pagination'
    },
    loop: true
  });
  swiperPc.on('slideChange', function () {
    if (this.realIndex + 1 < 10) {
      $('.swiper-count').text('0' + (this.realIndex + 1));
    } else {
      $('.swiper-count').text(this.realIndex + 1);
    }
  });
  $('.swiper-slide').on('click', function () {
    $('.swiper-slide').removeClass('active');
    $(this).addClass('active');
    var tab = $(this).data('tab');
    $('.board-tabs-content').removeClass('active');
    $('#board-tabs-' + tab).addClass('active');
  });
  $('.page-item').on('click', function () {
    $('.page-item').removeClass('active');
    $(this).addClass('active');
  });
  $('.ranking-tabs-item').on('click', function () {
    var tab = $(this).data('tab');
    $('.page-item').removeClass('active');
    $('#ranking-tabs' + tab + '-content').find('.page-item').eq(0).addClass('active');
  });
  $('#board-tabs-btn-right').on('click', function (e) {
    var ulWidth = $('.board-tabs-list').get()[0].clientWidth;
    var scrollLeft = $('.board-tabs-list').get()[0].scrollLeft;
    $('.board-tabs-list').animate({
      scrollLeft: scrollLeft + ulWidth
    }, 300);
  });
  $('#board-tabs-btn-left').on('click', function (e) {
    var ulWidth = $('.board-tabs-list').get()[0].clientWidth;
    var scrollLeft = $('.board-tabs-list').get()[0].scrollLeft;
    $('.board-tabs-list').animate({
      scrollLeft: scrollLeft - ulWidth
    }, 300);
  });
  var boardTabsItemIndex = 0;
  $('.active-line').css('left', 0).css('width', $('.board-tabs-item').first().get()[0].clientWidth);
  $('.board-tabs-item').on('click', function () {
    boardTabsItemIndex = $(this).index();
    var itemRef = {
      index: $(this).index(),
      width: $(this).get()[0].clientWidth,
      left: $(this).get()[0].offsetLeft
    };

    if (itemRef) {
      $('.active-line').css('left', itemRef.left).css('width', itemRef.width);
    }
  });
  $(window).resize(function () {
    var itemRef = {
      width: $('.board-tabs-item').eq(boardTabsItemIndex).get()[0].clientWidth,
      left: $('.board-tabs-item').eq(boardTabsItemIndex).get()[0].offsetLeft
    };

    if (itemRef) {
      $('.active-line').css('left', itemRef.left).css('width', itemRef.width);
    }
  });
  $('#BackTop').click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 500);
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > $(window).height()) {
      $('#BackTop').fadeIn(150);
    } else {
      $('#BackTop').stop().fadeOut(150);
    }
  }).scroll();
});
$(document).ready(function () {
    
});


/**
 * Show dropdown
 */
$(document).ready(function () {
  const HIDDEN = 'dropdown/shown';
  const SHOWN = 'dropdown/hidden';
  const BEFORE_SHOW = 'dropdown/beforeshow';
  const BEFORE_HIDE = 'dropdown/beforehide';

  const $ = window.$;

  const toggle = (dropdown, show = true) => {
    if (!dropdown.length) {
      return;
    }
  
    const event = [BEFORE_HIDE, BEFORE_SHOW][Number(show)];
    const btn = dropdown.prev();
  
    if (btn.hasClass('js-dropdown-toggle')) {
      btn.toggleClass('is-active', show);
    }
  
    dropdown
      .trigger(event)
      .toggleClass('is-active', show);
  };
  
  $(document).on('click', '.js-dropdown-toggle', function (e) {
    const btn = $(this);
    const dropdown = btn.next();
  
    if (!dropdown.hasClass('js-dropdown')) {
      return;
    }
  
    e.preventDefault();
    e.stopPropagation();
  
    toggle(dropdown, !btn.hasClass('is-active'));
  });
  
  /**
   * Trigger shown/hidden event, after transition end
   */
  $(document).on('transitionend', '.js-dropdown', function () {
    const self = $(this);
    const isActive = Number(self.hasClass('is-active'));
  
    self.trigger([HIDDEN, SHOWN][isActive]);
  });
  
  /**
   * Hide all visible dropdown before to show new one
   */
  $(document).on(BEFORE_SHOW, '.js-dropdown', () => {
    $('.js-dropdown.is-active').each(function () {
      toggle($(this), false);
    });
  });
  
  /**
   * Hide dropdown when click outside
   */
  $(document).on('click', (e) => {
    const target = $(e.target);
  
    if (target.hasClass('js-dropdown') || target.parents('.js-dropdown').length) {
      return;
    }
  
    $('.js-dropdown.is-active').each(function () {
      toggle($(this), false);
    });
  });
});


/**
 * #Menu
 */
jQuery(document).ready(function ($) {
  $('.hamburger').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('is-active');
    if ($('.mobile-nav').is(':hidden')) {
      $('.mobile-nav').removeClass('is-hidden');
    } else {
      $('.mobile-nav').addClass('is-hidden');
    }

    $('.mobile-nav, .mobile-nav__content, .mobile-nav__overlay').toggleClass('is-visible');

    $('html, body').toggleClass('is-overflowed');
  });

  $('.mobile-nav__overlay').click(function (e) {
    e.preventDefault();
    $('.hamburger').toggleClass('is-active');
    $('.mobile-nav, .mobile-nav__content, .mobile-nav__overlay').removeClass('is-visible');
    $('.mobile-nav').addClass('is-hidden');
    $('html, body').removeClass('is-overflowed');
  });

});



/**
 * Hero carousel
 */
$(document).ready(function () {
  var slider = $('.js-hero-carousel');

  slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    prevArrow: $('.js-hero-carousel-nav .hero-carousel__prev'),
    nextArrow: $('.js-hero-carousel-nav .hero-carousel__next'),
  });
});


/**
 * Fancybox init
 */
$(document).ready(function () {
  $('[data-fancybox]').fancybox({
    buttons: [
      'zoom',
      'close',
    ],
    hash: false,
  });
});


/**
 * Modals
 */
$(document).ready(function () {
  $.modal.defaults.showClose = false;

  $('.js-open-modal').click(function(event) {
    $(this).modal({
      fadeDuration: 250
    });
    return false;
  });
  
});



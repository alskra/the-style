$(function () {
    $('body').on('click', '.header__search-btn', function () {
        $(this).toggleClass('fa-search fa-close');
        $('.header__search-inner').toggleClass('header__search-inner_opened');
    });
});
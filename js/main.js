var $btnShow = $('.btn-show-hide');
var $box = $('.box');

var $btnMove = $('.btn-move');
var $diamond = $('.diamond');

var $btnCollapse = $('.btn-collapse-expand');
var $panel = $('.panel');

var $btnBounce = $('.btn-bounce');
var $circle = $('.circle');

var $btnAppend = $('.btn-append');
var $list = $('.list');

$btnShow.on('click', function () {
    $box.toggleClass('js-box-show');
});


$btnMove.on('click', function () {
    $diamond.toggleClass('js-box-move');
});


$btnCollapse.on('click', function () {
    $panel.toggleClass('js-panel-collapse')
    
});


$btnBounce.on('click', function () {
    $circle.addClass('js-circle-bounce')
});

$circle.on('animationend', function () {
    $circle.removeClass('js-circle-bounce');
});

$btnAppend.on('click', function() {
    var $li = $('<li>').html('New List Items');
    
    $list.prepend($li);
    $li.addClass ('new-list');
});
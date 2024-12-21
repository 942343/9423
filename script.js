// ================== Hero Slider ===========================
$('#leftFrameBtn').on('click', HeroshiftLeft);
$('#rightFrameBtn').on('click', HeroshiftRight);
$('.blurBG').css('background', `url(${$('#frame4>img').attr('src')})`);
function HeroshiftLeft() {
const $frames = $('.heroSlider');
let firstId = $frames.first().attr('id'); // Get the current first frame ID
let lastId = $frames.last().attr('id'); // Get the current last frame ID

// Shift IDs to the left
for (let i = 1; i < $frames.length; i++) {
$frames.eq(i - 1).attr('id', $frames.eq(i).attr('id')); // Move the next ID to the previous div
}
$frames.last().attr('id', firstId); // Set the last frame ID to the first

$('.blurBG').css('background', `url(${$('#frame4>img').attr('src')})`);
}
function HeroshiftRight() {
const $frames = $('.heroSlider');
let firstId = $frames.first().attr('id'); // Get the current first frame ID
let lastId = $frames.last().attr('id'); // Get the current last frame ID

// Shift IDs to the right
for (let i = $frames.length - 2; i >= 0; i--) {
$frames.eq(i + 1).attr('id', $frames.eq(i).attr('id')); // Move the previous ID to the next div
}
$frames.first().attr('id', lastId); // Set the first frame ID to the last

$('.blurBG').css('background', `url(${$('#frame4>img').attr('src')})`);
}

setInterval(() => {
  HeroshiftRight();
}, 4000);
// ===========================================================
// ================ normal slider ===================================

$('.leftgenereBtn').on('click', shiftLeft);
$('.rightgenereBtn').on('click', shiftRight);
function shiftLeft(e) {
var $genereBody = $(e.target).closest('.genereOuter').find('.genereDivBody');
var totalFrames = $genereBody.find('.genereFrame').length;  // Total number of frames
var frameWidth = $genereBody.find('.genereFrame').outerWidth(true);  // Includes width + gap

var currentScroll = $genereBody.scrollLeft();

if (currentScroll > 0) {
// Move left by one frame width (including gap)
$genereBody.animate({scrollLeft: currentScroll - frameWidth-30}, 300);
} 
// else {
//     // If at the start, wrap around to the last frame
//     $genereBody.animate({scrollLeft: (totalFrames - 1) * frameWidth}, 300);
// }
}

function shiftRight(e) {
var $genereBody = $(e.target).closest('.genereOuter').find('.genereDivBody');
var totalFrames = $genereBody.find('.genereFrame').length;  // Total number of frames
var frameWidth = $genereBody.find('.genereFrame').outerWidth(true);  // Includes width + gap

var currentScroll = $genereBody.scrollLeft();
var maxScroll = (totalFrames - 1) * frameWidth;  // Maximum scroll position

if (currentScroll < maxScroll) {

// Move right by one frame width (including gap)
$genereBody.animate({scrollLeft: currentScroll + frameWidth+30}, 300);
} else {

// If at the end, wrap around to the first frame
$genereBody.animate({scrollLeft: 0}, 300);
}
}
// ================================================================

// -------------------- auto slider ----------------------------------
new Splide('#autoSlider', {
    type   : 'loop',
    pagination:false,
//    perPage    : 4,
    // perMove    : 1,
    // autoHeight:true,
    autoWidth: true,
  height     : '14rem',

  autoScroll: {
    speed: 1,
  },
  gap:'10px',
  pauseOnHover:true,
  pauseOnFocus:true,
    grid: {
        gap: {
            row: '10px',
            col: '0px',
          },
     dimensions: [[1, 1], [2,1],[2, 1], [1, 1],[2, 1], [1, 1],[2, 1], [2, 1],[1, 1], [2, 1],[2, 1], [1,1],[2, 1], [2,1], [1,1],[2, 1]],
    // row: 2,
    //   col: 2,
    },
    breakpoints: {
        640: {
          height : '12rem',
          perPage: 1,
          grid   : {
            dimensions: [[1, 1], [2,1],[2, 1], [1, 1],[2, 1], [1, 1],[2, 1], [2, 1],[1, 1], [2, 1],[2, 1], [1,1],[2, 1], [2,1], [1,1],[2, 1]],
          },
        },
      },
    } ).mount(window.splide.Extensions);
// ------------------------------------------------------------------

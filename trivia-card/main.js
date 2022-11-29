$(document).ready(() => {
  $('.hint-box').on('click', () => {
    $('.hint').slideToggle();
  });

  $('.wrong-answer-one').on('click', () => {
    $('.wrong-text-one').fadeOut();
    $('.frown').show();
  });

  $('.wrong-answer-two').on('click', () => {
    $('.wrong-text-two').fadeOut();
    $('.frown').show();
  });

  $('.wrong-answer-three').on('click', () => {
    $('.wrong-text-three').fadeOut();
    $('.frown').show();
  });

  $('.correct-answer').on('click', () => {
    $('.frown').hide();
    $('.smiley').show();
    $('.wrong-answer-one').fadeOut();
    $('.wrong-answer-two').fadeOut();
    $('.wrong-answer-three').fadeOut();
  });
});

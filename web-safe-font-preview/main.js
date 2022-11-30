$(document).ready(() => {
  $('#text').on('keyup', (event) => {
    $('.preview').html($(event.currentTarget).val());
  });

  $('#font').on('change', (event) => {
    $('.preview').css('font-family', $(event.currentTarget).val());
  });

  $('#weight').on('change', (event) => {
    $('.preview').css('font-weight', $(event.currentTarget).val());
  });

  $('#size').on('keyup', (event) => {
    const fontSize = $(event.currentTarget).val() + 'px';
    $('.preview').css('font-size', fontSize);
  });
});

$(document).ready(() => {
  const $cart = $('#cart');
  const $account = $('#account');
  const $help = $('#help');
  const $cartMenu = $('ul#cartMenu');
  const $accountMenu = $('ul#accountMenu');
  const $helpMenu = $('ul#helpMenu');
  const $dropdownMenus = $('.dropdown-menu');

  $cart.on('click', () => {
    $cartMenu.show();
  });

  $account.on('click', () => {
    $accountMenu.show();
  });

  $help.on('click', () => {
    $helpMenu.show();
  });

  $dropdownMenus.on('mouseleave', () => {
    $dropdownMenus.hide();
  });
});

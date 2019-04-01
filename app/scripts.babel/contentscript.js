navigator.mediaSession.setActionHandler('previoustrack', function() {
  document.querySelector('button.control-button.spoticon-skip-back-16').click();
});

navigator.mediaSession.setActionHandler('nexttrack', function() {
  document
    .querySelector('button.control-button.spoticon-skip-forward-16')
    .click();
});

navigator.mediaSession.setActionHandler('play', function() {
  document
    .querySelector(
      'button.control-button.spoticon-play-16,button.control-button.spoticon-pause-16'
    )
    .click();
});

navigator.mediaSession.setActionHandler('pause', function() {
  document
    .querySelector(
      'button.control-button.spoticon-play-16,button.control-button.spoticon-pause-16'
    )
    .click();
});

console.log('wowow');

'use strict';

(function() {
  var petition = document.getElementById('petition');
  var message = petition.querySelector('.message');
  var form = petition.getElementsByTagName('form')[0];
  var thanks = document.getElementById('thanks');

  function flash(msg) {
    function setMessage() {
      message.removeEventListener(message, setMessage);
      message.textContent = msg;
      message.classList.remove('hidden');
      message.classList.remove('invisible');
    }

    if (!message.classList.contains('invisible')) {
      message.addEventListener('transitionend', setMessage);
      message.classList.add('invisible');
    } else {
      setMessage();
    }
  }

  function onError(e) {
    flash('There was an issue submitting the form, please try again.');
    // TODO: Report XHR errors or HTTP error codes to Sentry
  }

  function onLoad(e) {
    if (e && 200 <= e.code < 300) {
      thanks.classList.remove('hidden');
      thanks.classList.remove('invisible');

      // Track successful form submissions
      fbq('track', 'CompleteRegistration');
    } else {
      onError(e);
    }
  }

  form.addEventListener('submit', function onSubmit(e) {
    e.preventDefault();

    var xhr = new XMLHttpRequest();

    xhr.addEventListener('error', onError);
    xhr.addEventListener('load', onLoad);

    xhr.open(form.getAttribute('method'), form.getAttribute('action'), true);
    xhr.send(new FormData(form));
  });
})();

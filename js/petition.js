'use strict';

(function() {
  var petition = document.getElementById('petition');
  var loader = petition.querySelector('.loader');
  var message = petition.querySelector('.message');
  var form = petition.getElementsByTagName('form')[0];

  function hideAfterFadeOut(e) {
    e.target.classList.add('hidden');
    e.target.removeEventListener(hideAfterFadeOut);
  }

  function showForm(msg) {
    message.textContent = msg;
    message.classList.remove('hidden');
    message.classList.remove('invisible');

    form.classList.remove('hidden');
    form.classList.remove('invisible');

    loader.addEventListener('transitionend', hideAfterFadeOut);
    loader.classList.add('invisible');
  }

  function hideForm() {
    message.addEventListener('transitionend', hideAfterFadeOut);
    message.classList.add('hidden');

    form.addEventListener('transitionend', hideAfterFadeOut);
    form.classList.add('hidden');

    loader.classList.remove('hidden');
  }
  
  function onError(e) {
    showForm('There was an issue submitting the form, please try again');
    // TODO: Report XHR errors or HTTP error codes to Sentry
  }

  form.addEventListener('submit', function onSubmit(e) {
    e.preventDefault();
    hideForm();

    var xhr = new XMLHttpRequest();

    xhr.addEventListener('error', onError);
    xhr.addEventListener('load', function onLoad(e) {
      if (e && 200 <= e.code < 300) {
        window.location = "/thanks";
      } else {
        onError(e);
      }
    });

    xhr.open(form.getAttribute('method'), form.getAttribute('action'), true);
    xhr.send(new FormData(form));
  });
})();

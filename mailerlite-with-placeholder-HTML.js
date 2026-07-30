document.addEventListener('DOMContentLoaded', function () {
  const placeholder = document.querySelector('#mailerlite-placeholder');
  if (!placeholder || placeholder.dataset.loaded) return;

  // Define the success callback globally FIRST (MailerLite needs this)
  window.ml_webform_success_11389960 = function () {
    var $ = ml_jQuery || jQuery;
    $('.ml-subscribe-form-11389960 .row-success').show();
    $('.ml-subscribe-form-11389960 .row-form').hide();
  };

  let options = {
    root: null, // null means use viewport
    rootMargin: '0px 0px -250px 0px', threshold: 0.1,
  };

  const observer = new IntersectionObserver(handleIntersect, options);

  observer.observe(placeholder);

  function handleIntersect(entries, observer) {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        // Create a container div for the form HTML (without the script yet)
        const formContainer = document.createElement('div');
        formContainer.innerHTML = `<!-- Your entire MailerLite form embed code goes here -->
                <style type="text/css">/** fonts **/</style>
                <style type="text/css">/** Other CSS **/ </style>
                <style type="text/css">/** Other CSS **/ </style>
                <style type="text/css">
                  #mlb2-11389960 {
                    height: 100px;
                    background-color: #3aa6d740;
                    padding: 20px;
                  }
                </style>
                <div class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-11389960" id="mlb2-11389960">YOUR FORM <input></div>`;

        placeholder.innerHTML = '';
        placeholder.appendChild(formContainer);

        // Then load the MailerLite tracking/init script if needed
        const script = document.createElement('script');
        script.src = 'https://groot.mailerlite.com/js/w/webforms.min.js?v2d8fb22bb5b3677f161552cd9e774127';
        script.async = true;
        document.body.appendChild(script);
        placeholder.dataset.loaded = 'true';
        observer.disconnect();
      }
    });
  }
});

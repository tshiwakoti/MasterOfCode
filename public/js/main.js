$(document).ready(function() {
  $(".typed").typed({
    strings: [" HELP THE WORLD", " CHANGE THE WORLD", " MAKE A DIFFERENCE"],
    loop: true,
    typeSpeed: 70
  });

  // card.js
  var card = new Card({
    form: 'form.donate-form',
    container: '.card-wrapper',

    formSelectors: {
        nameInput: 'input[name="first-name"], input[name="last-name"]'
    }
	});
});

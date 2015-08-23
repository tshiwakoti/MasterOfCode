$(document).ready(function() {
  $(".typed").typed({
    strings: [" HELP THE WORLD", " CHANGE THE WORLD", " MAKE A DIFFERENCE"],
    loop: true,
    typeSpeed: 70
  });
  
  var elements = document.querySelectorAll('.editable', {
    buttons: ['bold', 'italic', 'underline', 'anchor','h1', 'h2', 'h3', 'quote'],
  }),
  editor = new MediumEditor(elements);
});

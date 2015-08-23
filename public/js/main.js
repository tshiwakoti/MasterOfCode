$(document).ready(function() {
  $(".typed").typed({
    strings: [" HELP THE WORLD", " CHANGE THE WORLD", " MAKE A DIFFERENCE"],
    loop: true,
    typeSpeed: 70
  });
  
  var editor = new MediumEditor('.editable', {
    placeholder: false
  });
  
  // editor = new MediumEditor(elements);
});

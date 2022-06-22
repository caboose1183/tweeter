$(document).ready(function () {
  console.log('composer loaded')

  $("#tweet-text").on('input', function () {
    //$(this).val().length);
    //$(this).next().children().next().val()

    if ($(this).val().length > 140) {
      $($(this).next().children().next()).addClass('over-count')
      $(this).next().children().next().val(140 - $(this).val().length)
    } else {
      $($(this).next().children().next()).removeClass('over-count')
      $(this).next().children().next().val(140 - $(this).val().length)
    }
  });



});
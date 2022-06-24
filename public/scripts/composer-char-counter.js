$(document).ready(function () {
  $("#tweet-text").on('input', function () {
    if ($(this).val().length > 140) {
      $($(this).next().children().next()).addClass('over-count')
      $(this).next().children().next().val(140 - $(this).val().length)
    } else {
      $($(this).next().children().next()).removeClass('over-count')
      $(this).next().children().next().val(140 - $(this).val().length)
    }
  });
});
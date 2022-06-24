/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


function createTweetElement(tweetData) {
  const name = tweetData.user.name;
  const avatar = tweetData.user.avatars;
  const handle = tweetData.user.handle;
  const content = tweetData.content.text;
  const date = timeago.format(tweetData.created_at);

  let $tweet = ` <article class="tweeter-article" >

  <header class="tweeter-header">
    <figure class="tweeter-profile">
      <img src=${avatar}></a>
      <aside class="tweeter-name">${name}</aside>
    </figure>
    <aside class="tweet-handle">${handle}</aside>
  </header>

  <section class="main-tweet">
  <p>${escape(content)}</p>
  </section>

  <footer class="tweeter-footer">
    <aside class="date">${date}</aside>

    <aside class="icons">
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-share"></i>
      <i class="fa-solid fa-heart"></i>
    </aside>

  </footer>
</article > `

  return $tweet;
};

const renderTweets = function (tweets) {
  for (const tweet of tweets) {
    let $tweet = createTweetElement(tweet);

    $('.tweeter-feed').prepend($tweet);
  }
};

function loadTweets() {
  $.ajax({
    type: 'GET',
    url: '/tweets',
    data: $(this).serialize(),
    success: response => {
      renderTweets(response)
    }
  })
};

$('.tweet-form').submit(function (event) {
  event.preventDefault();
  $('.warning-container').slideUp('fast');

  if ($("#tweet-text").val().length > 140) {
    setTimeout(() => {
      $('.warning-message').text("Tweet is over the limit! Please do not exceed character limit!")
    }, '300');
    
    $('.warning-container').slideDown('slow');
    return false;
  };

  if (!$("#tweet-text").val().length) {
    setTimeout(() => {
      $('.warning-message').text("Tweet is empty! Please write what you are humming about!")
    }, '300');

    $('.warning-container').slideDown('slow');
    return false;
  };

  $.ajax({ 
    type: 'POST',
    url: '/tweets',
    data: $(this).serialize(),
    success: (response) => {
      $('.tweeter-feed').empty();
      loadTweets();
    }
  });

  $("#tweet-text").val(null);
  $('.counter').val(140);

});

$('.fa-angles-down').click(function () {
  $('.warning-container').slideUp('fast');
  $('.form-container').slideToggle();
});

$(window).scroll( () => { 
  if ($(this).scrollTop() > 100) {
    $('.scroll-top-button').fadeIn();
  } else {
    $('.scroll-top-button').fadeOut();
  }
});

$('.fa-circle-up').click( () => { 
  $('html, body').animate ({scrollTop: 0}, 'slow')
  return false;
});

const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

loadTweets();
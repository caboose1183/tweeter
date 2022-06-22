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
  const date = timeago.format (tweetData.created_at);

  let $tweet = ` <article class="tweeter-article" >
  <header class="tweeter-header">
    <figure class="tweeter-profile">
      <img src=${avatar}></a>
      <aside class="tweeter-name">${name}</aside>
    </figure>
    <aside class="tweet-handle">${handle}</aside>
  </header>

  <section class="main-tweet">
    ${content}
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
}

const renderTweets = function (tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container

  for (const tweet of tweets) {
    let $tweet = createTweetElement(tweet)

    $('.container').append ($tweet)
  }
}


$('.tweet-form').submit(function (event) {
  event.preventDefault();

  let $data = $(this).serialize()

  $.ajax ({
    type: 'POST',
    url: '/tweets',
    data: $data,
  })
})

function localTweets () {
  let $data = $(this).serialize()

  $.ajax ({
    type: 'GET',
    url: '/tweets',
    data: $data,
    success: response => {
      renderTweets(response)
    }
  })
}

/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}


function createTweetElement(tweetData) {
  const name = tweetData.user.name;
  const avatar = tweetData.user.avatars;
  const handle = tweetData.user.handle;
  const content = tweetData.content.text;
  const date = tweetData.created_at;

  return ` <article class="tweeter-article" >
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
}






const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('.container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.


const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const error = document.getElementById("modal")
const hearts = document.querySelectorAll("span.like-glyph");

error.className = "hidden";

hearts.forEach(hearts => hearts.addEventListener("click", liker))

function liker(hearts) {
  mimicServerCall()
  .then(() => {
    if (hearts.target.textContent === EMPTY_HEART) {
      hearts.target.textContent = FULL_HEART
      hearts.target.className = "activated-heart"
    }
      else if (hearts.target.textContent === FULL_HEART) {
      hearts.target.textContent = EMPTY_HEART
      hearts.target.className = ""
      }
  })
  .catch(() => {
    error.className = "show"
    setTimeout(() => {
      error.className = "hidden"}, 3000
      )
  })
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

// Defining text characters for the empty and full hearts for you to use later.

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

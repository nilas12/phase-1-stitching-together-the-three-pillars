// We use the Objects below to control toggling like / unlike status

const glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

const colorStates = {
  "red" : "",
  "": "red"
};

const articleHearts = document.querySelectorAll(".like-glyph");

function likeCallback(e) {
  const heart = e.target;
  mimicServerCall()
    .then(function(serverMessage){
      alert("You notified the server!");
      alert(serverMessage);
     heart.innerText = glyphStates[heart.innerText];
       heart.style.color = colorStates[heart.style.color];
    })
    .catch(function(error) {
      alert("Something went wrong!");
    });
}


 for (const glyph of articleHearts) {
 glyph.addEventListener("click", likeCallback);
 }

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("Pretend remote server notified of action!");
    }, 300);
  });
}

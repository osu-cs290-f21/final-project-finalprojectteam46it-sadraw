document.getElementById("post-button").addEventListener("click", toggleModal)
document.getElementById("modal-close").addEventListener("click", checkToggleModal)
document.getElementById("modal-cancel").addEventListener("click", toggleModal)
document.getElementById("modal-accept").addEventListener("click", modalAccept)

// Like and Dislike Buttons:

/*
var like_buttons = document.getElementsByClassName("post-info-containter");
for (var i = 0; i < like_buttons.length; i++) {
    var individual = like_buttons[i].getElementById("like-button");
    individual.addEventListener("click", addLike);
}  */

/* MY BUTTONS
var allButtons = document.getElementsByTagName('button')
for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', addLike)
}
*/
/* ATTEMPT 2
var container = document.querySelectorAll('like-button')
for (var i = 0; i < container.length; i++) {
    container[i].addEventListener('click', addLike)
    console.log(container[i])
} */

var container = document.getElementsByClassName("post-info-containter")

for (var i = 0; i < container.length; i++) {
    console.log(container[i])
    container[i].addEventListener('click', addLike)
}

/*
firstBox.addEventListener('click', function (event) {
    console.log("== The first box was clicked")
    console.log("  -- event.target:", event.target)
    console.log("  -- event.currentTarget:", event.currentTarget)
    event.stopPropagation()
})*/

/*
document.getElementById("like-button").addEventListener("click", addLike)
document.getElementById("dislike-button").addEventListener("click", addDislike)
*/

var yourPosts = [];

const canvas = document.getElementById("canvas");
const clearEl = document.getElementById("clear");
const ctx = canvas.getContext("2d");
let size = 5;
let isPressed = false;
let color = "black";
let x = undefined;
let y = undefined;

canvas.addEventListener("mousedown", (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
    isPressed = false;

    x = undefined;
    y = undefined;
});

canvas.addEventListener("mousemove", (e) => {

    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
});

// Added: ###
function erase() {
    // Can make anonymous function
    color = "white";
}

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}
clearEl.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
function modalAccept() { /*Old way to do html insert I'll do both but somethings need to be done before hand to check*/
  var canvasData = canvas.toDataURL("image/png");
  console.log(canvasData)
  var newPost = document.createElement('div')
  newPost.classList.add('post')

  var postContentsDiv = document.createElement('div')
  postContentsDiv.classList.add('post-contents')
  newPost.appendChild(postContentsDiv)

  var postImg = document.createElement('div')
  postImg.classList.add('post-image-container')
  postContentsDiv.appendChild(postImg)

  var photoImg = document.createElement('img')
  photoImg.src = canvasData
  postImg.appendChild(photoImg)

  var postTextContents = document.createElement('div')
  postTextContents.classList.add('post-text-container')
  postContentsDiv.appendChild(postTextContents)

  var postText = document.createElement('div')
  postText.classList.add('post-text')
  postText.textContent = document.getElementById("post-text-input").value
  postTextContents.appendChild(postText)

  var postInfoContainer = document.createElement('div')
  // Edited "post-username" -> "post-info-containter"
  postInfoContainer.classList.add('post-info-containter')
  postTextContents.appendChild(postInfoContainer)

  var postUsername = document.createElement('span')
  postUsername.classList.add('post-username')
  postUsername.textContent = document.getElementById("username-input").value
  postInfoContainer.appendChild(postUsername)

  var likeButton = document.createElement('button')
  likeButton.classList.add('like-button')
  // Added:
    likeButton.setAttribute("id", "like-button");

  likeButton.textContent = "Likes: 0"
  postInfoContainer.appendChild(likeButton)

var dislikeButton = document.createElement('button')
dislikeButton.classList.add('dislike-button')
dislikeButton.setAttribute('id', 'dislike-button')
dislikeButton.textContent = "Dislikes: 0"
postInfoContainer.appendChild(dislikeButton)


  var postDate = document.createElement('span')
  postDate.classList.add('post-date')
  postDate.textContent = document.getElementById("post-date-input").value
  postInfoContainer.appendChild(postDate)


  yourPosts.push(newPost)
  document.getElementById("posts").appendChild(newPost)


  toggleModal()
/* uses template
var context = {
  imageSrc: canvasData,
  imageText: document.getElementById("post-text-input").value,
  username: document.getElementById("username-input").value,
  likes: 0,
  dislikes: 0,
  date: document.getElementById("post-date-input").value
}
var newPost = Handlebars.templates.post(context)
var postsSection = document.getElementById('posts');
postsSection.insertAdjacentHTML('beforeend',newPost)
toggleModal()
*/


}

function addLike(event) {
    var like = (event.target).textContent;
    console.log(like)
    
    var button_txt = "Dislikes";
    for (var i = 0; i < 8; i++) {
        if (button_txt[i] !== like[i]) {
            return; // Checks if like button; else exit function
        }
    } 
    
    // Loop to get the number after the "Like: " in the like button.
    var str_like = String(like);
    var str_num = "";
    for (var i = str_like.length - 1; i >= 0; i--) {
        if (str_like[i] == " ") {
            break;
        }
        str_num += str_like[i];
    }
    var num_likes = "";
    for (var i = str_num.length - 1; i >= 0; i--) {
        num_likes += str_num[i];
    }
   document.getElementById("like-button").textContent = num_likes;
}
function addDislike() {
    var dislike = document.getElementById("like-button").textContent;
    var str_dislike = String(dislike);
}

function checkToggleModal() { 
    if (confirm("Are you sure you want to discard your work? This cannot be undone.")) {
        toggleModal();
    }
}

function toggleModal() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById("post-date-input").value = ""
    document.getElementById("post-text-input").value = ""

    document.getElementById("modal-backdrop").classList.toggle("hidden")
    document.getElementById("post-something-modal").classList.toggle("hidden")
}

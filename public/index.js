document.getElementById("post-button").addEventListener("click", toggleModal)
document.getElementById("modal-close").addEventListener("click", toggleModal)
document.getElementById("modal-cancel").addEventListener("click", toggleModal)
document.getElementById("modal-accept").addEventListener("click", modalAccept)

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
  postInfoContainer.classList.add('post-info-container')
  postTextContents.appendChild(postInfoContainer)

  var postUsername = document.createElement('span')
  postUsername.classList.add('post-username')
  postUsername.textContent = document.getElementById("username-input").value
  postInfoContainer.appendChild(postUsername)

  var likeButton = document.createElement('button')
  likeButton.classList.add('like-button')
  likeButton.setAttribute('id','slike-button')
  likeButton.textContent ="Likes: 0"
  postInfoContainer.appendChild(likeButton)

  var dislikeButton = document.createElement('button')
  dislikeButton.classList.add('dislike-button')
  dislikeButton.setAttribute('id','dislike-button')
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

function toggleModal() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById("post-date-input").value = ""
    document.getElementById("post-text-input").value = ""
    document.getElementById("modal-backdrop").classList.toggle("hidden")
    document.getElementById("post-something-modal").classList.toggle("hidden")
}

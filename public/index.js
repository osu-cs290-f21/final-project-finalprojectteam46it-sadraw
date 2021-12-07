document.getElementById("post-button").addEventListener("click", toggleModal)
document.getElementById("modal-close").addEventListener("click", toggleModal)
document.getElementById("modal-cancel").addEventListener("click", toggleModal)
document.getElementById("modal-accept").addEventListener("click", modalAccept)

var yourPosts = [];

let button_clicks = [
    {
        "clicked_likes": 0,
        "clicked_dislikes": 0
    }
]

const canvas = document.getElementById("canvas");
const clearEl = document.getElementById("clear");
const ctx = canvas.getContext("2d");
let size = 5;
let isPressed = false;
let color = "black";
let x = undefined;
let y = undefined;

var i_d; // To keep track of element position


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
    likeButton.setAttribute('id', 'like-button')
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

    var dislikeButtons = document.getElementsByClassName("dislike-button")
    console.log(dislikeButtons)
    /*
    for (var i = 0; i < dislikeButtons.length; i++) {
        dislikeButtons[i].addEventListener('click', addDislike)
    } */
    for (var i = 0; i < dislikeButtons.length; i++) {
        //console.log("dislikeButtons.length", dislikeButtons.length)
        i_d = i;
        console.log("Step1", i_d)
        console.log("Step2", i)
        dislikeButtons[i_d].addEventListener('click', addDislike)
    }

    var likeButtons = document.getElementsByClassName("like-button")
    console.log(likeButtons)
    for (var i = 0; i < likeButtons.length; i++) {
        //console.log("dislikeButtons.length", dislikeButtons.length)
        i_d = i;
        likeButtons[i_d].addEventListener('click', addLike)
    }

    var obj = {
        "clicked_likes": 0,
        "clicked_dislikes": 0
    }
    button_clicks.push(obj);

    console.log("length of arr", button_clicks.length)

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

/*
function addDislike(event){
 var dislike = (event.target)
 console.log(dislike.textContent)
 var numDislike = dislike.textContent.slice(-1)
 console.log(+numDislike + +1)
 dislike.textContent = "Dislike: " + (+numDislike + +1)
 
} */

var likeButtons = document.getElementsByClassName("like-button")
console.log(likeButtons)
for (var i = 0; i < likeButtons.length; i++) {
    //console.log("dislikeButtons.length", dislikeButtons.length)
    i_d = i;
    likeButtons[i_d].addEventListener('click', addLike)
}



////
function addLike(event) {
    // Added:
    console.log(button_clicks[i_d])

    var likeButtons = document.getElementsByClassName("like-button")
    console.log("dislikeButtons.length", likeButtons.length)


    console.log("i_d", i_d); // Remember: For loop adds one at end, so subtract one for correct element position.
    var like = (event.target).textContent;
    console.log(like)

    var button_txt = "Likes";
    for (var i = 0; i < 5; i++) {
        if (button_txt[i] !== like[i]) {
            return; // Checks if dislike button; else exit function
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

    // Check to see if any dislikes previously added using "button_clicks" object and element position (from "i_d" element position in for loop).
    var num_added_likes = button_clicks[i_d].clicked_likes;
    console.log("button_clicks[i_d].clicked_likes", button_clicks[i_d].clicked_likes);
    if (num_added_likes == 0) { // No previous likes
        num_likes++;
        (event.target).textContent = "Likes: " + num_likes;
        // Increment dislikes in object:
        button_clicks[i_d].clicked_likes++;
        // Now, check to see if there are any *dislikes* we placed on the post
        var num_added_dislikes = button_clicks[i_d].clicked_likes;
        if (num_added_dislikes == 1) {
            //
            // Come back to this
            //
        // num_likes-- // For now – late will be replaced
        // (event.target).textContent = "Likes: " + num_likes;
        }
    } else { // There is a previous like selected; we need to remove it
        num_likes--;
        (event.target).textContent = "Likes: " + num_likes;
        // Decrement dislikes in object:
        button_clicks[i_d].clicked_likes--;
    }
}


var dislikeButtons = document.getElementsByClassName("dislike-button")
console.log(dislikeButtons)
for (var i = 0; i < dislikeButtons.length; i++) {
    //console.log("dislikeButtons.length", dislikeButtons.length)
    i_d = i;
    dislikeButtons[i_d].addEventListener('click', addDislike)
}



////
function addDislike(event) {
    var dislikeButtons = document.getElementsByClassName("dislike-button")
    console.log("dislikeButtons.length", dislikeButtons.length)


    console.log("i_d", i_d); // Remember: For loop adds one at end, so subtract one for correct element position.
    var dislike = (event.target).textContent;
    console.log(dislike)

    var button_txt = "Dislikes";
    for (var i = 0; i < 8; i++) {
        if (button_txt[i] !== dislike[i]) {
            return; // Checks if dislike button; else exit function
        }
    }

    // Loop to get the number after the "Like: " in the like button.
    var str_dislike = String(dislike);
    var str_num = "";
    for (var i = str_dislike.length - 1; i >= 0; i--) {
        if (str_dislike[i] == " ") {
            break;
        }
        str_num += str_dislike[i];
    }
    var num_dislikes = "";
    for (var i = str_num.length - 1; i >= 0; i--) {
        num_dislikes += str_num[i];
    }

    // Check to see if any dislikes previously added using "button_clicks" object and element position (from "i_d" element position in for loop).
    var num_added_dislikes = button_clicks[i_d].clicked_dislikes;
    console.log(button_clicks[i_d].clicked_dislikes);
    if (num_added_dislikes == 0) { // No previous dislikes
        num_dislikes++;
        (event.target).textContent = "Dislikes: " + num_dislikes;
        // Increment dislikes in object:
        button_clicks[i_d].clicked_dislikes++;
        // Now, check to see if there are any *likes* we placed on the post
        var num_added_likes = button_clicks[i_d].clicked_likes;
        if (num_added_likes == 1) {
            //
            // Come back to this
            //
        // num_dislikes-- // For now – late will be replaced
        // (event.target).textContent = "Dislikes: " + num_dislikes;
        }
    } else { // There is a previous dislike selected; we need to remove it
        num_dislikes--;
        (event.target).textContent = "Dislikes: " + num_dislikes;
        // Decrement dislikes in object:
        button_clicks[i_d].clicked_dislikes--;
    }
}

/*
function addDislike() {
   var dislike = document.getElementById("like-button").textContent;
   var str_dislike = String(dislike);
} */




function toggleModal() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById("post-date-input").value = ""
    document.getElementById("post-text-input").value = ""
    document.getElementById("modal-backdrop").classList.toggle("hidden")
    document.getElementById("post-something-modal").classList.toggle("hidden")
}



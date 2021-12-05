document.getElementById("post-button").addEventListener("click", toggleModal)
document.getElementById("modal-close").addEventListener("click", toggleModal)
document.getElementById("modal-cancel").addEventListener("click", toggleModal)

function toggleModal() {
  /*  document.getElementById("post-text-input").value = ""
    document.getElementById("post-photo-input").value = ""
    document.getElementById("post-price-input").value = ""
    document.getElementById("post-city-input").value = ""
    document.getElementById("post-condition-new").checked = true */
    document.getElementById("modal-backdrop").classList.toggle("hidden")
    document.getElementById("post-something-modal").classList.toggle("hidden")
}

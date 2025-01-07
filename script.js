const ratings = document.querySelectorAll(".ratings")
const ratingsCont = document.querySelector(".ratings-container")
const sendBtn = document.getElementById("send")
const card = document.getElementById("card")

let selectedRating = "Satisfied"

ratingsCont.addEventListener("click", (e) => {
    if(e.target.parentNode.classList.contains("ratings")) {
        ratings.forEach((rating) => rating.classList.remove("active"))
        e.target.parentNode.classList.add("active")
        selectedRating = e.target.parentNode.innerText.trim()
    }
})

sendBtn.addEventListener("click", () => {
    if(selectedRating === "Satisfied") {
        card.innerHTML = `
            <i class="fas fa-heart"></i>
            <strong>Thank You!</strong>
            <br>
            <strong>Feedback: ${selectedRating}</strong>
            <p>We're so glad you're satisfied with our customer support! <br> Thank you for being a valued customer!</p>
        `;
    } else if(selectedRating === "Unhappy") {
            card.innerHTML = `
                <i class="fas fa-heart"></i>
                <strong>Thank You!</strong>
                <br>
                <strong>Feedback: ${selectedRating}</strong>
                <p>We're sorry our customer support left you unhappy <br> We'll use your feedback to improve our customer support.</p>
            `;
    } else {
        card.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
    `;
    }
})

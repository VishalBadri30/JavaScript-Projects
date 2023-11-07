const stars = document.querySelectorAll(".stars i");
console.log(stars);

stars.forEach((star, index1) => {
    // console.log(star);
    // console.log(index1);
    star.addEventListener("click", () => {
        // stars.classList.add("active");
        stars.forEach((star, index2) => {
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
        })
    })
})
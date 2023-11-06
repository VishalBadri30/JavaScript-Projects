const gameContainer = document.querySelector(".container"),
    userResult = document.querySelector(".user_result img"),
    cpuResult = document.querySelector(".cpu_result img"),
    res = document.querySelector(".res"),
    optionImages = document.querySelectorAll(".option_image");
console.log(gameContainer, userResult, cpuResult, res, optionImages);

optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        userResult.src = cpuResult.src = "images/rock.png";
        res.textContent = "Wait..."

    // Loop through each option again
        optionImages.forEach((image2, index2) => {
            // console.log(index, index2);
            // if(index !== index2){
            //     image2.classList.remove("active");
            // } 
            index !== index2 && image2.classList.remove("active");
        })


        gameContainer.classList.add("start");
        
        
        let time = setTimeout(() => {

            gameContainer.classList.remove("start"); 

        // start --> 1 setting userResult image
            let imageSrc = e.target.querySelector("img").src;
            userResult.src = imageSrc;

        // 2 setting cpuResult image
            let randomNumber = Math.floor(Math.random() * 3);
            // console.log(random)
            let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
            cpuResult.src = cpuImages[randomNumber];

        // 3 assigning a letter value to the CPU option
            let cpuValue = ["R", "P", "S"][randomNumber];

        // 4 assigning a letter value to the User option
            let userValue = ["R", "P", "S"][index];

        // 5 object with all possible outcomes
            let outcomes = {
                RR: "DRAW",
                PP: "DRAW",
                SS: "DRAW",

                RP: "CPU",
                RS: "USER",

                PR: "USER",
                PS: "CPU",

                SR: "CPU",
                SP: "USER"
            };

            let outcomeValue = outcomes[userValue + cpuValue];

            res.textContent = userValue === cpuValue ? "DRAW" : `${outcomeValue} wins`;
        }, 2500)

    })
})


const ratingArea = document.querySelectorAll('.card-rating_num');
const ratingText = document.querySelectorAll('.text');
const btn = document.querySelector('.btn');
const ratingCard = document.querySelector('.card');
const thankYouCard = document.querySelector('.thank-card');
const selectedRateArea = document.querySelector('.card-select_text span');



for (let i = 0; i < ratingArea.length; i++) {
    const selectedArea = ratingArea[i];
    const selectedAreaText = ratingText[i];
    
    selectedArea.addEventListener('click', () => {
        let ratingValue = ratingText[i];

        initializingRating();       
        
        selectedArea.classList.toggle("active");
        selectedAreaText.classList.toggle("active");
        
        btn.addEventListener('click', () => {
            
            if (ratingValue.classList[1] == "active") {
                thankYouCard.classList.toggle("hide");
                ratingCard.classList.toggle("hide");
                console.log(ratingValue);
                selectedRateArea.innerHTML = `${ratingValue.innerHTML}`;
            }
        })
    })

}


function initializingRating() {
    for (let j = 0; j < ratingArea.length; j++) {
        const ratingAreaInit = ratingArea[j];
        const ratingTextInit = ratingText[j];
        ratingAreaInit.classList.remove("active");
        ratingTextInit.classList.remove("active");
    }
}


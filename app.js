const fullImg = document.querySelector(".full-img");
const smallImg = document.querySelectorAll(".gallery img");
const modal = document.querySelector(".modal");

smallImg.forEach(function (img) {
    img.addEventListener("click", function () {
      const pictureNumber = img.getAttribute("alt");
        modal.classList.add("open");
        
        //changing images
        
        fullImg.src = `img/full/${pictureNumber}.jpg`;
        fullImg.classList.add("open");
    });
});

modal.addEventListener("click", function (e) {
    if (e.target.classList.contains("modal")) {
        modal.classList.remove("open");
        fullImg.classList.remove("open");
    };
})





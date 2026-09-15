/* =========================
   CREATE STARS
========================= */

const starsContainer = document.getElementById("stars");

for (let i = 0; i < 70; i++) {

    const star = document.createElement("div");

    star.classList.add("star");

    star.style.left =
        Math.random() * 100 + "%";

    star.style.top =
        Math.random() * 100 + "%";

    star.style.animationDelay =
        Math.random() * 4 + "s";

    star.style.animationDuration =
        2 + Math.random() * 4 + "s";

    starsContainer.appendChild(star);
}


/* =========================
   FLOWER BUTTON
========================= */

const loveButton =
    document.getElementById("loveButton");

const popup =
    document.getElementById("popup");

const closePopup =
    document.getElementById("closePopup");


loveButton.addEventListener(
    "click",
    () => {

        popup.classList.add("show");

    }
);


closePopup.addEventListener(
    "click",
    () => {

        popup.classList.remove("show");

    }
);


/* Close when clicking outside */

popup.addEventListener(
    "click",
    (event) => {

        if (event.target === popup) {

            popup.classList.remove("show");

        }

    }
);


/* =========================
   LITTLE FLOATING HEARTS
========================= */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.innerHTML = "♡";

    heart.style.position = "fixed";

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.bottom = "-30px";

    heart.style.fontSize =
        12 + Math.random() * 15 + "px";

    heart.style.color =
        Math.random() > 0.5
            ? "#8ca8e8"
            : "#e7a9c1";

    heart.style.opacity = "0.7";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "10";

    document.body.appendChild(heart);


    const duration =
        5000 + Math.random() * 4000;


    heart.animate(
        [
            {
                transform:
                    "translateY(0) rotate(0deg)",
                opacity: 0
            },

            {
                transform:
                    "translateY(-35vh) rotate(20deg)",
                opacity: 0.7
            },

            {
                transform:
                    "translateY(-70vh) rotate(-20deg)",
                opacity: 0
            }
        ],
        {
            duration: duration,
            easing: "ease-out"
        }
    );


    setTimeout(
        () => {
            heart.remove();
        },
        duration
    );
}


/* Create hearts occasionally */

setInterval(
    createHeart,
    1800
);
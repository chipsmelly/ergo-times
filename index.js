let legal = false;
let research = false;
let industry = false;
let events = false;
let us = false;
let international = false;

let categoryFilter = false;
let locationFilter = false;

function refreshGrid( ) {

    for (i = 0; document.querySelectorAll(".grid .cell-outer").length; i++) {
        if(categoryFilter === true) {
            if (legal === true && document.querySelectorAll(".grid .cell-outer")[i].classList.contains("legal") === true) {
                document.querySelectorAll(".grid .cell-outer")[i].style.display = "flex";
            } else if (research === true && document.querySelectorAll(".grid .cell-outer")[i].classList.contains("research") === true) {
                document.querySelectorAll(".grid .cell-outer")[i].style.display = "flex";
            } else if (industry === true && document.querySelectorAll(".grid .cell-outer")[i].classList.contains("industry") === true) {
                document.querySelectorAll(".grid .cell-outer")[i].style.display = "flex";
            } else if (events === true && document.querySelectorAll(".grid .cell-outer")[i].classList.contains("events") === true) {
                document.querySelectorAll(".grid .cell-outer")[i].style.display = "flex";
            } else {
                document.querySelectorAll(".grid .cell-outer")[i].style.display = "none";
                continue;
            }
    
            if (locationFilter === true) {
                if (us === true && document.querySelectorAll(".grid .cell-outer")[i].classList.contains("us") === false) {
                    document.querySelectorAll(".grid .cell-outer")[i].style.display = "none";
                    
                } else if (international === true && document.querySelectorAll(".grid .cell-outer")[i].classList.contains("international") === false) {
                    document.querySelectorAll(".grid .cell-outer")[i].style.display = "none";
                }
            }
        }
        else {
            document.querySelectorAll(".grid .cell-outer")[i].style.display = "flex";

            if (locationFilter === true) {
                if (us === true && document.querySelectorAll(".grid .cell-outer")[i].classList.contains("us") === false) {
                    document.querySelectorAll(".grid .cell-outer")[i].style.display = "none";
                    
                } else if (international === true && document.querySelectorAll(".grid .cell-outer")[i].classList.contains("international") === false) {
                    document.querySelectorAll(".grid .cell-outer")[i].style.display = "none";
                }
            }
        }    
    }
}

document.querySelector("#legal-button").addEventListener("click", function () {
    if (legal === false) {

        legal = true;
        document.querySelector("#legal-button").style.backgroundColor = "limegreen";

        if (categoryFilter === false) {
            categoryFilter = true;
        }

    } else {
        
        legal = false;
        document.querySelector("#legal-button").style.backgroundColor = "white";

        if (research === false && events === false && industry === false) {
            categoryFilter = false;
        }

    }

    refreshGrid();
    
} );

document.querySelector("#research-button").addEventListener("click", function () {
    if (research === false) {

        research = true;
        document.querySelector("#research-button").style.backgroundColor = "limegreen";

        if (categoryFilter === false) {
            categoryFilter = true;
        }

    } else {

        research = false;
        document.querySelector("#research-button").style.backgroundColor = "white";

        if (legal === false && events === false && industry === false) {
            categoryFilter = false;
        }

    }

    refreshGrid();
    
} );


document.querySelector("#industry-button").addEventListener("click", function () {
    if (industry === false) {

        industry = true;
        document.querySelector("#industry-button").style.backgroundColor = "limegreen";

        if (categoryFilter === false) {
            categoryFilter = true;
        }

    } else {

        industry = false;
        document.querySelector("#industry-button").style.backgroundColor = "white";

        if (research === false && events === false && industry === false) {
            categoryFilter = false;
        }

    }

    refreshGrid();
    
} );

document.querySelector("#events-button").addEventListener("click", function () {
    if (events === false) {

        events = true;
        document.querySelector("#events-button").style.backgroundColor = "limegreen";

        if (categoryFilter === false) {
            categoryFilter = true;
        }
        
    } else {

        events = false;
        document.querySelector("#events-button").style.backgroundColor = "white";

        if (research === false && events === false && industry === false) {
            categoryFilter = false;
        }

    }

    refreshGrid();
    
} );



document.querySelector("#us-button").addEventListener("click", function () {
    if (us === false) {

        us = true;
        document.querySelector("#us-button").style.backgroundColor = "limegreen";

        if (international === true) {

            international = false;
            document.querySelector("#international-button").style.backgroundColor = "white";

        } else {

            locationFilter = true;

        }

    } else {

        us = false;
        document.querySelector("#us-button").style.backgroundColor = "white";
        locationFilter = false;
    }

    refreshGrid();

} );

document.querySelector("#international-button").addEventListener("click", function () {
    if (international === false) {

        international = true;
        document.querySelector("#international-button").style.backgroundColor = "limegreen";
        
        if (us === true) {

            us = false;
            document.querySelector("#us-button").style.backgroundColor = "white";
        } else {

            locationFilter = true;

        }

    } else {

        international = false;
        document.querySelector("#international-button").style.backgroundColor = "white";
        locationFilter = false;
    }

    refreshGrid();

} );


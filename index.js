let legal = false;
let research = false;
let industry = false;
let events = false;
let us = false;
let international = false;

let categoryFilter = false;
let locationFilter = false;



document.querySelector("#legal-button").addEventListener("click", function () {
    if (legal === false) {

        if (categoryFilter === false) {
            for (i = 0; i < document.querySelectorAll(".grid .cell-outer").length; i++) {
                document.querySelectorAll(".grid .cell-outer")[i].style.display = "none";
            }
            categoryFilter = true;
        }

        for (i = 0; i < document.querySelectorAll(".grid .cell-outer").length; i++) {
            if (document.querySelectorAll(".grid .cell-outer")[i].classList.contains("legal") === true) {
                document.querySelectorAll(".grid .cell-outer")[i].style.display = "flex";
            }
        }

        legal = true;
        document.querySelector("#legal-button").style.backgroundColor = "limegreen";

    } else {

        if (research === true || industry === true || events === true) {

            for (i = 0; i < document.querySelectorAll(".grid .cell-outer").length; i++) {
                if (document.querySelectorAll(".grid .cell-outer")[i].classList.contains("legal") === true) {
                    document.querySelectorAll(".grid .cell-outer")[i].style.display = "none";
                }
            }

        } else {

            for (i = 0; i < document.querySelectorAll(".grid .cell-outer").length; i++) {
                document.querySelectorAll(".grid .cell-outer")[i].style.display = "flex";
            }

            categoryFilter = false;

        }
        
        legal = false;
        document.querySelector("#legal-button").style.backgroundColor = "white";
    }
    
} );

document.querySelector("#research-button").addEventListener("click", function () {
    if (research === false) {

        if (categoryFilter === false) {
            for (i = 0; i < document.querySelectorAll(".grid .cell-outer").length; i++) {
                document.querySelectorAll(".grid .cell-outer")[i].style.display = "none";
            }
            categoryFilter = true;
        }

        for (i = 0; i < document.querySelectorAll(".grid .cell-outer").length; i++) {
            if (document.querySelectorAll(".grid .cell-outer")[i].classList.contains("research") === true) {
                document.querySelectorAll(".grid .cell-outer")[i].style.display = "flex";
            }
        }

        research = true;
        document.querySelector("#research-button").style.backgroundColor = "limegreen";

    } else {

        if (legal === true || industry === true || events === true) {

            for (i = 0; i < document.querySelectorAll(".grid .cell-outer").length; i++) {
                if (document.querySelectorAll(".grid .cell-outer")[i].classList.contains("research") === true) {
                    document.querySelectorAll(".grid .cell-outer")[i].style.display = "none";
                }
            }

        } else {

            for (i = 0; i < document.querySelectorAll(".grid .cell-outer").length; i++) {
                document.querySelectorAll(".grid .cell-outer")[i].style.display = "flex";
            }
            
            categoryFilter = false;

        }
        
        research = false;
        document.querySelector("#research-button").style.backgroundColor = "white";
    }
    
} );


document.querySelector("#industry-button").addEventListener("click", function () {
    if (industry === false) {

        if (categoryFilter === false) {
            for (i = 0; i < document.querySelectorAll(".grid .cell-outer").length; i++) {
                document.querySelectorAll(".grid .cell-outer")[i].style.display = "none";
            }
            categoryFilter = true;
        }

        for (i = 0; i < document.querySelectorAll(".grid .cell-outer").length; i++) {
            if (document.querySelectorAll(".grid .cell-outer")[i].classList.contains("industry") === true) {
                document.querySelectorAll(".grid .cell-outer")[i].style.display = "flex";
            }
        }

        industry = true;
        document.querySelector("#industry-button").style.backgroundColor = "limegreen";

    } else {

        if (legal === true || research === true || events === true) {

            for (i = 0; i < document.querySelectorAll(".grid .cell-outer").length; i++) {
                if (document.querySelectorAll(".grid .cell-outer")[i].classList.contains("industry") === true) {
                    document.querySelectorAll(".grid .cell-outer")[i].style.display = "none";
                }
            }

        } else {

            for (i = 0; i < document.querySelectorAll(".grid .cell-outer").length; i++) {
                document.querySelectorAll(".grid .cell-outer")[i].style.display = "flex";
            }
            
            categoryFilter = false;

        }
        
        industry = false;
        document.querySelector("#industry-button").style.backgroundColor = "white";
    }
    
} );

document.querySelector("#events-button").addEventListener("click", function () {
    if (events === false) {

        if (categoryFilter === false) {
            for (i = 0; i < document.querySelectorAll(".grid .cell-outer").length; i++) {
                document.querySelectorAll(".grid .cell-outer")[i].style.display = "none";
            }
            categoryFilter = true;
        }

        for (i = 0; i < document.querySelectorAll(".grid .cell-outer").length; i++) {
            if (document.querySelectorAll(".grid .cell-outer")[i].classList.contains("events") === true) {
                document.querySelectorAll(".grid .cell-outer")[i].style.display = "flex";
            }
        }

        events = true;
        document.querySelector("#events-button").style.backgroundColor = "limegreen";

    } else {

        if (legal === true || research === true || industry === true) {

            for (i = 0; i < document.querySelectorAll(".grid .cell-outer").length; i++) {
                if (document.querySelectorAll(".grid .cell-outer")[i].classList.contains("events") === true) {
                    document.querySelectorAll(".grid .cell-outer")[i].style.display = "none";
                }
            }

        } else {

            for (i = 0; i < document.querySelectorAll(".grid .cell-outer").length; i++) {
                document.querySelectorAll(".grid .cell-outer")[i].style.display = "flex";
            }
            
            categoryFilter = false;

        }
        
        events = false;
        document.querySelector("#events-button").style.backgroundColor = "white";
    }
    
} );



document.querySelector("#us-button").addEventListener("click", function () {
    if (us === false) {

        if (international === true) {



            international = false;
            document.querySelector("#international-button").style.backgroundColor = "white";
        }

        // if (categoryFilter === true) {

        //     for (i = 0; i < document.querySelectorAll(".grid .cell-outer").length; i++) {

        //         if (document.querySelectorAll(".grid .cell-outer")[i].classList.contains("international") === true) {
        //             document.querySelectorAll(".grid .cell-outer")[i].style.display = "none";
        //         }

        //     }

        // } else {



        // }

        us = true;
        document.querySelector("#us-button").style.backgroundColor = "limegreen";

    } else {

        
        
        us = false;
        document.querySelector("#us-button").style.backgroundColor = "white";
    }
} );

document.querySelector("#international-button").addEventListener("click", function () {
    if (international === false) {

        if (us === true) {



            us = false;
            document.querySelector("#us-button").style.backgroundColor = "white";
        }

        

        international = true;
        document.querySelector("#international-button").style.backgroundColor = "limegreen";

    } else {

        
        
        international = false;
        document.querySelector("#international-button").style.backgroundColor = "white";
    }
} );


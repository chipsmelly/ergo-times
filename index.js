

const template = document.querySelector("[grid-template]")
const cardContainer = document.querySelector("[card-container]")
const searchInput = document.querySelector("[search]")
const legalButton = document.querySelector("#legal-button")
const researchButton = document.querySelector("#research-button")
const industryButton = document.querySelector("#industry-button")
const eventsButton = document.querySelector("#events-button")
const usButton = document.querySelector("#us-button")
const internationalButton = document.querySelector("#international-button")

let articles = []

let legal = false;
let research = false;
let industry = false;
let events = false;
let us = false;
let international = false;

let categoryFilter = false;
let locationFilter = false;

let searchValue = "";



fetch("./articles.json")
.then(res => res.json())
.then(data => {
    articles = data.map(article => {
        const card = template.content.cloneNode(true).children[0]
        const logo = card.querySelector("[cell-logo]")
        const categoryTag = card.querySelector("[category-tag]")
        const locationTag = card.querySelector("[location-tag]")
        const title = card.querySelector("[cell-title]")

        logo.src = article.image
        categoryTag.textContent = article.category
        const catClass = article.category.toLowerCase()
        categoryTag.classList.add(catClass)
        locationTag.textContent = article.location 
        const locClass = article.location.toLowerCase()
        locationTag.classList.add(locClass)
        title.textContent = article.title 

        cardContainer.append(card)
        return { image: article.image, category: article.category, location: article.location, title: article.title, element: card }
    })
})



legalButton.addEventListener("click", function () {
    if (legal === false) {

        legal = true;
        activateButton(legalButton)

        if (categoryFilter === false) {
            categoryFilter = true;
        }

    } else {
        
        legal = false;
        deactivateButton(legalButton)

        if (research === false && events === false && industry === false) {
            categoryFilter = false;
        }

    }

    refreshGrid()
} )

legalButton.addEventListener("mouseover", () => {
    if (legal === true) {
        legalButton.style.backgroundColor = "#218221"
    } else {
        legalButton.style.backgroundColor = "#242424"
    }
})

legalButton.addEventListener("mouseout", () => {
    if (legal === true) {
        legalButton.style.backgroundColor = "limegreen"
    } else {
        legalButton.style.backgroundColor = "#353535"
    }
})

researchButton.addEventListener("click", function () {
    if (research === false) {

        research = true;
        activateButton(researchButton)

        if (categoryFilter === false) {
            categoryFilter = true;
        }

    } else {

        research = false;
        deactivateButton(researchButton)

        if (legal === false && events === false && industry === false) {
            categoryFilter = false;
        }

    }

    refreshGrid()
} )

researchButton.addEventListener("mouseover", () => {
    if (research === true) {
        researchButton.style.backgroundColor = "#218221"
    } else {
        researchButton.style.backgroundColor = "#242424"
    }
})

researchButton.addEventListener("mouseout", () => {
    if (research === true) {
        researchButton.style.backgroundColor = "limegreen"
    } else {
        researchButton.style.backgroundColor = "#353535"
    }
})

industryButton.addEventListener("click", function () {
    if (industry === false) {

        industry = true;
        activateButton(industryButton)

        if (categoryFilter === false) {
            categoryFilter = true;
        }

    } else {

        industry = false;
        deactivateButton(industryButton)

        if (research === false && events === false && industry === false) {
            categoryFilter = false;
        }

    }

    refreshGrid()
} )

industryButton.addEventListener("mouseover", () => {
    if (industry === true) {
        industryButton.style.backgroundColor = "#218221"
    } else {
        industryButton.style.backgroundColor = "#242424"
    }
})

industryButton.addEventListener("mouseout", () => {
    if (industry === true) {
        industryButton.style.backgroundColor = "limegreen"
    } else {
        industryButton.style.backgroundColor = "#353535"
    }
})

eventsButton.addEventListener("click", function () {
    if (events === false) {

        events = true;
        activateButton(eventsButton)

        if (categoryFilter === false) {
            categoryFilter = true;
        }
        
    } else {

        events = false;
        deactivateButton(eventsButton)

        if (research === false && events === false && industry === false) {
            categoryFilter = false;
        }

    }

    refreshGrid()
} )

eventsButton.addEventListener("mouseover", () => {
    if (events === true) {
        eventsButton.style.backgroundColor = "#218221"
    } else {
        eventsButton.style.backgroundColor = "#242424"
    }
})

eventsButton.addEventListener("mouseout", () => {
    if (events === true) {
        eventsButton.style.backgroundColor = "limegreen"
    } else {
        eventsButton.style.backgroundColor = "#353535"
    }
})

usButton.addEventListener("click", function () {
    if (us === false) {

        us = true;
        activateButton(usButton)

        if (international === true) {
            international = false
            deactivateButton(internationalButton)
        } else {
            locationFilter = true
        }

    } else {
        us = false;
        deactivateButton(usButton)
        locationFilter = false
    }

    refreshGrid()
} )

usButton.addEventListener("mouseover", () => {
    if (us === true) {
        usButton.style.backgroundColor = "#218221"
    } else {
        usButton.style.backgroundColor = "#242424"
    }
})

usButton.addEventListener("mouseout", () => {
    if (us === true) {
        usButton.style.backgroundColor = "limegreen"
    } else {
        usButton.style.backgroundColor = "#353535"
    }
})

internationalButton.addEventListener("click", function () {
    if (international === false) {

        international = true
        activateButton(internationalButton)
        
        if (us === true) {
            us = false
            deactivateButton(usButton)
        } else {
            locationFilter = true;
        }

    } else {
        international = false
        deactivateButton(internationalButton)
        locationFilter = false
    }

    refreshGrid()
} )

internationalButton.addEventListener("mouseover", () => {
    if (international === true) {
        internationalButton.style.backgroundColor = "#218221"
    } else {
        internationalButton.style.backgroundColor = "#242424"
    }
})

internationalButton.addEventListener("mouseout", () => {
    if (international === true) {
        internationalButton.style.backgroundColor = "limegreen"
    } else {
        internationalButton.style.backgroundColor = "#353535"
    }
})



searchInput.addEventListener("input", e => {
    searchValue = e.target.value.toLowerCase()

    refreshGrid()
})



function activateButton(button) {
    button.style.backgroundColor = "limegreen"
    button.style.color = "#353535";
}

function deactivateButton(button) {
    button.style.backgroundColor = "#353535"
    button.style.color = "white"
}

function refreshGrid() {

    articles.forEach(article => {
        let isVisible = false;

        if (article.title.toLowerCase().includes(searchValue)) {
            if (categoryFilter === true) {
                if (legal === true && article.category.toLowerCase().includes("legal")) {
                    isVisible = true
                } else if (research === true && article.category.toLowerCase().includes("research")) {
                    isVisible = true
                } else if (industry === true && article.category.toLowerCase().includes("industry")) {
                    isVisible = true
                } else if (events === true && article.category.toLowerCase().includes("events")) {
                    isVisible = true
                }
    
                if (locationFilter === true) {
                    if (us === true && !article.location.toLowerCase().includes("us")) {
                        isVisible = false
                    } else if (international === true && !article.location.toLowerCase().includes("international")) {
                        isVisible = false
                    }
                }
            } else {
                isVisible = true;
    
                if (locationFilter === true) {
                    if (us === true && !article.location.toLowerCase().includes("us")) {
                        isVisible = false
                    } else if (international === true && !article.location.toLowerCase().includes("international")) {
                        isVisible = false
                    }
                }
            }
        }

        article.element.classList.toggle("hide", !isVisible)
    })
}



const template = document.querySelector("[grid-template]")
const cardContainer = document.querySelector("[card-container]")

const filterButton = document.querySelector("[filter-button]")
const filterIcon = document.querySelector("[filter-icon]")
const filterWindow = document.querySelector("[filter-window]")
const searchButton = document.querySelector("[search-button]")
const searchIcon = document.querySelector("[search-icon]")
const searchWindow = document.querySelector("[search-window]")

const searchInput = document.querySelector("[search]")
const searchBox = document.querySelector("[search-box]")
const searchInputDrop = document.querySelector("[search-drop]")
const searchBoxDrop = document.querySelector("[search-box-drop]")

const legalButton = document.querySelector("#legal-button")
const legalButtonDrop = document.querySelector("#legal-button-drop")
const researchButton = document.querySelector("#research-button")
const researchButtonDrop = document.querySelector("#research-button-drop")
const industryButton = document.querySelector("#industry-button")
const industryButtonDrop = document.querySelector("#industry-button-drop")
const eventsButton = document.querySelector("#events-button")
const eventsButtonDrop = document.querySelector("#events-button-drop")
const usButton = document.querySelector("#us-button")
const usButtonDrop = document.querySelector("#us-button-drop")
const internationalButton = document.querySelector("#international-button")
const internationalButtonDrop = document.querySelector("#international-button-drop")








let articles = []

let filterDropOpen = false;
let searchDropOpen = false;

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
        const description = card.querySelector("[cell-description]")

        logo.src = article.image
        categoryTag.textContent = article.category
        const catClass = article.category.toLowerCase()
        categoryTag.classList.add(catClass)
        locationTag.textContent = article.location 
        const locClass = article.location.toLowerCase()
        locationTag.classList.add(locClass)
        title.textContent = article.title 

        description.textContent = article.description

        card.addEventListener("click", () => {
            card.classList.toggle('is-flipped')
        })
        cardContainer.append(card)
        return { image: article.image, category: article.category, location: article.location, title: article.title, description: article.description, element: card }
    })
})











filterButton.addEventListener("click", function () {
    if (filterDropOpen === false) {
        filterDropOpen = true
        filterWindow.classList.remove("hide")
        filterIcon.src = "./svg/funnel-gray.svg"
    } else {
        filterDropOpen = false
        filterWindow.classList.add("hide")
        filterIcon.src = "./svg/funnel-white.svg"
    }
})

searchButton.addEventListener("click", function () {
    if (searchDropOpen === false) {
        searchDropOpen = true
        searchWindow.classList.remove("hide")
        searchIcon.src = "./svg/search-gray.svg"
    } else {
        searchDropOpen = false
        searchWindow.classList.add("hide")
        searchIcon.src = "./svg/search-white.svg"
    }
})














legalButton.addEventListener("click", function () {
    if (legal === false) {

        legal = true;
        activateButton(legalButton)
        activateButton(legalButtonDrop)

        if (categoryFilter === false) {
            categoryFilter = true;
        }

    } else {
        
        legal = false;
        deactivateButton(legalButton)
        deactivateButton(legalButtonDrop)

        if (research === false && events === false && industry === false) {
            categoryFilter = false;
        }

    }

    refreshGrid()
} )

legalButtonDrop.addEventListener("click", function () {
    if (legal === false) {

        legal = true;
        activateButton(legalButtonDrop)
        activateButton(legalButton)

        if (categoryFilter === false) {
            categoryFilter = true;
        }

    } else {
        
        legal = false;
        deactivateButton(legalButtonDrop)
        deactivateButton(legalButton)

        if (research === false && events === false && industry === false) {
            categoryFilter = false;
        }

    }

    refreshGrid()
} )

researchButton.addEventListener("click", function () {
    if (research === false) {

        research = true;
        activateButton(researchButton)
        activateButton(researchButtonDrop)

        if (categoryFilter === false) {
            categoryFilter = true;
        }

    } else {

        research = false;
        deactivateButton(researchButton)
        deactivateButton(researchButtonDrop)

        if (legal === false && events === false && industry === false) {
            categoryFilter = false;
        }

    }

    refreshGrid()
} )

researchButtonDrop.addEventListener("click", function () {
    if (research === false) {

        research = true;
        activateButton(researchButtonDrop)
        activateButton(researchButton)

        if (categoryFilter === false) {
            categoryFilter = true;
        }

    } else {

        research = false;
        deactivateButton(researchButtonDrop)
        deactivateButton(researchButton)

        if (legal === false && events === false && industry === false) {
            categoryFilter = false;
        }

    }

    refreshGrid()
} )

industryButton.addEventListener("click", function () {
    if (industry === false) {

        industry = true;
        activateButton(industryButton)
        activateButton(industryButtonDrop)

        if (categoryFilter === false) {
            categoryFilter = true;
        }

    } else {

        industry = false;
        deactivateButton(industryButton)
        deactivateButton(industryButtonDrop)

        if (research === false && events === false && industry === false) {
            categoryFilter = false;
        }

    }

    refreshGrid()
} )

industryButtonDrop.addEventListener("click", function () {
    if (industry === false) {

        industry = true;
        activateButton(industryButtonDrop)
        activateButton(industryButton)

        if (categoryFilter === false) {
            categoryFilter = true;
        }

    } else {

        industry = false;
        deactivateButton(industryButtonDrop)
        deactivateButton(industryButton)

        if (research === false && events === false && industry === false) {
            categoryFilter = false;
        }

    }

    refreshGrid()
} )

eventsButton.addEventListener("click", function () {
    if (events === false) {

        events = true;
        activateButton(eventsButton)
        activateButton(eventsButtonDrop)

        if (categoryFilter === false) {
            categoryFilter = true;
        }
        
    } else {

        events = false;
        deactivateButton(eventsButton)
        deactivateButton(eventsButtonDrop)

        if (research === false && events === false && industry === false) {
            categoryFilter = false;
        }

    }

    refreshGrid()
} )

eventsButtonDrop.addEventListener("click", function () {
    if (events === false) {

        events = true;
        activateButton(eventsButtonDrop)
        activateButton(eventsButton)

        if (categoryFilter === false) {
            categoryFilter = true;
        }
        
    } else {

        events = false;
        deactivateButton(eventsButtonDrop)
        deactivateButton(eventsButton)

        if (research === false && events === false && industry === false) {
            categoryFilter = false;
        }

    }

    refreshGrid()
} )

usButton.addEventListener("click", function () {
    if (us === false) {

        us = true;
        activateButton(usButton)
        activateButton(usButtonDrop)

        if (international === true) {
            international = false
            deactivateButton(internationalButton)
            deactivateButton(internationalButtonDrop)
        } else {
            locationFilter = true
        }

    } else {
        us = false;
        deactivateButton(usButton)
        deactivateButton(usButtonDrop)

        locationFilter = false
    }

    refreshGrid()
} )

usButtonDrop.addEventListener("click", function () {
    if (us === false) {

        us = true;
        activateButton(usButtonDrop)
        activateButton(usButton)

        if (international === true) {
            international = false
            deactivateButton(internationalButtonDrop)
            deactivateButton(internationalButton)
        } else {
            locationFilter = true
        }

    } else {
        us = false;
        deactivateButton(usButtonDrop)
        deactivateButton(usButton)

        locationFilter = false
    }

    refreshGrid()
} )

internationalButton.addEventListener("click", function () {
    if (international === false) {

        international = true
        activateButton(internationalButton)
        activateButton(internationalButtonDrop)
        
        if (us === true) {
            us = false
            deactivateButton(usButton)
            deactivateButton(usButtonDrop)
        } else {
            locationFilter = true;
        }

    } else {
        international = false
        deactivateButton(internationalButton)
        deactivateButton(internationalButtonDrop)
        locationFilter = false
    }

    refreshGrid()
} )

internationalButtonDrop.addEventListener("click", function () {
    if (international === false) {

        international = true
        activateButton(internationalButtonDrop)
        activateButton(internationalButton)
        
        if (us === true) {
            us = false
            deactivateButton(usButtonDrop)
            deactivateButton(usButton)
        } else {
            locationFilter = true;
        }

    } else {
        international = false
        deactivateButton(internationalButtonDrop)        
        deactivateButton(internationalButton)

        locationFilter = false
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

legalButtonDrop.addEventListener("mouseover", () => {
    if (legal === true) {
        legalButtonDrop.style.backgroundColor = "#218221"
    } else {
        legalButtonDrop.style.backgroundColor = "#242424"
    }
})

legalButtonDrop.addEventListener("mouseout", () => {
    if (legal === true) {
        legalButtonDrop.style.backgroundColor = "limegreen"
    } else {
        legalButtonDrop.style.backgroundColor = "#353535"
    }
})

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

researchButtonDrop.addEventListener("mouseover", () => {
    if (research === true) {
        researchButtonDrop.style.backgroundColor = "#218221"
    } else {
        researchButtonDrop.style.backgroundColor = "#242424"
    }
})

researchButtonDrop.addEventListener("mouseout", () => {
    if (research === true) {
        researchButtonDrop.style.backgroundColor = "limegreen"
    } else {
        researchButtonDrop.style.backgroundColor = "#353535"
    }
})

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

industryButtonDrop.addEventListener("mouseover", () => {
    if (industry === true) {
        industryButtonDrop.style.backgroundColor = "#218221"
    } else {
        industryButtonDrop.style.backgroundColor = "#242424"
    }
})

industryButtonDrop.addEventListener("mouseout", () => {
    if (industry === true) {
        industryButtonDrop.style.backgroundColor = "limegreen"
    } else {
        industryButtonDrop.style.backgroundColor = "#353535"
    }
})

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

eventsButtonDrop.addEventListener("mouseover", () => {
    if (events === true) {
        eventsButtonDrop.style.backgroundColor = "#218221"
    } else {
        eventsButtonDrop.style.backgroundColor = "#242424"
    }
})

eventsButtonDrop.addEventListener("mouseout", () => {
    if (events === true) {
        eventsButtonDrop.style.backgroundColor = "limegreen"
    } else {
        eventsButtonDrop.style.backgroundColor = "#353535"
    }
})

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

usButtonDrop.addEventListener("mouseover", () => {
    if (us === true) {
        usButtonDrop.style.backgroundColor = "#218221"
    } else {
        usButtonDrop.style.backgroundColor = "#242424"
    }
})

usButtonDrop.addEventListener("mouseout", () => {
    if (us === true) {
        usButtonDrop.style.backgroundColor = "limegreen"
    } else {
        usButtonDrop.style.backgroundColor = "#353535"
    }
})

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

internationalButtonDrop.addEventListener("mouseover", () => {
    if (international === true) {
        internationalButtonDrop.style.backgroundColor = "#218221"
    } else {
        internationalButtonDrop.style.backgroundColor = "#242424"
    }
})

internationalButtonDrop.addEventListener("mouseout", () => {
    if (international === true) {
        internationalButtonDrop.style.backgroundColor = "limegreen"
    } else {
        internationalButtonDrop.style.backgroundColor = "#353535"
    }
})








searchInput.addEventListener("input", e => {

    console.log(e.target.value.toLowerCase())

    searchValue = e.target.value.toLowerCase()
    searchInputDrop.value = searchValue
    searchInput.value - searchValue

    refreshGrid()
})

searchInputDrop.addEventListener("input", e => {

    console.log(e.target.value.toLowerCase())

    searchValue = e.target.value.toLowerCase()
    searchInput.value = searchValue
    searchInputDrop.value = searchValue

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






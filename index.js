// Initializing variables

const template = document.querySelector("[grid-template]")
const grid = document.querySelector("[grid]")

const dropButton = document.querySelector("[drop-button]")
const dropImage = document.querySelector("[drop-image]")
const dropWindow = document.querySelector("[drop-window]")

const searchInput = document.querySelector("[search-input-lg]")
const searchBox = document.querySelector("[search-box-lg]")
const searchInputDrop = document.querySelector("[search-input-sm]")
const searchBoxDrop = document.querySelector("[search-box-sm]")

const legalButton = document.querySelector("[legal-button-lg]")
const legalButtonDrop = document.querySelector("[legal-button-sm]")
const researchButton = document.querySelector("[research-button-lg]")
const researchButtonDrop = document.querySelector("[research-button-sm]")
const industryButton = document.querySelector("[industry-button-lg]")
const industryButtonDrop = document.querySelector("[industry-button-sm]")
const eventsButton = document.querySelector("[events-button-lg]")
const eventsButtonDrop = document.querySelector("[events-button-sm]")
const usButton = document.querySelector("[us-button-lg]")
const usButtonDrop = document.querySelector("[us-button-sm]")
const internationalButton = document.querySelector("[international-button-lg]")
const internationalButtonDrop = document.querySelector("[international-button-sm]")


let articles = []

let isDropWindowOpen = false;

let searchValue = "";

let isAnyCategoryFilterActive = false;
let isLegalFilterActive = false;
let isResearchFilterActive = false;
let isIndustryFilterActive = false;
let isEventsFilterActive = false;

let isAnyLocationFilterActive = false;
let isUsFilterActive = false;
let isInternationalFilterActive = false;


// Using API to populate article data from JSON (fetch)

fetch("./articles.json")
    .then(res => res.json())
    .then(data => {
        articles = data.map(article => {

            const card = template.content.cloneNode(true).children[0]
            
            const image = card.querySelector("[card-image]")
            const category = card.querySelector("[category-tag]")
            const location = card.querySelector("[location-tag]")
            const title = card.querySelector("[card-title]")
            const source = card.querySelector("[card-source]")
            const date = card.querySelector("[card-date]")
            const summary = card.querySelector("[card-summary]")

            const linkFront = card.querySelector("[read-link-front]")
            const linkBack = card.querySelector("[read-link-back]")
            const buttonFront = card.querySelector("[flip-button-front]")
            const buttonBack= card.querySelector("[flip-button-back]")

            image.src = article.image

            category.textContent = article.category
            const categoryClass = article.category.toLowerCase()
            category.classList.add(categoryClass)


            location.textContent = article.location
            const locationClass = article.location.toLowerCase()
            location.classList.add(locationClass)

            title.textContent = article.title
            source.textContent = article.source
            date.textContent = article.date

            summary.textContent = article.summary

            linkFront.setAttribute("href", article.link)
            linkBack.setAttribute("href", article.link)



            buttonFront.addEventListener("click", () => {
                card.classList.toggle('is-flipped')

                if(!card.classList.contains('is-image-hidden')) {
                    setTimeout (() => {
                        card.classList.toggle('is-image-hidden')
                    }, 200)
                } else {
                    card.classList.toggle('is-image-hidden')
                }
            })

            buttonBack.addEventListener("click", () => {
                card.classList.toggle('is-flipped')

                if(!card.classList.contains('is-image-hidden')) {
                    setTimeout (() => {
                        card.classList.toggle('is-image-hidden')
                    }, 200)
                } else {
                    card.classList.toggle('is-image-hidden')
                }
            })



            grid.append(card)
            return { 
                image: article.image,
                category: article.category,
                location: article.location,
                title: article.title,
                source: article.source,
                date: article.date,
                summary: article.summary,
                link: article.link,
                element: card
            }
        })
    })

// Event listeners

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



dropButton.addEventListener("click", function () {
    if (isDropWindowOpen === false) {
        isDropWindowOpen = true
        dropWindow.classList.remove("hide")
        dropImage.src = "./svg/menu-gray.svg"
    } else {
        isDropWindowOpen = false
        dropWindow.classList.add("hide")
        dropImage.src = "./svg/menu-white.svg"
    }
})



legalButton.addEventListener("click", function () {
    if (isLegalFilterActive === false) {

        isLegalFilterActive = true;
        activateButton(legalButton)
        activateButton(legalButtonDrop)

        console.log(isLegalFilterActive)

        if (isAnyCategoryFilterActive === false) {
            isAnyCategoryFilterActive = true;
        }

    } else {
        
        isLegalFilterActive = false;
        deactivateButton(legalButton)
        deactivateButton(legalButtonDrop)

        console.log(isLegalFilterActive)

        if (isResearchFilterActive === false && isEventsFilterActive === false && isIndustryFilterActive === false) {
            isAnyCategoryFilterActive = false;
        }

    }

    refreshGrid()
} )

legalButtonDrop.addEventListener("click", function () {
    if (isLegalFilterActive === false) {

        isLegalFilterActive = true;
        activateButton(legalButtonDrop)
        activateButton(legalButton)

        if (isAnyCategoryFilterActive === false) {
            isAnyCategoryFilterActive = true;
        }

    } else {
        
        isLegalFilterActive = false;
        deactivateButton(legalButtonDrop)
        deactivateButton(legalButton)

        if (isResearchFilterActive === false && isEventsFilterActive === false && isIndustryFilterActive === false) {
            isAnyCategoryFilterActive = false;
        }

    }

    refreshGrid()
} )

researchButton.addEventListener("click", function () {
    if (isResearchFilterActive === false) {

        isResearchFilterActive = true;
        activateButton(researchButton)
        activateButton(researchButtonDrop)

        console.log(isResearchFilterActive)

        if (isAnyCategoryFilterActive === false) {
            isAnyCategoryFilterActive = true;
        }

    } else {

        isResearchFilterActive = false;
        deactivateButton(researchButton)
        deactivateButton(researchButtonDrop)

        console.log(isResearchFilterActive)

        if (isLegalFilterActive === false && isEventsFilterActive === false && isIndustryFilterActive === false) {
            isAnyCategoryFilterActive = false;
        }

    }

    refreshGrid()
} )

researchButtonDrop.addEventListener("click", function () {
    if (isResearchFilterActive === false) {

        isResearchFilterActive = true;
        activateButton(researchButtonDrop)
        activateButton(researchButton)

        if (isAnyCategoryFilterActive === false) {
            isAnyCategoryFilterActive = true;
        }

    } else {

        isResearchFilterActive = false;
        deactivateButton(researchButtonDrop)
        deactivateButton(researchButton)

        if (isLegalFilterActive === false && isEventsFilterActive === false && isIndustryFilterActive === false) {
            isAnyCategoryFilterActive = false;
        }

    }

    refreshGrid()
} )

industryButton.addEventListener("click", function () {
    if (isIndustryFilterActive === false) {

        isIndustryFilterActive = true;
        activateButton(industryButton)
        activateButton(industryButtonDrop)

        if (isAnyCategoryFilterActive === false) {
            isAnyCategoryFilterActive = true;
        }

    } else {

        isIndustryFilterActive = false;
        deactivateButton(industryButton)
        deactivateButton(industryButtonDrop)

        if (isResearchFilterActive === false && isEventsFilterActive === false && isIndustryFilterActive === false) {
            isAnyCategoryFilterActive = false;
        }

    }

    refreshGrid()
} )

industryButtonDrop.addEventListener("click", function () {
    if (isIndustryFilterActive === false) {

        isIndustryFilterActive = true;
        activateButton(industryButtonDrop)
        activateButton(industryButton)

        if (isAnyCategoryFilterActive === false) {
            isAnyCategoryFilterActive = true;
        }

    } else {

        isIndustryFilterActive = false;
        deactivateButton(industryButtonDrop)
        deactivateButton(industryButton)

        if (isResearchFilterActive === false && isEventsFilterActive === false && isIndustryFilterActive === false) {
            isAnyCategoryFilterActive = false;
        }

    }

    refreshGrid()
} )

eventsButton.addEventListener("click", function () {
    if (isEventsFilterActive === false) {

        isEventsFilterActive = true;
        activateButton(eventsButton)
        activateButton(eventsButtonDrop)

        if (isAnyCategoryFilterActive === false) {
            isAnyCategoryFilterActive = true;
        }
        
    } else {

        isEventsFilterActive = false;
        deactivateButton(eventsButton)
        deactivateButton(eventsButtonDrop)

        if (isResearchFilterActive === false && isEventsFilterActive === false && isIndustryFilterActive === false) {
            isAnyCategoryFilterActive = false;
        }

    }

    refreshGrid()
} )

eventsButtonDrop.addEventListener("click", function () {
    if (isEventsFilterActive === false) {

        isEventsFilterActive = true;
        activateButton(eventsButtonDrop)
        activateButton(eventsButton)

        if (isAnyCategoryFilterActive === false) {
            isAnyCategoryFilterActive = true;
        }
        
    } else {

        isEventsFilterActive = false;
        deactivateButton(eventsButtonDrop)
        deactivateButton(eventsButton)

        if (isResearchFilterActive === false && isEventsFilterActive === false && isIndustryFilterActive === false) {
            isAnyCategoryFilterActive = false;
        }

    }

    refreshGrid()
} )

usButton.addEventListener("click", function () {
    if (isUsFilterActive === false) {

        isUsFilterActive = true;
        activateButton(usButton)
        activateButton(usButtonDrop)

        if (isInternationalFilterActive === true) {
            isInternationalFilterActive = false
            deactivateButton(internationalButton)
            deactivateButton(internationalButtonDrop)
        } else {
            isAnyLocationFilterActive = true
        }

    } else {
        isUsFilterActive = false;
        deactivateButton(usButton)
        deactivateButton(usButtonDrop)

        isAnyLocationFilterActive = false
    }

    refreshGrid()
} )

usButtonDrop.addEventListener("click", function () {
    if (isUsFilterActive === false) {

        isUsFilterActive = true;
        activateButton(usButtonDrop)
        activateButton(usButton)

        if (isInternationalFilterActive === true) {
            isInternationalFilterActive = false
            deactivateButton(internationalButtonDrop)
            deactivateButton(internationalButton)
        } else {
            isAnyLocationFilterActive = true
        }

    } else {
        isUsFilterActive = false;
        deactivateButton(usButtonDrop)
        deactivateButton(usButton)

        isAnyLocationFilterActive = false
    }

    refreshGrid()
} )

internationalButton.addEventListener("click", function () {
    if (isInternationalFilterActive === false) {

        isInternationalFilterActive = true
        activateButton(internationalButton)
        activateButton(internationalButtonDrop)
        
        if (isUsFilterActive === true) {
            isUsFilterActive = false
            deactivateButton(usButton)
            deactivateButton(usButtonDrop)
        } else {
            isAnyLocationFilterActive = true;
        }

    } else {
        isInternationalFilterActive = false
        deactivateButton(internationalButton)
        deactivateButton(internationalButtonDrop)
        isAnyLocationFilterActive = false
    }

    refreshGrid()
} )

internationalButtonDrop.addEventListener("click", function () {
    if (isInternationalFilterActive === false) {

        isInternationalFilterActive = true
        activateButton(internationalButtonDrop)
        activateButton(internationalButton)
        
        if (isUsFilterActive === true) {
            isUsFilterActive = false
            deactivateButton(usButtonDrop)
            deactivateButton(usButton)
        } else {
            isAnyLocationFilterActive = true;
        }

    } else {
        isInternationalFilterActive = false
        deactivateButton(internationalButtonDrop)        
        deactivateButton(internationalButton)

        isAnyLocationFilterActive = false
    }

    refreshGrid()
} )

legalButton.addEventListener("mouseover", () => {
    mouseOver(legalButton, isLegalFilterActive)
})

legalButton.addEventListener("mouseout", () => {
    mouseOut(legalButton, isLegalFilterActive)
})

legalButtonDrop.addEventListener("mouseover", () => {
    mouseOver(legalButtonDrop, isLegalFilterActive)
})

legalButtonDrop.addEventListener("mouseout", () => {
    mouseOut(legalButtonDrop, isLegalFilterActive)
})

researchButton.addEventListener("mouseover", () => {
    mouseOver(researchButton, isResearchFilterActive)
})

researchButton.addEventListener("mouseout", () => {
    mouseOut(researchButton, isResearchFilterActive)
})

researchButtonDrop.addEventListener("mouseover", () => {
    mouseOver(researchButtonDrop, isResearchFilterActive)
})

researchButtonDrop.addEventListener("mouseout", () => {
    mouseOut(researchButtonDrop, isResearchFilterActive)
})

industryButton.addEventListener("mouseover", () => {
    mouseOver(industryButton, isIndustryFilterActive)
})

industryButton.addEventListener("mouseout", () => {
    mouseOut(industryButton, isIndustryFilterActive)
})

industryButtonDrop.addEventListener("mouseover", () => {
    mouseOver(industryButtonDrop, isIndustryFilterActive)
})

industryButtonDrop.addEventListener("mouseout", () => {
    mouseOut(industryButtonDrop, isIndustryFilterActive)
})

eventsButton.addEventListener("mouseover", () => {
    mouseOver(eventsButton, isEventsFilterActive)
})

eventsButton.addEventListener("mouseout", () => {
    mouseOut(eventsButton, isEventsFilterActive)
})

eventsButtonDrop.addEventListener("mouseover", () => {
    mouseOver(eventsButtonDrop, isEventsFilterActive)
})

eventsButtonDrop.addEventListener("mouseout", () => {
    mouseOut(eventsButtonDrop, isEventsFilterActive)
})

usButton.addEventListener("mouseover", () => {
    mouseOver(usButton, isUsFilterActive)
})

usButton.addEventListener("mouseout", () => {
    mouseOut(usButton, isUsFilterActive)
})

usButtonDrop.addEventListener("mouseover", () => {
    mouseOver(usButtonDrop, isUsFilterActive)
})

usButtonDrop.addEventListener("mouseout", () => {
    mouseOut(usButtonDrop, isUsFilterActive)
})

internationalButton.addEventListener("mouseover", () => {
    mouseOver(internationalButton, isInternationalFilterActive)
})

internationalButton.addEventListener("mouseout", () => {
    mouseOut(internationalButton, isInternationalFilterActive)
})

internationalButtonDrop.addEventListener("mouseover", () => {
    mouseOver(internationalButtonDrop, isInternationalFilterActive)
})

internationalButtonDrop.addEventListener("mouseout", () => {
    mouseOut(internationalButtonDrop, isInternationalFilterActive)
})









// Functions

function mouseOver(button, isFilterActive) {
    if (isFilterActive === true) {
        button.style.backgroundColor = "#272727"
    } else {
        button.style.backgroundColor = "#161616"
    }
}

function mouseOut(button, isFilterActive) {
    if (isFilterActive === true) {
        button.style.backgroundColor = "#161616"
    } else {
        button.style.backgroundColor = "#272727"
    }
}

function activateButton(button) {
    button.style.backgroundColor = "#161616"
}

function deactivateButton(button) {
    button.style.backgroundColor = "#272727"
}


function refreshGrid() {

    articles.forEach(article => {
        let isVisible = false;

        if (article.title.toLowerCase().includes(searchValue) || article.summary.toLowerCase().includes(searchValue)) {
            if (isAnyCategoryFilterActive === true) {
                if (isLegalFilterActive === true && article.category.toLowerCase().includes("legal")) {
                    isVisible = true
                } else if (isResearchFilterActive === true && article.category.toLowerCase().includes("research")) {
                    isVisible = true
                } else if (isIndustryFilterActive === true && article.category.toLowerCase().includes("industry")) {
                    isVisible = true
                } else if (isEventsFilterActive === true && article.category.toLowerCase().includes("events")) {
                    isVisible = true
                }
    
                if (isAnyLocationFilterActive === true) {
                    if (isUsFilterActive === true && !article.location.toLowerCase().includes("us")) {
                        isVisible = false
                    } else if (isInternationalFilterActive === true && !article.location.toLowerCase().includes("international")) {
                        isVisible = false
                    }
                }
            } else {
                isVisible = true;
    
                if (isAnyLocationFilterActive === true) {
                    if (isUsFilterActive === true && !article.location.toLowerCase().includes("us")) {
                        isVisible = false
                    } else if (isInternationalFilterActive === true && !article.location.toLowerCase().includes("international")) {
                        isVisible = false
                    }
                }
            }
        }

        article.element.classList.toggle("hide", !isVisible)
    })
}
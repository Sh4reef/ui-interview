(function() {
    "use strict";
    const menuicon = document.getElementsByClassName('menuicon')[0]
    const summary = document.getElementsByClassName('summary')[0]
    const main = document.getElementsByTagName('main')[0]
    const hero = document.getElementsByClassName('hero')[0]
    const overlay = document.createElement('div')
    overlay.classList.add('overlay')

    const renderSummaryContents = () => {
        if (summary.hasChildNodes) {
            Array.from(summary.children).forEach((child, i) => {
                setTimeout(() => {
                    child.classList.add('animate')
                }, 100 * (i + 1))
            })
        }
    }

    const toggleSummary = () => {
        if (!menuicon.classList.contains('menuicon-clicked')) {
            menuicon.classList.add('menuicon-clicked')
            summary.classList.remove('summary-collapsed')
            main.insertBefore(overlay, hero)
            setTimeout(() => {
                overlay.classList.add('animate')
            }, 100)
            renderSummaryContents()
        } else {
            menuicon.classList.remove('menuicon-clicked')
            summary.classList.add('summary-collapsed')
            overlay.classList.remove('animate')
            Array.from(summary.children).forEach((child, i) => {
                child.classList.remove('animate')
            })
        }
    }

    menuicon.addEventListener('click', (e) => {
        toggleSummary()
    })
})()
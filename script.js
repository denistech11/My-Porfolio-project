//defining variable to select the class panel
const panels = document.querySelectorAll('.panel')

//iterate over the panels using a for loop
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
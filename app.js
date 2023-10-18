// let contentContainer = document.querySelector('.content-creator');

// let customElements = (properties) => {
//     const elem = document.createElement(`${properties.element}`);

//     for(let i in properties){
//         elem[i] = properties[i];
//     }
//     return elem;
// }

// let buildHome = () => {

// }

// let buildMainStats = () => {
//     const skillsArr = ["Programming", "Frameworks", "Databases", "Tools", "Soft"]
//     let skills = customElements({
//         element: "section",
//         className: "skills"
//     })
//     skillsArr.forEach(item => {
//         console.log(item)
//         let skill = customElements({
//             element: "li",
//             className: "skill"
//         })
//         let name = customElements({
//             element: "h1",
//             textContent: `${item}`
//         })
//     })

// }

// let clearContent = () => {
//     contentContainer.innerHTML = "";
// }

// buildMainStats()
let home = document.querySelector('.home');
let mainStats = document.querySelector('.main');
let xp = document.querySelector('.xp');

let intro = document.querySelector('.intro')
let skills = document.querySelector('.skills');
let certifications = document.querySelector('.certifications');
let experience = document.querySelector('.experience');

home.addEventListener('click', () => {
    intro.classList.remove('hide')
    skills.classList.add('hide')
    certifications.classList.add('hide')
    experience.classList.add('hide')
})
mainStats.addEventListener('click', () => {
    intro.classList.add('hide')
    skills.classList.remove('hide')
    certifications.classList.remove('hide')
    experience.classList.add('hide')
})
xp.addEventListener('click', () => {
    intro.classList.add('hide')
    skills.classList.add('hide')
    certifications.classList.add('hide')
    experience.classList.remove('hide')
})
let buildHome = () => {
    intro.classList.remove('hide')
    skills.classList.add('hide')
    certifications.classList.add('hide')
    experience.classList.add('hide')
}


document.addEventListener('load', buildHome() )
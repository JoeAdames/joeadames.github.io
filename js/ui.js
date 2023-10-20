class UI {
    constructor(data) {
        this.socials = data.socials;
        this.selectors = data.selectors;
        this.skills = data.skills;
        this.certifications = data.Certifications;
        this.experience = data.Experience;
        
    }
    //build ui
    build() {
        const header = new Header(this.selectors);
        header.build();
        console.log('header');
        this.reset();
    }
    //reset ui
    reset(){
        const  home = ElementFactory.create({
            element: "h1",
            textContent: "Home."
        }) 
        let content = new Content(home);
        content.setContent(home);
    }

    skills() {
        const  skill = ElementFactory.create({
            element: "h1",
            textContent: "skills"
        }) 
        Content().setContent(skill);
    }
    skill() {
        const li = ElementFactory.create({
            element: "li",

        })
    }








    //Jobs Happening:
    //Content Setter - Sets which page content
    //SelectorHandler Manages selectors
    //Page Content - Sets content for a section

    // setPage(){
    //     // THIS NEEDS TO BE REWRITTEN

    //     const str = this.currentSelector.toString();
    //     if(str == "Home"){
    //        this.setHome();
    //     }
    //     if(str == "Skills"){
    //         this.setSkills();
    //     }
    //     if(str == "Certs"){
    //         this.setCerts();
    //     }
    //     if(str == "Xp"){
    //         this.setXp();
    //     }
          
    // }

    // setSelectors(){
    //     this.selectors.forEach(item => {
    //         const li = ElementFactory.create({
    //             element: "li",
    //             id: item,
    //             textContent: item,
    //         });
    //         li.addEventListener('click', (e) => {
    //             this.clearContent();
    //             this.currentSelector = e.target.id;
    //             this.setPage();
    //         })
    //         document.querySelector('.sidebar .buttons').appendChild(li);
    //     })
    // }

    // setHome() {
    //     const home = ElementFactory.create({
    //         element: "div",
    //         className: "home"  
    //     });
    //     const statement = ElementFactory.create({
    //         element: "div",
    //         className: "statement",
    //         textContent: "Hello, Welcome to my never finished resume, portfolio, website, whatever I am going to call it. My Name is Joe, and I am Software Engineer. I am going to build a cool app but i just need some bones in here. This is what we have for now and it took me 2 days. Fought with DNS, Layouts, building phony data, and plenty more. I need to connect with an actual designer to get a cool layout for this. I have some eventual ideas that will pull data in for when I finished and push a leetcode question or maybe some github components. Anyway, laterdude."
    //     })
    //     home.appendChild(statement);
    //     document.querySelector('.content-container').appendChild(home)

    //     // if(!home.classList.contains('selected')){
    //     //     this.clearSelected();
    //     //     home.classList.add('selected')
    //     // }
    // }

    // setSkills() {
    //     const skills = ElementFactory.create({
    //         element: "div",
    //         className: "things"
    //     });
    //     Object.keys(this.skills).forEach(item => {
    //         const skill = ElementFactory.create({
    //             element: "div",
    //             className: "thing glass"
    //         });
    //         const title = ElementFactory.create({
    //             element: "div",
    //             className: "big-text",
    //             textContent: item
    //         })
    //         const ul = ElementFactory.create({
    //             element: "ul"
    //         });
    //         this.skills[item].forEach(skill => {
    //             const li = ElementFactory.create({
    //                 element: "li",
    //                 textContent: skill
    //             })
    //             ul.appendChild(li);
    //         })
    //         skill.append(title, ul);
    //         skills.appendChild(skill);
    //     })
    //     document.querySelector('.content-container').appendChild(skills)
    // }

    // setCerts() {
    //     const certs = ElementFactory.create({
    //         element: "certs",
    //         className: "things"
    //     })
    //     Object.keys(this.certs).forEach(item => {
    //         // const link = ElementFactory.create({
    //         //     element: "a",
    //         //     className: "",
    //         //     href: this.certs[item].link
    //         // })
    //         const cert = ElementFactory.create({
    //             element:"div",
    //             className: "thing glass",
    //         })
    //         const name = ElementFactory.create({
    //             element: "div",
    //             className: "name",
    //             textContent: item
    //         });
    //         const provider = ElementFactory.create({
    //             element: "div",
    //             className: "provider",
    //             textContent: this.certs[item].From
    //         })
    //         const issueDate = ElementFactory.create({
    //             element: "div",
    //             className: "issueDate",
    //             textContent: this.certs[item].Date
    //         })
            
    //         cert.append(name, provider, issueDate)
    //         // link.appendChild(cert)
    //         certs.appendChild(cert);
    //     })

    //     document.querySelector('.content-container').appendChild(certs);

    // }

    // setXp() {
    //     const jobs = ElementFactory.create({
    //         element: "div",
    //         className: "things"
    //     }); 
    //     Object.keys(this.xp).forEach(item => {
    //         let job = ElementFactory.create({
    //             element: "div",
    //             className: "thing"
    //         })
    //         let credentials = ElementFactory.create({
    //             element: "div",
    //             className: "credentials"
    //         })
    //         let company = ElementFactory.create({
    //             element: "div",
    //             className: "company",
    //             textContent: item
    //         })
    //         let title = ElementFactory.create({
    //             element: "div",
    //             className: "title",
    //             textContent: this.xp[item].Title
    //         })
    //         let when = ElementFactory.create({
    //             element: "div",
    //             className: "when",
    //             textContent: this.xp[item].Start
    //         })
    //         let summary = ElementFactory.create({
    //             element: "div",
    //             className: "summary",
    //             textContent: this.xp[item].summary
    //         })
    //         credentials.append(company, title, when);
    //         job.append(credentials, summary);
    //         jobs.appendChild(job);
    //     })
    //     document.querySelector('.content-container').appendChild(jobs);
    // }

    // clearContent() {
    //     document.querySelector('.content-container').innerHTML = "";
    // }
    // clearSelected() {
    //     if(document.querySelector('.selected')){
    //         document.quertSelector('.selected').classList.remove('selected');
    //     }
    // }
}

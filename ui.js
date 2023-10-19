class UI {
    constructor() {
        this.selectors;
        this.xp;
        this.certs;
        this.skills;
        this.currentSelector;
    }

    customElements(properties) {
		const elem = document.createElement(`${properties.element}`);

		for(let i in properties){
			elem[i] = properties[i];
		}
		return elem;
	}

    setData(data){
        this.selectors = data.selectors;
        this.xp = data.Experience;
        this.certs = data.Certifications;
        this.skills = data.skills;
        
        this.setSelectors(this.selectors);
        this.setHome()
    }

    setPage(){
        // THIS NEEDS TO BE REWRITTEN

        const str = this.currentSelector.toString();
        if(str == "Home"){
           this.setHome();
        }
        if(str == "Skills"){
            this.setSkills();
        }
        if(str == "Certs"){
            this.setCerts();
        }
        if(str == "Xp"){
            this.setXp();
        }
          
    }

    setSelectors(){
        this.selectors.forEach(item => {
            const li = this.customElements({
                element: "li",
                id: item,
                textContent: item,
            });
            li.addEventListener('click', (e) => {
                this.clearContent();
                this.currentSelector = e.target.id;
                this.setPage();
            })
            document.querySelector('.sidebar .buttons').appendChild(li);
        })
    }

    setHome() {
        const home = this.customElements({
            element: "div",
            className: "home"  
        });
        const statement = this.customElements({
            element: "div",
            className: "statement",
            textContent: "Hello, Welcome to my never finished resume, portfolio, website, whatever I am going to call it. My Name is Joe, and I am Software Engineer. I am going to build a cool app but i just need some bones in here. This is what we have for now and it took me 2 days. Fought with DNS, Layouts, building phony data, and plenty more. I need to connect with an actual designer to get a cool layout for this. I have some eventual ideas that will pull data in for when I finished and push a leetcode question or maybe some github components. Anyway, laterdude."
        })
        home.appendChild(statement);
        document.querySelector('.content-container').appendChild(home)

        // if(!home.classList.contains('selected')){
        //     this.clearSelected();
        //     home.classList.add('selected')
        // }
    }

    setSkills() {
        const skills = this.customElements({
            element: "div",
            className: "things"
        });
        Object.keys(this.skills).forEach(item => {
            const skill = this.customElements({
                element: "div",
                className: "thing glass"
            });
            const title = this.customElements({
                element: "div",
                className: "big-text",
                textContent: item
            })
            const ul = this.customElements({
                element: "ul"
            });
            this.skills[item].forEach(skill => {
                const li = this.customElements({
                    element: "li",
                    textContent: skill
                })
                ul.appendChild(li);
            })
            skill.append(title, ul);
            skills.appendChild(skill);
        })
        document.querySelector('.content-container').appendChild(skills)
    }

    setCerts() {
        const certs = this.customElements({
            element: "certs",
            className: "things"
        })
        Object.keys(this.certs).forEach(item => {
            // const link = this.customElements({
            //     element: "a",
            //     className: "",
            //     href: this.certs[item].link
            // })
            const cert = this.customElements({
                element:"div",
                className: "thing glass",
            })
            const name = this.customElements({
                element: "div",
                className: "name",
                textContent: item
            });
            const provider = this.customElements({
                element: "div",
                className: "provider",
                textContent: this.certs[item].From
            })
            const issueDate = this.customElements({
                element: "div",
                className: "issueDate",
                textContent: this.certs[item].Date
            })
            
            cert.append(name, provider, issueDate)
            // link.appendChild(cert)
            certs.appendChild(cert);
        })

        document.querySelector('.content-container').appendChild(certs);

    }

    setXp() {
        const jobs = this.customElements({
            element: "div",
            className: "things"
        }); 
        Object.keys(this.xp).forEach(item => {
            let job = this.customElements({
                element: "div",
                className: "thing"
            })
            let credentials = this.customElements({
                element: "div",
                className: "credentials"
            })
            let company = this.customElements({
                element: "div",
                className: "company",
                textContent: item
            })
            let title = this.customElements({
                element: "div",
                className: "title",
                textContent: this.xp[item].Title
            })
            let when = this.customElements({
                element: "div",
                className: "when",
                textContent: this.xp[item].Start
            })
            let summary = this.customElements({
                element: "div",
                className: "summary",
                textContent: this.xp[item].summary
            })
            credentials.append(company, title, when);
            job.append(credentials, summary);
            jobs.appendChild(job);
        })
        document.querySelector('.content-container').appendChild(jobs);
    }

    clearContent() {
        document.querySelector('.content-container').innerHTML = "";
    }
    clearSelected() {
        if(document.querySelector('.selected')){
            document.quertSelector('.selected').classList.remove('selected');
        }
    }
}

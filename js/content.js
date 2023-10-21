class ContentSetter {
    constructor(dataHandler) {
      this.dataHandler = dataHandler;
      this.currentSelector;
    }
  
    setPage() {
      switch (this.currentSelector) {
        case 'Home':
          this.setHome();
          break;
        case 'Skills':
          this.setSkills();
          break;
        case 'Certifications':
          this.setCerts();
          break;
        case 'Experience':
          this.setXp();
          break;
        default:
          this.setPage(home);
          break;
        // ... others
      }
    }
  
    clearContent() {
      document.querySelector('.content-container').innerHTML = '';
    }
    setContent(content) {
      document.querySelector('.content-container').append(content)
    }
  
    setHome() {
      this.clearContent();
      const homeData = this.dataHandler.getHome();
      const home = ElementFactory.create({
        element: 'div',
        className: 'home grid align-center justify-center',
      });

      //Aboutme
      let userElement = this.setUser(homeData);

      //projects
      const projectsElement = this.setProjects(homeData.Projects);

      //contact in footer setFooter()
      
      home.append(userElement, projectsElement);
      this.setContent(home)
    }

    setUser(user) {
      const userCard = 
      ElementFactory.create({
        element: 'div',
        className: 'card grid justify-center',
      });
      const aliasSection = ElementFactory.create({
        element: 'div',
        className: 'avatar-holder grid-2 align-center',
        src: user.avatar
      });
      const alias = ElementFactory.create({
        element: 'h1',
        className: 'alias justify-end',
        textContent: user.alias
      });
      const avatar = ElementFactory.create({
        element: 'img',
        className: 'avatar round-img justift-start',
        src: user.avatar
      });
      aliasSection.append(alias, avatar);
      const statement = ElementFactory.create({
        element: 'h3',
        className: 'statement hidden-overflow',
        textContent: user.statement
      });
      userCard.append(aliasSection, statement)
      return userCard
    }

    setSocials() {
      const socials = this.dataHandler.getSocials();
      Object.keys(socials).forEach(social => {
        const link = ElementFactory.create({
          element: "a",
          className: social,
          href: socials[social].website
        })
        const name = ElementFactory.create({
          element: "li",
          textContent: social
        })
        link.append(name);
        document.querySelector('.socials').append(link)
      })
    }

    setProjects(projects) {
      const projectList = ElementFactory.create({
        element: "ul",
        className: ""
      });
      projects.forEach(project => {
        const projectItem = ElementFactory.create({
          element: "li",
          className: "",
          textContent: project
        });
        projectList.append(projectItem);
      });
      return projectList
    }
  
    setSkills() {
      const skills = this.dataHandler.getSkills();
      this.clearContent();
      
      const skillsCards = ElementFactory.create({
        element: 'div',
        className: 'skills-section grid-2',
      });
      Object.keys(skills).forEach((skill) => {
        const skillCard = ElementFactory.create({
          element: 'div',
          className: 'card',
        });
        const skillUl = ElementFactory.create({
          element: 'ul',
          className: 'skill list',
        });
        const skillTitle = ElementFactory.create({
          element: 'h3',
          textContent: skill
        })
        skills[skill].forEach(item => {
          const skillItem = ElementFactory.create({
            element: 'li',
            className:"small",
            textContent: item
          });
          skillUl.append(skillItem)
          skillCard.append(skillTitle, skillUl)
          skillsCards.append(skillCard);
        });
      });
      this.setContent(skillsCards);
    }

    setCerts() {
      this.clearContent();
      const certSection = ElementFactory.create({
        element: 'div',
        className: 'cert-section grid justify-center',
      });
      const certs = this.dataHandler.getCertifications();
      console.log(certs)

      Object.keys(certs).forEach(cert => {
        const certInfo = ElementFactory.create({
          element: "div",
          className: ""
        })
        const certCard = ElementFactory.create({
          element: "ul",
          className: "card grid-2 justify-center align-center"
        })
        const title = ElementFactory.create({
          element: "h3",
          className: "text-center",
          textContent: cert
        })
        const when = ElementFactory.create({
          element: "li",
          className: "text-center",
          textContent: certs[cert].Date
        })
        const from = ElementFactory.create({
          element: "li",
          className: "text-center ",
          textContent: certs[cert].From
        })
        const logo = ElementFactory.create({
          element: "div",
          className: ""
        })
        const logoLink = ElementFactory.create({
          element: "a",
          className: "grid justify-center",
          href: certs[cert].Website
        })
        const logoImg = ElementFactory.create({
          element: "img",
          src: certs[cert].Logo
        })
        logoLink.append(logoImg);
        logo.append(logoLink);
        certInfo.append(title, from, when); 
        certCard.append(certInfo, logo)
        certSection.append(certCard);
      })
      this.setContent(certSection)
    }

    setXp() {
      this.clearContent();
      const experienceSection = ElementFactory.create({
        element: 'div',
        className: 'experience-section',
      });
      const jobs = this.dataHandler.getExperience();

      Object.keys(jobs).forEach(job => {
        const jobCard = ElementFactory.create({
          element: "div",
          className: "card"
        })
        const title = ElementFactory.create({
          element: "div",
          className: "title",
          textContent: jobs[job].Title
        })
        const when = ElementFactory.create({
          element: "div",
          className: "when",
          textContent: jobs[job].Start
        })
        const company = ElementFactory.create({
          element: "h3",
          className: "company",
          textContent: job
        })
        const summary = ElementFactory.create({
          element: "p",
          className: "summary",
          textContent: jobs[job].summary
        })
        if(jobs[job].Projects){
          let projectContent = this.setProjects(jobs[job].Projects)
          jobCard.append(company, title, when, summary, projectContent); 
        } else {
          jobCard.append(company, title, when, summary);
        }
        experienceSection.append(jobCard);
      });
      this.setContent(experienceSection)
    }
  }
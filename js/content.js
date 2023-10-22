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
    const homeElementArr = [];
    const home = ElementFactory.create({
      element: 'div',
      className: 'home grid align-center justify-center',
    });

    //Aboutme
    let userElement = this.setUser(homeData);
    //contact in footer setFooter()
    home.append(userElement)
    this.setContent(home)
  }

  setUser(user) {
    const userCard =
      ElementFactory.create({
        element: 'div',
        className: 'grid justify-center',
      });
    const aliasSection = ElementFactory.create({
      element: 'div',
      className: 'avatar-holder grid-2 align-center justify-center',
      src: user.avatar
    });
    const alias = ElementFactory.create({
      element: 'h1',
      className: 'alias grid justify-center',
      textContent: user.alias
    });
    // const avatar = ElementFactory.create({
    //   element: 'img',
    //   className: 'avatar round-img justift-start hide-sm',
    //   src: user.avatar
    // });
    const projectsElement = this.setProjects(user.Projects);
    aliasSection.append(alias, projectsElement);
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
      element: "div",
      className: "grid hide-sm"
    });
    const titleHead = ElementFactory.create({
      element: "h2",
      className: "section-title",
      textContent: "Projects"
    });
    projectList.append(titleHead);
    Object.keys(projects).forEach(project => {
      const projectLink = ElementFactory.create({
        element: "a",
        className: "link",
        href: projects[project].website
      })
      const projectItem = ElementFactory.create({
        element: "div",
        className: "",
        textContent: project,
      });
      projectLink.append(projectItem)
      projectList.append(projectLink);
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
          className: "small",
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
      className: 'experience-section grid gap2',
    });
    const jobs = this.dataHandler.getExperience();

    Object.keys(jobs).forEach(job => {
      const jobCard = ElementFactory.create({
        element: "div",
        className: "job-card"
      });
      const jobCardElementArr = [];
      const company = ElementFactory.create({
        element: "div",
        className: "company grid align-center",
      });
      const companyName = ElementFactory.create({
        element: "h1",
        className: "company-name",
        textContent: job
      });
      const companyLink = ElementFactory.create({
        element: "a",
        className: "grid justify-center align-center",
        href: jobs[job].Links.website
      });
      const companyLogo = ElementFactory.create({
        element: "img",
        className: "company-logo round-img hide-sm",
        src: jobs[job].Links.Logo
      });
      const titleWhen = ElementFactory.create({
        element: "div",
        className: "grid"
      });
      const title = ElementFactory.create({
        element: "div",
        className: "title",
        textContent: jobs[job].Title
      });
      const when = ElementFactory.create({
        element: "div",
        className: "when",
        textContent: jobs[job].Start
      });
      titleWhen.append(title, when);
      const summary = ElementFactory.create({
        element: "p",
        className: "summary",
        textContent: jobs[job].summary
      });
      companyLink.append(companyLogo)
      company.append(companyName, titleWhen);
      const companyHeader = ElementFactory.create({
        element: "div",
        className: "company-header grid-2"
      });
      companyHeader.append(company, companyLink)
      jobCardElementArr.push(companyHeader, summary);
      if(jobs[job].references){
        const references = this.setRefs(jobs[job].references);
        jobCardElementArr.push(references);
      }
      if (jobs[job].Projects) {
        let projectContent = this.setProjects(jobs[job].Projects)
        jobCardElementArr.push(projectContent);
      }
      jobCardElementArr.forEach(item => {
        jobCard.append(item);
      })
      
      experienceSection.append(jobCard);
    });
    this.setContent(experienceSection)
  }
  setRefs(references) {
    const refHolder = ElementFactory.create({
      element: "div",
      className: "grid"
    });
    const titleHead = ElementFactory.create({
      element: "h2",
      className: "section-title",
      textContent: "References"
    });
    refHolder.append(titleHead);
    Object.keys(references).forEach(reference => {
      const refCard = ElementFactory.create({
        element:"div",
        className: "refCard"
      });
        const persona = ElementFactory.create({
            element: "div",
            className: "grid-2"
        });
        const from = ElementFactory.create({
          element:"h3",
          className: "from",
          textContent: references[reference].from
        })
        const title = ElementFactory.create({
          element:"h3",
          className: "title",
          textContent: references[reference].Title
        })
        const statement = ElementFactory.create({
          element:"p",
          className: "reference",
          textContent: references[reference].statement
        })
        persona.append(from, title);
        refCard.append(persona, statement)
        refHolder.append(refCard)
    })
    return refHolder
  }
}
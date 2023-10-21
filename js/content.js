class ContentSetter {
    constructor(dataHandler) {
      this.dataHandler = dataHandler;
      this.currentSelector;
    }
  
    setPage() {
      console.log(this.currentSelector)
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
  
      const home = ElementFactory.create({
        element: 'div',
        className: 'home',
      });
  
      const statement = ElementFactory.create({
        element: 'h1',
        className: 'statement',
        textContent: "Hello, My name is Joe and this is my resume."
      });
  
      home.appendChild(statement);
      this.setContent(home)
    }
  
    setSkills() {
      const skills = this.dataHandler.getSkills();
      this.clearContent();
      // looks the same as setHome, but for your skill section.
      // iterate through each of your skills
      
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
      // looks the same as setHome, but for your skill section.
      // iterate through each of your skills
      const certSection = ElementFactory.create({
        element: 'div',
        className: 'cert-section',
      });
      const certs = this.dataHandler.getCertifications();

      Object.keys(certs).forEach(cert => {
        const certCard = ElementFactory.create({
          element: "div",
          className: "card"
        })
        const title = ElementFactory.create({
          element: "h3",
          className: "",
          textContent: cert
        })
        const when = ElementFactory.create({
          element: "div",
          textContent: certs[cert].Date
        })
        const from = ElementFactory.create({
          element: "div",
          textContent: certs[cert].From
        })
        certCard.append(title, from, when); 
        certSection.append(certCard);
      })
      this.setContent(certSection)
    }

    setXp() {
      this.clearContent();
      // looks the same as setHome, but for your skill section.
      // iterate through each of your skills
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
        jobCard.append(company, title, when, summary); 
        experienceSection.append(jobCard);
      })
      this.setContent(experienceSection)
    }

    // setSocials() {
    //   const socials = this.dataHandler.getSocials();
    //   Object.keys(socials).forEach(social => {
    //     const link = ElementFactory.create({
    //       element: "a",
    //       className: social,
    //       href: socials[social].website
    //     })
    //     console.log(link)
    //     const name = ElementFactory.create({
    //       element: "li",
    //       textContent: social
    //     })
    //     link.append(name);
    //     document.querySelector('.socials').append(link)
    //   })
    // }
  }
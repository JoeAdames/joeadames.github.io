class DataHandler {
    constructor() {
        this.data = {};
    }
    
    loadData(data) {
        this.data = data;
    }
	getHome() {
		return this.data.home;
	}
    getSelectors() {
        return this.data.selectors;
    }

	getSkills() {
		return this.data.skills;
	}

	getCertifications() {
		return this.data.Certifications;
	}

	getExperience() {
		return this.data.Experience;
	}
	
	getSocials() {
		return this.data.socials;
	}
}
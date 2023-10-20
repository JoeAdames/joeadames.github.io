class DataHandler {
    constructor() {
        this.data = {};
    }
    
    loadData(data) {
        this.data = data;
		console.log(data);
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
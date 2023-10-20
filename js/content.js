class Content {
    constructor(selected) {
        this.selected = selected
    }

    build() {
        console.log(this.selected)
        UI.skills(this.selected);
    }
    setContent(content) {
        const contentContainer = document.querySelector('.content-container')
        contentContainer.innerHTML = '';
        contentContainer.append(content);
    }
}
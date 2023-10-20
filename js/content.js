class Content {
    static setContent(content) {
        const contentContainer = document.querySelector('.content-container');
        contentContainer.innerHTML = '';
        contentContainer.append(content);
    }
}
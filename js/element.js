class ElementFactory {
    static create(properties) {
        const elem = document.createElement(properties.element);
        for (let i in properties) {
            elem[i] = properties[i];
        }
        return elem;
    }
}
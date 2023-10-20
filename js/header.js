class Header {
    constructor(selectors) {
        this.selectors = selectors;
    }

    setHeader(buttons) {
        document.querySelector('.sidebar').append(buttons)
    }
    build() {
        const buttons = ElementFactory.create({
            element: "ul",
            className: ""
        })
        this.selectors.forEach(selector => {
            const button = ElementFactory.create({
                element: "li",
                className: "",
                textContent: selector,
                onclick: () => {
                    let content = new Content(selector);
                    content.build();
                }
            });
            buttons.append(button)
        });
        this.setHeader(buttons);

    }
}
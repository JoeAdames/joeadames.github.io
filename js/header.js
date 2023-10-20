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
                    //i think i have a switch case here to call what is being built in the UI.
                    //since all of my ui pieces are initialized i should be able to call their build(); funcs from a switcher here. 
                    let smallSelected = selector.toLowerCase();
                    switch(smallSelected) {
                        case "skills":
                            Skills.build();
                          break;
                        case "certifications":
                            Certifications.build();
                          break;
                        case "experience":
                            Experience.build();
                          break;
                        default:
                          Content.setContent("Home");
                      } 

                    // UI.switchTo(this.selector); //this doesnt work, throws UI.switchTo is not a Ffunction
                }
            });
            buttons.append(button)
        });
        this.setHeader(buttons);

    }
}
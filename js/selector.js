class SelectorManager {
    constructor(dataHandler, contentSetter) {
      this.dataHandler = dataHandler;
      this.contentSetter = contentSetter;
    }
  
    setSelectors() {
      const selectors = this.dataHandler.getSelectors();
      selectors.forEach((item) => {
        const li = ElementFactory.create({
          element: 'li',
          className: "selector lead",
          id: item,
          textContent: item,
          onclick: (e) => {
            this.contentSetter.currentSelector = e.target.id;
            this.contentSetter.setPage();

            let selected = document.querySelector('.selected')

            if(selected){
              selected.classList.remove('selected');
            }

            e.target.classList.add('selected');
          }
        });
        document.querySelector('.sidebar .buttons').appendChild(li);
      });
    }
  }
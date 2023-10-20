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
          id: item,
          textContent: item,
          onclick: (e) => {
            this.contentSetter.currentSelector = e.target.id;
            this.contentSetter.setPage();
          }
        });
        document.querySelector('.sidebar .buttons').appendChild(li);
      });
    }
  }
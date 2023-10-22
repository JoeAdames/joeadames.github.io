//classes
const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const results = await response.json();  
        return results

    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

async function initUI() {
    const url = './data.json';
    const fetchedData = await fetchData(url);
  
    const dataHandler = new DataHandler();
    dataHandler.loadData(fetchedData);
  
    const contentSetter = new ContentSetter(dataHandler);
    const selectorManager = new SelectorManager(dataHandler, contentSetter);
  
    selectorManager.setSelectors();
    contentSetter.setSocials();
    contentSetter.setHome();
  }
initUI();
//events
// document.addEventListener('DOMContentLoaded', );
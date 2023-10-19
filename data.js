class Data {
	async fetchRes() {
		try {
			const info = await fetch('data.json');
			const results = await info.json();

			ui.setData(results);
		} catch (error) {
			console.error(error);
		}
	}
	
// 	async fetchRegions() {
// 		try {
// 			const regions = await fetch('regions.json');
// 			const results = await regions.json();

// 			if(!results) {
// 				document.getElementById('region-info').textContent = 'No Regions Found!';
// 			} else {
// 				ui.setRegions(results);
// 			}
// 		} catch (error) {
// 			console.error(error);
// 		}
// 	}
}
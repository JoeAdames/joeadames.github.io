class Data {
	async fetchRes() {
		try {
			const info = await fetch('./data.json');
			const results = await info.json();
			console.log(results);
			const ui = new UI(results);
			ui.build();
		} catch (error) {
			console.error(error);
		}
	}
}
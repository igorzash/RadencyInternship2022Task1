export default class Note {
	archived = false;

	constructor(contents, category, date) {
		this.contents = contents;
		this.category = category;
		this.date = date;
	}

	update(contents, category) {
		this.contents = contents;
		this.category = category;
	}

	toggleArchive() {
		this.archived = !this.archived;
	}
}

export default class Note {
	archived = false;

	constructor(contents, category, date) {
		this.contents = contents;
		this.category = category;
		this.date = date;
		this.dates = [];

		this._parse_dates();
	}

	_parse_dates() {
		this.dates = this.contents.match(/\d{1,2}\/\d{1,2}\/\d{4}/g);

		if (this.dates) this.dates = this.dates.join(", ");
	}

	update(contents, category) {
		this.contents = contents;
		this.category = category;

		this._parse_dates();
	}

	toggleArchive() {
		this.archived = !this.archived;
	}
}

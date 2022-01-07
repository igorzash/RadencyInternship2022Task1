import CATEGORY from "./category";
import Note from "./note";

class Storage {
	data = {
		notes: new Set(),
	};

	addNote(note) {
		this.data.notes.add(note);
	}

	remove(note) {
		this.data.notes.delete(note);
	}
}

const storage = new Storage();

export default storage;

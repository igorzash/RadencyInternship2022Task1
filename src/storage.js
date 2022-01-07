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

// prepopulate storage
storage.addNote(new Note("buy milk", CATEGORY.TASK, new Date()));
storage.addNote(new Note("ok boomer", CATEGORY.RTHOUGHT, new Date()));

export default storage;

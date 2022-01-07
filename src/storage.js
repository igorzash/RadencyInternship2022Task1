import CATEGORY from "./category";
import Note from "./note";

class Storage {
	data = {
		notes: [],
	};

	addNote(note) {
		this.data.notes.push(note);
	}
}

const storage = new Storage();

// prepopulate storage
storage.addNote(new Note("buy milk", CATEGORY.TASK, new Date()));
storage.addNote(new Note("ok boomer", CATEGORY.RTHOUGHT, new Date()));

export default storage;

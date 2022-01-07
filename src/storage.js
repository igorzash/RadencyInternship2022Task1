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
storage.addNote(new Note("buy gift", CATEGORY.TASK, new Date()));
storage.addNote(new Note("what if earth is flat", CATEGORY.RTHOUGHT, new Date()));
storage.addNote(new Note("meeting with coworker 5/5/2022", CATEGORY.TASK, new Date()));
storage.addNote(new Note("meeting with coworker 5/7/2022", CATEGORY.TASK, new Date()));
storage.addNote(new Note("resolve issue #4939 using X", CATEGORY.IDEA, new Date()));
storage.addNote(new Note("read 10 books 3/5/2022-4/6/2022", CATEGORY.TASK, new Date()));

export default storage;

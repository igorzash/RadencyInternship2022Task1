import CATEGORY from "./category";
import Note from "./note";

const storage = {
	data: {
		notes: [],
		archievedNotes: [],
	},
};

// prepopulate storage
storage.data.notes = [
	new Note("buy milk", CATEGORY.TASK, new Date()),
	new Note("ok boomer", CATEGORY.RTHOUGHT, new Date()),
];

export default storage;

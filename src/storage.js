import CATEGORY from "./category";
import Note from "./note";

const storage = {
	data: {
		notes: [],
	},
};

// prepopulate storage
storage.data.notes = [
	new Note(0, "buy milk", CATEGORY.TASK, new Date()),
	new Note(1, "ok boomer", CATEGORY.RTHOUGHT, new Date()),
];

export default storage;

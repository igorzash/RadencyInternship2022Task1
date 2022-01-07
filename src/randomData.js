import storage from "./storage";
import Note from "./note";
import CATEGORY from "./category";

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);
}

const DAY = 24 * 60 * 60 * 1000;

function randomDate() {
	const date = new Date();
	date.setTime(date.getTime() - getRandomInt(5, 10) * DAY);
	return date;
}

function prepopulateStorage() {
	storage.addNote(new Note("buy milk", CATEGORY.TASK, randomDate()));
	storage.addNote(new Note("buy gift", CATEGORY.TASK, randomDate()));
	storage.addNote(
		new Note("what if earth is flat", CATEGORY.RTHOUGHT, randomDate())
	);
	storage.addNote(
		new Note("meeting with coworker 5/5/2022", CATEGORY.TASK, randomDate())
	);
	storage.addNote(
		new Note("meeting with coworker 5/7/2022", CATEGORY.TASK, randomDate())
	);
	storage.addNote(
		new Note("resolve issue #4939 using X", CATEGORY.IDEA, randomDate())
	);
	storage.addNote(
		new Note("read 10 books 3/5/2022-4/6/2022", CATEGORY.TASK, randomDate())
	);
}

export default prepopulateStorage;

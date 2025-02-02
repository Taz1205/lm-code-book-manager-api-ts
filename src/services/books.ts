import { Book } from "../models/book";

export const getBooks = async () => {
	return Book.findAll();
};

export const getBook = async (bookId: number) => {
	const book = await Book.findByPk(bookId);

    if (!book) {
        throw new Error(`Book with Id: ${bookId} does not exist`);
    }

	return Book.findOne({
		where: { bookId },
	});
};

export const saveBook = async (book: Book) => {
	const existingBook = await Book.findByPk(book.bookId);

    if (existingBook) {
        throw new Error('Book with this ID already exists');
    }

	return Book.create<Book>(book);
};
    
 


// User Story 4 - Update Book By Id Solution
export const updateBook = async (bookId: number, book: Book) => {
	return Book.update(book, {
		where: {
			bookId,
		},
	});
};
// User Story 5 - Delete Book By Id Solution
export const deleteBook = async (bookId: number): Promise<number> => {
	// delete the book and return the number of records deleted
	// for example:
	const deleteCount = await Book.destroy({ where: { bookId: bookId } });
	return deleteCount;
};

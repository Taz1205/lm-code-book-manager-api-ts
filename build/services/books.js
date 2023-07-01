import { Book } from "../models/book";
export const getBooks = async () => {
    return Book.findAll();
};
export const getBook = async (bookId) => {
    return Book.findOne({
        where: { bookId },
    });
};
export const saveBook = async (book) => {
    return Book.create(book);
};
// User Story 4 - Update Book By Id Solution
export const updateBook = async (bookId, book) => {
    return Book.update(book, {
        where: {
            bookId,
        },
    });
};
/*export function deleteBook(bookId: number, book: Book) {
    return Book.delete(book, {
        where: {
            bookId,
        },
    });
};*/

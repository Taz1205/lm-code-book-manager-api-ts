import * as bookService from "../services/books";
export const getBooks = async (req, res) => {
    const books = await bookService.getBooks();
    res.json(books).status(200);
};
export const getBook = async (req, res) => {
    const bookId = req.params.bookId;
    const book = await bookService.getBook(Number(bookId));
    if (book) {
        res.json(book).status(200);
    }
    else {
        res.status(404).json("Not found");
    }
};
export const saveBook = async (req, res) => {
    const bookToBeSaved = req.body;
    try {
        const book = await bookService.saveBook(bookToBeSaved);
        res.status(201).json(book);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
// User Story 4 - Update Book By Id Solution
export const updateBook = async (req, res) => {
    const bookUpdateData = req.body;
    const bookId = Number.parseInt(req.params.bookId);
    const book = await bookService.updateBook(bookId, bookUpdateData);
    res.status(204).json(book);
};
// User Story 5 - Delete Book By Id Solution
/*export const deleteBook = async (req: Request, res: Response) => {
    const bookDeleteData = req.body;
    const bookId = Number.parseInt(req.params.bookId);

    const book = await bookService.deleteBook(bookId, bookDeleteData);
    res.status(204).json(book);
};*/

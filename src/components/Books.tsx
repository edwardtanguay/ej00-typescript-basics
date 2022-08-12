import { useState, useEffect } from 'react';
import axios from 'axios';

interface IBook {
	title: string;
	authors: string[];
}

export const Books = () => {
	const [books, setBooks] = useState<IBook[]>([]);

	const url = 'https://gutendex.com/books/?search=berlin';

	const getAuthors = (rawAuthors:any) => {
		const authors: string[] = [];
		rawAuthors.forEach((rawAuthor:any) => {
			const author:string = rawAuthor.name;
			authors.push(author);
		})
		return authors;
	}

	useEffect(() => {
		(async () => {
			const _rawBooks = (await axios.get(url)).data.results;

			const _books: IBook[] = [];
			_rawBooks.forEach((rawBook: IBook) => {
				const book: IBook = {
					title: rawBook.title === undefined ? '(NO TITLE)' : rawBook.title,
					authors: getAuthors(rawBook.authors), 
				};
				_books.push(book);
			});

			setBooks(_books);
		})();
	}, []);

	return (
		<>
			<h2>There are {books.length} books</h2>
			{books.map((book) => {
				return (
					<div className="book">
						<div className="title">{book.title}</div>
						<div className="authors">{book.authors.join(',')}</div>
					</div>
				);
			})}
		</>
	);
};

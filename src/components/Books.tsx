import { useState, useEffect } from 'react';
import axios from 'axios';

export const Books = () => {
	const [books, setBooks] = useState([]);

	const url = 'https://gutendex.com/books/?search=berlin';

	useEffect(() => {
		(async () => {
			const _books = (await axios.get(url)).data.results;
			setBooks(_books);
		})();
	}, []);

	return (
		<>
			<h2>There are {books.length} books</h2>
			<p>nnn</p>
		</>
	);
};

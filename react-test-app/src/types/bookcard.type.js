
import PropTypes from "prop-types";

export const Book = {
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        lang: PropTypes.string.isRequired,
        publisher: PropTypes.string.isRequired,
        publicationYear: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        format: PropTypes.string.isRequired,
        series: PropTypes.string.isRequired,
        bookUrl: PropTypes.string.isRequired,
        coverUrl: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        updatedAt: PropTypes.string.isRequired,
    };
export const initialBookList = [
        {
                title: "Book 1",
                author: "Author 1",
                lang: "English",
                publisher: "Publisher 1",
                publicationYear: "2021",
                description: "Description of Book 1",
                format: "Paperback",
                series: "Series 1",
                bookUrl: "https://example.com/book1",
                coverUrl: "https://example.com/book1/cover",
                createdAt: "2021-01-01",
                updatedAt: "2021-07-20",
        },
        {
                title: "Book 2",
                author: "Author 2",
                lang: "Spanish",
                publisher: "Publisher 2",
                publicationYear: "2020",
                description: "Description of Book 2",
                format: "Hardcover",
                series: "Series 2",
                bookUrl: "https://example.com/book2",
                coverUrl: "https://example.com/book2/cover",
                createdAt: "2020-03-15",
                updatedAt: "2021-07-20",
        },
];
// console.log(typeof initialBookList);

// export default Book;
export default initialBookList
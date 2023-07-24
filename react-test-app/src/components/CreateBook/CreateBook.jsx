import {addBook} from "../book.slice.js";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {unwrapResult} from "@reduxjs/toolkit";

const CreateBook = () => {
    const dispatch = useDispatch();

    // Khởi tạo các state để lưu thông tin nhập vào form
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [lang, setLang] = useState('');
    const [publisher, setPublisher] = useState('');
    const [publicationYear, setPublicationYear] = useState('');
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
    const [format, setFormat] = useState('');
    const [series, setSeries] = useState('');
    const [file, setFile] = useState(null); // Đối tượng File cho upload file
    const [file2, setFile2] = useState(null); // Đối tượng File cho upload file

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Tạo form data với dữ liệu cần gửi lên API
        const formData = new FormData();
        formData.append('title', title);
        formData.append('author', author);
        formData.append('lang', lang);
        formData.append('publisher',publisher);
        formData.append('publicationYear',publicationYear);
        formData.append('subject',subject);
        formData.append('description',description);
        formData.append('format',format);
        formData.append('series',series);
        formData.append('file',file);
        formData.append('file2',file2);

        // Gọi action addBook để gửi form data lên server
        const res = await dispatch(addBook(formData))
        console.log(unwrapResult(res))
    };
    console.log(handleSubmit)
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label htmlFor="author">Author:</label>
                <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <div>
                <label htmlFor="lang">Language:</label>
                <input type="text" id="lang" value={lang} onChange={(e) => setLang(e.target.value)} />
            </div>
            <div>
                <label htmlFor="publisher">Publisher:</label>
                <input type="text" id="publisher" value={publisher} onChange={(e) => setPublisher(e.target.value)} />
            </div>
            <div>
                <label htmlFor="publicationYear">Publication Year:</label>
                <input type="text" id="publicationYear" value={publicationYear} onChange={(e) => setPublicationYear(e.target.value)} />
            </div>
            <div>
                <label htmlFor="subject">Subject:</label>
                <input type="text" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
                <label htmlFor="format">Format:</label>
                <input type="text" id="format" value={format} onChange={(e) => setFormat(e.target.value)} />
            </div>
            <div>
                <label htmlFor="series">Series:</label>
                <input type="text" id="series" value={series} onChange={(e) => setSeries(e.target.value)} />
            </div>
            <div>
                <label htmlFor="file2">Book Cover:</label>
                <input type="file" id="file2" onChange={(e) => setFile2(e.target.files[0])} />
            </div>
            <div>
                <label htmlFor="file">Book file(Only Epub):</label>
                <input type="file" id="file" onChange={(e) => setFile(e.target.files[0])} />
            </div>
            <button type="submit">Add Book</button>
        </form>
    );
};

export default CreateBook;


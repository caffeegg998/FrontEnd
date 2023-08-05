import {addBook, cancelEditingPost, updateBook} from "../../slice/book.slice.js";
import {Fragment, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {unwrapResult} from "@reduxjs/toolkit";

const CreateBook = () => {
    const dispatch = useDispatch();
    const {editingBook} = useSelector((state )=> state.book.data)
    // const [errorForm, setErrorForm] = useState<null | ErrorForm>(null)
    // console.log("Editting Book:"+editingBook)



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
    const [id,setId] = useState(0)
    const [coverUrl,setCoverUrl] = useState('')
    const [bookUrl,setBookUrl] = useState('')

    useEffect(() => {

        if (editingBook) {
            setTitle(editingBook.title);
            setAuthor(editingBook.author);
            setLang(editingBook.lang);
            setPublisher(editingBook.publisher);
            setPublicationYear(editingBook.publicationYear);
            setSubject(editingBook.subject);
            setDescription(editingBook.description);
            setFormat(editingBook.format);
            setSeries(editingBook.series);
            setId(editingBook.id);
            setCoverUrl(editingBook.coverUrl)
            setBookUrl(editingBook.bookUrl)

            // setId(editingBook.id)
        }
        if(editingBook === null){
            setTitle("");
            setAuthor("");
            setLang("");
            setPublisher("");
            setPublicationYear("");
            setSubject("");
            setDescription("");
            setFormat("");
            setSeries("");
            setCoverUrl("")
            setBookUrl("")
            // setId("")
        }
    }, [editingBook]);

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
    formData.append('file2',file2);
    formData.append('file',file);

    // formData.append('id',id)
    const displayImage = (input) => {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById('imagePreview').src = e.target.result;
            };
            reader.readAsDataURL(input.files[0]);
        }
    };

    const handleChangeFile2 = (e) => {
        // Xử lý việc chọn tệp
        setFile2(e.target.files[0]);

        // Gọi hàm displayImage để hiển thị hình ảnh
        displayImage(e.target);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (editingBook) {
            formData.append('id',id);
            try {
                const res = await dispatch(updateBook(formData))
                console.log(unwrapResult(res))
            }
            catch (error) {
                // setErrorForm(error.error)
            }
        } else {
            try {
                console.log("Submit")
                const res = await dispatch(addBook(formData))
                console.log(unwrapResult(res))
            }
            catch (error) {
                // setErrorForm(error.error)
            }
        }
        // Tạo form data với dữ liệu cần gửi lên API

    };
    const handleCancelEditingPost = () => {
        dispatch(cancelEditingPost())
    }
    return (
        <form onSubmit={handleSubmit} onReset={handleCancelEditingPost}>
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
                <img
                    width="100"
                    id="imagePreview"
                    src={`http://localhost:8082/api/book/download/${coverUrl}`}
                />
                <input type="file" id="file2" onChange={handleChangeFile2}  />
            </div>
            <div>
                <label htmlFor="file">Book file(Only Epub):</label>
                <input type="file" id="file" onChange={(e) => setFile(e.target.files[0])} />
            </div>
            {editingBook && (
                <Fragment>
                    <button
                        type='submit'
                        className='group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-teal-300 to-lime-300 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-lime-200 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 dark:focus:ring-lime-800'
                    >
              <span className='relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
                Update Post
              </span>
                    </button>
                    <button
                        type='reset'
                        className='group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-red-100 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 dark:focus:ring-red-400'
                    >
              <span className='relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
                Cancel
              </span>
                    </button>
                </Fragment>
            )}
            {!editingBook && (
                <button
                    className='group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800'
                    type='submit'
                >
            <span className='relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
              Publish Post
            </span>
                </button>
            )}
        </form>
    );
};

export default CreateBook;


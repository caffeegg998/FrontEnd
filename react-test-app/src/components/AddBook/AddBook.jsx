import {Fragment, useContext, useEffect, useRef, useState} from "react";
import {RiAddCircleLine} from "react-icons/ri";
import {BookContext} from "../../context/BookContext/BookContext.jsx";
import {useDispatch, useSelector} from "react-redux";
import {addBook, cancelEditingPost, deleteBook, updateBook} from "../../slice/book.slice.js";
import {current, unwrapResult} from "@reduxjs/toolkit";
import {FcCancel} from "react-icons/fc";
import {GiCancel} from "react-icons/gi";
import {toast} from "react-toastify";

const AddBook = ({cancelHandle}) => {
    const [category, setCategory] = useState([]);
    const [keywords, setKeywords] = useState([]);
    const dispatch = useDispatch();
    const { editingBook } = useSelector((state) => state.book.data);

    const categoryNames = editingBook?.category.map(category => category.id);

    useEffect(() => {
        if (categoryNames) {
            setKeywords(categoryNames)
        }

    }, [editingBook]);
    //
    // console.log(previousId);
    // console.log(editingBook.id);
    // console.log(previousId === editingBook?.id);


    console.log(keywords)

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
    for(let i = 0; i<keywords?.length; i++){
        formData.append(`category[${i}]`,keywords[i])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (editingBook) {
            formData.append('id',id);
            try {

                toast.promise(
                    (async () => {
                        const response = await dispatch(updateBook(formData))
                        return response.payload.status === 200
                            ? "Thêm thành công!"
                            : Promise.reject(new Error("Cập nhật thất bại. Vui lòng thử lại!"));
                    })(),
                    {
                        pending: "Đang xử lý...",
                        success: "Cập nhật thành công!",
                        error: "Cập nhật thất bại. Vui lòng thử lại!",
                    }
                )
            }
            catch (error) {
                // setErrorForm(error.error)
            }
        } else {
            try {
                console.log("Submit")
                toast.promise(
                    (async () => {
                        const response = await dispatch(addBook(formData))
                        return response.payload.status === 200
                            ? "Thêm thành công!"
                            : Promise.reject(new Error("Thêm thất bại. Vui lòng thử lại!"));
                    })(),
                    {
                        pending: "Đang xử lý...",
                        success: "Thêm thành công!",
                        error: "Thêm thất bại. Vui lòng thử lại!",
                    }
                )
            }
            catch (error) {
                // setErrorForm(error.error)
            }
        }
        // Tạo form data với dữ liệu cần gửi lên API

    };
    const handleCancelEditingPost = () => {
        dispatch(cancelEditingPost())
        cancelHandle()
    }

    // -------------------------------------------------------------
    const {getCategory: getCategoryCtx} = useContext(BookContext)
    useEffect(() => {
        const getCategory = async () =>{
            const reponse = await getCategoryCtx()
            setCategory(reponse.data)
        };
        getCategory()
    }, []);

    const [selectedCategory, setSelectedCategory] = useState('');
    const colors = ["yellow", "green", "red","blue"];
    let colorIndex = 0;
    const handleCategoryChange = (event) => {
        const category = event.target.value;
        if (!keywords.includes(category)) {
            setKeywords([...keywords, category]);
            setSelectedCategory('');

            colorIndex = (colorIndex + 1) % colors.length;
        }
    };

    const inputRef = useRef(null);

    const handleChangeFile2 = (e) => {
        // Xử lý việc chọn tệp
        setFile2(e.target.files[0]);

        // Gọi hàm displayImage để hiển thị hình ảnh
        displayImage(e.target);
    };
    const displayImage = (input) => {
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById('imagePreview').src = e.target.result;
            };
            reader.readAsDataURL(input.files[0]);
        }
    };

    const handleImageClick = () => {
        inputRef.current.click();
    };
    const removeKeyword = (keyword) => {
        const updatedKeywords = keywords.filter(k => k !== keyword);
        setKeywords(updatedKeywords);
    };
    return (
        <>
            <form onSubmit={handleSubmit} onReset={handleCancelEditingPost} className='grid grid-cols-4 bg-cyan-200 rounded-t-2xl px-9 pb-5 mb-4 drop-shadow shadow-lg'>
                <div className='col-span-3 mr-4 mt-4'>
                    <div className="grid gap-1 mb-4 sm:grid-cols-2 sm:mb-5">
                        <div className="sm:col-span-2 flex items-center">
                            <label
                                htmlFor="name"
                                className="block mb-1 text-sm font-medium"
                            >
                                Tiêu đề (title):
                            </label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                className="border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-2/3 h-8 ml-2  p-2"
                                placeholder="Tiêu đề ......"
                                required=""
                                value={title} onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="w-full">
                            <label
                                htmlFor="brand"
                                className="block mb-2 text-sm font-medium"
                            >
                                Tác giả
                            </label>
                            <input
                                type="text"
                                name="brand"
                                id="brand"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                placeholder="Tác giả ......"
                                required=""
                                value={author} onChange={(e) => setAuthor(e.target.value)}
                            />
                        </div>
                        <div className="w-full">
                            <label
                                htmlFor="bookLang"
                                className="block mb-2 text-sm font-medium"
                            >
                                Ngôn ngữ
                            </label>
                            <select
                                id="bookLang"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                value={lang}
                                onChange={(e)=>setLang(e.target.value)}
                            >
                                <option selected="" disabled>Ngôn ngữ sách</option>
                                <option value="US">Tiếng Việt</option>
                                <option value="CA">Tiếng Anh</option>
                                <option value="FR">Tiếng Nhật</option>
                            </select>
                        </div>
                        <div>
                            <label
                                htmlFor="category"
                                className="block mb-2 text-sm font-medium"
                            >
                                Thể loại
                            </label>
                            <select
                                id="category"
                                className={`bg-gray-50 border ${keywords?.includes(selectedCategory) ? 'border-red-600' : 'border-gray-600'} text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 `}
                                value={selectedCategory}
                                onChange={handleCategoryChange}
                            >
                                <option value="" disabled>Chọn thể loại</option>
                                {category.map(option => (
                                    <option key={option.id} value={option.id}>
                                        {option.name}
                                    </option>
                                ))}
                            </select>
                            <div>
                                {keywords?.map((keyword, index) => {
                                    const selectedOption = category.find(option => option.id === (parseInt(keyword)));
                                    return (
                                        <span
                                            key={index}
                                            className="keyword text-white inline-block px-2 py-1 m-1 text-xs rounded-lg cursor-pointer"
                                            style={{ backgroundColor: colors[index % colors.length] }}
                                            onClick={() => removeKeyword(keyword)}
                                        >
                {selectedOption ? selectedOption.name : ''}
            </span>
                                    );
                                })}
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="item-weight"
                                className="block mb-2 text-sm font-medium"
                            >
                                Định dạng
                            </label>
                            <input
                                type="text"
                                name="format"
                                id="item-weight"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                defaultValue={15}
                                placeholder="Ex. 12"
                                required=""
                                value={format} onChange={(e) => setFormat(e.target.value)}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="item-weight"
                                className="block mb-2 text-sm font-medium"
                            >
                                Series:
                            </label>
                            <input
                                type="text"
                                name="format"
                                id="item-weight"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                defaultValue={15}
                                placeholder="Ex. 12"
                                required=""
                                value={series} onChange={(e) => setSeries(e.target.value)}
                            />
                        </div>
                        <div className='grid grid-cols-3'>
                            <div className='col-span-2 mr-2'>
                                <label
                                    htmlFor="item-weight"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Nhà xuất bản:
                                </label>
                                <input
                                    type="text"
                                    name="format"
                                    id="item-weight"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                    defaultValue={15}
                                    placeholder="Ex. 12"
                                    required=""
                                    value={publisher} onChange={(e) => setPublisher(e.target.value)}
                                />
                            </div>
                            <div className='col-span-1'>
                                <label
                                    htmlFor="item-weight"
                                    className="block mb-2 text-sm font-medium"
                                >
                                    Năm xuất bản:
                                </label>
                                <input
                                    type="number"
                                    name="year"
                                    id="item-weight"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                    defaultValue={15}
                                    placeholder="Ex. 12"
                                    required=""
                                    value={publicationYear} onChange={(e) => setPublicationYear(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-span-2">
                            <label
                                htmlFor="description"
                                className="block mb-2 text-sm font-medium"
                            >
                                Mô tả sách:
                            </label>
                            <textarea
                                id="description"
                                rows={8}
                                className="w-full max-h-24 p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                                placeholder="Write a product description here..."
                                value={description} onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className='col-span-1 mt-4'>
                    <div>
                        <label
                            htmlFor="description"
                            className="block mb-2 text-sm font-medium"
                        >
                            Ảnh bìa:
                        </label>
                        <div className='card h-4/3 my-2'>
                            <img src={`http://localhost:8082/api/book/download/${coverUrl}`}
                                 className='cursor-pointer w-full h-64 bg-amber-300'
                                 id="imagePreview"
                                 onClick={handleImageClick}
                            />
                            <label
                                className="block mb-2 text-sm text-white font-medium"
                                htmlFor="file_input"
                            >Nhấn vào ảnh để thay đổi ảnh bìa
                            </label>
                            {/*Hidden Input*/}
                            <input
                                className="hidden absolute"
                                ref={inputRef}
                                type="file"
                                onChange={handleChangeFile2}
                            />
                        </div>

                    </div>

                    <div className='flex items-center mt-3 '>
                        <label
                            className="text-sm font-medium"
                            htmlFor="file_input"
                        >
                            Chọn file sách:
                        </label>
                        <input
                            className="text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none"
                            id="file_input"
                            type="file"
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </div>
                </div>
                {editingBook && (
                    <Fragment>
                        <div className="flex items-center space-x-4">
                            {/*<button*/}
                            {/*    type="submit"*/}
                            {/*    className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"*/}
                            {/*>*/}
                            {/*    Thêm sách*/}
                            {/*</button>*/}
                            <button
                                type="submit"
                                className="text-green-600 inline-flex items-center hover:text-white border border-green-600 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-bold text-sm rounded-lg text-sm py-1 px-2 text-center"
                            >
                                <RiAddCircleLine className='mr-1'/>
                                Cập nhật
                            </button>
                            <button
                                type="reset"
                                className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-bold text-sm rounded-lg text-sm py-1 px-2 text-center"
                            >
                                <GiCancel className='mr-1'/>
                                Cancel
                            </button>
                        </div>

                    </Fragment>
                )}
                {!editingBook && (
                    <div className="flex items-center space-x-4">
                        {/*<button*/}
                        {/*    type="submit"*/}
                        {/*    className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"*/}
                        {/*>*/}
                        {/*    Thêm sách*/}
                        {/*</button>*/}
                        <button
                            type="submit"
                            className="text-green-600 inline-flex items-center hover:text-white border border-green-600 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-bold text-sm rounded-lg text-sm py-1 px-2 text-center"
                        >
                            <RiAddCircleLine className='mr-1'/>
                            Thêm sách
                        </button>
                    </div>
                )}
                {/*//Button*/}

            </form>
        </>
    );
};

export default AddBook;
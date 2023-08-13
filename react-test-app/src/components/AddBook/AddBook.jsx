import {useRef, useState} from "react";
import {RiAddCircleLine} from "react-icons/ri";

const AddBook = () => {

    const [selectedCategory, setSelectedCategory] = useState('');
    const [keywords, setKeywords] = useState([]);
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
            <form action="#" className='grid grid-cols-4 bg-cyan-200 rounded-t-2xl px-9 pb-5 mb-4 drop-shadow shadow-lg'>
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
                                name="name"
                                id="name"
                                className="border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-2/3 h-8 ml-2  p-2"
                                defaultValue="Apple iMac 27“"
                                placeholder="Type product name"
                                required=""
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
                                defaultValue="Apple"
                                placeholder="Product brand"
                                required=""
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
                            >
                                <option selected="">Ngôn ngữ sách</option>
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
                                className={`bg-gray-50 border ${keywords.includes(selectedCategory) ? 'border-red-500' : 'border-gray-300'} text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 `}
                                value={selectedCategory}
                                onChange={handleCategoryChange}
                            >
                                <option value="" disabled>Chọn thể loại</option>
                                <option value="1">Kiếm Hiệp</option>
                                <option value="2">TV/Monitors</option>
                                <option value="3">PC</option>
                                <option value="4">Gaming/Console</option>
                                <option value="5">Phones</option>
                                <option value="6">Kiếm Hiệp</option>
                                <option value="7">TV/Monitors</option>
                                <option value="8">PC</option>
                                <option value="9">Gaming/Console</option>
                                <option value="10">Phones</option>
                                <option value="11">Kiếm Hiệp</option>
                                <option value="12">TV/Monitors</option>
                                <option value="13">PC</option>
                                <option value="14">Gaming/Console</option>
                                <option value="15">Phones</option>
                            </select>
                            <div>
                                {keywords.map((keyword, index) => (
                                    <span
                                        key={index}
                                        className="keyword text-white inline-block px-2 py-1 m-1 text-xs rounded-lg cursor-pointer"
                                        style={{ backgroundColor: colors[index % colors.length] }}
                                        onClick={() => removeKeyword(keyword)}
                                    >{keyword}</span>
                                ))}
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
                            <img src={`http://localhost:8082/api/book/download/00264c14-a505-48e7-84d7-e5b24e844a5d.jpeg`}
                                 className='cursor-pointer w-full'
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
                                onChange={(e) => displayImage(e.target)}
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
                        />
                    </div>
                </div>

                {/*//Button*/}
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
            </form>
        </>
    );
};

export default AddBook;
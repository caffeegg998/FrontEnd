import {IoMdBook} from "react-icons/io";
import SkeletonPost from "../../components/SkeletonPost/index.js";
import BookCard from "../../components/BookList/BookCard.jsx";
import PropTypes from "prop-types";
import {useState} from "react";
import {BsDownload} from "react-icons/bs";




const ItemBookDetail = ({book}) => {


    if (!book) {
        return <SkeletonPost />; // Hoặc hiển thị thông tin trống hoặc thành phần loading
    }

    const {
        author,
        bookCreator,
        bookUrl,category,
        coverUrl,createdAt,
        description,format,
        lang,publicationYear,
        publisher,series,
        subject,title,
        updatedAt,downloadCount} = book
    console.log(category)

    // const handleDownEpub = () => {
    //
    //     // Tạo một đường dẫn đầy đủ đến API
    //     const apiUrl = `http://localhost:8082/api/book/download/${bookUrl}`;
    //
    //     // Tạo một thẻ a ẩn để kích hoạt tải về
    //     const downloadLink = document.createElement("a");
    //     downloadLink.href = apiUrl;
    //     downloadLink.target = "_blank"; // Mở trong cửa sổ mới
    //     downloadLink.download = "book.epub"; // Tên tệp tải về
    //
    //     // Thêm thẻ a vào DOM
    //     document.body.appendChild(downloadLink);
    //
    //     // Kích hoạt sự kiện nhấp chuột trên liên kết
    //     downloadLink.click();
    //
    //     // Loại bỏ thẻ a sau khi tải về đã bắt đầu
    //     downloadLink.remove();
    // };

    const dateObject = new Date(createdAt);

// Lấy ngày, tháng và năm từ đối tượng Date
    const day = dateObject.getDate();
    const month = dateObject.getMonth() + 1; // Lưu ý: tháng trong JavaScript bắt đầu từ 0
    const year = dateObject.getFullYear();

    const formattedDate = `${year}-${month}-${day}`;

    const handleDownEpub = () => {
        // Tạo một đường dẫn đầy đủ đến API
        const apiUrl = `http://localhost:8082/api/book/download/${bookUrl}`;

        // Tạo yêu cầu tải về sử dụng XMLHttpRequest
        const xhr = new XMLHttpRequest();
        xhr.open("GET", apiUrl, true);
        xhr.responseType = "blob"; // Định dạng dữ liệu trả về là blob

        // Xử lý sự kiện khi yêu cầu hoàn thành
        xhr.onload = function () {
            if (xhr.status === 200) {
                const blob = xhr.response;
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = `${title}.epub`;
                link.click();
            }
        };
        xhr.setRequestHeader("Accept", "application/epub+zip");

        // Gửi yêu cầu tải về
        xhr.send();
    };

    const availableColors = [
        "bg-blue-500", "bg-red-500", "bg-green-500", "bg-purple-500", "bg-yellow-500"
    ]

    function getRandomColor(availableColors) {
        if (availableColors.length === 0) {
            // Nếu danh sách màu đã sử dụng hết, trở lại danh sách ban đầu và tiếp tục
            availableColors = ["bg-blue-500", "bg-red-500", "bg-green-500", "bg-purple-500", "bg-yellow-500"];
        }

        // Chọn một màu ngẫu nhiên từ danh sách màu còn lại
        const randomIndex = Math.floor(Math.random() * availableColors.length);
        const randomColor = availableColors[randomIndex];

        // Loại bỏ màu đã chọn khỏi danh sách màu
        availableColors.splice(randomIndex, 1);

        return randomColor;
    }

    return (
        <>
            <h3 className='border-b border-primary mt-3 mb-6 pb-4'><a href='#' className='text-2xl hover:text-blue-500'>Ebook </a> {" > "}<a href='#' className='text-2xl hover:text-blue-500'>Light Novel </a>{" > "}<a href='#'className='text-2xl hover:text-blue-500'>Huyền bí</a></h3>
            <div className='bg-cyan-200 rounded-3xl'>
                <div className='grid grid-cols-4 gap-5 flex-wrap mb-10  rounded-3xl p-7 '>
                    <div className='card h-fit'>
                        <img className='w-full' src={`http://localhost:8082/api/book/download/${coverUrl}`} />
                        <div className='p-4 text-white'>
                            <h4 className='text-xl'>{title}</h4>
                            <p className='text-sm'>{author}</p>
                        </div>
                        <div className='badge'>
                            <IoMdBook/>
                            <p>{format}</p>
                        </div>
                        <div className='bg-white text-white'>

                        </div>
                    </div>


                    <div className='col-span-3'>
                        <div className='grid grid-cols-4 gap-10 mb-10 '>
                            <div className='col-span-3'>
                                <h3 className='text-black text-3xl w-full mb-2'>{title}</h3>
                                <h4 className='text-xl'><strong>Tác giả:</strong> {author}</h4>
                                <h4 className='text-xl'><strong className='mr-2'>Thể loại:</strong>{category.map(category => (
                                    <a key={category.id} href='#' className='hover:underline text-blue-500 mr-1'>{category.name},</a>))}</h4>
                                <h4 className='mb-1 text-xl flex'><strong className={'mr-2'}>Bộ sách (Series):</strong><p>{series}</p></h4>
                                <h4 className='mb-1 text-xl'><strong>Ngôn ngữ:</strong> {lang}</h4>
                                <div className='flex text-xl'>
                                    <h4 className='mb-1 mr-16 text-xl'><strong>Nhà xuất bản:</strong> {publisher}</h4>
                                    <h4 className='mb-1 text-xl'>Xuất bản năm: {publicationYear}</h4>
                                </div>
                                <div className='flex justify-start'>
                                    <h4 className='mb-1 mr-3 text-xl'><strong>Tags:</strong></h4>
                                    {category.map(category => (
                                        <button
                                            key={category.id}
                                            className={` ${getRandomColor(availableColors)} hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mr-1`}
                                        >
                                            {category.name}
                                        </button>
                                    ))}
                                </div>
                                <h4 className='mb-1 text-xl'><strong>Định dạng:</strong> {format}</h4>
                                <div className='flex '>
                                    <div className='flex justify-start mr-10'>
                                        <h4 className='mb-1 mr-3 text-xl'><strong>Tải sách:</strong></h4>
                                        <button className="bg-blue-500 flex items-center hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mr-1" onClick={handleDownEpub} >
                                            <BsDownload className='mr-1'/>
                                            Tải EPUB
                                        </button>
                                        <button className="bg-blue-500 flex items-center hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mr-1">
                                            <BsDownload className='mr-1'/>
                                            Tải PDF
                                        </button>
                                    </div>
                                    <h4 className='mb-1 mr-3 text-xl'>Lượt tải: {downloadCount}</h4>
                                </div>
                            </div>
                            <div className='col-span-1'>
                                <br/>
                                <h4 className='mb-1 text-xl'><strong>Người đăng sách:</strong><p>{bookCreator}</p></h4>
                                <h4 className='mb-1 text-xl'><strong>Ngày đăng:</strong><p>{formattedDate}</p></h4>
                            </div>
                        </div>
                        <h3 className='border-b border-primary mt-12 mb-6 pb-4 text-black'>Nội dung:</h3>
                        <div>

                            <p className='text-xl'>{description}</p>
                        </div>


                    </div>
                </div>
            </div>

        </>
    );
};
ItemBookDetail.propTypes = {
    book: PropTypes.shape({
        author: PropTypes.string,
        bookCreator: PropTypes.string,
        bookUrl: PropTypes.string,
        category: PropTypes.string,
        coverUrl: PropTypes.string,
        createdAt: PropTypes.string,
        description: PropTypes.string,
        format: PropTypes.string,
        lang: PropTypes.string,
        publicationYear: PropTypes.string,
        publisher: PropTypes.string,
        series: PropTypes.string,
        subject: PropTypes.string,
        title: PropTypes.string,
        updatedAt: PropTypes.string,
    }).isRequired,
};
export default ItemBookDetail;
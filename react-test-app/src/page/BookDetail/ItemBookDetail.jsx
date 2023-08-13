import {IoMdBook} from "react-icons/io";
import SkeletonPost from "../../components/SkeletonPost/index.js";
import BookCard from "../../components/BookList/BookCard.jsx";

const ItemBookDetail = () => {
    return (
        <>
            <h3 className='border-b border-primary mt-3 mb-6 pb-4'><a href='#' className='text-2xl hover:text-blue-500'>Ebook </a> {" > "}<a href='#' className='text-2xl hover:text-blue-500'>Light Novel </a>{" > "}<a href='#'className='text-2xl hover:text-blue-500'>Huyền bí</a></h3>
            <div className='bg-cyan-200 rounded-3xl'>
                <div className='grid grid-cols-4 gap-5 flex-wrap mb-10 backdrop-blur-3xl rounded-3xl p-7 '>
                    <div className='card h-fit'>
                        <img className='w-full' src={`http://localhost:8082/api/book/download/f18072ef-31d0-4a04-9c2a-c76dc667eead.jpeg`} />
                        <div className='p-4 text-white'>
                            <h4 className='text-xl'>Gia Tộc Thần Bí - Sự trở về của Nidaime</h4>
                            <p className='text-sm'>Tomihiko Morimi & Đỗ Nguyên (dịch)</p>
                        </div>
                        <div className='badge'>
                            <IoMdBook/>
                            <p >Ebook</p>
                        </div>
                        <div className='p-4 bg-white text-white'>

                        </div>
                    </div>


                    <div className='col-span-3'>
                        <div className='grid grid-cols-4 gap-10 mb-10 '>
                            <div className='col-span-3'>
                                <h3 className='text-black text-3xl w-full mb-2'>Gia Tộc Thần Bí - Sự trở về của Nidaime</h3>
                                <h4 className='text-xl'><strong>Tác giả:</strong> Tomihiko Morimi</h4>
                                <h4 className='text-xl'><strong>Thể loại:</strong> <a href='#' className='hover:underline text-blue-500'>Huyền ảo</a>, <a href='#' className='hover:underline text-blue-500'>Kỳ bí</a></h4>
                                <h4 className='mb-1 text-xl flex'><strong className={'mr-2'}>Bộ sách (Series):</strong><p>Gia Tộc Thần Bí </p></h4>
                                <h4 className='mb-1 text-xl'><strong>Ngôn ngữ:</strong> Tiếng Việt</h4>
                                <div className='flex text-xl'>
                                    <h4 className='mb-1 mr-16 text-xl'><strong>Nhà xuất bản:</strong> NXB Trẻ</h4>
                                    <h4 className='mb-1 text-xl'>Xuất bản năm: 2023</h4>
                                </div>
                                <div className='flex justify-start'>
                                    <h4 className='mb-1 mr-3 text-xl'><strong>Tags:</strong></h4>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mr-1">
                                        Thần bí
                                    </button>
                                    <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mr-1">
                                        Thần bí
                                    </button>
                                    <button className="bg-pink-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mr-1">
                                        Thần bí
                                    </button>
                                    <button className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mr-1">
                                        Thần bí
                                    </button>
                                </div>
                                <h4 className='mb-1 text-xl'><strong>Định dạng:</strong> Epub/ PDF</h4>
                                <div className='flex '>
                                    <div className='flex justify-start mr-10'>
                                        <h4 className='mb-1 mr-3 text-xl'><strong>Tải sách:</strong></h4>
                                        <button className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mr-1">
                                            Tải EPUB
                                        </button>
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mr-1">
                                            Tải PDF
                                        </button>
                                    </div>
                                    <h4 className='mb-1 mr-3 text-xl'>Lượt tải: 546</h4>
                                </div>
                            </div>
                            <div className='col-span-1'>
                                <br/>
                                <h4 className='mb-1 text-xl'><strong>Người đăng sách:</strong><p>Trương Thiên</p></h4>
                                <h4 className='mb-1 text-xl'><strong>Ngày đăng:</strong><p>2023-08-02 </p></h4>
                            </div>
                        </div>
                        <h3 className='border-b border-primary mt-12 mb-6 pb-4 text-black'>Nội dung:</h3>
                        <div>

                            <p className='text-xl'>Xuất thân từ tộc Tanuki danh giá Shimogamo, cậu Tanuki Yasaburo kế thừa sự liều lĩnh của người cha vĩ đại, từ thuở còn là một cục banh lông nhỏ xíu đã sớm khiến kẻ khác phải cau mặt nhăn mày. Dù là Thiên cẩu hay những Con người mà tất cả đều phải kính sợ, cậu cũng không ngần ngại nhúng mũi can thiệp vào chuyện của họ.
                                Một ngày nọ, kẻ thừa kế “Nidaime” của sư phụ Thiên cẩu già nua Akadama trở về từ Anh quốc, khiến làn sóng hiếu kỳ cồn lên khắp giới Tanuki. “Câu lạc bộ ngày thứ Sáu”, hội nhóm Con người với thói ăn uống xấu xa cũng tiếp tục tìm kiếm nguyên liệu cho nồi lẩu Tanuki trứ danh của họ. Tháng ngày bình yên lại trôi về đâu mất…
                                Và thế là “dòng máu ngốc nghếch” chảy trong Yasaburo lại bắt đầu sục sôi!</p>
                        </div>


                    </div>
                </div>
            </div>

        </>
    );
};
export default ItemBookDetail;
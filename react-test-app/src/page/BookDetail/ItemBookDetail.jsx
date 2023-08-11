import {IoMdBook} from "react-icons/io";
import SkeletonPost from "../../components/SkeletonPost/index.js";
import BookCard from "../../components/BookList/BookCard.jsx";

const ItemBookDetail = () => {
    return (
        <>
            <h3 className='border-b border-primary mt-12 mb-6 pb-4'><a href='#' className='hover:text-blue-500'>Ebook </a> {" > "}<a href='#' className='hover:text-blue-500'>Light Novel </a>{" > "}<a href='#'className='hover:text-blue-500'>Huyền bí</a></h3>
            <div className='bg-cyan-200 bg-cover rounded-3xl'>
                <div className='grid grid-cols-4 gap-5 mb-10 backdrop-blur-3xl rounded-3xl p-7 '>
                    <div className='card h-4/3'>
                        <img src={`http://localhost:8082/api/book/download/be8e7faf-2125-419f-8bb7-e1f1fc1ae3d6.jpeg`} className='w-full'/>
                        <div className='p-4 text-white'>
                            <h4>Gia Tộc Thần Bí - Sự trở về của Nidaime</h4>
                            <p>Tomihiko Morimi & Đỗ Nguyên (dịch)</p>
                        </div>
                        <div className='badge'>
                            <IoMdBook/>
                            <p >Ebook</p>
                        </div>
                    </div>
                    <div className='col-span-3'>
                        <div className='grid grid-cols-4 gap-10 mb-10 '>
                            <div className='col-span-3'>
                                <h3 className='text-black text-4xl w-full mb-2'>Gia Tộc Thần Bí - Sự trở về của Nidaime</h3>
                                <h4 className=''><strong>Tác giả:</strong> Tomihiko Morimi</h4>
                                <h4 className=''><strong>Thể loại:</strong> <a href='#' className='hover:underline text-blue-500'>Huyền ảo</a>, <a href='#' className='hover:underline text-blue-500'>Kỳ bí</a></h4>
                                <h4 className='mb-1 flex'><strong className={'mr-2'}>Bộ sách (Series):</strong><p>Gia Tộc Thần Bí </p></h4>
                                <h4 className='mb-1'><strong>Ngôn ngữ:</strong> Tiếng Việt</h4>
                                <div className='flex'>
                                    <h4 className='mb-1 mr-16'><strong>Nhà xuất bản:</strong> NXB Trẻ</h4>
                                    <h4 className='mb-1'>Xuất bản năm: 2023</h4>
                                </div>
                                <div className='flex justify-start'>
                                    <h4 className='mb-1 mr-3'><strong>Tags:</strong></h4>
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
                                <h4 className='mb-1'><strong>Định dạng:</strong> Epub/ PDF</h4>
                                <div className='flex '>
                                    <div className='flex justify-start mr-10'>
                                        <h4 className='mb-1 mr-3'><strong>Tải sách:</strong></h4>
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mr-1">
                                            Tải EPUB
                                        </button>
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mr-1">
                                            Tải PDF
                                        </button>
                                    </div>
                                    <h4 className='mb-1 mr-3'>Lượt tải: 546</h4>
                                </div>
                            </div>
                            <div className='col-span-1'>
                                <br/>
                                <h4 className='mb-1'><strong>Người đăng sách:</strong><p>Trương Thiên</p></h4>
                                <h4 className='mb-1'><strong>Ngày đăng:</strong><p>2023-08-02 </p></h4>
                            </div>
                        </div>
                        <h3 className='border-b border-primary mt-12 mb-6 pb-4 text-black'>Nội dung:</h3>
                        <div>

                            <p className='text-2xl'>Xuất thân từ tộc Tanuki danh giá Shimogamo, cậu Tanuki Yasaburo kế thừa sự liều lĩnh của người cha vĩ đại, từ thuở còn là một cục banh lông nhỏ xíu đã sớm khiến kẻ khác phải cau mặt nhăn mày. Dù là Thiên cẩu hay những Con người mà tất cả đều phải kính sợ, cậu cũng không ngần ngại nhúng mũi can thiệp vào chuyện của họ.
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
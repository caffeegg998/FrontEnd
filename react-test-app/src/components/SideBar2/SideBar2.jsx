import {IoMdBook} from "react-icons/io";

const SideBar2 = () => {
    return (
        <nav className='col-span-1 bg-cyan-200 h-full'>
            <div className='mx-4 justify-between items-center'>

                <h4 className='uppercase font-bold text-primary py-4 border-b border-primary text-right'>PaperEbook.net</h4>
            </div>
            <ul className='mx-4 my-2'>
                <div className='card h-4/3 my-2'>
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
                <div className='card h-4/3 my-2'>
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
            </ul>
        </nav>
    );
};

export default SideBar2;
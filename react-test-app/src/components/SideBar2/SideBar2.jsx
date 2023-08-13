import {IoMdBook} from "react-icons/io";

const SideBar2 = () => {
    return (
        <nav className='col-span-2 bg-cyan-200 h-full'>
            <div className='mx-4 justify-between items-center'>

                <h4 className='uppercase font-bold text-primary py-4 border-b border-primary text-right'>PaperEbook.net</h4>
            </div>
            <ul className='mx-4 my-2'>
                <div className='card h-4/3 my-2'>
                    <img src={`http://localhost:8082/api/book/download/00264c14-a505-48e7-84d7-e5b24e844a5d.jpeg`} className='w-full'/>
                </div>
                <div className='card h-4/3 my-2'>
                    <img src={`http://localhost:8082/api/book/download/a23d2fe5-73a2-4f0a-a8d0-5e03a51e73ac.jpeg`} className='w-full'/>
                </div>
            </ul>
        </nav>
    );
};

export default SideBar2;
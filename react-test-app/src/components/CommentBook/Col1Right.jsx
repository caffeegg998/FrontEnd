import {IoMdBook} from "react-icons/io";


const Col1Right = () => {
    return (
        <div>
            <div className='col-span-1 m-2 text-2xl text-lg font-bold'>
                <section className="bg-white bg-opacity-50 bg-primary rounded-xl p-6">
                    <div className="mb-1">
                        <h3 className="text-lg lg:text-2xl font-bold ">
                            Bình luận (20)
                        </h3>
                    </div>
                    <div className='grid grid-cols-4'>
                        <div className='col-span-2 mr-2'>
                            <div className='card h-4/3 my-2'>
                                <img src={`http://localhost:8082/api/book/download/be8e7faf-2125-419f-8bb7-e1f1fc1ae3d6.jpeg`} className='w-full'/>
                            </div>
                        </div>
                        <div className='col-span-2 ml-2'>
                            <div className='card h-4/3 my-2'>
                                <img src={`http://localhost:8082/api/book/download/be8e7faf-2125-419f-8bb7-e1f1fc1ae3d6.jpeg`} className='w-full'/>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-4'>
                        <div className='col-span-2 mr-2'>
                            <div className='card h-4/3 my-2'>
                                <img src={`http://localhost:8082/api/book/download/be8e7faf-2125-419f-8bb7-e1f1fc1ae3d6.jpeg`} className='w-full'/>
                            </div>
                        </div>
                        <div className='col-span-2 ml-2'>
                            <div className='card h-4/3 my-2'>
                                <img src={`http://localhost:8082/api/book/download/be8e7faf-2125-419f-8bb7-e1f1fc1ae3d6.jpeg`} className='w-full'/>
                            </div>
                        </div>
                    </div>

                </section>

            </div>
        </div>
    );
};

export default Col1Right;
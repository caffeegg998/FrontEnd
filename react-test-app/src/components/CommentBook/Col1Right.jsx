import {IoMdBook} from "react-icons/io";


const Col1Right = () => {
    return (
        <div>
            <div className='col-span-1 m-2 text-2xl text-lg font-bold'>
                <section className="bg-white bg-opacity-50 bg-primary rounded-xl p-6">
                    <div className="mb-1">
                        <h3 className="text-lg lg:text-2xl font-bold ">
                            Sách Liên Quan
                        </h3>
                    </div>
                    <div className='grid grid-cols-4'>
                        <div className='col-span-2 mr-2 flex justify-center items-center'>
                            <div className='card my-2'>
                                <img className="h-auto w-auto rounded-lg" src={`http://localhost:8082/api/book/download/00264c14-a505-48e7-84d7-e5b24e844a5d.jpeg`}/>
                            </div>
                        </div>
                        <div className='col-span-2 ml-2 flex justify-center items-center'>
                            <div className='card  my-2'>
                                <img className="h-auto w-auto rounded-lg" src={`http://localhost:8082/api/book/download/530ac1e3-d7b1-408e-ba57-4bc3e1ae6dd1.jpeg`}/>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-4'>
                        <div className='col-span-2 mr-2 flex justify-center items-center'>
                            <div className='card  my-2'>
                                <img className="h-auto w-auto rounded-lg" src={`http://localhost:8082/api/book/download/a23d2fe5-73a2-4f0a-a8d0-5e03a51e73ac.jpeg`}/>
                            </div>
                        </div>
                        <div className='col-span-2 ml-2 flex justify-center items-center'>
                            <div className='card  my-2 '>
                                <img className="h-auto w-auto rounded-lg" src={`http://localhost:8082/api/book/download/530ac1e3-d7b1-408e-ba57-4bc3e1ae6dd1.jpeg`}/>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <div className='col-span-1 m-2 text-2xl text-lg font-bold'>
                <section className="bg-white bg-opacity-50 bg-primary rounded-xl p-6">222222</section>
            </div>
        </div>
    );
};

export default Col1Right;
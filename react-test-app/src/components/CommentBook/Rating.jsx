
const Rating = () => {
    return (
        <>
            <div className='bg-cyan-200 rounded-xl mb-10 p-6 pb-16'>
                <h3 className='ml-3 text-4xl font-bold'>Đánh giá sách</h3>
                <div className='grid grid-cols-4 gap-10 '>
                    <div className='col-span-3'>
                        <div className='grid grid-cols-4'>
                            <div className='col-span-1 mt-10 '>
                                <div className='flex justify-center'>
                                    <p className='font-bold text-4xl mb-2'>4/5</p>
                                </div>
                                <div className="flex justify-center items-center space-x-2 mb-3">
                                    <svg
                                        className="w-6 h-6 text-yellow-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                    >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg
                                        className="w-6 h-6 text-yellow-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                    >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg
                                        className="w-6 h-6 text-yellow-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                    >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg
                                        className="w-6 h-6 text-yellow-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                    >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg
                                        className="w-6 h-6 text-gray-300 dark:text-gray-500"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                    >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                </div>
                                <div className="flex justify-center items-center space-x-2 mb-5">
                                    <p className='text-3xl'>72 đánh giá</p>
                                </div>

                            </div>
                            <div className='col-span-3 ml-8 '>
                                <div className="flex items-center mt-4">
                                    <a
                                        href="#"
                                        className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        5 star
                                    </a>
                                    <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                        <div className="h-5 bg-yellow-300 rounded" style={{ width: "70%" }} />
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
      70%
    </span>
                                </div>
                                <div className="flex items-center mt-4">
                                    <a
                                        href="#"
                                        className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        4 star
                                    </a>
                                    <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                        <div className="h-5 bg-yellow-300 rounded" style={{ width: "17%" }} />
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
      17%
    </span>
                                </div>
                                <div className="flex items-center mt-4">
                                    <a
                                        href="#"
                                        className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        3 star
                                    </a>
                                    <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                        <div className="h-5 bg-yellow-300 rounded" style={{ width: "8%" }} />
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
      8%
    </span>
                                </div>
                                <div className="flex items-center mt-4">
                                    <a
                                        href="#"
                                        className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        2 star
                                    </a>
                                    <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                        <div className="h-5 bg-yellow-300 rounded" style={{ width: "4%" }} />
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
      4%
    </span>
                                </div>
                                <div className="flex items-center mt-4">
                                    <a
                                        href="#"
                                        className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        1 star
                                    </a>
                                    <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                        <div className="h-5 bg-yellow-300 rounded" style={{ width: "1%" }} />
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
      1%
    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 -translate-x-32 mt-14 relative'>
                        <p className='text-2xl w-full'>Chỉ có thành viên mới có thể viết nhận xét.Vui lòng <a href='#' className='hover:underline font-bold'>Đăng nhập</a> hoặc <a href='#' className='hover:underline font-bold'>Đăng Ký</a>.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Rating;
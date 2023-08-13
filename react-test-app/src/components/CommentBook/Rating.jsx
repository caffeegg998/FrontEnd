
const Rating = () => {
    return (
        <>
            <div className='bg-cyan-200 rounded-xl mb-10 p-4 '>
                <h3 className='ml-3 text-2xl font-bold'>Đánh giá sách</h3>
                <div className='grid grid-cols-8 gap-10 '>
                            <div className='col-span-2 block items-center my-auto '>
                                <div className='flex justify-center'>
                                    <p className='font-bold text-2xl mb-2'>4/5</p>
                                </div>
                                <div className="flex justify-center items-center space-x-2 mb-3">
                                    <svg
                                        className="w-4 h-4 text-yellow-300 mr-1"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                    >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg
                                        className="w-4 h-4 text-yellow-300 mr-1"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                    >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg
                                        className="w-4 h-4 text-yellow-300 mr-1"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                    >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg
                                        className="w-4 h-4 text-yellow-300 mr-1"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                    >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg
                                        className="w-4 h-4 text-gray-300 mr-1 dark:text-gray-500"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                    >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                </div>
                                <div className="flex justify-center items-center space-x-2 mb-5">
                                    <p className='text-2xl'>72 đánh giá</p>
                                </div>
                            </div>
                    <div className='col-span-3'>
                        <div className="gap-8">
                            <div>
                                <dl>
                                    <dt className="text-xs font-medium ">
                                        Staff
                                    </dt>
                                    <dd className="flex items-center">
                                        <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                            <div
                                                className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                                                style={{ width: "88%" }}
                                            />
                                        </div>
                                        <span className="text-sm font-medium">
          8.8
        </span>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt className="text-sm font-medium ">
                                        Comfort
                                    </dt>
                                    <dd className="flex items-center">
                                        <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                            <div
                                                className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                                                style={{ width: "89%" }}
                                            />
                                        </div>
                                        <span className="text-sm font-medium">
          8.9
        </span>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt className="text-sm font-medium ">
                                        Free WiFi
                                    </dt>
                                    <dd className="flex items-center">
                                        <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                            <div
                                                className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                                                style={{ width: "88%" }}
                                            />
                                        </div>
                                        <span className="text-sm font-medium">
          8.8
        </span>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt className="text-sm font-medium ">
                                        Facilities
                                    </dt>
                                    <dd className="flex items-center">
                                        <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                            <div
                                                className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                                                style={{ width: "54%" }}
                                            />
                                        </div>
                                        <span className="text-sm font-medium">
          5.4
        </span>
                                    </dd>
                                </dl>
                            </div>
                        </div>

                    </div>
                    <div className='col-span-3 block items-center my-auto'>
                        <p className='text-sm w-full'>Chỉ có thành viên mới có thể viết nhận xét.Vui lòng <a href='#' className='hover:underline font-bold'>Đăng nhập</a> hoặc <a href='#' className='hover:underline font-bold'>Đăng Ký</a>.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Rating;
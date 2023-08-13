
const ListTableBook = () => {
    return (
        <>
            <div className="relative overflow-x-auto  mb-3 drop-shadow rounded-b-2xl shadow-2xl bg-cyan-200 p-3">
                <h3 className='mb-2 text-xl font-medium'>Danh sách</h3>
                <table className="w-fit text-sm text-left text-white">
                    <thead className="text-xs text-white bg-primary rounded-2xl">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Tiêu đề
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Tác giả
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Series
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Ngôn ngữ
                        </th>
                        <th scope="col" className="px-6 py-3">
                            NXB
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Năm xuất bản
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Thể loại
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Mô tả
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Định dạng
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Ngày thêm
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Ngày cập nhật
                        </th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            Kẻ trộm giấc mơ
                        </th>
                        <td className="px-6 py-4 whitespace-nowrap">Yasutaka Tsutsui </td>
                        <td className="px-6 py-4 whitespace-nowrap">Nhật bản</td>
                        <td className="px-6 py-4 whitespace-nowrap">Vi</td>
                        <td className="px-6 py-4 whitespace-nowrap">NXB Trẻ</td>
                        <td className="px-6 py-4">2014</td>
                        <td className="px-6 py-4 whitespace-nowrap">Kỳ Aỏ, Đô thị, Huyền bí</td>
                        <div className="w-10 whitespace-nowrap">
                            <p className="overflow-hidden text-sm text-gray-700 dark:text-gray-300 line-clamp-2">
                                Vào khoảng hai tuần trước khi bị bắn chết, Tổng thống Mỹ Abraham Lincoln đã mơ thấy hình ảnh chính bản thân mình bị ám sát...
                            </p>
                        </div>
                        <td className="px-6 py-4">EPUB</td>
                        <td className="px-6 py-4 whitespace-nowrap">14-2-2020</td>
                        <td className="px-6 py-4 whitespace-nowrap">14-2-2024</td>
                        <td className="px-6 py-4">
                            <a
                                href="#"
                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >
                                Edit
                            </a>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <nav
                    className="flex items-center justify-between pt-4"
                    aria-label="Table navigation"
                >
    <span className="text-sm font-normal text-black">
      Showing{" "}
        <span className="font-semibold text-black">1-10</span>{" "}
        of{" "}
        <span className="font-semibold text-black">1000</span>
    </span>
                    <ul className="inline-flex -space-x-px text-sm h-8">
                        <li>
                            <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                Previous
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                1
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                2
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                aria-current="page"
                                className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                            >
                                3
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                4
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                5
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                                Next
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default ListTableBook;
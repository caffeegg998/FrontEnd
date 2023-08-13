

const Col1Left = () => {
    return (
        <div>
            <div className='col-span-1 m-2'>
                <section className="bg-white bg-opacity-50 bg-primary rounded-xl p-6">
                    <div className="max-w-2xl mx-auto px-4">
                        <div className="mb-6">
                            <h3 className="text-xs lg:text-xl font-bold ">
                                Bình luận (20)
                            </h3>
                        </div>
                        <form className="mb-6">
                            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg hover:ring-4 ring-cyan-600 dark:border-gray-700">
                                <label htmlFor="comment" className="sr-only">
                                    Your comment
                                </label>
                                <textarea
                                    id="comment"
                                    rows={6}
                                    className="px-0 w-full h-24 bg-opacity-0 text-xl text-black border-0 focus:ring-0 focus:outline-none"
                                    placeholder="Viết bình luận......."
                                    required=""
                                    defaultValue={""}
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 border-2 hover:bg-primary inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                            >
                                Đăng bình luận
                            </button>
                        </form>
                        <article className="p-6 mb-6 text-base bg-white rounded-lg ">
                            <footer className="flex justify-between items-center mb-2">
                                <div className="flex items-center">
                                    <p className="inline-flex items-center mr-3 text-sm black">
                                        <img
                                            className="mr-2 w-6 h-6 rounded-full"
                                            src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                                            alt="Michael Gough"
                                        />
                                        Michael Gough
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        <time pubdate="" dateTime="2022-02-08" title="February 8th, 2022">
                                            Feb. 8, 2022
                                        </time>
                                    </p>
                                </div>
                                <button
                                    id="dropdownComment1Button"
                                    data-dropdown-toggle="dropdownComment1"
                                    className="hidden inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                    type="button"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                    </svg>
                                    <span className="sr-only">Comment settings</span>
                                </button>
                                {/* Dropdown menu */}
                                <div
                                    id="dropdownComment1"
                                    className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                                >
                                    <ul
                                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdownMenuIconHorizontalButton"
                                    >
                                        <li>
                                            <a
                                                href="#"
                                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Edit
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Remove
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Report
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </footer>
                            <p className="text-black text-sm">
                                Very straight-to-point article. Really worth time reading. Thank you!
                                But tools are just the instruments for the UX designers. The knowledge
                                of the design tools are as important as the creation of the design
                                strategy.
                            </p>
                            <div className="flex items-center mt-4 space-x-4">
                                <button
                                    type="button"
                                    className="flex items-center tex text-sm hover:underline"
                                >
                                    <svg
                                        aria-hidden="true"
                                        className="mr-1 w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                        />
                                    </svg>
                                    Reply
                                </button>
                            </div>
                        </article>
                        <article className="p-6 mb-6 ml-6 lg:ml-12 text-base bg-white rounded-lg">
                            <footer className="flex justify-between items-center mb-2">
                                <div className="flex items-center">
                                    <p className="inline-flex items-center mr-3 text-sm text-gray-900">
                                        <img
                                            className="mr-2 w-6 h-6 rounded-full"
                                            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                            alt="Jese Leos"
                                        />
                                        Jese Leos
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        <time pubdate="" dateTime="2022-02-12" title="February 12th, 2022">
                                            Feb. 12, 2022
                                        </time>
                                    </p>
                                </div>
                                <button
                                    id="dropdownComment2Button"
                                    data-dropdown-toggle="dropdownComment2"
                                    className="hidden inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                    type="button"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                    </svg>
                                    <span className="sr-only">Comment settings</span>
                                </button>
                                {/* Dropdown menu */}
                                <div
                                    id="dropdownComment2"
                                    className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                                >
                                    <ul
                                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdownMenuIconHorizontalButton"
                                    >
                                        <li>
                                            <a
                                                href="#"
                                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Edit
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Remove
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Report
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </footer>
                            <p className="text-black">
                                Much appreciated! Glad you liked it ☺️
                            </p>
                            <div className="flex items-center mt-4 space-x-4">
                                <button
                                    type="button"
                                    className="flex items-center text-sm text-black hover:underline"
                                >
                                    <svg
                                        aria-hidden="true"
                                        className="mr-1 w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                        />
                                    </svg>
                                    Reply
                                </button>
                            </div>
                        </article>
                        <article className="p-6 mb-6 text-base bg-white dark:border-gray-700 rounded-lg">
                            <footer className="flex justify-between items-center mb-2">
                                <div className="flex items-center">
                                    <p className="inline-flex items-center mr-3 text-sm">
                                        <img
                                            className="mr-2 w-6 h-6 rounded-full"
                                            src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                                            alt="Bonnie Green"
                                        />
                                        Bonnie Green
                                    </p>
                                    <p className="text-sm ">
                                        <time pubdate="" dateTime="2022-03-12" title="March 12th, 2022">
                                            Mar. 12, 2022
                                        </time>
                                    </p>
                                </div>
                                <button
                                    id="dropdownComment3Button"
                                    data-dropdown-toggle="dropdownComment3"
                                    className="hidden inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                    type="button"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                    </svg>
                                    <span className="sr-only">Comment settings</span>
                                </button>
                                {/* Dropdown menu */}
                                <div
                                    id="dropdownComment3"
                                    className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                                >
                                    <ul
                                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdownMenuIconHorizontalButton"
                                    >
                                        <li>
                                            <a
                                                href="#"
                                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Edit
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Remove
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Report
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </footer>
                            <p className="text-black text-sm">
                                The article covers the essentials, challenges, myths and stages the UX
                                designer should consider while creating the design strategy.
                            </p>
                            <div className="flex items-center mt-4 space-x-4">
                                <button
                                    type="button"
                                    className="flex items-center text-sm text-black hover:underline"
                                >
                                    <svg
                                        aria-hidden="true"
                                        className="mr-1 w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                        />
                                    </svg>
                                    Reply
                                </button>
                            </div>
                        </article>
                        <article className="p-6 text-base bg-white rounded-lg">
                            <footer className="flex justify-between items-center mb-2">
                                <div className="flex items-center">
                                    <p className="inline-flex items-center mr-3 text-sm">
                                        <img
                                            className="mr-2 w-6 h-6 rounded-full"
                                            src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                                            alt="Helene Engels"
                                        />
                                        Helene Engels
                                    </p>
                                    <p className="text-sm">
                                        <time pubdate="" dateTime="2022-06-23" title="June 23rd, 2022">
                                            Jun. 23, 2022
                                        </time>
                                    </p>
                                </div>
                                <button
                                    id="dropdownComment4Button"
                                    data-dropdown-toggle="dropdownComment4"
                                    className="hidden inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                    type="button"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                    </svg>
                                </button>
                                {/* Dropdown menu */}
                                <div
                                    id="dropdownComment4"
                                    className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                                >
                                    <ul
                                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                        aria-labelledby="dropdownMenuIconHorizontalButton"
                                    >
                                        <li>
                                            <a
                                                href="#"
                                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Edit
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Remove
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                            >
                                                Report
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </footer>
                            <p className="text-black text-sm">
                                Thanks for sharing this. I do came from the Backend development and
                                explored some of the tools to design my Side Projects.
                            </p>
                            <div className="flex items-center mt-4 space-x-4">
                                <button
                                    type="button"
                                    className="flex items-center text-sm text-black hover:underline"
                                >
                                    <svg
                                        aria-hidden="true"
                                        className="mr-1 w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                        />
                                    </svg>
                                    Reply
                                </button>
                            </div>
                        </article>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Col1Left;
import {useContext, useEffect, useState} from "react";
import {BookContext} from "../../context/BookContext/BookContext.jsx";
import {Rating} from "@material-tailwind/react";

const Ratings = ({bookId}) => {

    let {getRatingByBookId: getRatingByBookIdCtx} = useContext(BookContext)
    let {RatingBookByUser: RatingBookByUserCtx} = useContext(BookContext)
    const [rated, setRated] = useState(4);

    const [ratingsByBookId, setRatingByBookId] = useState([])

    let total = 0;

    for (const key in ratingsByBookId) {
        total += ratingsByBookId[key];
    }
    const {totalRatings,oneStarPercentage,twoStarPercentage,threeStarPercentage,fourStarPercentage,fiveStarPercentage} = ratingsByBookId
    console.log(total)


    const handleRating = (value) => {
        setRated(value)
        RatingBookByUser()
    }
    let RatingBookByUser = async () => {
        console.log("rated: " + rated)
        const response = await RatingBookByUserCtx(bookId,rated)
        console.log(response)
    }
    console.log(rated)
    useEffect(() => {
        let getRatingByBookId = async () =>{
            const response = await getRatingByBookIdCtx(bookId)
            if(response){
                setRatingByBookId(response)
            }
        };
        getRatingByBookId()
    }, []);




    console.log(ratingsByBookId)
    return (
        <>
            <div className='bg-cyan-200 rounded-xl mb-10 p-4 '>
                <h3 className='ml-3 text-2xl font-bold'>Đánh giá sách</h3>
                <div className='grid grid-cols-8 gap-10 '>
                            <div className='col-span-2 block items-center my-auto '>
                                <div className='flex justify-center'>
                                    <p className='font-bold text-2xl mb-2'>{rated}.0/5</p>
                                </div>
                                <div className="flex justify-center">
                                    <Rating onChange={value => handleRating(value)} />
                                </div>
                                <div className="flex justify-center items-center space-x-2 mb-5">
                                    {!isNaN(total) ?(<p className='text-2xl'>{totalRatings} đánh giá</p>):(<p className='text-2xl'>Chưa có đánh giá</p>)}
                                </div>
                            </div>
                    <div className='col-span-3'>
                        <div className="gap-8">
                            <div>
                                <dl>
                                    <dt className="text-xs font-medium ">
                                        5 Sao
                                    </dt>
                                    <dd className="flex items-center">
                                        <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                            <div
                                                className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                                                style={{ width: `${fiveStarPercentage}%` }}
                                            />
                                        </div>
                                        <span className="text-sm font-medium">
          {fiveStarPercentage}%
        </span>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt className="text-sm font-medium ">
                                        4 Sao
                                    </dt>
                                    <dd className="flex items-center">
                                        <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                            <div
                                                className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                                                style={{ width: `${fourStarPercentage}%` }}
                                            />
                                        </div>
                                        <span className="text-sm font-medium">
          {fourStarPercentage}%
        </span>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt className="text-sm font-medium ">
                                        3 Sao
                                    </dt>
                                    <dd className="flex items-center">
                                        <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                            <div
                                                className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                                                style={{ width: `${threeStarPercentage}%` }}
                                            />
                                        </div>
                                        <span className="text-sm font-medium">
          {threeStarPercentage}%
        </span>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt className="text-sm font-medium ">
                                        2 Sao
                                    </dt>
                                    <dd className="flex items-center">
                                        <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                            <div
                                                className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                                                style={{ width: `${twoStarPercentage}%` }}
                                            />
                                        </div>
                                        <span className="text-sm font-medium">
          {twoStarPercentage}%
        </span>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt className="text-sm font-medium ">
                                        1 Sao
                                    </dt>
                                    <dd className="flex items-center">
                                        <div className="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                                            <div
                                                className="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                                                style={{ width: `${oneStarPercentage}%` }}
                                            />
                                        </div>
                                        <span className="text-sm font-medium">
          {oneStarPercentage}%
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

export default Ratings;
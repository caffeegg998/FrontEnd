import {movieData} from "./movieData.js";
import Moviecard from "./Moviecard.jsx";

const Index = () => {
    return (
        <>
            <h3 className='border-b border-primary mt-12 mb-6 pb-4'>Trending</h3>
            <div className='grid grid-cols-4 gap-10 mb-12 '>
                {movieData.map((movie,index)=>
                    <Moviecard  movie ={movie} key={index}/>)}
            </div>
            <div className='flex justify-center'>
                <button className='btn hover:scale-125 transition ease-out duration-500'>
                    Load More
                </button>
            </div>
        </>
    );
};

export default Index;
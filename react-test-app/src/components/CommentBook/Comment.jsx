import Col1Left from "./Col1Left.jsx";
import Col1Right from "./Col1Right.jsx";

const Comment = () => {
    return (
       <>
           <div className='bg-cyan-200 rounded-xl mb-10 p-6'>
                <div className='grid grid-cols-2'>
                    <Col1Left/>
                    <Col1Right/>
                </div>
           </div>
       </>
    );
};

export default Comment;
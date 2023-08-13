import AuthMenu from "../../components/AuthMenu/index.jsx";
import Header from "../../components/Header/index.jsx";
import Nav from "../../components/Nav/index.jsx";
import {ToastContainer} from "react-toastify";
import ItemBookDetail from "./ItemBookDetail.jsx";
import Rating from "../../components/CommentBook/Rating.jsx";
import Comment from "../../components/CommentBook/Comment.jsx";
import SideBar2 from "../../components/SideBar2/SideBar2.jsx";


const BookDetail = () => {
    return (
       <>
           <Header />

               <div className='grid grid-cols-12 flex flex-wrap justify-between mx-auto max-w-screen-2xl'>
                   <div className='col-span-2'><Nav/></div>
                   <div className='col-span-8'>
                       <div className='grid grid-cols-8'>
                           {/*<div className='col-span-2'>*/}
                           {/*    <Nav/>*/}
                           {/*</div>*/}
                           <main className='col-span-8 bg-cyan-50 px-12 py-6'>
                               <h1 className='text-3xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                               <ItemBookDetail/>
                               <Rating/>
                               <Comment/>
                               <ToastContainer></ToastContainer>
                           </main>

                       </div>
                   </div>
                   <div className='col-span-2'>
                       <SideBar2/>
                   </div>
               </div>

       </>
    );
};

export default BookDetail;

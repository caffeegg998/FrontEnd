import AuthMenu from "../../components/AuthMenu/index.jsx";
import Header from "../../components/Header/index.jsx";
import Nav from "../../components/Nav/index.jsx";
import {ToastContainer} from "react-toastify";
import ItemBookDetail from "./ItemBookDetail.jsx";
import Ratings from "../../components/CommentBook/Ratings.jsx";
import Comment from "../../components/CommentBook/Comment.jsx";
import SideBar2 from "../../components/SideBar2/SideBar2.jsx";
import {useParams} from "react-router-dom";
import {Fragment, useContext, useEffect, useState} from "react";
import {BookContext} from "../../context/BookContext/BookContext.jsx";
import SkeletonPost from "../../components/SkeletonPost/index.js";
import BookCard from "../../components/BookList/BookCard.jsx";


const BookDetail = () => {
    const { id } = useParams();

    const [loading, setLoading] = useState(false)

    // const [title, setTitle] = useState('');
    // const [author, setAuthor] = useState('');
    // const [lang, setLang] = useState('');
    // const [publisher, setPublisher] = useState('');
    // const [publicationYear, setPublicationYear] = useState('');
    // const [subject, setSubject] = useState('');
    // const [description, setDescription] = useState('');
    // const [format, setFormat] = useState('');
    // const [series, setSeries] = useState('');
    // const [coverUrl, setCoverUrl] = useState('')
    // const [bookUrl, setBookCoverUrl] = useState('')
    // const [bookCreator, setBookCreator] = useState('')
    // const [createdAt,setCreatedAt] = useState('')
    // const [updatedAt,setUpdatedAt] = useState('')
    //
    // setTitle(response.data.title)
    // setAuthor(response.data.author)
    // setLang(response.data.lang)
    // setPublisher(response.data.publisher)
    // setPublicationYear(response.data.publicationYear)
    // setSubject(response.data.subject)
    // setDescription(response.data.description)
    // setFormat(response.data.format)
    // setSeries(response.data.series)
    // setCoverUrl(response.data.coverUrl)
    // setBookCoverUrl(response.data.bookUrl)
    // setBookCreator(response.data.bookCreator)
    // setCreatedAt(response.data.createdAt)
    // setUpdatedAt(response.data.updatedAt)

    const [bookDetail,setBookDetail] = useState(null)
    // let getBookDetail = async () =>{
    //     const response = await getCategory()
    //     console.log(response)
    //     return response
    // }
    const {getBookDetail: getBookDetailCtx} = useContext(BookContext)
    useEffect(() => {
        const getBookDetail = async () =>{
            setLoading(true);
            const response = await getBookDetailCtx(id)
            // console.log(response.data.bookCreator)
            if(response.status === 200){
                setBookDetail(response.data)
            }
            setLoading(false);

        };
        getBookDetail()
    }, []);
    console.log(loading)



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
                           {loading && (
                               <Fragment>
                                   <SkeletonPost />
                                   <SkeletonPost />
                                   <SkeletonPost />
                                   <SkeletonPost />
                               </Fragment>
                           )}
                           {!loading &&
                               (
                                   <main className='col-span-8 bg-cyan-50 px-12 py-6'>
                                       <h1 className='text-3xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                                       <ItemBookDetail book={bookDetail}/>
                                       <Ratings bookId={id}/>
                                       <Comment/>
                                       <ToastContainer></ToastContainer>
                                   </main>
                               )}
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

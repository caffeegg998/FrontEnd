import {useContext, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {AuthenContext} from "../../context/AuthenContext.jsx";


const Login = () => {
    let navigate = useNavigate();

    let[username,setUsername] = useState("");
    let[password, setPassword] = useState("")

    const [status, setStatus] = useState(true)
    const [msgResponse , setMsgResponse] = useState("")
    const [code,setCode] = useState(0)

    console.log(username,password)
    let {login: loginCtx} = useContext(AuthenContext)

    let login = async () =>{
        const response = await loginCtx(username,password)
        console.log(response)
        if(response.status === 200){
            navigate("/dashboard")
        }
        if(response.status === 403){
            setMsgResponse(response.msg)
            setStatus(false)
            setCode(0)
        }
        if(response.status === 402){
            setMsgResponse(response.msg)
            setStatus(false)
            setCode(402)
        }

    }

    //Doc doi tuong Ctx, destruction, doi ten ham



    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>Flowbite
                </a>
                <div
                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Đăng nhập vào tài khoản
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email/ Username</label>
                                <input type="text" name="text" id="text"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="name@company.com" required=""
                                       value={username}
                                       onChange={(e) => setUsername(e.target.value)}/>
                                {status ? null : (
                                    <p className={'text-red-500 text-sm'}>{msgResponse}{code === 402 ?null:(<a className={'text-blue-400 underline'} href='/active-account'> Kích hoạt tài khoản</a>)}</p>
                                )}

                            </div>
                            <div>
                                <label htmlFor="password"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mật khẩu</label>
                                <input type="password" name="password" id="password" placeholder="••••••••"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       required=""
                                       value={password}
                                       onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox"
                                               className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                               required=""/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Lưu tài khoản</label>
                                    </div>
                                </div>
                                <a href=""
                                   className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"><Link to="/forgotRequest">Quên mật khẩu?</Link></a>
                            </div>
                            <button type="button"
                                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    onClick={() => login()}>Đăng nhập
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Chưa có tài khoản?
                                <a href="" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                    <Link to="/register">Đăng ký</Link></a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Login;
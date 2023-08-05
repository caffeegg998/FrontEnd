import {useContext, useState} from "react";
import {AuthenContext} from "../../context/AuthenContext.jsx";


const ActiveAccount = () => {
    let[activeToken,setActiveToken] = useState("");
    let {activeToken: activeTokenCtx} = useContext(AuthenContext)
    const [status, setStatus] = useState(true);
    const [msgResponse , setMsgResponse] = useState("")
    const [code , setCode] = useState(0)

    let activeTokenUser = async () =>{
        const response = await activeTokenCtx(activeToken)
        if(response.status === 201)
        {
            setStatus(false)
            setCode(0)
            setMsgResponse(response.complete)
        }
        if(response.status === 200)
        {
            setStatus(false)
            setCode(0)
            setMsgResponse(response.complete)
        }
        if(response.status === 403)
        {
            setStatus(false)
            setCode(403)
            setMsgResponse(response.msg)
        }
        if(response.status === 404)
        {
            setStatus(false)
            setCode(404)
            setMsgResponse(response.msg)
        }


    }
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a
                    href="#"
                    className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                >
                    <img
                        className="w-8 h-8 mr-2"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                        alt="logo"
                    />
                    Flowbite
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Vui lòng kiểm tra Email đăng ký tài khoản để nhận mã kích hoạt.
                        </h1>
                        <div>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <label
                                    htmlFor="fullName"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Mã xác thực
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    id="fullName"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="996cfd40-d70a-4f31-b649-ae1f277243c7..."
                                    required=""
                                    onChange={(e) => setActiveToken(e.target.value)}
                                />
                                {status ? null : (
                                    <p className={`text-${ code === 404 || code ===403 ? 'red' : 'green'}-500 text-sm`}>{msgResponse}</p>
                                )}
                                <div className="flex justify-end">
                                    <button
                                        type="button"
                                        className="text-white border-white border-2 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                        onClick={() => activeTokenUser()}
                                    >
                                        Kích hoại tài khoản
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ActiveAccount;
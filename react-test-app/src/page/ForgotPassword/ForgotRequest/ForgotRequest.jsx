import {useContext, useState} from "react";
import {AuthenContext} from "../../../context/AuthenContext.jsx";
import {Link} from "react-router-dom";

const ForgotRequest = () => {
    let {forgotPassword: forgotPasswordCtx,resetPassword: resetPasswordCtx} = useContext(AuthenContext)
    let [emailRequest,setEmailRequest] = useState(null)
    const [status, setStatus] = useState(true);
    const [code , setCode] = useState(0)
    const [msgResponse , setMsgResponse] = useState("")
    const [showInputs2And3, setShowInputs2And3] = useState(false);

    let [resetToken, setResetToken] = useState("")
    let [newPassword, setNewPassword] = useState("")

    let resetPassword = async () =>{
        const response = await resetPasswordCtx(resetToken,newPassword)
        console.log(response)
        if(response.status === 419)
        {
            setStatus(false)
            setCode(419)
            setMsgResponse(response.msg)
        }
        if(response.status === 498)
        {
            setStatus(false)
            setCode(498)
            setMsgResponse(response.msg)
        }
        if(response.status === 201)
        {
            setStatus(false)
            setCode(201)
            setMsgResponse(response.msg)
        }
    }

    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);

    const handlePasswordChange = (e) => {
        setNewPassword(e.target.value);
        setPasswordMatch(e.target.value === confirmPassword);
    };
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setPasswordMatch(e.target.value === newPassword);
    };

    const handleInput1Change = (event) => {
        const value = event.target.value;
        setResetToken(value)
        // Kiểm tra nếu input1 có ký tự thì hiển thị inputs 2 và 3, ngược lại ẩn đi
        if (value.trim().length > 0) {
            setShowInputs2And3(true);
        } else {
            setShowInputs2And3(false);
        }
    };
    let forgotPassword = async () => {
        const response = await forgotPasswordCtx(emailRequest)
        if(response.status === 201)
        {
            setStatus(false)
            setCode(0)
            setMsgResponse(response.complete)
        }
        if(response.status === 200)
        {
            setStatus(false)
            setCode(200)
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
        console.log(response)
    }
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a
                    href="/"
                    className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                >
                    <img
                        className="w-8 h-8 mr-2"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                        alt="logo"
                    />
                    Flowbite
                </a>
                <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">

                    {code === 0 || code === 404 ? (
                        <>
                            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Quên Mật Khẩu?
                            </h2>
                            <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="maildangky@gmail.com"
                                        required=""
                                        onChange={(e) => setEmailRequest(e.target.value)}
                                    />
                                    {status ? null : (
                                        <p className={`text-${ code === 404 || code ===403 ? 'red' : 'green'}-500 text-sm`}>{msgResponse}</p>
                                    )}
                                </div>
                                <button
                                    type="button"
                                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    onClick={() => forgotPassword()}
                                >
                                    Gửi yêu cầu
                                </button>
                            </form>
                        </>
                    ) : (
                        <>
                            {code === 200 || code === 419 || code === 498? (
                                <>
                                    <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Đổi Mật Khẩu
                                    </h2>
                                    <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Mã xác thực
                                            </label>
                                            <input
                                                type="text"
                                                name="text"
                                                id="text"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                placeholder="Nhập mã xác thực từ email: 996cfd40-d70a-4f31-b649-ae1f277243c7..."
                                                required=""
                                                onChange={handleInput1Change}

                                            />
                                            {status ? null : (
                                                <>
                                                    <p className={`text-${ code === 404 || code === 419 ||code ===403 || code === 498 ? 'red' : 'green'}-500 text-green-500 text-sm`}>{msgResponse}</p>
                                                    {code === 200 || code === 498 ? null:(
                                                        <button
                                                            type="button"
                                                            className="border-2 border-white text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                                            onClick={() => forgotPassword()}>Gửi lại yêu cầu
                                                        </button>
                                                    )}

                                                </>


                                            )}
                                            {showInputs2And3 && (
                                                <div>
                                                    <label
                                                        htmlFor="email"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    >
                                                        Mật khẩu mới
                                                    </label>
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        id="text"
                                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                        placeholder="Mật khẩu mới..."
                                                        required=""
                                                        value={newPassword}
                                                        onChange={handlePasswordChange}

                                                    />
                                                    <label
                                                        htmlFor="email"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    >
                                                        Xác nhận mật khẩu
                                                    </label>
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        id="text"
                                                        className={`bg-gray-50 border ${passwordMatch ? 'border-gray-300' : 'border-red-500'} text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                                        placeholder="Xác nhận mật khẩu..."
                                                        required=""
                                                        value={confirmPassword}
                                                        onChange={handleConfirmPasswordChange}
                                                    />
                                                    {passwordMatch ? null : (
                                                        <p className="text-red-500 text-sm">Mật khẩu xác nhận không khớp với mật khẩu đã nhập.</p>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                        <button
                                            type="button"
                                            className="w-full border-2 border-white text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                            onClick={() => resetPassword()}
                                        >
                                            Gửi yêu cầu
                                        </button>
                                    </form>
                                </>
                            ):(
                                <>
                                    <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Đổi mật khẩu thành công!
                                    </h2>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        {msgResponse}
                                    </label>
                                    <button
                                        type="button"
                                        className="w-full border-2 border-white text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    >
                                        <Link to="/login">Đăng nhập</Link>
                                    </button>
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>
        </section>

    );
};

export default ForgotRequest;
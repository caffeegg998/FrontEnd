import {Link, useNavigate} from "react-router-dom";
import {useContext, useState,useEffect} from "react";
import {AuthenContext} from "../../context/AuthenContext.jsx";
import * as yup from "yup";

import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

const SignupSchema = yup.object().shape({
    fullName: yup.string().required("Họ và tên không được bỏ trống"),
    username: yup.string().min(6,"Username phải có ít nhất 6 ký tự").max(12,"Username nhiều nhất là 12 ký tự").required(),
    email: yup.string().email().required("Email không được bỏ trống"),
    password: yup
        .string()
        .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
        .max(32, "Mật khẩu không được vượt quá 32 ký tự")
        .test("special-characters", "Mật khẩu phải chứa ít nhất một ký tự đặc biệt", value => /[!@#$%^&*()_+{}\[\]:;<>,.?~\-]/.test(value))
        .test("uppercase-letter", "Mật khẩu phải chứa ít nhất một chữ in hoa", value => /[A-Z]/.test(value))
        .test("digit", "Mật khẩu phải chứa ít nhất một chữ số", value => /[0-9]/.test(value))
        .required("Mật khẩu không được bỏ trống"),
});

const Register = () => {
    let navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(SignupSchema)
    });

    //input
    let[password, setPassword] = useState("")
    let[email,setEmail] = useState("");

    //check Password
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);

    //check Msg, error
    const [codeEmail , setCodeEmail] = useState(0)
    const [code , setCode] = useState(0)
    const [msgResponse , setMsgResponse] = useState("")
    const [status, setStatus] = useState(true);

    let {register: registerCtx,checkUser,checkEmail} = useContext(AuthenContext)
    let registerc = async (data) =>{

        const {fullName,username,password,email} = data
        console.log(data)
        const response = await registerCtx(fullName,username,password,email)
        console.log(response)
        if (response.status === 408){
            setStatus(false);
            setCode(408)
            setMsgResponse(response.msg)
        }
        if (response.status === 409){
            setStatus(false);
            setCode(409)
            setMsgResponse(response.msg)
        }
        if(response.status === 200)
        {
            navigate("/regsuccess")
        }

    }
    const [codeUser , setCodeUser] = useState(0)
    const handleUsernameChange = async (e) => {
        const checkUsername = e.target.value;
        if (checkUsername !== '') {
            const checkResponse = await checkUser(checkUsername);
            console.log(checkResponse)
            if (checkResponse.status === 200) {
                setStatus(false);
                setCodeUser(200);
            }if (checkResponse.status === 403) {
                setStatus(false);
                setCodeUser(403)
            }if(checkResponse.status === 400){
                setCodeUser(0)
            }

        }
    }
    const handleEmailChange = async (e) => {
        const checkEmailexist = e.target.value;
        if (checkEmailexist !== '') {
            const checkResponse = await checkEmail(checkEmailexist);
            console.log(checkResponse)
            if (checkResponse.status === 403) {
                setStatus(false);
                setCodeEmail(403);
            }else {
                setCodeEmail(0);
            }
        }
    }


    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordMatch(e.target.value === confirmPassword);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setPasswordMatch(e.target.value === password);
    };
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
                            Tạo Tài Khoản
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(registerc)}>
                            <div>
                                <label
                                    htmlFor="fullName"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Họ và tên
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    id="fullName"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Họ và tên..."
                                    required=""
                                    {...register('fullName')}
                                />
                                {errors.fullName && <p className={`text-red-500 text-sm`}>{errors.fullName.message}</p>}

                            </div>
                            <div>
                                <label
                                    htmlFor="username"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Tên đăng nhập
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Tên đăng nhập..."
                                    required=""
                                    {...register('username')}
                                    onChange={handleUsernameChange}
                                />
                                {status ? null : (
                                    <>
                                        { codeUser === 200 || codeUser === 403 ?(<>{ codeUser === 200 || codeUser === 403 ? <p className={`text-${codeUser === 403?'red':'green'}-500 text-sm`}>{codeUser === 403?'Username đã tồn tại!':'Bạn có thể sử dụng username này'}</p>:null}
                                        </>):null}
                                    </>
                                )}
                                {errors.username && <p className={`text-red-500 text-sm`}>{errors.username.message}</p>}
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    required=""
                                    {...register('email')}
                                    onChange={handleEmailChange}
                                />
                                {status ? null : (
                                    <>
                                        { codeEmail === 403 ? (<p className={`text-red-500 text-sm`}>Email này đã được đăng ký ở tài khoản khác!</p>) : null}
                                    </>
                                )}
                                {status ? null : (
                                    <>
                                        { code === 400 ?(<><p className={`text-red-500 text-sm`}>Email không được bỏ trống</p></>):null}
                                    </>
                                )}
                                {errors.email && <p className={`text-red-500 text-sm`}>{errors.email.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Mật khẩu
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                    {...register('password')}
                                    onChange={handlePasswordChange}
                                />
                                {status ? null : (
                                    <>
                                        { code === 400 ? (<p className={`text-red-500 text-sm`}>{msgResponse}</p>) : null}
                                    </>
                                )}{status ? null : (
                                <>
                                    { code === 400 ?(<><p className={`text-red-500 text-sm`}>Độ dài Password phải nằm trong khoảng 6 đến 10 ký tự.</p></>):null}
                                </>
                            )}
                                {errors.password && <p className={`text-red-500 text-sm`}>{errors.password.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Xác nhận mật khẩu
                                </label>
                                <input
                                    type="password"
                                    name="confirm-password"
                                    id="confirm-password"
                                    placeholder="••••••••"
                                    className={`bg-gray-50 border ${passwordMatch ? 'border-gray-300' : 'border-red-500'} text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                                    required=""
                                    value={confirmPassword}
                                    onChange={handleConfirmPasswordChange}
                                />
                                {passwordMatch ? null : (
                                    <p className="text-red-500 text-sm">Mật khẩu xác nhận không khớp với mật khẩu đã nhập.</p>
                                )}
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="terms"
                                        aria-describedby="terms"
                                        type="checkbox"
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                        required=""
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label
                                        htmlFor="terms"
                                        className="font-light text-gray-500 dark:text-gray-300"
                                    >
                                        Tôi chấp nhận các{" "}
                                        <a
                                            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                            href="#"
                                        >
                                            Điều khoản và Điều kiện
                                        </a>
                                    </label>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full border-2 border-white text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Tạo tài khoản
                            </button>
                            {/*<input type="submit"/>*/}
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Đã có tài khoản?{" "}
                                <a
                                    href="#"
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    <Link to="/login">Đăng nhập</Link>
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
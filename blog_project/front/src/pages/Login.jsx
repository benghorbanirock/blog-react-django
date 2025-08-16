import './../css/LoginAndSignup.css'
import { Link } from "react-router-dom"
import google from "./../assets/icons/google.svg"
import { IoMdEyeOff } from "react-icons/io"
import { IoMdEye } from "react-icons/io"
import { useState } from 'react'

const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const showHandler = () => {
        setShowPass(prev => !prev)
        const passInput = document.querySelector('.password');
        if (passInput.getAttribute('type') === 'password')
            passInput.setAttribute('type', 'text')
        else
            passInput.setAttribute('type', 'password')
    };

    return (
        <div className='formContainer'>
            <div className='loginAndSignupImg'></div>
            <div className='formWrapper'>
                <form onSubmit={(e) => e.preventDefault()}>
                    <h2>خوش آمدید</h2>
                    <input placeholder="نام کاربری" />
                    <div className='passContainer'>
                        <input className='password' type='password' placeholder="رمز عبور" />
                        {
                            showPass ?
                                <IoMdEye className='eyeIcon' onClick={showHandler} />
                                :
                                <IoMdEyeOff className='eyeIcon' onClick={showHandler} />
                        }
                    </div>
                    <div className='forget'>
                        رمز عبور خود را فراموش کرده اید؟
                        <span>بازیابی رمز عبور</span>
                    </div>
                    <button className='sendButton'>ارسال</button>
                    <div className='withAccount'>
                        <span>وارد شدن با</span>
                    </div>
                    <button className='googleButton'>
                        Google
                        <img src={google} alt="google" />
                    </button>
                    <div className='question'>
                        حساب کاربری ندارید؟
                        <span><Link to="/signup">ثبت نام</Link></span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
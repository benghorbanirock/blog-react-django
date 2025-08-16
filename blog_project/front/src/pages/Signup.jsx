import './../css/LoginAndSignup.css'
import { Link } from "react-router-dom"
import google from "./../assets/icons/google.svg"
import { IoMdEyeOff } from "react-icons/io"
import { IoMdEye } from "react-icons/io"
import { useState } from 'react'

const Signup = () => {
    const [showPass, setShowPass] = useState(false);
    const showHandler = () => {
        setShowPass(prev => !prev)
        const passInputs = document.querySelectorAll('.password');
        if (passInputs[0].getAttribute('type') === 'password')
            passInputs.forEach(item => item.setAttribute('type', 'text'));
        else
            passInputs.forEach(item => item.setAttribute('type', 'password'));
    };

    return (
        <div className='formContainer'>
            <div className='loginAndSignupImg'></div>
            <div className='formWrapper'>
                <form onSubmit={(e) => e.preventDefault()}>
                    <h2>خوش آمدید</h2>
                    <span>ثبت نام</span>
                    <input placeholder="شماره همراه" />
                    <div className='passContainer'>
                        <input className='password' type='password' placeholder="رمز عبور" />
                        {
                            showPass ?
                                <IoMdEye className='eyeIcon' onClick={showHandler} />
                                :
                                <IoMdEyeOff className='eyeIcon' onClick={showHandler} />
                        }
                    </div>
                    <div className='passContainer'>
                        <input className='password' type='password' placeholder="تکرار رمز عبور" />
                        {
                            showPass ?
                                <IoMdEye className='eyeIcon' onClick={showHandler} />
                                :
                                <IoMdEyeOff className='eyeIcon' onClick={showHandler} />
                        }
                    </div>
                    <button className='sendButton'>ارسال</button>
                    <div className='forget'>
                        رمز عبور خود را فراموش کرده اید؟
                        <span>بازیابی رمز عبور</span>
                    </div>
                    <div className='withAccount'>
                        <span>ثبت نام</span>
                    </div>
                    <button className='googleButton'>
                        Google
                        <img src={google} alt="google" />
                    </button>
                    <div className='question'>
                        عضو سفرکن هستید؟
                        <span><Link to="/login">ورود</Link></span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
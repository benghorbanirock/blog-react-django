import logo from './../assets/icons/logo.svg'
import { FaTwitter } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"
import './../css/footer.css'

const footerList = ['صفحه اصلی', 'درباره ما', 'تماس'];
const socialMediaList = [<FaTwitter />, <FaFacebookF />, <RiInstagramFill />];

const Footer = () => {
  return (
    <footer>
      <div className='topFooter'>
        <h2>
          <img src={logo} alt="logo" />
          سفرکن
        </h2>
        <ul className='links'>
          {footerList.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className='bottomFooter'>
        <ul className='socialMediaLinks'>
          {socialMediaList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p className='copyRight'>تمامی حقوق برای کاربر این محصول محفوظ است.</p>
      </div>
    </footer>
  )
}

export default Footer
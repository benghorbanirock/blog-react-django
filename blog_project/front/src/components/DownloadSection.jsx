import webApp from './../assets/images/webApp.png'
import myket from './../assets/icons/myket.svg'
import bazar from './../assets/icons/bazar.svg'
import './../css/downloadSection.css'

const DownloadSection = () => {
    return (
        <div className="downloadContainer">
            <div className='webAppContainer'>
                <img src={webApp} alt="web app" />
            </div>
            <p className='downloadDescription'>برنامه سفرکن را دانلود کنید تا از آخرین ویژگی های این برنامه در تلفن همراه بهره مند شوید</p>
            <div className='buttonContainer'>
                <button className='downloadButton'>
                    <img src={myket} alt="myket" />
                    <p>
                        دریافت از <span className='appStoreName'>مایکت</span>
                    </p>
                </button>
                <button className='downloadButton'>
                    <p>
                        دریافت از <span className='appStoreName'>بازار</span>
                    </p>
                    <img src={bazar} alt="bazar" />
                </button>
            </div>
        </div>
    )
}

export default DownloadSection
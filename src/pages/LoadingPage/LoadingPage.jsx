import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './LoadingPage.css'
import { useNavigate } from 'react-router-dom';

const LoadingPage = () => {
  // const navigate = useNavigate();

  useGSAP(() => {
    gsap.fromTo(
      '.loading-screen-container',
      {
        transform: 'translate(-100vw, -50%)',
        rotate: -30,
      },
      {
        transform: 'translate(-50%, -50%)',
        duration: 2,
        ease: 'elastic',
        rotate: 0
      }
    )
    gsap.fromTo(
      '.bar-fill',
      {
        transform: 'translate(-200%, -50%)'
      },
      {
        transform: 'translate(-50%, -50%)',
        duration: 5,
        ease: 'power1',
        repeat: 0,
        onComplete: () => {
          gsap.to(
            '.loading-screen-container',
            {
              scale: 200,
              duration: 1,
              rotate: -90,
              opacity: 0,
              // onComplete: () => {
              //   navigate('/');
              // }
            }
          )
        }
      }
    )
  })

  return(
    <div className="barba-container loading-page-container min-h-screen bg-black w-full flex justify-center items-center">
      <div className="loading-screen-container">
        <div className="bar-fill"></div>
        <div className="bar-container">
          <div className="text-container">
            <span>HACKOVERFLOW</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingPage;
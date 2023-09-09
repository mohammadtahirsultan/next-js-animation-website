import Link from "next/link"
import { TitleLogo } from "./Title"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { RiMenu4Line } from "react-icons/ri"
import { AiOutlineClose } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "@/redux/reducer/theme"
import Image from "next/image"
import sun from '@/public/images/sun.webp'
import moon from '@/public/images/moon.jpg'

const Header = () => {
  const [activeLink, setActiveLink] = useState("")
  const [open, setOpen] = useState(false)

  const router = useRouter()

  useEffect(() => {
    setActiveLink(router.pathname)
  }, [router.pathname])


  const dispatch = useDispatch()

  const { darkMode } = useSelector((state) => state.theme);


  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <>
      <header>
        <div className='container '>
          <div className='logo'>
            <Link href='/'>
              <TitleLogo caption='Artline' className='logomin' />
            </Link>
          </div>
          <button onClick={handleThemeToggle}>
            {
              darkMode ? <img className="h-8 w-8" src="images/moon.jpg" alt="moon" /> : <img className="h-8 w-8" src="/images/sun.webp" alt="sun" />
            }
          </button>
          <nav className={open ? "openMenu" : "closeMenu"} onClick={() => setOpen(null)}>
            <Link href='/' className={activeLink == "/" ? "activeLink" : "none"}>
              Home
            </Link>
            <Link href='/agency' className={activeLink == "/agency" ? "activeLink" : "none"}>
              About
            </Link>
            <Link href='/services' className={activeLink == "/services" ? "activeLink" : "none"}>
              Services
            </Link>
            <Link href='/showcase' className={activeLink == "/showcase" ? "activeLink" : "none"}>
              Showcase
            </Link>

            <button className='button-primary'>

              <a href="https://wa.me/923267985198" target="blank">
                Book a Consultation
              </a>
            </button>


          </nav>

          <button onClick={() => setOpen(!open)}>{open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}</button>

        </div>
      </header>
    </>
  )
}

export default Header

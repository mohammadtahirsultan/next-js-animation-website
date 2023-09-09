import { useSelector } from "react-redux";
import Footer from "./Footer"
import Header from "./Header"
import { Metadata } from "next";

const Layout = (props) => {



  const { darkMode } = useSelector((state) => state.theme);

  return (
    <>
      <div className={` ${darkMode ? `dark:bg-gray-800 dark:text-white` : `bg-white text-black`}`}>
        <Header />
        <main>{props.children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout

import Footer from "../Footer/Footer"
const HeaderAndFooter = ({children}) => {
    return (
        <>
            <h1> هدر فروشگاه اینترنتی اسنپ مارکت </h1>
            {children}
            <Footer></Footer>
        </>
    )
}

export default HeaderAndFooter


  

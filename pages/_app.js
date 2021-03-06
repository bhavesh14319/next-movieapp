import '../styles/globals.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function MyApp({ Component, pageProps }) {
  return <>
    <Header></Header>
    <Component {...pageProps} />
    <Footer></Footer>
  </>
}

export default MyApp

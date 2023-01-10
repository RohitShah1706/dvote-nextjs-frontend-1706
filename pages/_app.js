import '../styles/globals.css'
import "../styles/navbar.css"
import "../styles/header.css"
import { MoralisProvider } from 'react-moralis';
function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider initializeOnMount={false}>
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp

import Layout from "@/components/common/Layout"
import "@/styles/main.scss"
import "@/pages/index.css"
import { store } from "@/redux/store"
import { Provider } from "react-redux"
import ThemeProvider from "@/components/themeProvider"

export default function App({ Component, pageProps }) {

  return (

    <Provider store={store}>
      <ThemeProvider>

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>

  )
}


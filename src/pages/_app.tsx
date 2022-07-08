import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'themes/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>GPROJECT</title>
        <link rel="shortcut icon" href="" />
        <link rel="apple-touch-icon" href="" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="g-project" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App

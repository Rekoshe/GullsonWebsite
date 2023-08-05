import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></Script>
      <Script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></Script>

    </>
  )

}

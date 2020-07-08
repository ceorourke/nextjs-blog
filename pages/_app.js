import '../styles/global.css'
import * as Sentry from '@sentry/node'

Sentry.init({ 
	dsn: process.env.dsn,
	release: process.env.release,
});

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
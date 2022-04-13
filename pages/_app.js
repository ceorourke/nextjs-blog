import '../styles/global.css'
import * as Sentry from '@sentry/node'

console.log("this is a test")
Sentry.init({ 
	dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
	release: process.env.VERCEL_GITHUB_COMMIT_SHA,
});

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
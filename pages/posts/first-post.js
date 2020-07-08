import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import * as Sentry from '@sentry/node'

function notAFunction() {
  let num = 5;
	try {
  		num.toLowerCase();		
	} catch (error) {
		Sentry.captureException(error);
	}
}

export default function FirstPost() {
  return (
    <Layout>
      <Head>
      	<title>First Post</title>
      </Head>
      <p><button onClick={notAFunction()}>Click me to send an error to Sentry</button></p>
        Today I am sleeping in the cat tree while mom writes my blog for me!
    </Layout>
  )
}
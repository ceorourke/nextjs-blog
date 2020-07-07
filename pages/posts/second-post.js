import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function SecondPost() {
  return (
    <Layout>
      <Head>
      	<title>Second Post!!</title>
      </Head>
      <p>
        Update: I am still sleeping in the cat tree but I am dreaming of tuna.
       </p>
    </Layout>
  )
}
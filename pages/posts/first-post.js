import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
      	<title>First Post</title>
      </Head>
        Today I am sleeping in the cat tree while mom writes my blog for me!
    </Layout>
  )
}
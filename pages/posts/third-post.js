import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import * as Sentry from '@sentry/node'

export default function ThirdPost() {
  return (
    <Layout>
      <Head>
      	<title>Third Post</title>
      </Head>
        Today I annoyed my mom so much she put me in time out, but I was a good cat after being banished to the hallway and have learned my lesson.
    </Layout>
  )
}
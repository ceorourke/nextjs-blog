import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm a reeeeally cute cat.</p>
        <p> Read <Link href="/posts/first-post"><a>about my life!!</a></Link></p>
        <p> Read <Link href="/posts/second-post"><a>more about my life!!</a></Link></p>
        <p> Read <Link href="/posts/third-post"><a> even more about my life!!</a></Link></p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}

export default Home;
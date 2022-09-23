import React from 'react'
import Link from 'next/link'
import styles from '../src/styles/index.module.css'
import Head from 'next/head'

const Page = ({content}) => {

    return (
        <div className={styles.page}>
            <Head>
                <title>Note App</title>
            </Head>
            <div className={styles.div}>
                <h1 className={styles.h1}>{content.title}</h1>
                {/* <Link href = '/notes'>
                    <a className={styles.link}>
                        Notes
                    </a>
                </Link> */}
            </div>
        </div>
    )
}

export async function getStaticProps() {
    return {
      props: {
        content: {
          title: 'This is a really dope note taking app.'
        }
      }
    }
  }

export default Page
/* eslint-disable react/jsx-key */
import React from 'react'
import Link from 'next/link'
import styles from '../../src/styles/notes.module.css'
import Head from 'next/head'

const Page = ({note}) => {
  // const notes = new Array(15).fill(1).map((e, i) => ({id: i+1, title: `Note: ${i+1}`}))

  return (
    <div className={styles.page}>

      <Head>
          <title>My Notes</title>
      </Head>

      <h1 className={styles.h1}>My Notes</h1>

      <div className={styles.noteCont}>

        {note.map(n => (

          <div className={styles.notelink}>

            <Link key={n.id} href="/notes/[id]" as={`/notes/${n.id}`}>

              <a className={styles.card}>
                <strong>{n.title}</strong>
              </a>
              
            </Link>

          </div>

        ))}

      </div>

    </div>
  )
}

export async function getServerSideProps({params,req,res}) {
  const response = await fetch(`${process.env.API_URL}/api/note/`)

  if(!response.ok) {
    res.writeHead(302, { Location: '/' }).end()
    return { props: {} }
  }

  const { data } = await response.json();
  
  if (data) {
    return {
      props: {note: data}
    }
  }
}

export default Page
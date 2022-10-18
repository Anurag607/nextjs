import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../../src/styles/note.module.css'
import { mkdirSync } from 'fs'

const Page = ({note}) => {

    const router = useRouter()

    return (
        <div className={styles.page}>
            <h1 className={styles.h1}>{note.title}</h1>
            <Link href="/notes">
                <a className={styles.link}>
                    Back
                </a>
            </Link>
            <Head>
                <title>{note.title}</title>
            </Head>
        </div>
    )
}

export async function getServerSideProps({params, req, res}) {
    const response = await fetch(`${process.env.API_URL1}/api/note/${params.id}`)

    if(!response.ok) {
        res.writeHead(302, {Location: '/notes'}).end()
        return { props: {} }
    }

    const {data} = await response.json()

    if(data) {
        return { props: {note: data} }
    }
}

export default Page
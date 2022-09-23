import React from 'react'
import { useRouter } from 'next/router'
import styles from '../src/styles/notes.module.css'

const Notegen = (props) => {
    return (
        <span>
            Note : {props.note}
        </span>
    )
}

const Notes = (props) => {
    let row = []
    
    try {
        props.notes.map(item => {
            row.push(
                <Notegen note = {item} key = {item} />
            )
        })
    } catch (e) {
        console.log(e.message)
    }

    return (
        <div className={styles.notes}>
            {row}
        </div>
    )
}

const Page = () => {
    const router = useRouter()

    const { params } = router.query

    return (
        <Notes key = {params} notes = {params} />
    )
}

export default Page
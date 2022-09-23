import Link from 'next/link'
import styles from '../styles/nav.module.css'

const Nav = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <Link href="/">
        <a className={styles.a1}>Note App</a>
      </Link>

      <Link href="/notes">
        <a className={styles.a2}>Notes</a>
      </Link>
    </nav>
  </header>
)

export default Nav
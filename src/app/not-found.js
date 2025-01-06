import React from 'react'
import  styles from '@/app/styles/common.module.css';
import Link from 'next/link';

const notFound = () => {
  return (
    <section className={styles.container}>
    <div className={styles.error_page}>
        <h1>404</h1>
      <h2 >Page Not Found</h2>
      <p>could not find requested resource</p>
      <Link href="/">
        <button>Go to Home</button>
      </Link>
    </div>
    </section>
  )
}

export default notFound
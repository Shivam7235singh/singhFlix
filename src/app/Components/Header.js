import * as React from 'react';
import styles from '@/app/styles/navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Nav from "@/app/Components/Nav";


const Header = () => {
  return (
    <header className={styles.main_header}>
      <div className= {styles.navbar_brand}>
        <Link href="/">
        <h2 className={styles.logo  } >SinghFlix</h2>
          {/* <Image src="/logo.png" alt="logo" width={150} height={40} /> */}
        </Link>
      </div>
      <Nav/>
    </header>
  )
}
export default Header ;
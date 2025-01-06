import React from 'react'
import styles from '@/app/styles/common.module.css'
import Image from 'next/image'

const ContactCard = ({props}) => {
    
    const {title, description, imageUrl, id} = props;
  return (
    <div>
        <div className={styles.card}>
            <div className={styles.card_image}>
                <Image src={} alt='card_image' fill/>
                <div className={styles.card_title}>
                    <h2>
                        {title}
                    </h2>

                </div>
                <div className={styles.card_description}>
                    <p>
                        {description}
                    </p>
                </div>
                <div className={styles.card_btn}>
                    <button >

                    </button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ContactCard
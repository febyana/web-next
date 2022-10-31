
import Image from 'next/image'
import styles from './footer.module.css';

export default function Footer() {
   return (
      <>
        <div className={styles.footer}>
            Created by ....
            {/* <span className={styles.logo}>
                <Image src="/assets/mobil.png" alt="Vercel Logo" width={72} height={25} />
            </span> */}
        </div>
      </>
   );
}
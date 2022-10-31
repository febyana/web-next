
import Link from 'next/link';
import style from './headers.module.css';

export default function Headers() {
   return (
      <>
         <div className={style.topnav}>
            <p><Link href="/">Dashboard</Link></p>
            <p><Link href="/users">Users</Link></p>
            <p><Link href="/profile">Profile</Link></p>
            {/* <a>logout</a> */}
         </div>
      </>
   );
}
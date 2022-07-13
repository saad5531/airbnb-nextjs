import Image from 'next/image'
import Link from 'next/link'
import Header from '../Header'
// import React from 'react'

import s from "./Test.module.scss"

const Test = () => {
  return (
    <div className='container'>
      

      <div className={`${s.text1} container`}>Test</div>

      <Link href="#">
        <a>
          <div>asjdaskdhasli</div>
        </a>
      </Link>

      <Link href='#'><a>jdkdchjk</a></Link>

      <Image src="/images/logo.png" width={150} height={70} alt="jehrkewjhrkwe" />
      <Header />

      <div className={s.imgWrapper}><Image src={"/images/logo.png"} alt='gyyj' layout='fill' /></div>
    </div>
  )
}

export default Test
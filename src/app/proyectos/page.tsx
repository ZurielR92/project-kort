import { TitlePage } from '@/Components/TitlePage'
import React from 'react'
import styles from './page.module.scss'
import Image from 'next/image'

const ProjectsPage = () => {
  return (
    <main className={styles.page}>
        <TitlePage title='Proyectos'></TitlePage>
        
        <div className={styles.gallery}>
            <div>
                <Image src={'/projects/1.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/projects/2.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/projects/3.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/projects/4.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/projects/5.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/projects/6.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/projects/7.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/projects/8.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/projects/9.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/projects/10.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/projects/11.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/projects/12.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/projects/13.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/projects/14.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/projects/15.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/projects/16.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/projects/17.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/projects/18.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/projects/19.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/projects/20.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/projects/21.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/projects/22.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/projects/23.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/projects/24.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/projects/25.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/projects/26.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/projects/27.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/projects/28.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/projects/29.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/projects/10.jpg'} fill alt=''/>
            </div>

        </div>


    </main>
  )
}

export default ProjectsPage
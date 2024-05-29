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
                <Image src={'/img/productos/publicidad-exterior/rompretrafico.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/img/productos/publicidad-exterior/rompretrafico.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/img/productos/publicidad-exterior/rompretrafico.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/img/productos/publicidad-exterior/rompretrafico.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/img/productos/publicidad-exterior/rompretrafico.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/img/productos/publicidad-exterior/rompretrafico.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/img/productos/publicidad-exterior/rompretrafico.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/img/productos/publicidad-exterior/rompretrafico.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/img/productos/publicidad-exterior/rompretrafico.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/img/productos/publicidad-exterior/rompretrafico.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/img/productos/publicidad-exterior/rompretrafico.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/img/productos/publicidad-exterior/rompretrafico.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/img/productos/publicidad-exterior/rompretrafico.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/img/productos/publicidad-exterior/rompretrafico.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/img/productos/publicidad-exterior/rompretrafico.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/img/productos/publicidad-exterior/rompretrafico.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/img/productos/publicidad-exterior/rompretrafico.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/img/productos/publicidad-exterior/rompretrafico.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/img/productos/publicidad-exterior/rompretrafico.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/img/productos/publicidad-exterior/rompretrafico.jpg'} fill alt=''/>
            </div>
            <div>
                <Image src={'/img/productos/publicidad-exterior/rompretrafico.jpg'} fill alt=''/>
            </div>
        </div>


    </main>
  )
}

export default ProjectsPage
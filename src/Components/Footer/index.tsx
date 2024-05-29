import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { IconsSocial } from '../IconsSocial'

//Importacion de estilos
import styles from './Footer.module.scss'

//Propiedades que recibe el componente
interface Props {
}


export const Footer:FC<Props> = () => {
    return (
        <div className={ styles.footer }>

            <div className={ styles.grid } >
                <div>
                    <Image alt='' src={'/logo-kbk-dark.png'} width={140} height={70}/>   
                    <p>
                        Nuestra Agencia, ubicada en la Ciudad de Medellín, cuenta con el talento humano, tecnología y experiencia para afrontar los retos que propongan nuestros clientes y poder satisfacer todas sus necesidades en materia de artes gráficas.
                    </p>
                </div>
                <nav>
                    <h2>Nuestra Web</h2>
                    <ul>
                        <li>
                            <Link href={'/'}>Inicio</Link>
                        </li>
                        <li>
                            <Link href={'/proyectos'}>Proyectos</Link>
                        </li>
                        <li>
                            <Link href={'/preguntas-frecuentes'}>Preguntas Frecuentes</Link>
                        </li>
                        <li>
                            <Link href={'/contacto'}>Contacto</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <h3>Siguenos</h3>
                    <IconsSocial/>
                </div>
            </div>
            <div className={ styles.copyright }>
                Copyright 2023 | Desarrollado y Posicionado por Kúbica Agencia
            </div>

        </div>
    )

}

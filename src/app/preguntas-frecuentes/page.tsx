import React from 'react'
import styles from './page.module.scss';
import { TitlePage } from '@/Components/TitlePage';
import Image from 'next/image';
import Link from 'next/link';

const FaqsPage = () => {
  return (
    <main className={styles.page}>
        
        <TitlePage title='Preguntas Frecuentes'></TitlePage>


        <ul>

            <li>
                <div>
                    <Image src={'/arrow.png'} width={30} height={30} alt='arrow icon'/>
                    <h2>¿Que servicios ofrece Kúbica Agencia?</h2>
                </div>
                <p>
                    En <Link href={'/'}>Kúbica Agencia</Link> ofrecemos una amplia gama de servicios de diseño, impresión y publicidad para ayudar a las empresas a alcanzar sus objetivos. Contamos con un equipo de expertos creativos y profesionales que pueden ayudarte con todo, desde el diseño de tu marca hasta la producción de material impreso.
                </p>
            </li>

            <li>
                <div>
                    <Image src={'/arrow.png'} width={30} height={30} alt='arrow icon'/>
                    <h2>¿Por que debería elegir Kúbica Agencia?</h2>
                </div>
                <p>
                    Existen muchas razones para elegir <Link href={'/'}>Kúbica Agencia</Link>. Nos comprometemos con la creación de material publicitario que se ajuste a tus necesidades y presupuesto, y ofrecemos un servicio al cliente excepcional. Además, estamos constantemente actualizados con las últimas tendencias en marketing y publicidad, y tenemos un historial probado de éxito en ayudar a las empresas a alcanzar sus objetivos.
                </p>
            </li>

            <li>
                <div>
                    <Image src={'/arrow.png'} width={30} height={30} alt='arrow icon'/>
                    <h2>¿Como puedo obtener un presupuesto para sus servicios?</h2>
                </div>
                <p>
                    Para obtener un presupuesto sin compromiso, simplemente completa nuestro formulario de contacto en línea o llámanos al <strong>318 745 84 82</strong>. Uno de nuestros representantes se pondrá en contacto contigo lo antes posible para discutir tus necesidades y proporcionarte un presupuesto personalizado.
                </p>
            </li>

            <li>
                <div>
                    <Image src={'/arrow.png'} width={30} height={30} alt='arrow icon'/>
                    <h2>¿Que tipo de clientes atienden?</h2>
                </div>
                <p>
                    Atendemos a una amplia gama de clientes, desde pequeñas empresas hasta grandes corporaciones. Tenemos experiencia en una variedad de industrias, y estamos seguros de que podemos ayudarte a alcanzar tus objetivos.
                </p>
            </li>

            <li>
                <div>
                    <Image src={'/arrow.png'} width={30} height={30} alt='arrow icon'/>
                    <h2>¿Como Puedo contactarlos?</h2>
                </div>
                <p>
                    Puedes contactarnos por teléfono al <strong>318 745 84 82</strong>, por correo electrónico a <strong>medellin@agenciakbk.com</strong> o completando nuestro formulario de contacto en línea en <Link href={'/contacto/.'}>https://www.kbk-agenciamedellin.com/contacto/.</Link>
                </p>
            </li>


        </ul>

    </main>
  )
}

export default FaqsPage
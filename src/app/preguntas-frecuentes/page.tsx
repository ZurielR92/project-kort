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

            <li>
                <div>
                    <Image src={'/arrow.png'} width={30} height={30} alt='arrow icon'/>
                    <h2>¿Que pasos debo seguir para realizar una compra?</h2>
                </div>
                <p>
                    <strong>1.</strong> Contáctanos a nuestros números y en ellos un asesor te asesorara según las características y observaciones que indiques. <br /><br />

                    <strong>2.</strong> Realiza el diseño por medio de nuestro equipo, dándonos las indicaciones de como quieres que luzca tu pieza y que esperas que transmita, este paso finaliza con la aprobación de tu diseño para mandar a producción <br /><br />

                    <strong>3.</strong> Al haber llegado a un acuerdo y aprobación de tus diseños, debes realizar el pago y enviar el comprobante a tu asesor con el que hiciste todo el proceso. <br /><br />

                    <strong>5.</strong> Por ultimo selecciona el método de entrega por el que deseas recibir tus piezas, ya sea envió, domicilio o contra entrega en la ciudad de Medellín. <br /><br />

                    <strong>NOTA:</strong> en caso tal de que quieras enviar tu diseño debe estar previamente revisado que cumpla con las características técnicas para enviar a producción.
                </p>
            </li>

            <li>
                <div>
                    <Image src={'/arrow.png'} width={30} height={30} alt='arrow icon'/>
                    <h2>¿Que metodos de pago manejan?</h2>
                </div>
                <p>
                    Contamos con varios métodos de pago para tus pendones , ya sea transferencia bancaria, pagos contra entrega en domicilio o directamente en nuestro local.
                </p>
            </li>

            <li>
                <div>
                    <Image src={'/arrow.png'} width={30} height={30} alt='arrow icon'/>
                    <h2>¿Pueden mostrarme ejemplos de su trabajo previo?</h2>
                </div>
                <p>
                    Claro que si, puedes ingresar a la sección de proyectos donde encontraras una extensa galería de proyectos en los que hemos trabajado <Link href={'/proyectos'}>wwww.kbk-agenciamedellin.com/proyectos</Link>
                </p>
            </li>


        </ul>

    </main>
  )
}

export default FaqsPage
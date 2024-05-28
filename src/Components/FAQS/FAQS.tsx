import React from 'react';
import styles from './FAQS.module.scss'
import Image from 'next/image';
import Link from 'next/link';

export interface FAQSProps {
	// types...
}

const FAQS: React.FC<FAQSProps>  = ({}) => {
	return (
		<section className={styles.faqs}>
			<Image src={'/peet.png'} width={687} height={539} alt=''/>

			<div>

				<div className={styles.title}>
					<div className={styles.image}>
						<Image src={'/arrow.png'} fill alt=''/>
					</div>
					<div>
						<strong>respondemos tus preguntas</strong>
						<h2><strong>Preguntas</strong> mas Frecuentes</h2>
					</div>

				</div>

				<ul>
					<li>
						<div className={styles.image}>
							<Image src={'/arrow.png'} fill alt=''/>
						</div>
						<Link href={'/preguntas-frecuentes'}>¿Que servicios ofrece Kúbica Agencia?</Link>
					</li>
					<li>
						<div className={styles.image}>
							<Image src={'/arrow.png'} fill alt=''/>
						</div>
						<Link href={'/preguntas-frecuentes'}>¿Por que elegir Kúbica Agencia?</Link>
					</li>
					<li>
						<div className={styles.image}>
							<Image src={'/arrow.png'} fill alt=''/>
						</div>
						<Link href={'/preguntas-frecuentes'}>¿Como puedo obtener un presupuesto para sus servicios?</Link>
					</li>
					<li>
						<div className={styles.image}>
							<Image src={'/arrow.png'} fill alt=''/>
						</div>
						<Link href={'/preguntas-frecuentes'}>¿Que tipo de clientes atienden?</Link>
					</li>
					<li>
						<div className={styles.image}>
							<Image src={'/arrow.png'} fill alt=''/>
						</div>
						<Link href={'/preguntas-frecuentes'}>¿Donde puedo encontrar mas información sosbre sus servicios?</Link>
					</li>
					<li>
						<div className={styles.image}>
							<Image src={'/arrow.png'} fill alt=''/>
						</div>
						<Link href={'/preguntas-frecuentes'}>¿Como puedo contactarlos?</Link>
					</li>
				</ul>

			</div>
			

 		</section>
	);
};

export default FAQS;

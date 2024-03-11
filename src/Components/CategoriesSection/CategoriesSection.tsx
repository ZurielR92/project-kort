'use client'
import { motion } from 'framer-motion';
import React, { FC, useRef, useState } from 'react';
import styles from './CategoriesSection.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { url } from 'inspector';

export interface CategoriesSectionProps {
	// types...
}


const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;


const CategoriesSection: React.FC<CategoriesSectionProps>  = ({}) => {














	return (
		<>

 			<section className={styles.container}>
				<div className={styles.title}>
					<h2>IMPRESION <br /> <strong>GRAN FORMATO</strong></h2>
					<p>
						Desde vallas publicitarias que dominan el horizonte hasta murales que transforman espacios, nuestro equipo de expertos en impresión en gran formato está aquí para hacer realidad tus visiones. Utilizamos tecnología de vanguardia y materiales de primera calidad para garantizar resultados que no solo se ven bien, sino que también transmiten el mensaje que deseas compartir.
					</p>
					<Link href={'/'}>
						<button>
							Mas informción sobre Impresión Gran Formato en Medellín
						</button>
					</Link>
				</div>
				<TildCard
					title='Pendones'
					srcImage='/img\products\gran_formato\pendon_varillas.jpg'
					altImage='Impresión de Pendones en Medellín'
					ariaLabel=''
					url='/'
				/>
				<TildCard
					title='Decoración Vheícular'
					srcImage='/img\products\gran_formato\decoracion_vehicular.jpg'
					altImage='Impresión de Pendones en Medellín'
					ariaLabel=''
					url='/'
				/>
				<TildCard
					title='Vinilos Adhesivos'
					srcImage='/img\products\gran_formato\vinilo_fotomural.jpg'
					altImage='Impresión de Pendones en Medellín'
					ariaLabel=''
					url='/'
					spanColumn
				/>
				<TildCard
					title='Microperforados'
					srcImage='/img/products/plegadizas.jpg'
					altImage='Impresión de Pendones en Medellín'
					ariaLabel=''
					url='/'
				/>
			</section>

 			<section className={`${styles.container} ${styles.right}`}>
				<div className={styles.title}>
					<h2>LASER <br /> <strong>CORTE Y GRABADO</strong></h2>
					<p>
						Desde vallas publicitarias que dominan el horizonte hasta murales que transforman espacios, nuestro equipo de expertos en impresión en gran formato está aquí para hacer realidad tus visiones. Utilizamos tecnología de vanguardia y materiales de primera calidad para garantizar resultados que no solo se ven bien, sino que también transmiten el mensaje que deseas compartir.
					</p>
					<Link href={'/'}>
						<button>
							Mas informción sobre Corte y Grabado Lase en Medellín
						</button>
					</Link>
				</div>
				<TildCard
					title='Avisos en Neonflex'
					srcImage='/img\products\publicidad_exterior\neonflex_sencillo.jpg'
					altImage='Avisos de Neonflex en Medellín'
					ariaLabel=''
					url='/'
				/>
				<TildCard
					title='Avisos en Acrilico'
					srcImage='/img\products\publicidad_exterior\aviso_luminoso_acrilico.jpg'
					altImage='Impresión de Pendones en Medellín'
					ariaLabel=''
					url='/'
				/>
				<TildCard
					title='Decoración e Iluminación'
					srcImage='/img\products\gran_formato\vinilo_fotomural.jpg'
					altImage='Impresión de Pendones en Medellín'
					ariaLabel=''
					url='/'
					spanColumn
				/>
				<TildCard
					title='Trofeos y Placas Conmemorativas'
					srcImage='/img/products/plegadizas.jpg'
					altImage='Impresión de Pendones en Medellín'
					ariaLabel=''
					url='/'
				/>
			</section>
 		</>
	);
};

export default CategoriesSection;


interface TildCardProps {
	ariaLabel:string
	title: string
	altImage: string
	srcImage: string
	url: string
	spanColumn?: boolean
	spanRow?: boolean
}
const TildCard:FC<TildCardProps> = ({title, altImage, srcImage, ariaLabel, url, spanColumn, spanRow}) => {
	const ref:any = useRef(null);
	const [rotateX, setRotateX] = useState(0);
	const [rotateY, setRotateY] = useState(0);
	const handleMouseMove = (e:any) => {
		if (!ref.current) return;
		const rect = ref.current.getBoundingClientRect();
		const width = rect.width;
		const height = rect.height;
		const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
		const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
		const rY = mouseX / width - HALF_ROTATION_RANGE;
		const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
		setRotateX(rX);
		setRotateY(rY);
	};
	const handleMouseLeave = () => {
		if (!ref.current) return;
		setRotateX(0);
		setRotateY(0);
	};

	return (
		<Link href={url} aria-label={ariaLabel}>
			<motion.div 
				className={`${styles.card}`}
				ref={ref}
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
				style={{
				transformStyle: "preserve-3d",
				}}
				animate={{
				rotateX,
				rotateY,
				}}
				whileHover={{
					scale:1.05,
					boxShadow:'0px 0px 5px rgba(0,0,0,.5)'
				}}
			>
				<Image src={srcImage} fill alt={altImage}/>
				<h3
				style={{
					transform: "translateZ(50px)",
				}}
				>{title}</h3>
			</motion.div>
		</Link>
		
	)
}
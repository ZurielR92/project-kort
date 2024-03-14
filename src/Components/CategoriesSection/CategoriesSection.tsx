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
					srcImage='/img\productos\gran-formato\pendones.jpg'
					altImage='Impresión de Pendones en Medellín'
					ariaLabel=''
					url='/'
				/>
				<TildCard
					title='Decoración Vheícular'
					srcImage='/img\productos\gran-formato\decoracion-vehicular.jpg'
					altImage='Impresión de Pendones en Medellín'
					ariaLabel=''
					url='/'
				/>
				<TildCard
					title='Vinilos Adhesivos'
					srcImage='/img\productos\gran-formato\vinilos-adhesivos.jpg'
					altImage='Impresión de Pendones en Medellín'
					ariaLabel=''
					url='/'
					spanColumn
				/>
				<TildCard
					title='Microperforados'
					srcImage='/img\productos\gran-formato\microperforados.jpg'
					altImage='Impresión de Pendones en Medellín'
					ariaLabel=''
					url='/'
				/>
			</section>

 			<section className={`${styles.container} ${styles.right}`}>
				<div className={styles.title}>
					<h2>LASER <br /> <strong>CORTE Y GRABADO</strong></h2>
					<p>
						Descubre el poder de la precisión láser para dar vida a tus ideas más audaces. En nuestra agencia de publicidad, ofrecemos servicios de corte láser de vanguardia que te permiten materializar tus diseños con una calidad impecable. Desde materiales tradicionales hasta innovadores, nuestro equipo experto te guiará en cada paso del proceso, asegurando resultados que superen tus expectativas. Déjanos ser tu socio en la materialización de tus proyectos creativos y marca la diferencia en el mercado.
					</p>
					<Link href={'/'}>
						<button>
							Mas informción sobre Corte y Grabado Laser en Medellín
						</button>
					</Link>
				</div>
				<TildCard
					title='Avisos en Neonflex'
					srcImage='/img\productos\corte-laser\avisos-neonflex\avisos-neonflex.jpg'
					altImage='Avisos de Neonflex en Medellín'
					ariaLabel=''
					url='/'
				/>
				<TildCard
					title='Avisos en Acrilico'
					srcImage='/img\productos\corte-laser\avisos-acrilico\avisos-acrilico.jpg'
					altImage='Impresión de Pendones en Medellín'
					ariaLabel=''
					url='/'
				/>
				<TildCard
					title='Decoración e Iluminación'
					srcImage='/img\productos\corte-laser\decoracion-iluminacion\decoracion-iluminacion.jpg'
					altImage='Impresión de Pendones en Medellín'
					ariaLabel=''
					url='/'
					spanColumn
				/>
				<TildCard
					title='Trofeos y Placas Conmemorativas'
					srcImage='/img\productos\corte-laser\placas-conmemorativas\placas-conmemorativas.jpg'
					altImage='Impresión de Pendones en Medellín'
					ariaLabel=''
					url='/'
				/>
			</section>


			<section className={styles.action}>
				<h2>
					¿Listo para llevar tus proyectos al siguiente nivel?
				</h2>
				<Link target='_blank' href={'/'}>
					<button>Pide una Cotización</button>
				</Link>
			</section>


 			<section className={`${styles.container}`}>
				<div className={styles.title}>
					<h2>PUBLICIDAD <br /> <strong>EXTERIOR</strong></h2>
					<p>
						Deja una marca imborrable en la mente de tu audiencia con publicidad exterior de primera categoría. Desde vallas tradicionales hasta carteles estratégicamente ubicados en puntos clave de la ciudad, te ofrecemos la oportunidad de destacarte en el bullicio urbano y capturar la atención de tus clientes potenciales. Nuestro equipo creativo y experto en marketing trabajará contigo para diseñar campañas que resuenen con tu audiencia y generen un impacto tangible en tu marca.
					</p>
					<Link href={'/'}>
						<button>
							Mas informción sobre Publicidad Exterior en Medellín
						</button>
					</Link>
				</div>
				<TildCard
					title='Avisos Luminosos'
					srcImage='/img\productos\publicidad-exterior\aviso-luminoso.jpg'
					altImage='Produccion de Avisos Luminosos en Medellín'
					ariaLabel=''
					url='/' 
				/>
				<TildCard
					title='Vallas'
					srcImage='/img\productos\publicidad-exterior\vallas.jpg'
					altImage='Produccion e instalación de Vallas publicitarias en medellín'
					ariaLabel=''
					url='/'
				/>
				<TildCard
					title='Bastidores'
					srcImage='/img\productos\publicidad-exterior\bastidores.jpg'
					altImage='Impresión de Pendones en Medellín'
					ariaLabel=''
					url='/'
					spanColumn
				/>
				<TildCard
					title='Rompetráficos'
					srcImage='/img\productos\publicidad-exterior\rompretrafico.jpg'
					altImage='Impresión de Pendones en Medellín'
					ariaLabel=''
					url='/'
				/>
			</section>



 			<section className={`${styles.container} ${styles.right}`}>
				<div className={styles.title}>
					<h2>PLOTTER <br /> <strong>DE CORTE</strong></h2>
					<p>
					Con tecnología de punta y un equipo altamente capacitado, podemos convertir tus diseños más intrincados en productos tangibles con una precisión milimétrica. Ya sea que necesites vinilos decorativos, letras corpóreas o gráficos personalizados, nuestro plotter de corte puede manejar una amplia gama de materiales y tamaños, asegurando resultados impecables en cada proyecto. Confía en nosotros para dar vida a tus ideas con la máxima calidad y detalle. Tu visión es nuestra prioridad, y con nuestro plotter de corte, la perfección está garantizada en cada paso del camino.
					</p>
					<Link href={'/'}>
						<button>
							Mas informción sobre Corte Plotter en Medellín
						</button>
					</Link>
				</div>
				<TildCard
					title='Stickers Adhesivos'
					srcImage='/img\productos\corte-plotter\stickers.jpg'
					altImage='Produccion de Avisos Luminosos en Medellín'
					ariaLabel=''
					url='/' 
				/>
				<TildCard
					title='Decoración con Vinilo'
					srcImage='/img\productos\corte-plotter\decoracion-vinilo.jpg'
					altImage='Produccion e instalación de Vallas publicitarias en medellín'
					ariaLabel=''
					url='/'
				/>
				<TildCard
					title='Señalización en Vinilo'
					srcImage='/img\productos\corte-plotter\senalizacion-vinilo.jpg'
					altImage='Impresión de Pendones en Medellín'
					ariaLabel=''
					url='/'
					spanColumn
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
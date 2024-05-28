import React, { ReactNode } from 'react';
import styles from './WelcomeSection.module.scss';
import CurveSVG from '../icons/CurveSVG';
import Image from 'next/image';

export interface WelcomeSectionProps {
	title: ReactNode
	description: ReactNode
	urlImage: string
	altImage?: string
	urlAction?: string
	textAction?:string
}

const WelcomeSection: React.FC<WelcomeSectionProps>  = ({
	title,
	description,
	urlImage,
	altImage = 'Bienvenidos a Kubica Agencia',
}) => {

	return (
		<section className={styles.welcomesection}>
			<div className={styles.container}>


				<div className={styles.info}>
					<h1><span className={styles.blue}>Diseño,</span> <span className={styles.green}>Impresión</span> y <span className={styles.green}>Estrategias</span> <span className={styles.blue}>Publicitarias</span> en la ciudad de <span className={styles.green}>Medellín</span></h1>
					<p>
						En Agencia Kúbica somos expertos en impulsar marcas, combinamos diseño, impresión y estrategias publicitarias innovadoras para que tu empresa destaque y alcance sus objetivos
					</p>

					<div className={styles.counters}>
						<div>
							<strong>10+</strong>
							<h2>Años de <br /> Experiencia</h2>
						</div>
						<span></span>
						<div>
							<strong>580</strong>
							<h2>Clientes <br /> Satisfechos</h2>
						</div>
						<span></span>
						<div>
							<strong>7380</strong>
							<h2>Proyectos <br /> Realizados</h2>
						</div>
					</div>

				</div>

				<div className={styles.image}>


					<Image priority src={'/welcome.png'} width={540} height={509} alt={altImage}/>


				</div>


			</div>

 		</section>
	);
};

export default WelcomeSection;
















/* const WelcomeSection: React.FC<WelcomeSectionProps>  = ({
	title,
	description,
	urlImage,
	altImage = 'Bienvenidos a Kubica Agencia',
	urlAction = '/contacto',
	textAction = '¡Quiero una Cotizacíón!'

}) => {

	const customersCount = useMotionValue(0);
	const customers = useTransform(customersCount, Math.round);
	const yearsCount = useMotionValue(0);
	const years = useTransform(yearsCount, Math.round)
	const projectsCount = useMotionValue(0);
	const projects = useTransform(projectsCount, Math.round)

	useEffect(() => {
		const animateCustomers = animate(customersCount, 580, { duration: 2 });
		const animateYears = animate(yearsCount, 10, {duration:1})
		const animateprojects = animate(projectsCount, 7380, {duration: 4 })

	  }, []);

	return (
		<section className={styles.welcomesection}>
			<CurveSVG className={styles.svg}/>
			<div className={styles.container}>
				<motion.div 
					className={styles.info}
					initial={{
						opacity:0,
						translateX:'-100px'
					}}
					animate={{
						opacity:1,
						translateX:0
					}}
					viewport={{
						once:true
					}}
				>
					<h1>{title}</h1>
					<p>
						{description}
					</p>

					<div className={styles.counters}>
						<div>
							<motion.strong>{years}</motion.strong>
							<h2>Años de <br /> Experiencia</h2>
						</div>
						<div>
							<motion.strong>{customers}</motion.strong>
							<h2>Clientes <br /> Satisfechos</h2>
						</div>
						<div>
							<motion.strong>{projects}</motion.strong>
							<h2>Proyectos <br /> Realizados</h2>
						</div>
					</div>

				</motion.div>

				<motion.div 
					className={styles.image}
					initial={{
						opacity:0,
						translateX:'100px'
					}}
					whileInView={{
						opacity:1,
						translateX:0
					}}
					viewport={{
						once:true
					}}
					
					transition={{
						delay:.1
					}}
				>


					<Image priority src={urlImage} width={500} height={435} alt={altImage}/>


				</motion.div>
			</div>

 		</section>
	);
};

export default WelcomeSection; */
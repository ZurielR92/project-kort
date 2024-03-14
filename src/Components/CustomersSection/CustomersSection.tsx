"use client";
import React from 'react';
import styles from './CustomersSection.module.scss';
import Image from 'next/image';
import { MotionSlider } from '../MaterialZ/MotionSlider';

export interface CustomersSectionProps {
	// types...
}

const CustomersSection: React.FC<CustomersSectionProps>  = ({}) => {
	return (
		<section className={styles.customerssection} >
			<MotionSlider
				className={styles.logosslide}
				duration={60}
				slides={[
					<Image key={345564356} src={'/customers/d1.jpg'} width={100} height={100} alt='Cliente tiendas D1'/>,
					<Image key={34534} src={'/customers/telemedellin.jpg'} width={157} height={100} alt='Cliente Telemedellín'/>,
					<Image key={456434} src={'/customers/teleantioquia.jpg'} width={200} height={56} alt='Cliente Teleantuiquia'/>,
					<Image key={566757} src={'/customers/alumina.jpg'} width={200} height={52} alt='Cliente Alumina'/>,
					<Image key={5756} src={'/customers/luminaire.jpg'} width={220} height={51} alt='Cliente Laminaire'/>,
					<Image key={6766743} src={'/customers/municipio-sabaneta.jpg'} width={200} height={56 } alt='Cliente Municipio Sabaneta'/>,
					<Image key={4647} src={'/customers/municipio-caldas.jpg'} width={200} height={64} alt='Cliente Municipio Caldas'/>,
					<Image key={5475683} src={'/customers/municipio-barbosa.jpg'} width={172} height={100} alt='Cliente Municipio Barbosa'/>,
					<Image key={58672} src={'/customers/municipio-girardota.jpg'} width={200} height={91} alt='Cliente Municipio Girardota'/>,
					<Image key={234587} src={'/customers/plaza-mayor.jpg'} width={178} height={100} alt='Cliente Municipio Girardota'/>,
					<Image key={3486562} src={'/customers/gobernacion-antioquia.jpg'} width={210} height={60} alt='Cliente Municipio Girardota'/>,
					<Image key={43222} src={'/customers/d1.jpg'} width={100} height={100} alt='Cliente tiendas D1'/>,
					<Image key={562} src={'/customers/telemedellin.jpg'} width={157} height={100} alt='Cliente Telemedellín'/>,
					<Image key={18623423} src={'/customers/teleantioquia.jpg'} width={200} height={56} alt='Cliente Teleantuiquia'/>,
					<Image key={134861} src={'/customers/alumina.jpg'} width={200} height={52} alt='Cliente Alumina'/>,
					<Image key={34923423} src={'/customers/luminaire.jpg'} width={220} height={51} alt='Cliente Laminaire'/>,
					<Image key={2394712863} src={'/customers/municipio-sabaneta.jpg'} width={200} height={56 } alt='Cliente Municipio Sabaneta'/>,
					<Image key={2378647823} src={'/customers/municipio-caldas.jpg'} width={200} height={64} alt='Cliente Municipio Caldas'/>,
					<Image key={238934792} src={'/customers/municipio-barbosa.jpg'} width={172} height={100} alt='Cliente Municipio Barbosa'/>,
					<Image key={23847682} src={'/customers/municipio-girardota.jpg'} width={200} height={91} alt='Cliente Municipio Girardota'/>,
					<Image key={23984682} src={'/customers/plaza-mayor.jpg'} width={178} height={100} alt='Cliente Municipio Girardota'/>,
					<Image key={2837647232} src={'/customers/gobernacion-antioquia.jpg'} width={210} height={60} alt='Cliente Municipio Girardota'/>,
				]}
			/>
			<MotionSlider
				className={styles.logosslide}
				duration={60}
				direction='reversed'
				slides={[
					<Image key={829374236} src={'/customers/d1.jpg'} width={100} height={100} alt='Cliente tiendas D1'/>,
					<Image key={829374212} src={'/customers/telemedellin.jpg'} width={157} height={100} alt='Cliente Telemedellín'/>,
					<Image key={82937426743} src={'/customers/teleantioquia.jpg'} width={200} height={56} alt='Cliente Teleantuiquia'/>,
					<Image key={829374342} src={'/customers/alumina.jpg'} width={200} height={52} alt='Cliente Alumina'/>,
					<Image key={829234543742} src={'/customers/luminaire.jpg'} width={220} height={51} alt='Cliente Laminaire'/>,
					<Image key={8293112742} src={'/customers/municipio-sabaneta.jpg'} width={200} height={56 } alt='Cliente Municipio Sabaneta'/>,
					<Image key={82932342742} src={'/customers/municipio-caldas.jpg'} width={200} height={64} alt='Cliente Municipio Caldas'/>,
					<Image key={8296543742} src={'/customers/municipio-barbosa.jpg'} width={172} height={100} alt='Cliente Municipio Barbosa'/>,
					<Image key={829374542} src={'/customers/municipio-girardota.jpg'} width={200} height={91} alt='Cliente Municipio Girardota'/>,
					<Image key={82234293742} src={'/customers/plaza-mayor.jpg'} width={178} height={100} alt='Cliente Municipio Girardota'/>,
					<Image key={82937425} src={'/customers/gobernacion-antioquia.jpg'} width={210} height={60} alt='Cliente Municipio Girardota'/>,
					<Image key={829235433742} src={'/customers/d1.jpg'} width={100} height={100} alt='Cliente tiendas D1'/>,
					<Image key={82937356442} src={'/customers/telemedellin.jpg'} width={157} height={100} alt='Cliente Telemedellín'/>,
					<Image key={823493742} src={'/customers/teleantioquia.jpg'} width={200} height={56} alt='Cliente Teleantuiquia'/>,
					<Image key={82932742} src={'/customers/alumina.jpg'} width={200} height={52} alt='Cliente Alumina'/>,
					<Image key={8293742} src={'/customers/luminaire.jpg'} width={220} height={51} alt='Cliente Laminaire'/>,
					<Image key={829321742} src={'/customers/municipio-sabaneta.jpg'} width={200} height={56 } alt='Cliente Municipio Sabaneta'/>,
					<Image key={82945633742} src={'/customers/municipio-caldas.jpg'} width={200} height={64} alt='Cliente Municipio Caldas'/>,
					<Image key={829375312242} src={'/customers/municipio-barbosa.jpg'} width={172} height={100} alt='Cliente Municipio Barbosa'/>,
					<Image key={829653742} src={'/customers/municipio-girardota.jpg'} width={200} height={91} alt='Cliente Municipio Girardota'/>,
					<Image key={829374245343} src={'/customers/plaza-mayor.jpg'} width={178} height={100} alt='Cliente Municipio Girardota'/>,
					<Image key={8293742342342} src={'/customers/gobernacion-antioquia.jpg'} width={210} height={60} alt='Cliente Municipio Girardota'/>,
				]}
			/>





 		</section>
	);
};

export default CustomersSection;

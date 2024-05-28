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
					<Image key={345564356} src={'/customers/d1.jpg'} width={50} height={50} alt='Cliente tiendas D1'/>,
					<Image key={34534} src={'/customers/telemedellin.jpg'} width={70} height={50} alt='Cliente Telemedellín'/>,
					<Image key={456434} src={'/customers/teleantioquia.jpg'} width={173} height={45} alt='Cliente Teleantuiquia'/>,
					<Image key={566757} src={'/customers/alumina.jpg'} width={173} height={45} alt='Cliente Alumina'/>,
					<Image key={5756} src={'/customers/luminaire.jpg'} width={194} height={45} alt='Cliente Laminaire'/>,
					<Image key={6766743} src={'/customers/municipio-sabaneta.jpg'} width={160} height={45 } alt='Cliente Municipio Sabaneta'/>,
					<Image key={4647} src={'/customers/municipio-caldas.jpg'} width={140} height={45} alt='Cliente Municipio Caldas'/>,
					<Image key={5475683} src={'/customers/municipio-barbosa.jpg'} width={85} height={50} alt='Cliente Municipio Barbosa'/>,
					<Image key={58672} src={'/customers/municipio-girardota.jpg'} width={110} height={50} alt='Cliente Municipio Girardota'/>,
					<Image key={234587} src={'/customers/plaza-mayor.jpg'} width={89} height={50} alt='Cliente Municipio Girardota'/>,
					<Image key={3486562} src={'/customers/gobernacion-antioquia.jpg'} width={175} height={50} alt='Cliente Municipio Girardota'/>,
					<Image key={34553264356} src={'/customers/d1.jpg'} width={50} height={50} alt='Cliente tiendas D1'/>,
					<Image key={34587534} src={'/customers/telemedellin.jpg'} width={70} height={50} alt='Cliente Telemedellín'/>,
					<Image key={45632434} src={'/customers/teleantioquia.jpg'} width={173} height={45} alt='Cliente Teleantuiquia'/>,
					<Image key={554366757} src={'/customers/alumina.jpg'} width={173} height={45} alt='Cliente Alumina'/>,
					<Image key={5765456} src={'/customers/luminaire.jpg'} width={194} height={45} alt='Cliente Laminaire'/>,
					<Image key={676876743} src={'/customers/municipio-sabaneta.jpg'} width={160} height={45 } alt='Cliente Municipio Sabaneta'/>,
					<Image key={344647} src={'/customers/municipio-caldas.jpg'} width={140} height={45} alt='Cliente Municipio Caldas'/>,
					<Image key={565475683} src={'/customers/municipio-barbosa.jpg'} width={85} height={50} alt='Cliente Municipio Barbosa'/>,
					<Image key={58678872} src={'/customers/municipio-girardota.jpg'} width={110} height={50} alt='Cliente Municipio Girardota'/>,
					<Image key={2345546487} src={'/customers/plaza-mayor.jpg'} width={89} height={50} alt='Cliente Municipio Girardota'/>,
					<Image key={3486534562} src={'/customers/gobernacion-antioquia.jpg'} width={175} height={50} alt='Cliente Municipio Girardota'/>,
				]}
			/>
			<MotionSlider
				className={styles.logosslide}
				duration={60}
				direction='reversed'
				slides={[
					<Image key={345564356} src={'/customers/d1.jpg'} width={50} height={50} alt='Cliente tiendas D1'/>,
					<Image key={34534} src={'/customers/telemedellin.jpg'} width={70} height={50} alt='Cliente Telemedellín'/>,
					<Image key={456434} src={'/customers/teleantioquia.jpg'} width={173} height={45} alt='Cliente Teleantuiquia'/>,
					<Image key={566757} src={'/customers/alumina.jpg'} width={173} height={45} alt='Cliente Alumina'/>,
					<Image key={5756} src={'/customers/luminaire.jpg'} width={194} height={45} alt='Cliente Laminaire'/>,
					<Image key={6766743} src={'/customers/municipio-sabaneta.jpg'} width={160} height={45 } alt='Cliente Municipio Sabaneta'/>,
					<Image key={4647} src={'/customers/municipio-caldas.jpg'} width={140} height={45} alt='Cliente Municipio Caldas'/>,
					<Image key={5475683} src={'/customers/municipio-barbosa.jpg'} width={85} height={50} alt='Cliente Municipio Barbosa'/>,
					<Image key={58672} src={'/customers/municipio-girardota.jpg'} width={110} height={50} alt='Cliente Municipio Girardota'/>,
					<Image key={234587} src={'/customers/plaza-mayor.jpg'} width={89} height={50} alt='Cliente Municipio Girardota'/>,
					<Image key={3486562} src={'/customers/gobernacion-antioquia.jpg'} width={175} height={50} alt='Cliente Municipio Girardota'/>,
					<Image key={476342} src={'/customers/d1.jpg'} width={50} height={50} alt='Cliente tiendas D1'/>,
					<Image key={3465345643} src={'/customers/telemedellin.jpg'} width={70} height={50} alt='Cliente Telemedellín'/>,
					<Image key={123423454} src={'/customers/teleantioquia.jpg'} width={173} height={45} alt='Cliente Teleantuiquia'/>,
					<Image key={98078} src={'/customers/alumina.jpg'} width={173} height={45} alt='Cliente Alumina'/>,
					<Image key={575676} src={'/customers/luminaire.jpg'} width={194} height={45} alt='Cliente Laminaire'/>,
					<Image key={6723466743} src={'/customers/municipio-sabaneta.jpg'} width={160} height={45 } alt='Cliente Municipio Sabaneta'/>,
					<Image key={464567567} src={'/customers/municipio-caldas.jpg'} width={140} height={45} alt='Cliente Municipio Caldas'/>,
					<Image key={547675683} src={'/customers/municipio-barbosa.jpg'} width={85} height={50} alt='Cliente Municipio Barbosa'/>,
					<Image key={586745642} src={'/customers/municipio-girardota.jpg'} width={110} height={50} alt='Cliente Municipio Girardota'/>,
					<Image key={23422234587} src={'/customers/plaza-mayor.jpg'} width={89} height={50} alt='Cliente Municipio Girardota'/>,
					<Image key={34866556562} src={'/customers/gobernacion-antioquia.jpg'} width={175} height={50} alt='Cliente Municipio Girardota'/>,
				]}
			/>





 		</section>
	);
};

export default CustomersSection;

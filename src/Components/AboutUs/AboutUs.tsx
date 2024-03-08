"use client";
import React from 'react';
import styles from './AboutUs.module.scss';
import Image from 'next/image';

export interface AboutUsProps {
	// types...
}

const AboutUs: React.FC<AboutUsProps>  = ({}) => {
	return (
		<div className={styles.aboutus}>
 			<div className={styles.imgcontainer}>
				<Image src={'/about.png'} fill alt='Somos Agencia Kubica'/>
			</div>
			<div className={styles.info}>
				<strong>¡Hola, Somos Kubica!</strong>
				<h2></h2>
			</div>
 		</div>
	);
};

export default AboutUs;

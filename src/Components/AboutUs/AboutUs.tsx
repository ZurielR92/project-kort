"use server";
import React from 'react';
import styles from './AboutUs.module.scss';

export interface AboutUsProps {
	// types...
}

const AboutUs: React.FC<AboutUsProps>  = ({}) => {
	return (
		<div className={styles.aboutus}>
 			AboutUs works!
 		</div>
	);
};

export default AboutUs;

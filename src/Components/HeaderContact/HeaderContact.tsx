"use server";
import React from 'react';
import styles from './HeaderContact.module.scss';

export interface HeaderContactProps {
}

const HeaderContact: React.FC<HeaderContactProps>  = ({}) => {
	return (
		<div className={styles.headercontact}>
 			HeaderContact works!
 		</div>
	);
};

export default HeaderContact;
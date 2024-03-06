import React from 'react';
import styles from './CategoriesGrid.module.scss';
import { ICategory } from '@/interfaces';
import { CategoriesCard } from '../Categories/CategoriesCard';

export interface CategoriesGridProps {
	categories: ICategory[]
}

const CategoriesGrid: React.FC<CategoriesGridProps>  = ({ categories }) => {
	return (
		<section className={styles.categoriesgrid}>
			<div className={styles.title}>
				<strong>Conoce nuestro amplio portafolio</strong>
				<h2>Nuestros <strong>Productos mas Destacados</strong></h2>

			</div>
 			<div className={styles.grid}>
				{
					categories.map((category)=>(
						<CategoriesCard key={category.code} category={category}/>
					))
				}
			</div>
 		</section>
	);
};

export default CategoriesGrid;

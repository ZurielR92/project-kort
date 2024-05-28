import React from 'react';
import styles from './CategoriesGrid.module.scss';
import { ICategory } from '@/interfaces';
import { CategoriesCard } from '../Categories/CategoriesCard';
import Image from 'next/image';

export interface CategoriesGridProps {
	categories: ICategory[]
}

const CategoriesGrid: React.FC<CategoriesGridProps>  = ({ categories }) => {
	return (
		<section className={styles.categoriesgrid}>

			<div className={styles.title}>
				<div className={styles.image}>
					<Image src={'/arrow.png'} fill alt=''/>
				</div>
				<div>
					<strong>Algunos de nuestros</strong>
					<h2><strong>Productos</strong> mas Destacados</h2>
				</div>

			</div>

 			<div className={styles.grid}>
				{
					categories.map((category)=>(

						<CategoriesCard key={category.code} category={category} hide={category.name==='Termos'}/>

					))
				}
			</div>
 		</section>
	);
};

export default CategoriesGrid;
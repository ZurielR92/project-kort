import { FC } from 'react'

//Importacion de estilos
import styles from './Map.module.scss'

//Propiedades que recibe el componente
interface Props {
}


export const Map:FC<Props> = () => {
    return (
        <div className={ styles.mapa_responsivo }>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d495.8053852444994!2d-75.5876264931613!3d6.205114975297744!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4682779e9cdbdb%3A0x5b2b2cf70d718e9b!2sCentro%20de%20Comercio%20Mall%20El%20Rodeo!5e0!3m2!1ses-419!2sco!4v1709984969704!5m2!1ses-419!2sco" 
                style={{border:0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy='no-referrer-when-downgrade'
            />
        </div>
    )

}
import { categoriesList } from '@/data/products';
import { ICategory } from '@/interfaces';
import { WelcomeSection } from '@/Components/WelcomeSection';
import { CustomersSection } from '@/Components/CustomersSection';
import { CategoriesGrid } from '@/Components/CategoriesGrid';
import { Services } from './components/Services';
import { FAQS } from '@/Components/FAQS';


const getCategories = async () => {
  const listaCategorias: ICategory[] = [];
  const codigos: string[] = [ '0403','0504','0404','0507','0101', '0102', '0804','0501', '0502', '0604'  ];

  for (let p = 0; p < 12; p++) {
    categoriesList.find((obj, i) => {
      if (obj.code === codigos[p]) {
        listaCategorias.push(obj);
      }
    })
  }

  return listaCategorias
}

interface Props {
  searchParams:any
}


const images = [1,2,3]

const HomePage = async ({ searchParams }:Props) => {
  const categories = await getCategories();
  
  return (
    <main>
      <WelcomeSection
        title={<>
          Gran Formato,
          Corte Laser,
          Impresión Digital,
          y Promocionales
          en Medellín
        </>}
        description={<>Ofrecemos servicios especializados, soluciones estratégicas y una metodología de trabajo integral que potenciará aún más tu negocio.</>}
        urlImage='/welcome-home.png'
      />
      <CustomersSection/>
      {/* <AboutUs/> */}
      <CategoriesGrid categories={categories}/>
      {/* <CategoriesSection/> */}
      {/* <Services/> */}
      <FAQS/>





    </main>
  )
}


export default HomePage;
import { categoriesList } from '@/data/products';
import { ICategory } from '@/interfaces';
import { WelcomeSection } from '@/Components/WelcomeSection';
import { CustomersSection } from '@/Components/CustomersSection';
import { CategoriesGrid } from '@/Components/CategoriesGrid';
import { Services } from './components/Services';


const getCategories = async () => {
  const listaCategorias: ICategory[] = [];
  const codigos: string[] = [ '0401','0406','0504','0501','0503', '0505', '0506','0405', '0604', '0603',  ];

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
      <Services/>





    </main>
  )
}


export default HomePage;
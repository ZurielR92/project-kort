import { CategoriesSection } from '@/Components/HomePage/CategoriesSection';
import { WelcomeHome } from '@/Components/HomePage/Welcome'
import { categoriesList } from '@/data/products';
import { ICategory } from '@/interfaces';
import { WhyUs } from './components/WhyUs';
import { Services } from './components/Services';
import { WelcomeSection } from '@/Components/WelcomeSection';
import { CustomersSection } from '@/Components/CustomersSection';


const getCategories = async () => {
  const listaCategorias: ICategory[] = [];
  const codigos: string[] = [ '0701','0205','0108','0705','0203', '0105', '0501','0404', '0405', '0407', '0505', '0408',  ];

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

const HomePage = async ({ searchParams }:Props) => {
  const categories = await getCategories();
  
  return (
    <main>
      <WelcomeSection
        title={<>
          Gran Formato <br />
          Litografía, <br />
          Corte Laser y<br />
          Promocionales <br />
          en Medellín
        </>}
        description={<>Aqui va la descripción</>}
        urlImage='/welcome-home.webp'
      />
      <CustomersSection/>
      <CategoriesSection categories={categories}/>
      <Services/>
    </main>
  )
}


export default HomePage;
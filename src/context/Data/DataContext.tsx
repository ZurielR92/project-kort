'use client'
import { createContext } from 'react'


interface ContextProps {
   products: string[];
   vendor: string

   //Methods
   setVendor: () => void
   handleRemoveProduct: ( id:number ) => void
   handleAddProduct: ( product:string ) => void
}


const DataContext = createContext( {} as ContextProps )

export default DataContext
import { useEffect, useState } from "react"
import { findAll } from "../service/ProductService"

export const MyProducts = () => {
    const [products, setProducts] = useState([])

    //Con esta funcion hago llamo a los datos productos asincronicamente, y las cargo a una lista o mejor dicho un map.
    const getPtroducts = async() => {
        const result = await findAll()
        setProducts(result);
    }
    useEffect(()=>{
        getPtroducts();
    }, []);

    const num = 0;
    return (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.slice(0,4).map((product) => ( 
                <a key={product.id} href={'https://github.com/Martin-zn'} className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={'https://gooova.com/wp-content/uploads/2021/03/cheems.png'}
                      alt={'Product'}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
                </a>               
                  ))}
              </div>
          </div>
        </div>
      )


}
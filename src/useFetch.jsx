import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = () => {
  const [data, setData] = useState(null);
  const [productsArray, setProductsArray] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((response) => {
        setProductsArray(response.data.users);
        setData(productsArray)
      })
      .catch((error) => console.log(error));
  }, []);

  console.log('products array', productsArray);

  

  return { data };
}
 
export default useFetch

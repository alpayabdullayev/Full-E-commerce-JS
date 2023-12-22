import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { addBasket, deleteBasket } from '../features/basketSlice';
import MainCard from '../components/mainCard';

const BunuSil = () => {
  const basket = useSelector((state) => state.basketS.value);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  async function getAllProducts() {
    try {
      const res = await axios.get('http://localhost:3000/popularMovies');
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  function handleBasket(item) {
    dispatch(addBasket(item));
  }



  return (
    <div className='wrapper'>
      {data.map((item) => (
        <div>
            <MainCard key={item.id} {...item} id={item.id} price={item.price} {...item} handleBasket={handleBasket} />
        </div>
        
      ))}
    </div>
  );
};

export default BunuSil;
import { createSlice } from '@reduxjs/toolkit';

const initialBasket = JSON.parse(localStorage.getItem("basket")) || [];

const initialState = {
  value: initialBasket,
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addBasket: (state, action) => {
      const elementIndex = state.value.findIndex((x) => x.id === action.payload.id);
      if (elementIndex === -1) {
        state.value.push({ ...action.payload, count: 1 });
        
      } else {
        state.value[elementIndex].count++;
      }
    },
    deleteBasket: (state, action) => {
      state.value = state.value.filter((x) => x.id !== action.payload);
    },
    basketIncrement:(state,action)=>{
      const basketProduct = state.value.find(x => x.id === action.payload.id)
      if (basketProduct) {
          basketProduct.count++
          basketProduct.total = basketProduct.newPrice * basketProduct.count
      }
  },
    
  },
});

export const { addBasket, deleteBasket,basketIncrement } = basketSlice.actions;
export default basketSlice.reducer;

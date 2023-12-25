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
    basketIncrement: (state, action) => {
      const elementIndex = state.value.findIndex((x) => x.id === action.payload.id);
      if (elementIndex !== -1) {
        state.value[elementIndex].count++;
        state.value[elementIndex].total = state.value[elementIndex].newPrice * state.value[elementIndex].count;
      }
    },
    basketDecrement: (state, action) => {
      const elementIndex = state.value.findIndex((x) => x.id === action.payload.id);
      if (elementIndex !== -1) {
        if (state.value[elementIndex].count === 1) {
          state.value = state.value.filter(item => item.id !== action.payload.id);
        } else {
          state.value[elementIndex].count--;
          state.value[elementIndex].total = state.value[elementIndex].newPrice * state.value[elementIndex].count;
        }
      }
    },
    
    
    
  },
});

export const { addBasket, deleteBasket,basketIncrement,basketDecrement } = basketSlice.actions;
export default basketSlice.reducer;

import { createAsyncThunk } from "@reduxjs/toolkit";

export const FetchProducts = createAsyncThunk(
  "catergories/FetchProducts",
  async () => {
    const response = await fetch("http://localhost:3000/popularMovies");
    return response.json();
  }
);

const initialState = {
    entity: [],
    loading: false,
    error: null,
};


const ProductSlice = createSlice({
    name: "category",
    initialState,
    reducers: [],
    extraReducers: (builder) => {
      builder
        .addCase(FetchProducts.pending, (state) => {
          state.loading = true;
        })
        .addCase(FetchProducts.fulfilled, (state, action) => {
          state.loading = false;
          state.entity = action.payload;
        })
        .addCase(FetchProducts.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
    },
});
  

  
  export default ProductSlice.reducer;
  

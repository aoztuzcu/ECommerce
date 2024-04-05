import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchProducts,
  searchProducts,
  fetchProductsByCategory,
} from "@/utils/request";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  searchTerm: "",
};

export const fetchProductsAsync = createAsyncThunk(
  "products/fetchProducts",
  async (options = {}, thunkAPI) => {
    const { limit, skip, select } = options;
    try {
      const response = await fetchProducts(limit, skip, select);
      return response;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const searchProductsAsync = createAsyncThunk(
  "products/searchProducts",
  async (query, thunkAPI) => {
    console.log("searchProductsAsync");
    try {
      const response = await searchProducts(query);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchProductsByCategoryAsync = createAsyncThunk(
  "products/fetchProductsCategory",
  async (slug, thunkAPI) => {
    try {
      const response = await fetchProductsByCategory(slug);
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //fetchProductsAsync
      .addCase(fetchProductsAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.products;
      })
      .addCase(fetchProductsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      //searchProductsAsync
      .addCase(searchProductsAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(searchProductsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.products;
      })
      .addCase(searchProductsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      //fetchProductsByCategoryAsync
      .addCase(fetchProductsByCategoryAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProductsByCategoryAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.products;
      })
      .addCase(fetchProductsByCategoryAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSearchTerm } = productsSlice.actions;
export default productsSlice.reducer;

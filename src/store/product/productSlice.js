import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URI, POSTFIX } from "../../const";

const initialState = {
  products: [],
  error: "",
};

export const productRequestAsync = createAsyncThunk(
  "product/fetch",
  (category) =>
    fetch(`${API_URI}${POSTFIX}?category=${category}`)
      .then((req) => req.json())
      .catch((error) => ({ error }))
);

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(productRequestAsync.pending, (state) => {
      state.error = "";
    });
    builder.addCase(productRequestAsync.fulfilled, (state, action) => {
      state.error = "";
      state.products = action.payload;
    });
    builder.addCase(productRequestAsync.rejected, (state, action) => {
      state.error = action.payload.error;
    });
  },
});

export default productSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URI, POSTFIX } from "../../const";

const initialState = {
  orderList: JSON.parse(localStorage.getItem("order") || "[]"),
  error: "",
};

export const localStorageMiddleware = (store) => (next) => (action) => {
  const nextAction = next(action);

  if (nextAction.type.startsWith("order/")) {
    const orderList = store.getState().order.orderList;
    localStorage.setItem("order", JSON.stringify(orderList));
  }

  return nextAction;
};

export const orderRequestAsync = createAsyncThunk("order/fetch", (category) =>
  fetch(`${API_URI}${POSTFIX}?category=${category}`)
    .then((req) => req.json())
    .catch((error) => ({ error }))
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = state.orderList.find(
        (item) => item.id === action.payload.id
      );

      if (product) {
        product.count += 1;
      } else {
        state.orderList.push({ ...action.payload, count: 1 });
      }
    },
  },
});

export const { addProduct } = orderSlice.actions;
export default orderSlice.reducer;

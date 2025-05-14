import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {

            const { product, user } = action.payload;
            const item = state.find((i) => i.id === product.id);

            if (item) {
                item.quantity += 1;
            } else {
                state.push({ ...product, quantity: 1, userName: user.name });
            }
        },
        removeFromCart: (state, action) => state.filter((item) => item.id !== action.payload),
        clearCart: () => [],
    },
});
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
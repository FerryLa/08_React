import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

/*
thunk
리덕스에서 액션을 디스패치하기 위해서 객체를 보내주지만
thunk를 사용하면 객체 대신 함수로 디스패치가 가능하게 된다.
이후 함수 내에서 비동기 작업을 수행하고 결과를 반환할 수 있다.
이를 통해 비동기 작업을 처리하는 것이 편리해진다.
*/
export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
    // thunk에서 비동기 작업을 수행해도 되지만 이것을 saga에서 해준다.
    // thunk는 단순히 pending, fulfilled, rejected 상태를 반환해주는 역할을 한다.

    //const res = await axios.get('http://localhost:4000/orders');
    //return res.data;    
});

export const createOrder = createAsyncThunk(
    'orders/createOrder',
    async (order, { getState, rejectWithValue }) => {
        // order 사용자가 입력한 주문 정보
        // getState() 현재 store의 전체 상태를 반환
        // 데이터를 초기화 해야됨
        const { product } = getState();

        const exists = product.items.filter(p => p.id === order.productId);
        if (exists.length === 0) {
            // rejectWithValue : 오류 발생 시 오류 메시지를 반환
            return rejectWithValue('존재하지 않는 상품 ID입니다.');
        }

        const res = await axios.post('http://localhost:4000/orders', order);
        res.data.productId = exists[0].name;
        return res.data;
    }
);



const ordersSlice = createSlice({
    name: 'orders',
    initialState: { items: [], status: 'idle' },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrders.pending, (state) => { state.status = 'loading'; })
            .addCase(fetchOrders.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchOrders.rejected, (state) => { state.status = 'failed'; })

            .addCase(createOrder.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(createOrder.rejected, (state, action) => {
                state.error = action.payload || '주문 실패';
            });
    },
});

export default ordersSlice.reducer;

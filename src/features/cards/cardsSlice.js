import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {
            cards: {}
        }
    },
    reducers: {
        addCard: (state, action) => {
            // { id: '123', front: 'front of card', back: 'back of card'}
            state.cards.cards[action.payload.id] = {...action.payload};
        }
    }
});

// Selectors:
export const selectCards = (state) => state.cards.cards.cards;
export const selectCardById = (id) => {
    return (state) => {
        return state.cards.cards.cards[id];
    }
};
// Actions:
export const { addCard } = cardsSlice.actions;
// Reducer:
export default cardsSlice.reducer;
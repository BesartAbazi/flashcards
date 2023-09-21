import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {
            quizzes: {}
        }
    },
    reducers: {
        addQuiz: (state, action) => {
            // { id: '123', name: 'quiz name', topicId: '456', cardIds: ['1', '2', '3', ...]}
            state.quizzes.quizzes[action.payload.id] = {...action.payload};
        }
    }
});

// Selectors:
export const selectQuizzes = (state) => state.quizzes.quizzes.quizzes;
// Actions:
export const { addQuiz } = quizzesSlice.actions;
// Reducer:
export default quizzesSlice.reducer;
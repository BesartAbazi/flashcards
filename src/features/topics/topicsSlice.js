import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {
            topics: {}
        }
    },
    reducers: {
        addTopic: (state, action) => {
            // {id: '123456', name: 'name of topic', icon: 'icon url'}
            state.topics.topics[action.payload.id] = {...action.payload, quizIds: []};
        }
    },
    extraReducers: {
        /*  Respond to quizzesSlice -> addQuiz action type
            Add quizId to the belonging topic   */
        'quizzes/addQuiz': (state, action) => {
            // { id: '123', name: 'quiz name', topicId: '456', cardIds: ['1', '2', '3', ...]}
            state.topics.topics[action.payload.topicId].quizIds.push(action.payload.id);
        }
    }
});

// Selectors:
export const selectTopics = (state) => state.topics.topics.topics;
// Actions:
export const {addTopic} = topicsSlice.actions;
// Reducer:
export default topicsSlice.reducer;





// Create loadCommentsForArticleId here.
//export const loadCommentsForArticleId = createAsyncThunk(
//    'comments/loadComments',
//    async (Id) => {
//        const data = await fetch(`api/articles/${Id}/comments`);
//        const json = await data.json();
//        return json;
//    }
//);
//
//// Create postCommentForArticleId here.
//export const postCommentForArticleId = createAsyncThunk(
//    'comments/postComment',
//    async ({ articleId, comment }) => {
//        const requestBody = JSON.stringify({
//            comment: comment
//        });
//
//        const response = await fetch(
//            `api/articles/${articleId}/comments`,
//            {
//                method: 'POST',
//                body: requestBody
//            }
//        );
//
//        return await response.json();
//    }
//);


//    extraReducers: {
//        [loadCommentsForArticleId.pending]: (state, action) => {
//            // fill out function body
//            state.isLoadingComments = true;
//            state.failedToLoadComments = false;
//        },
//        [loadCommentsForArticleId.fulfilled]: (state, action) => {
//            // fill out function body
//            state.byArticleId[action.payload.articleId] = action.payload.comments;
//            state.isLoadingComments = false;
//            state.failedToLoadComments = false;
//        },
//        [loadCommentsForArticleId.rejected]: (state, action) => {
//            // fill out function body
//            state.isLoadingComments = false;
//            state.failedToLoadComments = true;
//        },
//
//        [postCommentForArticleId.pending]: (state, action) => {
//            // fill out function body
//            state.createCommentIsPending = true;
//            state.failedToCreateComment = false;
//        },
//        [postCommentForArticleId.fulfilled]: (state, action) => {
//            // fill out function body
//            state.byArticleId[action.payload.articleId].push(action.payload);
//            state.createCommentIsPending = false;
//            state.failedToCreateComment = true;
//        },
//        [postCommentForArticleId.rejected]: (state, action) => {
//            // fill out function body
//            state.createCommentIsPending = true;
//            state.failedToCreateComment = false;
//        }
//    }
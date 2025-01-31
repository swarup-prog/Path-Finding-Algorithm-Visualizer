import { configureStore } from "@reduxjs/toolkit";
import mazeStateReducer from "../features/mazeState/mazeStateSlice";
import algorithmStateReducer from "../features/algorithmState/algorithmStateSlice";

export const store = configureStore({
  reducer: {
    mazeState: mazeStateReducer,
    algorithmState: algorithmStateReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

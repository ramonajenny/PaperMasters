import { configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import registerSlice from "../features/RequestWalletAccountSlice";
import searchSlice from '../features/SearchSlice';
import mintSlice from '../features/MintNFISlice';
import createSaga from "redux-saga";
import rootSaga from "../features/rootSagas";
import logger from 'redux-logger';


const sagaMiddleware = createSaga();

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger).concat(sagaMiddleware),
  reducer: {
    register: registerSlice,
    search: searchSlice,
    mint: mintSlice,

  },
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


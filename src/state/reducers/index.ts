import {combineReducers} from '@reduxjs/toolkit';

import {noteReducer} from './note';

export const rootReducer = combineReducers({
  note: noteReducer,
});

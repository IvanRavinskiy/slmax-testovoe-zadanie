import {createSlice} from '@reduxjs/toolkit';
import {NOTE, SLICES} from '../../constants/slices';

export type Note = {
  id: string;
  title: string;
  description: string;
  date: string;
};

type NotesState = {
  notes: Note[];
};

const SLICE_INITIAL: NotesState = {
  notes: [],
};

const noteSlice = createSlice({
  name: SLICES.NOTE,
  initialState: SLICE_INITIAL,
  reducers: {
    [NOTE.ADD_NOTE](state, action) {
      const date = new Date().toString();

      state.notes.push({
        title: action.payload.title,
        description: action.payload.description,
        id: date,
        date,
      });
    },
    [NOTE.REMOVE_NOTE](state, action) {
      const objWithIdIndex = state.notes.findIndex(
        obj => obj.id === action.payload,
      );

      if (objWithIdIndex > -1) {
        state.notes.splice(objWithIdIndex, 1);
      }
    },
  },
});

export const {reducer: noteReducer} = noteSlice;
export const {ADD_NOTE, REMOVE_NOTE} = noteSlice.actions;

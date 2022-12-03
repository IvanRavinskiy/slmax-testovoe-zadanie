import {RootState} from '..';

export const getNotes = (state: RootState) => {
  return state.note.notes;
};

export const createNote = note => {
  return {
    type: 'CREATE_NOTE',
    payload: note,
  };
};

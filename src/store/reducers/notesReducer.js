import items from '../../notesData';

export default (state = items, action) => {
  switch (action.type) {
    case 'CREATE_NOTE':
      return [action.payload, ...state];
    case 'DELETE_NOTE':
      return state.filter(note => note.id !== action.payload);
    default:
      return state;
  }
};

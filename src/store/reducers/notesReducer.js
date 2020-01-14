import items from '../../notesData';

export default (state = items, action) => {
  switch (action.type) {
    case 'CREATE_NOTE':
      return [action.payload, ...state];
    default:
      return state;
  }
};

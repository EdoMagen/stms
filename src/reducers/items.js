const initialState = {
  items: [],
};

let index;

export function items(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [
          ...state.items, {
            text: action.fields.name.value,
          },
        ],
      };

    case 'DELETE_ITEM':
      // Finds the item's index by the ID passed in the action
      index = state.items.map((item) => item.id).indexOf(action.id);

      return {
        ...state,
        items: [
          ...state.items.slice(0, index),
          ...state.items.slice(+ index + 1),
        ],
      };

    case 'RECEIVE_ITEMS':
      return {
        ...state,
        items: action.items,
      };

    case 'FAVORITE_ITEM':
      // Finds the item's index by the ID passed in the action
      index = state.items.map((item) => item.id).indexOf(action.id);
      const newStateItems = state.items.slice(0);
      newStateItems[index].isFav = !newStateItems[index].isFav;
      return {
        ...state,
        items: newStateItems,
      };

    default:
      return state;
  }
}

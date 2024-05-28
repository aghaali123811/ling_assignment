export const SET_SELECTED_CARD = 'SET_SELECTED_CARD';

export function selectedCard(item) {
  return async dispatch => {
    try {
      dispatch(setSelectedCard(item));
    } catch (err) {
      return err;
    }
  };
}
export function setSelectedCard(data) {
  return {
    type: SET_SELECTED_CARD,
    data,
  };
}

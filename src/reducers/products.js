const productsReducerDefaultState = [];

export default (state = productsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCTS':
      return [
        ...state,
        action.product
      ]
  
    default:
      break;
  }
}

const CHECK_STATUS = 'Bookstore/categories/checkStatus';

const checkStatus = () => ({
  type: CHECK_STATUS,
});

const categoryReducer = (state = [], action) => {
  if (action.type === CHECK_STATUS) {
    return 'Under Construction';
  }
  return state;
};

export default categoryReducer;
export { checkStatus };

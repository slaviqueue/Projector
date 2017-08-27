const boardsReducer = (store = {}, action) => {
  switch(action.type) {
    case 'GET_BOARDS':
      return {
        ...store,
        list: action.payload
      };

    case 'GET_DETAILED_BOARD':
      return {
        ...store,
        detailed: action.payload
      };

    case 'CREATE_TICKET':
      const column = store.detailed.columns.find(column => column._id === action.payload.columnId);

      return {
        ...store,
        detailed: {
          ...store.detailed,
          columns:
            [
              ...store.detailed.columns.filter(column => column._id != action.payload.columnId),
              [...column, action.payload.ticket]
            ]
        }
      };

    default:
      return store;
  }
};

export default boardsReducer;

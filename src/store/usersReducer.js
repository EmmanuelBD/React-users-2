const initialState = {
    users: [
      {
        name: "John Doe",
        email: "johndoe@email.com",
        gen: 12,
        id: "111"
      },
      {
        name: "Sandra Fox",
        email: "sandrafox@email.com",
        gen: 13,
        id: "222"
      },
      {
        name: "Greg Cole",
        email: "gregcole@email.com",
        gen: 14,
        id: "333"
      }
    ]
  };
  
  const usersReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_USER":
        const newUser = {
          name: action.payload.name,
          email: action.payload.email,
          gen: action.payload.gen,
          id: action.payload.id
        };
  
        return {
          ...state,
          users: [...state.users, newUser]
        };
  
      default:
        return state;
    }
  };
  
  export default usersReducer;
  
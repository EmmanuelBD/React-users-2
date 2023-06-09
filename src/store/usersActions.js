
export const addUser = (user) => {
  return {
    type: 'ADD_USER',
    payload: user
  };
};

export const deleteUser = (userId) => {
  return {
    type: 'DELETE_USER',
    payload: userId
  };
};

export const editUser = (id, updatedUser) => {
  return {
    type: 'EDIT_USER',
    payload: {
      id,
      updatedUser
    }
  };
};

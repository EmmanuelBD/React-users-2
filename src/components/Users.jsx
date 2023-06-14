
import React from 'react';
import User from './User';

const Users = (props) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {props.usersData.map((user) => (
        <User key={user.id} userInfo={user} deleteUser={props.deleteUser} editUser={props.editUser} />
      ))}
    </div>
  );
};

export default Users;


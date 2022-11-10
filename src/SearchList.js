import React from 'react';
import Card from './Card';

const SearchList = ({filteredUsers}) => {
  const filtered = filteredUsers.map(user => {
    return <Card key={user.id} user={user} />
  })
  return (
    <div>
      {filtered}
    </div>
  )
};

export default SearchList;
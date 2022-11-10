import React, {useState} from 'react';
import SearchList from './SearchList';
import Scroll from './Scroll';

const Search = ({users}) => {
  const [searchField, setSearchField] = useState('');

  const filteredUsers = users.filter(
    user => {
      return (
        user
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        user
        .email
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  )

  const handleChange = (e) => {
    setSearchField(e.target.value);
  } 


  return (
    <section>
      <div className="pa2">
      <input 
        className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
        type = "search" 
        placeholder = "Search People" 
        onChange = {handleChange}
      />
      </div>  
      <div>
        <Scroll>
          <SearchList filteredUsers={filteredUsers} />
        </Scroll>
      </div>
    </section>
  )
}

export default Search;
import SearchForm from './components/SearchForm';
import UserCard from './components/UserCard';
import UserCardList from './components/UserCardList';
import { useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${userName}`)
      .then(res => res.json())
      .then(
        (result) => {
          setUsers([...users, result])
        }
      )
    
  }

  const handleChange = ({ target }) => {
    var userName = target.value;
    setUserName(userName);
  }

  return (
    <div className="App">
      <SearchForm
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
      <br />
      <UserCardList
      users={users}
      />
    </div>
  );
}

export default App;

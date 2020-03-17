import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';


const Search = () =>  {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  // creating text state with useState hook -> "text" represents name of that state, setText is a method that allows to change text state (replaces this.state.text = something),
  // in useState method we put default state of text state which is now ''
  const [text, setText] = useState('');


//with [e.target.name] we can get whatever the name of the input field is e.g "text", "email",, so we can use onChange func for every input
  const onChange = e => setText( e.target.value );

  const onSubmit = e => {
      e.preventDefault();
      if(text === '') {
          alertContext.setAlert('Please enter something', 'light');
      } else {
          githubContext.searchUsers(text);
          setText('');
      }
  }

  return (
    <div>
        <form onSubmit={onSubmit} className="form">
            <input type="text" name="text" placeholder="Search Users..." value={text} onChange={onChange}/>
            <input type="submit" value="Search" className="btn btn-dark btn-block"/>
        </form>
        {githubContext.users.length > 0 && (
            <button className="btn btn-light btn-block" onClick={githubContext.clearUsers} >Clear users</button>
        )}
    </div>
  )
}

export default Search

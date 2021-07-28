import React, {useState} from 'react';
import LoginForm from './components/LoginForm';

function App() {
const adminUser = {
  email: "any@mail.com",
  pasword: "anydata"
}

const [user, setUser] = useState({name: "",email: ""});
const [error,setError] = useState ('');

const Login = details => {
  console.log(details);

  if (details.email === adminUser.email && details.password === adminUser.pasword){
    console.log("Logged in");
    setUser({
      name : details.username,
      email: details.email
    });
     }  else { console.log('Details do not match');
                setError('Please try again');}
     
}
const Logout = () => {
  setUser({name: "", email:""});
}

return (
    <div className="App">
      {(user.email !== '')?(
        <div className='welcome'>
          <h2>Welcome back, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
     
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;
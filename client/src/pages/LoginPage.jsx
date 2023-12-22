import axios from "axios";
import { useContext, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { UserContext } from "../UserContext";


export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const { setUser, user } = useContext(UserContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/login', {
        email, password
      });
      alert(data.message);
      console.log(user);
      setUser(data.user);
      console.log(user);
      setRedirect(true);
      setEmail('');
      setPassword('');
    } catch (error) {
      setEmail('');
      setPassword('');
      alert(error.response.data.message);
    }

  }
  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={handleLogin}>
          <input type="email"
            placeholder="your@email.com"
            value={email} required
            onChange={ev => setEmail(ev.target.value)} />
          <input type="password"
            placeholder="password"
            value={password} required
            onChange={ev => setPassword(ev.target.value)} />
          <button className="primary">Login</button>
          <div className="text-center py-2 text-gray-500">
            Don't have an account yet? <Link className="underline text-black" to={'/register'}>Register now</Link>
          </div>
        </form>
      </div>
    </div>
  );

}
import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom"

export const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registerUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/register', {
                name, email, password
            });
            setName('');
            setEmail('');
            setPassword('');
            alert("Registration successful");
        } catch (error) {
            alert("Registration failed");
        }


    }

    return (
        <div className="mt-4 grow flex items-center justify-around" >
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4" >Register</h1>
                <form onSubmit={registerUser} className="max-w-md mx-auto ">
                    <input type="text" placeholder="Name" value={name} required
                        onChange={e => setName(e.target.value)} />
                    <input type="email" placeholder="your@email.com" value={email} required
                        onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="password" value={password} required
                        onChange={e => setPassword(e.target.value)} />
                    <button type="submit" className="primary">Register</button>
                    <div className="text-center py-2 text-gray-500">Already a member?
                        <Link className="underline text-black" to={'/Login'}>Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )

}
import React, { useState } from 'react';
import API from '../api';

function Login() {
    const [form, setForm] = useState({ email: '', password: '' });

    const handleLogin = async (e) => {
        e.preventDefault();
        const res = await API.post('/auth/login', form);

        localStorage.setItem('token', res.data.token);

        alert('Login successful');
    };

    return (
        <form onSubmit={handleLogin}>
            <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})}/>
            <input type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})}/>
            <button>Login</button>
        </form>
    );
}

export default Login;
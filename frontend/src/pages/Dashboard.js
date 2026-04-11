import React, { useEffect, useState } from 'react';
import API from '../api';

function Dashboard() {
    const [data, setData] = useState('');

    useEffect(() => {
        API.get('/dashboard')
            .then(res => setData(res.data.message))
            .catch(() => alert('Unauthorized'));
    }, []);

    return <h2>{data}</h2>;
}

export default Dashboard;
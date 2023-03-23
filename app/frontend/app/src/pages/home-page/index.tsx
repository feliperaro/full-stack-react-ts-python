import React from 'react';
import Root from '../../components/root';
import './index.css'

const HomePage: React.FC = () => {
    return (
        <div className='main'>
            <h1 className='main-header'>Home Page</h1>
            <div>
                <Root />
            </div>
        </div>
    )
}

export default HomePage;


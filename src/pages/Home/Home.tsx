import React from 'react';

interface Props {
    location: { pathname: string }
}

const Home: React.FC<Props> = () => {
    return <h2>Welcome to the bank</h2>;
}

export default Home;
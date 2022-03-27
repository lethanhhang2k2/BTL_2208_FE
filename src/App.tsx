import React from 'react';
import logo from './logo.svg';
import { Spinner } from 'react-bootstrap';
import NewFeed from './routes/newfeed';

function App() {
  return (
    <div className="bg-gray-100">
      <NewFeed />
    </div>
  );
}

export default App;

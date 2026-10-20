import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <Card className="not-found-card">
        <div className="not-found-content">
          <h1>404 - Page Not Found</h1>
          <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
          <Button 
            label="Go to Home" 
            icon="pi pi-home" 
            onClick={() => navigate('/')}
          />
        </div>
      </Card>
    </div>
  );
};

export default NotFound;
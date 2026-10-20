import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';
import './Dashboard1.css';

const Dashboard1 = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const toast = React.useRef(null);

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/login');
    toast.current.show({
      severity: 'success',
      summary: 'Logged Out',
      detail: 'You have been successfully logged out',
      life: 3000
    });
  };

  return (
    <div className="dashboard-container">
      
      <Card title="dashboard" className="dashboard-card">
        <div className="dashboard-content">
          <h2>Welcome to Your Dashboard</h2>
          <p>You have successfully logged in to the application.</p>
          
          <div className="dashboard-stats">
            <div className="stat-card">
              <h3>Recent Activity</h3>
              <p>No recent activity</p>
            </div>
            <div className="stat-card">
              <h3>Notifications</h3>
              <p>No new notifications</p>
            </div>
          </div>
          
          <Button 
            label="Logout" 
            icon="pi pi-sign-out" 
            className="p-button-danger" 
            onClick={handleLogout}
          />
        </div>
      </Card>
    </div>
  );
};

export default Dashboard1;
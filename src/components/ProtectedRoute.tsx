import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  role: 'admin' | 'student';
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, role }) => {
  const userRole = localStorage.getItem('role');

  if (userRole !== role) {
    return <Navigate to={role === 'admin' ? '/' : '/student-login'} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
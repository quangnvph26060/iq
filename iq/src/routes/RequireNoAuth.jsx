import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const RequireNoAuth = ({ children }) => {
  const { token } = useAuth();
  
  if (token) {
    return <Navigate to="/iqplay" replace />;
  }

  return children;
};

export default RequireNoAuth;
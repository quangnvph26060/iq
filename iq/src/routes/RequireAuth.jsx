import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const RequireAuth = ({ children }) => {
  const { token, isAuthReady } = useAuth();

  // ⏳ Chờ khởi tạo xong mới kiểm tra token
  if (!isAuthReady) {
    return null; // hoặc loading spinner nếu muốn
  }

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default RequireAuth;

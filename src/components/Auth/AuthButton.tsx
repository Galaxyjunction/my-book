import React, { useState } from 'react';
import { useAuth } from './AuthProvider';
import LoginModal from './LoginModal';

const AuthButton: React.FC = () => {
  const { user, logout } = useAuth();
  const [showModal, setShowModal] = useState(false);

  if (user) {
    return (
      <div style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1000,
        background: 'white',
        padding: '12px 20px',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}>
        <div style={{ fontSize: '14px' }}>
          <div style={{ fontWeight: '600', color: '#374151' }}>
            👤 {user.email}
          </div>
          {user.experience && (
            <div style={{ fontSize: '12px', color: '#6b7280', textTransform: 'capitalize' }}>
              {user.experience} level
            </div>
          )}
        </div>
        <button
          onClick={logout}
          style={{
            background: '#ef4444',
            color: 'white',
            border: 'none',
            padding: '6px 12px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: '600',
          }}
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1000,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: '600',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        }}
      >
        🔐 Login / Sign Up
      </button>
      <LoginModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onLogin={async () => {}}
        onSignup={async () => {}}
      />
    </>
  );
};

export default AuthButton;
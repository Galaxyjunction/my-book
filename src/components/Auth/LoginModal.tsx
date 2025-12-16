import React, { useState } from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (email: string, password: string) => Promise<void>;
  onSignup: (email: string, password: string, background: string, experience: string) => Promise<void>;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLogin, onSignup }) => {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [background, setBackground] = useState('');
  const [experience, setExperience] = useState('beginner');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (mode === 'login') {
        await onLogin(email, password);
      } else {
        await onSignup(email, password, background, experience);
      }
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10000,
    }}>
      <div style={{
        background: 'white',
        padding: '32px',
        borderRadius: '16px',
        maxWidth: '450px',
        width: '90%',
        maxHeight: '90vh',
        overflow: 'auto',
      }}>
        <h2 style={{ marginTop: 0 }}>
          {mode === 'login' ? '🔐 Login' : '📝 Create Account'}
        </h2>

        <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
          <button
            onClick={() => setMode('login')}
            style={{
              flex: 1,
              padding: '10px',
              background: mode === 'login' ? '#3b82f6' : '#e5e7eb',
              color: mode === 'login' ? 'white' : '#666',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
            }}
          >
            Login
          </button>
          <button
            onClick={() => setMode('signup')}
            style={{
              flex: 1,
              padding: '10px',
              background: mode === 'signup' ? '#3b82f6' : '#e5e7eb',
              color: mode === 'signup' ? 'white' : '#666',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
            }}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
              }}
              placeholder="your@email.com"
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
              }}
              placeholder="••••••••"
            />
          </div>

          {mode === 'signup' && (
            <>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                  Your Background
                </label>
                <textarea
                  value={background}
                  onChange={(e) => setBackground(e.target.value)}
                  rows={3}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                  }}
                  placeholder="Tell us about your software/hardware background..."
                />
              </div>

              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                  Experience Level
                </label>
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '14px',
                  }}
                >
                  <option value="beginner">🌱 Beginner - New to robotics</option>
                  <option value="intermediate">🚀 Intermediate - Some experience</option>
                  <option value="advanced">⚡ Advanced - Experienced professional</option>
                </select>
              </div>
            </>
          )}

          {error && (
            <div style={{
              padding: '12px',
              background: '#fee2e2',
              color: '#dc2626',
              borderRadius: '8px',
              marginBottom: '16px',
              fontSize: '14px',
            }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '14px',
              background: loading ? '#9ca3af' : '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: loading ? 'not-allowed' : 'pointer',
              marginBottom: '12px',
            }}
          >
            {loading ? 'Please wait...' : (mode === 'login' ? 'Login' : 'Create Account')}
          </button>

          <button
            type="button"
            onClick={onClose}
            style={{
              width: '100%',
              padding: '14px',
              background: '#e5e7eb',
              color: '#374151',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
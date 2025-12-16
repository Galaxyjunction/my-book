import React from 'react';
import { AuthProvider } from '../components/Auth/AuthProvider';
import AuthButton from '../components/Auth/AuthButton';
import Chatbot from '../components/Chatbot';

export default function Root({children}: {children: React.ReactNode}): JSX.Element {
  return (
    <AuthProvider>
      {children}
      <AuthButton />
      <Chatbot />
    </AuthProvider>
  );
}
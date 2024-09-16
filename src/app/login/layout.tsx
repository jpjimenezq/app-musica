import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Iniciar Sesión',
  description: 'Accede a tu cuenta para continuar tu entrenamiento auditivo y mejorar tus habilidades musicales.',
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="login-layout">
      {/* Aquí puedes añadir elementos específicos del layout de login si los necesitas */}
      {children}
    </div>
  );
}

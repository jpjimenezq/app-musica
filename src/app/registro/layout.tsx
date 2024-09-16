import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Registrarse',
  description: 'Regístrate para continuar tu entrenamiento auditivo y mejorar tus habilidades musicales.',
};

export default function RegistroLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="registro-layout">
      {/* Aquí puedes añadir elementos específicos del layout de login si los necesitas */}
      {children}
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from 'next/image'
import { Button } from "@/components/ui/button";
import {
  HeadphonesIcon,
  BarChartIcon,
  BrainIcon,
  MenuIcon,
  XIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LogOut,
} from "lucide-react";
import { signIn, useSession, signOut } from "next-auth/react";
import Link from "next/link";

export function MusicTrainingLandingComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: session } = useSession();
  console.log(session);

  return (
    <div className="min-h-screen flex flex-col bg-navy-900 text-gray-800 relative overflow-hidden">
      {/* Background design */}
      <div className="absolute inset-0 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900"></div>
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-1/2 h-1/2 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1/2 h-1/2 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-10 bg-white bg-opacity-90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="flex-shrink-0">
                <HeadphonesIcon className="h-8 w-8 text-sky-500" />
              </a>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {session?.user ? (
                    <a
                      href="/dashboard"
                      className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Dashboard
                    </a>
                  ) : (
                    <></>
                  )}
                  <a
                    href="#"
                    className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Características
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contacto
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-2">
              {session?.user ? (
                <>
                  <p>{session.user.name}</p>
                  {session.user.image && (
                    <Image
                      src={session.user.image}
                      alt="User profile"
                      className="w-10 h-10 rounded-full cursor-pointer"
                      width={40}
                      height={40}
                    />
                  )}
                  <Button
                    size="sm"
                    className="bg-sky-500 hover:bg-sky-600 text-white"
                    onClick={() => signOut()}
                  >
                    Salir
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-sky-500 border-sky-500 hover:bg-sky-100 hover:text-sky-600"
                  >
                    Registrar
                  </Button>
                  <Button
                    size="sm"
                    className="bg-sky-500 hover:bg-sky-600 text-white"
                    onClick={() => signIn()}
                  >
                    Iniciar sesión
                  </Button>
                </>
              )}
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-200 focus:ring-gray-600"
              >
                <span className="sr-only">Abrir menú principal</span>
                {isMenuOpen ? (
                  <XIcon className="block h-6 w-6" />
                ) : (
                  <MenuIcon className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              >
                Inicio
              </a>
              <a
                href="#"
                className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              >
                Características
              </a>
              <a
                href="#"
                className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              >
                Precios
              </a>
              <a
                href="#"
                className="text-gray-600 hover:bg-gray-200 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              >
                Contacto
              </a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-300">
              <div className="flex items-center px-5 space-y-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full text-sky-500 border-sky-500 hover:bg-sky-100 hover:text-sky-600 mb-2"
                >
                  Registrar
                </Button>
                <Button
                  size="sm"
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white"
                >
                  Iniciar sesión
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main className="relative z-10 flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-cyan-300">
            Afina Tu Oído Musical
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-700">
            Desarrolla tu habilidad auditiva con ejercicios interactivos y
            seguimiento de progreso personalizado
          </p>
          {session?.user ? (
            <Link href="/dashboard">
              <Button
                className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"            >
                Dashboard
              </Button>
            </Link>
          ) : (
            <Button
              size="lg"
              className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Comienza Gratis
            </Button>
          )}
        </div>

        {/* Características */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          <FeatureCard
            icon={<HeadphonesIcon size={40} />}
            title="Ejercicios Interactivos"
            description="Practica con una variedad de ejercicios diseñados para mejorar tu percepción musical"
          />
          <FeatureCard
            icon={<BarChartIcon size={40} />}
            title="Seguimiento de Progreso"
            description="Visualiza tu mejora con estadísticas detalladas y gráficos de progreso"
          />
          <FeatureCard
            icon={<BrainIcon size={40} />}
            title="Aprendizaje Adaptativo"
            description="Ejercicios que se ajustan a tu nivel para un entrenamiento óptimo"
          />
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white bg-opacity-90 backdrop-blur-lg rounded-xl p-10 shadow-2xl">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            ¿Listo para mejorar tu oído musical?
          </h2>
          <p className="mb-6 text-lg text-gray-600">
            Únete a miles de músicos que ya están afinando sus habilidades
          </p>
          <Button
            size="lg"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Empieza Tu Entrenamiento
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-white bg-opacity-90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                Sobre Nosotros
              </h3>
              <p className="text-sm text-gray-600">
                Somos una plataforma dedicada a ayudar a músicos a mejorar sus
                habilidades auditivas a través de ejercicios interactivos y
                tecnología adaptativa.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                Enlaces Rápidos
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Características
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Precios
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                Soporte
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Tutoriales
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Términos de Servicio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-900"
                  >
                    Política de Privacidad
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                Síguenos
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <FacebookIcon size={24} />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <TwitterIcon size={24} />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <InstagramIcon size={24} />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-300 text-center text-sm text-gray-600">
            <p>
              &copy; 2023 Tu Plataforma de Entrenamiento Auditivo. Todos los
              derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-6 text-center transition-all duration-300 hover:shadow-xl hover:scale-105">
      <div className="inline-block p-3 bg-sky-100 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

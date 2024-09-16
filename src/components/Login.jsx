"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { HeadphonesIcon, XIcon } from "lucide-react"
import Link from "next/link"

export function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar los datos del formulario
    console.log(formData)
  }

  return (
    <div className="min-h-screen flex flex-col bg-navy-900 text-gray-800 relative overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900"></div>
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-1/2 h-1/2 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-xl shadow-2xl w-full max-w-md">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <HeadphonesIcon className="h-8 w-8 text-sky-500 mr-2" />
              <h2 className="text-2xl font-bold text-gray-800">Iniciar Sesión</h2>
            </div>
            <Button variant="ghost" size="icon" className="text-gray-500 hover:text-gray-700">
              <XIcon className="h-6 w-6" />
            </Button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 text-lg py-2 px-3"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 text-lg py-2 px-3"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-sky-500 hover:bg-sky-600 text-white">
              Iniciar Sesión
            </Button>
          </form>
          <p className="mt-4 text-center text-sm text-gray-600">
            ¿No tienes una cuenta? <Link href="/registro" className="font-medium text-sky-600 hover:text-sky-500">Regístrate</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
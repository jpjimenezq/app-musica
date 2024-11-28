"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, ChevronDownIcon, HeadphonesIcon, LayoutDashboardIcon, ListMusicIcon, MicIcon, SettingsIcon, UserIcon, ClockIcon, TrophyIcon } from 'lucide-react'
import { useSession } from "next-auth/react";

const practiceData = [
  { day: 'Lun', minutes: 30 },
  { day: 'Mar', minutes: 45 },
  { day: 'Mié', minutes: 60 },
  { day: 'Jue', minutes: 30 },
  { day: 'Vie', minutes: 45 },
  { day: 'Sáb', minutes: 75 },
  { day: 'Dom', minutes: 60 },
]

const fechaActual = new Date();
const opciones: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric'
};
const fechaFormateada = fechaActual.toLocaleDateString('es-ES', opciones);

export default function DashboardPage() {
  const { data: session } = useSession();
  console.log(session)
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-sky-500 flex items-center gap-2">
            <HeadphonesIcon />
            <span>MusicTrain</span>
          </h1>
        </div>
        <nav className="mt-8">
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 bg-gray-100">
            <LayoutDashboardIcon className="mr-3 text-sky-500" />
            Dashboard
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100">
            <MicIcon className="mr-3 text-gray-400" />
            Ejercicios
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100">
            <ListMusicIcon className="mr-3 text-gray-400" />
            Lecciones
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100">
            <SettingsIcon className="mr-3 text-gray-400" />
            Configuración
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="text-gray-600">
              <CalendarIcon className="mr-2 h-4 w-4" /> {fechaFormateada}
            </Button>
            <Button variant="outline" className="text-gray-600 flex items-center gap-2">
              <UserIcon className="mr-2 h-4 w-4" />
              {session?.user?.name || "Mi Perfil"}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tiempo total de práctica</CardTitle>
              <ClockIcon className="h-4 w-4 text-sky-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">345 min</div>
              <p className="text-xs text-gray-500">+20% vs. semana pasada</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ejercicios completados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">28</div>
              <p className="text-xs text-gray-500">+8 desde ayer</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Precisión promedio</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
              <p className="text-xs text-gray-500">+5% vs. promedio</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Nivel actual</CardTitle>
              <TrophyIcon className="h-4 w-4 text-sky-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Intermedio</div>
              <p className="text-xs text-gray-500">+2 niveles este mes</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Progreso por habilidad</CardTitle>
              <CardDescription>Tu avance en diferentes áreas musicales</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Reconocimiento de intervalos</span>
                    <span className="text-sm font-medium text-gray-700">75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Dictado melódico</span>
                    <span className="text-sm font-medium text-gray-700">60%</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Reconocimiento de acordes</span>
                    <span className="text-sm font-medium text-gray-700">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Ritmo y métrica</span>
                    <span className="text-sm font-medium text-gray-700">70%</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Próximas lecciones</CardTitle>
              <CardDescription>Tus próximas sesiones programadas</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="today" className="w-full">
                <TabsList>
                  <TabsTrigger value="today">Hoy</TabsTrigger>
                  <TabsTrigger value="week">Esta semana</TabsTrigger>
                  <TabsTrigger value="month">Este mes</TabsTrigger>
                </TabsList>
                <TabsContent value="today">
                  <ul className="space-y-4">
                    <LessonItem
                      time="14:00"
                      title="Entrenamiento auditivo avanzado"
                      description="Reconocimiento de intervalos compuestos"
                    />
                    <LessonItem
                      time="16:30"
                      title="Teoría musical"
                      description="Introducción a las escalas modales"
                    />
                  </ul>
                </TabsContent>
                <TabsContent value="week">
                  <p className="text-gray-600">Lecciones programadas para esta semana...</p>
                </TabsContent>
                <TabsContent value="month">
                  <p className="text-gray-600">Lecciones programadas para este mes...</p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

function LessonItem({ time, title, description }: any) {
  return (
    <li className="flex items-center p-3 bg-gray-50 rounded-lg">
      <span className="mr-3 text-lg font-semibold text-sky-500">{time}</span>
      <div>
        <h3 className="font-medium text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </li>
  )
}

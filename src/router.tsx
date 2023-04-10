import { Route, Navigate, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { lazy } from 'react';

const MapPage = lazy(() => import('Pages/MapPage/MapPage'));

export const router = createBrowserRouter(createRoutesFromElements(<Route element={<MapPage />} path="/" />));

import { createBrowserRouter } from 'react-router-dom';
import ResponsiveLayout from './components/ResponsiveLayout.tsx';
import MainPage from './pages/MainPage.tsx';
import AvailabilityTimeSlotsPage from './pages/AvailabilityTimeSlotsPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ResponsiveLayout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/check-availability',
        element: <AvailabilityTimeSlotsPage />,
      },
    ],
  },
]);

export default router;

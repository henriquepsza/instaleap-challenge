import { createBrowserRouter } from 'react-router-dom';
import ResponsiveLayout from './components/ResponsiveLayout.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ResponsiveLayout />,
    children: [],
  },
]);

export default router;

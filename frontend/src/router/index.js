import Authenticated from 'src/components/Authenticated';
import { Navigate } from 'react-router-dom';

import BaseLayout from 'src/layouts/BaseLayout';

import AccentSidebarLayout from 'src/layouts/AccentSidebarLayout';


import dashboardsRoutes from './dashboards';
import blocksRoutes from './blocks';
import applicationsRoutes from './applications';
import managementRoutes from './management';

import accountRoutes from './account';
import baseRoutes from './base';
import bookingRoutes from './booking';

const router = [
  {
    path: 'account',
    children: accountRoutes
  },
  {
    path: '*',
    element: <BaseLayout />,
    children: baseRoutes
  },


  // Accent Sidebar Layout

  {
    path: 'accent-sidebar',
    element: (
      <Authenticated>
        <AccentSidebarLayout />
      </Authenticated>
    ),
    children: [
      {
        path: '/',
        element: <Navigate to="booking" replace />
      },
      {
        path: 'dashboards',
        children: dashboardsRoutes
      },
      {
        path: 'booking',
        children: bookingRoutes
      },
      {
        path: 'blocks',
        children: blocksRoutes
      },
      {
        path: 'applications',
        children: applicationsRoutes
      },
      {
        path: 'management',
        children: managementRoutes
      }
    ]
  }
];

export default router;

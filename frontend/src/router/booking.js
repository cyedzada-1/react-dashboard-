import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// bookingmanagement
const NewBooking = Loader(lazy(() => import('src/content/Booking/NewBooking')));

const bookingRoutes = [
  {
    path: '/',
    element: <Navigate to="/new-booking" replace />
  },
  {
    path: 'new-booking',
    element: <NewBooking />
  },
  {
    path: 'refund',
    element: <NewBooking />
  },
  {
    path: 'reschedule',
    element: <NewBooking />
  },
  {
    path: 'booking-history',
    element: <NewBooking />
  }
];

export default bookingRoutes;

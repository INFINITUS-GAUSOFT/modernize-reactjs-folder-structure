import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../../layouts/full/shared/loadable/Loadable';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../../layouts/blank/BlankLayout')));

/* ****Pages***** */
const Dashboard = Loadable(lazy(() => import('../../../features/dashboard/Dashboard')))
const SamplePage = Loadable(lazy(() => import('../../../features/samplepage/pages/SamplePage')))
const Icons = Loadable(lazy(() => import('../../../features/icons/pages/Icons')))
const TypographyPage = Loadable(lazy(() => import('../../../features/utilities/pages/TypographyPage')))
const Shadow = Loadable(lazy(() => import('../../../features/utilities/pages/Shadow')))
const Error = Loadable(lazy(() => import('../../../features/authentication/pages/Error')));
const Register = Loadable(lazy(() => import('../../../features/authentication/pages/Register')));
const Login = Loadable(lazy(() => import('../../../features/authentication/pages/Login')));

const Router = [
  {
    path: '/',
    element: <FullLayout />,
    children: [
      { path: '/', element: <Navigate to="/dashboard" /> },
      { path: '/dashboard', exact: true, element: <Dashboard /> },
      { path: '/samplepage', exact: true, element: <SamplePage /> },
      { path: '/icons', exact: true, element: <Icons /> },
      { path: '/ui/typography', exact: true, element: <TypographyPage /> },
      { path: '/ui/shadow', exact: true, element: <Shadow /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: '/auth/register', element: <Register /> },
      { path: '/auth/login', element: <Login /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;

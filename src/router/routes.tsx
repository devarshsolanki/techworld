import { RouteObject } from 'react-router-dom';
import App from '../App';
import { HomePage } from '../components/HomePage';
import { AboutPage } from '../components/AboutPage';
import { SolutionsPage } from '../components/SolutionsPage';
import { ContactPage } from '../components/ContactPage';
import { TechnologyPage } from '../components/TechnologyPage';
import { ResourcesPage } from '../components/ResourcesPage';
import { BookDemoPage } from '../components/BookDemoPage';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'home',
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'solutions',
        element: <SolutionsPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'technology',
        element: <TechnologyPage />,
      },
      {
        path: 'projects',
        element: <ResourcesPage />,
      },
      {
        path: 'resources',
        element: <ResourcesPage />,
      },
      {
        path: 'book-demo',
        element: <BookDemoPage />,
      },
    ],
  },
];

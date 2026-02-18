import { RouteObject } from 'react-router-dom';
import App from '../App';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { SolutionsPage } from '../pages/SolutionsPage';
import { ContactPage } from '../pages/ContactPage';
import { ProjectsNew } from '../pages/ProjectsNew';
import { BookDemoPage } from '../pages/BookDemoPage';
import { ReferAndEarn } from '../pages/ReferAndEarn';

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
          path: 'projects',
        element: <ProjectsNew />,
      },
      {
        path: 'book-demo',
        element: <BookDemoPage />,
      },
      {
        path: 'refer-and-earn',
        element: <ReferAndEarn />,
      },
    ],
  },
];

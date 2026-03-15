import { RouteObject } from 'react-router-dom';
import App from '../App';
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { SolutionsPage } from '../pages/SolutionsPage';
import { ContactPage } from '../pages/ContactPage';
import { ProjectsNew } from '../pages/ProjectsNew';
import { BookDemoPage } from '../pages/BookDemoPage';
import { ReferAndEarn } from '../pages/ReferAndEarn';
import { PrivacyPolicyPage } from '../pages/PrivacyPolicyPage';
import { BlogPage } from '../pages/BlogPage';
import { CaseStudiesPage } from '../pages/CaseStudiesPage';
import { TermsOfServicePage } from '../pages/TermsOfServicePage';
import { CookiePolicyPage } from '../pages/CookiePolicyPage';

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
      {
        path: 'blog',
        element: <BlogPage />,
      },
      {
        path: 'case-studies',
        element: <CaseStudiesPage />,
      },
      {
        path: 'terms-of-service',
        element: <TermsOfServicePage />,
      },
      {
        path: 'cookie-policy',
        element: <CookiePolicyPage />,
      },
      {
        path: 'privacy-policy',
        element: <PrivacyPolicyPage />,
      },
    ],
  },
];

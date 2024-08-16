import "./App.css";
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import HomePage from "./pages/home/homePage";
import LearnPage from "./pages/learn/learnPage";
import InfoPage from "./pages/info/infoPage";
import ProgramsPage from "./pages/programs/programsPage";
import EarnPage from "./pages/earn/earnPage";


import { loader as  learnPageLoader} from "./loaders/learnPageLoaders/learnPageLoader";
import { loader as  questionsLoader} from "./loaders/learnPageLoaders/questionsLoader";

import Questions from "./pages/learn/questions";

import LearnLayout from "./pages/learn/learnLayout";
import { QueryClient, QueryClientProvider }  from '@tanstack/react-query'
import { ReactQueryDevtools }  from '@tanstack/react-query-devtools'
import AdminIndex from "./pages/admin";
import AddQuestion from "./pages/admin/addQuestion";
import AdminLayout from "./pages/admin/layout";
function App() {
  const queryClient = new QueryClient()

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage/>
    },
    {
      path: '/learn',
      element: <LearnLayout/>,
      children: [
        {
          index: true,
          element: <LearnPage/>,
          loader: learnPageLoader,

        },
        {
          path: ':subject',
          element: <Questions/>,
          loader: questionsLoader
        },
      ]
    },
    {
      path: '/info',
      element: <InfoPage/>
    },
    {
      path: '/programs',
      element: <ProgramsPage/>
    },
    {
      path: '/earn',
      element: <EarnPage/>
    },
    {
   path:'/admin',
   element: <AdminLayout/>,
   children: [
    {
      index: true,
      element: <AdminIndex/>
    },
    {
      path:'add-questions',
      element: <AddQuestion/>
    }
   ]
    },
  ])

  return <div className="h-[100dvh]">
    <QueryClientProvider client={queryClient} >
    <RouterProvider router={router}>
          
          </RouterProvider>
          <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    
  </div>;
}

export default App;

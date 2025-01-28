import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider as StoreProvider } from 'react-redux';
import { store } from './store/store';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { titlesFetch } from './store/titles/titles.actions';

import '@/styles/reset.css' // reset css
import '@/styles/index.css' // global theme config via variables
import 'antd/dist/antd'; // antd css

// Preemptive store hydration
store.dispatch(titlesFetch({}));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider store={store}>
      <RouterProvider router={router} />
    </StoreProvider>
  </StrictMode>,
)

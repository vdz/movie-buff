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
// This should be in a systematic way according to need of the app,
// where local storage can be used to hydrate the state until server is ready, etc.
store.dispatch(titlesFetch({}));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider store={store}>
      <RouterProvider router={router} />
    </StoreProvider>
  </StrictMode>,
)

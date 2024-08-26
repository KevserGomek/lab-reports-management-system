import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css';  //CSS reset
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
// import { store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './redux/store';

// import 'dayjs/locale/ru';
import { DatesProvider, MonthPickerInput, DatePickerInput } from '@mantine/dates';
import { Notifications } from '@mantine/notifications';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

      
      <BrowserRouter>
        <MantineProvider>
        <Notifications />
        <DatesProvider settings={{ firstDayOfWeek: 1, weekendDays: [0,6], timezone: 'UTC' }}>
          <App />
          </DatesProvider>
        </MantineProvider>
        
      </BrowserRouter>
      </PersistGate>
    </Provider>
   
  // </StrictMode>,
)

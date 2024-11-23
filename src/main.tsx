import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.sass';
import App from './App.tsx';
import { FluentProvider} from '@fluentui/react-components';
import {customLightTheme} from './styles/theme/overrides/Light.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FluentProvider theme={customLightTheme}>
      <App />
    </FluentProvider>,
  </StrictMode>,
);

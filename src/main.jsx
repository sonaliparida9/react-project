import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { FakestoreIndex} from './fakestore/fakestore-index.jsx'
import { VideoTutorialIndex } from './video-tutorials/video-tutorial-index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Default path for cookies */}
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      <BrowserRouter>
        <FakestoreIndex />
      </BrowserRouter>
    </CookiesProvider>
  </StrictMode>
);

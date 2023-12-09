import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import RequestHook from './components/request.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RequestHook url="http://localhost:7070/data" opt=''/>
     <RequestHook url="http://localhost:7070/error" opt=''/>
     <RequestHook url="http://localhost:7070/loading" opt='' />
  </StrictMode>
  
)

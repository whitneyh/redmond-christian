/*
 * Copyright 2023 Whitney Hunter
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes/App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Welcome} from "./routes/Welcome";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {CssBaseline} from "@mui/material";
import Evacuation from "./routes/Evacuation";
import HospitalityGuide from "./routes/HospitalityGuide";
import SecurityGuide from "./routes/SecurityGuide";
import SecurityChecklist from "./routes/SecurityChecklist";

const router = createBrowserRouter([
    {
        path: '/', element: <App/>,
        children: [
            {path: '/', element: <Welcome/>},
            {path: '/hospitality/guide', element: <HospitalityGuide/>},
            {path: '/security/guide', element: <SecurityGuide/>},
            {path: '/security/checklist', element: <SecurityChecklist/>},
            {path: '/security/evacuation', element: <Evacuation/>},
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <CssBaseline enableColorScheme/>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

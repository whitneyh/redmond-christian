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
import './App.css';
import {Header} from "./Layout/Header";
import {Navigation} from "./Layout/Navigation";
import {Main} from "./Layout/Main";
import {Footer} from "./Layout/Footer";

function App() {
    return (
        <div className="app-container">
            <header>
                <Header/>
            </header>
            <nav>
                <Navigation/>
            </nav>
            <div className="main">
                <Main/>
            </div>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default App;

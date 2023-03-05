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

import React, {useState} from 'react';
import './App.css';
import {Box} from "@mui/material";
import {Outlet} from "react-router-dom";
import {NavDrawer} from "../component/NavDrawer";
import Nav from "../component/Nav";
import Header from "../component/Header";

function App() {
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <Box sx={{display: 'flex'}}>
            <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}/>
            <NavDrawer mobileOpen={mobileOpen} drawer={<Nav setMobileOpen={setMobileOpen}/>}/>
            <Box sx={{mt: 10, ml: 3, mr: 3}}>
                <Outlet/>
            </Box>
        </Box>
    )
}

export default App;

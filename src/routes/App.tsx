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
import {
    AppBar,
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography
} from "@mui/material";
import {Badge, CheckBox} from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import {NavLink, Outlet} from "react-router-dom";
import {NavDrawer} from "../component/NavDrawer";
import Nav from "../component/Nav";

function App() {
    const [mobileOpen, setMobileOpen] = useState(false)

    return (
        <Box sx={{display: 'flex'}}>
            <AppBar position='fixed' sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
                <Toolbar>
                    <IconButton color='inherit'
                                edge='start'
                                sx={{display: {xs: 'block', sm: 'block', md: 'none', lg: 'none'}}}
                                onClick={() => setMobileOpen(!mobileOpen)}>
                        <MenuIcon/>
                    </IconButton>
                    <img src={process.env.PUBLIC_URL + '/RCC_Logo.webp'}/>
                    <Typography variant='h3' sx={{display: {xs: 'none', sm: 'none', md: 'block', lg: 'block'}, ml: 2, fontFamily: 'Montserrat', color: 'white'}}>
                        Redmond Christian Church
                    </Typography>
                    <Typography variant='body1' sx={{display: {xs: 'block', sm: 'block', md: 'none', lg: 'none'}, ml: 2, fontFamily: 'Montserrat', color: 'white'}}>
                        Redmond Christian Church
                    </Typography>
                </Toolbar>
            </AppBar>
            <NavDrawer drawer={<Nav setMobileOpen={setMobileOpen}/>} isMobile={false} mobileOpen={undefined}/>
            <NavDrawer drawer={<Nav setMobileOpen={setMobileOpen}/>} isMobile={true} mobileOpen={mobileOpen}/>
            <Box sx={{mt: 10, ml: 3, mr: 3}}>
                <Outlet/>
            </Box>
        </Box>
    )
}

export default App;

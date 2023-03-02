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

function App() {
    const [mobileOpen, setMobileOpen] = useState(false)

    const drawerWidth = 240
    const drawer = (
        <Box>
            <Typography variant='h6' sx={{ml: 3, mt: 2}}>
                Hospitality
            </Typography>
            <Divider/>
            <Typography variant='h6' sx={{ml: 3, mt: 2}}>
                Security
            </Typography>
            <List>
                {[
                    {name: 'Team Guide', icon: <Badge/>, route: '/security/guide'},
                    {name: 'Sunday Checklist', icon: <CheckBox/>, route: '/security/checklist'},
                ].map((item, index) => (
                    <NavLink to={item.route} onClick={() => setMobileOpen(false)}>
                        <ListItem key={index}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.name}/>
                        </ListItem>
                    </NavLink>
                ))}
            </List>
        </Box>
    )

    return (
        <Box sx={{display: 'flex'}}>
            <AppBar position='fixed' sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
                <Toolbar>
                    <IconButton color='inherit'
                                edge='start'
                                sx={{display: {sm: 'block', md: 'none'}}}
                                onClick={() => setMobileOpen(!mobileOpen)}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant='h3'>Redmond Christian Church</Typography>
                </Toolbar>
            </AppBar>
            <Box component='nav' sx={{display: {sm: 'none', md: 'block'}}}>
                <Drawer variant='permanent'
                        sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                width: drawerWidth,
                                boxSizing: 'border-box'
                            }
                        }}>
                    <Toolbar/>
                    {drawer}
                </Drawer>
            </Box>
            <Box component='nav' sx={{display: {sm: 'block', md: 'none'}}}>
                <Drawer variant='temporary'
                        open={mobileOpen}
                        onClose={() => setMobileOpen(false)}
                        sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                width: drawerWidth,
                                boxSizing: 'border-box'
                            }
                        }}>
                    <Toolbar/>
                    {drawer}
                </Drawer>
            </Box>
            <Box sx={{mt: 10, ml: 3, mr: 3}}>
                <Outlet/>
            </Box>
        </Box>
    )
}

export default App;

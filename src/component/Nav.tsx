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

import {Box, Divider, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {Badge, CheckBox, DoorFront} from "@mui/icons-material";
import {NavLink} from "react-router-dom";
import React from "react";

const Nav = (props: {setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const {setMobileOpen} = props
    return (
        <Box>
            <Typography variant='h6' sx={{ml: 3, mt: 2, color: 'crimson'}}>
                Hospitality
            </Typography>
            <List>
                {[
                    {name: 'Team Guide', icon: <Badge/>, route: '/hospitality/guide'},
                ].map((item, index) => (
                    <NavLink to={item.route} onClick={() => setMobileOpen(false)}>
                        <ListItem key={index.toString()}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.name}/>
                        </ListItem>
                    </NavLink>
                ))}
            </List>
            <Divider/>
            <Typography variant='h6' sx={{ml: 3, mt: 2, color: 'crimson'}}>
                Security
            </Typography>
            <List>
                {[
                    {name: 'Team Guide', icon: <Badge/>, route: '/security/guide'},
                    {name: 'Sunday Checklist', icon: <CheckBox/>, route: '/security/checklist'},
                    {name: 'Evacuation', icon: <DoorFront/>, route: '/security/evacuation'},
                ].map((item, index) => (
                    <NavLink to={item.route} onClick={() => setMobileOpen(false)}>
                        <ListItem key={index.toString()}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.name}/>
                        </ListItem>
                    </NavLink>
                ))}
            </List>
        </Box>
    )
}

export default Nav

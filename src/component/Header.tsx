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

import {AppBar, Box, IconButton, Toolbar, Typography, useMediaQuery, useTheme} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

const Header = (props: { mobileOpen: boolean, setMobileOpen: (value: boolean) => void }) => {
    const {mobileOpen, setMobileOpen} = props
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    const title = () => {
        const displayValue = isMobile
            ? {xs: 'block', sm: 'block', md: 'none', lg: 'none'}
            : {xs: 'none', sm: 'none', md: 'block', lg: 'block'}
        return (
            <Typography variant={isMobile ? 'body1' :'h3'} sx={{
                display: displayValue,
                ml: 2,
                fontFamily: 'Montserrat',
                color: 'white'
            }}>
                Redmond Christian Church
            </Typography>
        )
    }

    return (
        <AppBar position='fixed' sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
            <Toolbar>
                <IconButton color='inherit'
                            edge='start'
                            sx={{display: {xs: 'block', sm: 'block', md: 'none', lg: 'none'}}}
                            onClick={() => setMobileOpen(!mobileOpen)}>
                    <MenuIcon/>
                </IconButton>
                <img src={process.env.PUBLIC_URL + '/RCC_Logo.webp'}/>
                {title()}
            </Toolbar>
        </AppBar>
    )
}

export default Header

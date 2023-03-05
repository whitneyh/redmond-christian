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

import {Box, Drawer, Toolbar} from "@mui/material";
import React, {ReactNode} from "react";

const drawerWidth = 240

export const NavDrawer = (props: { drawer: ReactNode, isMobile: boolean, mobileOpen: boolean | undefined }) => {
    const {drawer, isMobile, mobileOpen} = props
    const displayValue = isMobile
        ? {xs: 'block', sm: 'block', md: 'none', lg: 'none'}
        : {xs: 'none', sm: 'none', md: 'block', lg: 'block'}
    const drawerVariant = isMobile ? 'temporary' : 'permanent'
    return (
        <Box component='nav' sx={{display: displayValue}}>
            <Drawer variant={drawerVariant}
                    open={mobileOpen}
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
    )
}

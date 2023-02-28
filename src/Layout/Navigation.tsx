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

import './Navigation.css';
import {NavLink} from "react-router-dom";

export const Navigation = () => {
    return (
        <>
            <div className="menu-container">
                <div className="section">Hospitality</div>
            </div>
            <div className="menu-container">
                <div className="section">Security</div>
                <ul>
                    <NavLink to="/security/guide"><li><span>Team Guide</span></li></NavLink>
                    <NavLink to="/security/checklist"><li><span>Sunday Checklist</span></li></NavLink>
                </ul>
            </div>
        </>
    )
}

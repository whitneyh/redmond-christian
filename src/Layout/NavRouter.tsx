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

import {Route, Routes} from "react-router-dom";
import {TeamGuide} from "../Security/TeamGuide";
import {SundayChecklist} from "../Security/SundayChecklist";
import {Welcome} from "../Landing/Welcome";

export const NavRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="/security/checklist" element={<SundayChecklist/>}/>
                <Route path="/security/guide" element={<TeamGuide/>}/>
            </Routes>
        </>
    )
}


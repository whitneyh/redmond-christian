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
import {Hospitality} from "./Hospitality/Hospitality";
import {Security} from "./Security/Security";

export const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/hospitality" element={<Hospitality/>}/>
                <Route path="/security" element={<Security/>}/>
            </Routes>
        </>
    )
}


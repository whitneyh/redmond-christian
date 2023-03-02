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

import './SundayChecklist.css';

export const SundayChecklist = () => {
    return (
        <>
            <div className="header">Sunday Morning Checklist</div>
            <p>
                The following is a list of activities that should be performed each Sunday by the Safety and Security
                team member who is assigned for that day:
            </p>
            <table>
                <tr>
                    <td>9:00am</td>
                    <td>Arrive.</td>
                </tr>
                <tr>
                    <td>9:00am</td>
                    <td>Ensure 9th street, 10th street and south doors are unlocked.</td>
                </tr>
                <tr>
                    <td>9:00am - 10:00am</td>
                    <td>Check with person preaching (Brian) to be sure there is nothing unusual planned for the
                        service.
                    </td>
                </tr>
                <tr>
                    <td>10:00am</td>
                    <td>Lock the south door (by the children's classrooms) when the service begins.</td>
                </tr>
                <tr>
                    <td>During service</td>
                    <td>Station yourself in the lobby. Monitor the 9th and 10th street doors. Respond as needed to
                        situations that
                        arise.
                    </td>
                </tr>
                <tr>
                    <td>9:00am - 12:00pm</td>
                    <td>Watch for new people. Welcome them when you see some.</td>
                </tr>
                <tr>
                    <td>10:00am - 12:00pm</td>
                    <td>Maintain situational awareness for things that seem out of the ordinary.</td>
                </tr>
                <tr>
                    <td>12:00pm (When you leave)</td>
                    <td>Ensure all doors are locked and closed firmly.</td>
                </tr>
                <tr>
                    <td>12:00pm (When you leave)</td>
                    <td>If there are people still in the church, remind them to check that doors are closed firmly.</td>
                </tr>
            </table>
        </>
    )
}

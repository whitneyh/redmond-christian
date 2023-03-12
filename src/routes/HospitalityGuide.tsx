import './HospitalityGuide.css'

const HospitalityGuide = () => {
    return (
        <>
            <div className="header">Hospitality Team Guide</div>

            <div id="toc_container">
                <h1>Contents</h1>
                <ul className="toc_list">
                    <li><a href="#introduction">1 Introduction</a></li>
                    <li><a href="#roles">2 Roles</a></li>
                    <ul>
                        <li><a href="#greeter">2.1 Greeter</a></li>
                        <li><a href="#usher">2.2 Usher</a></li>
                        <li><a href="#communion">2.3 Communion Server</a></li>
                        <li><a href="#info-desk">2.4 Information Desk</a></li>
                    </ul>
                </ul>
            </div>

            <div className="introduction">
                <h1 id="introduction">1 Introduction</h1>
                <p>
                    The goal of the Redmond Christian Church Hospitality Team is to ensure that people who attend
                    church services feel welcome and comfortable. Members of the team should do as much as they can
                    to ensure that people understand where they should go and that all of their questions are answered.
                </p>
            </div>
            <div className="roles">
                <h1 id="roles">2 Roles</h1>
                <h2 id="greeter">2.1 Greeter (9th and 10th Street)</h2>
                <p>
                    The goal of the greeter is to welcome people to the church as they arrive. Greeters should be
                    friendly and as helpful as possible. In the case of first time attenders, the greeter should help
                    them to know how to check their children into Sunday School (if appropriate) and to otherwise
                    help them to get adjusted. The greeter should try to answer simple questions, but can refer people
                    to the information desk if more in depth information is needed.
                </p>
                <p>
                    Greeters should be at their assigned door between <strong>9:45 am</strong> and <strong>10:15 am</strong>.
                </p>
                <h2 id="usher">2.2 Usher</h2>
                <p>
                    The responsibility of the usher is to help people find seats in the service. They should remain
                    aware of where open seats are in the room and direct people to those seats. If the room becomes
                    full, the usher can ask people to move together so that more open seating can be provided.
                </p>
                <h2 id="communion">2.3 Communion Server</h2>
                <p>
                    Four people are assigned to server communion each Sunday: two in the front and two in the back.
                    Although the job primarily consists of holding a tray of elements so that people can take them,
                    it is important to keep in mind that you are part of a holy moment. It is appropriate to be praying
                    for people silently as you disburse the elements.
                </p>
                <h2 id="info-desk">2.4 Information Desk</h2>
                <p>
                    The person assigned to the info desk requires training. Please let the team lead know if you are
                    interested in this role.
                </p>
            </div>
        </>
    )
}

export default HospitalityGuide

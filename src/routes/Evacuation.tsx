const Evacuation = () => {
    return (
        <>
            <div className="header">Evacuation Plan</div>
            <h1>Evacuation</h1>
            <p>
                Should there be a need to evacuate the church, people should exit the building by the nearest safe
                exit. Please refer to the following map for more details:
            </p>
            <img src={process.env.PUBLIC_URL + '/floor_plan.png'} style={{width: '100%', height: 'auto'}}/>
            <h1>Meeting Spot</h1>
            <p>
                Once people have exited from the church building, they should gather in in the parking lot near <strong>
                ninth street</strong> if that location is safe. The security team should use the data from the iPad to
                do a head count to ensure that everyone has safely exited the building. Information should be provided
                to first responders if there are people who have not safely exited the building.
            </p>
        </>
    )
}

export default Evacuation

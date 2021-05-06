import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './Home.css'

const Home = () => {
    const [team, setTeam] = useState([])
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams))
    }, [])
    return (
        <div>
            <div className="header">
                <h1>Sports Mania</h1>
            </div>
            <div className="homeDetails">
            
                {
                    team.map(team => <Team team={team}></Team>)
                }
            </div>
        </div>
    );
};

export default Home;
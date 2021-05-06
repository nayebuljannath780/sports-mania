import React from 'react';
import { useHistory } from 'react-router';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Team = ({ team }) => {
    const { strTeam, strTeamBadge,strCountry,idTeam } = team;
    const history = useHistory();
    const handleClick = id => {
        const url = `team/${id}`
        history.push(url)
    }
    return (
        <div className="team-container">

            <img src={strTeamBadge} alt="" />
            <h3>{strTeam}</h3>
            <h3>{strCountry}</h3>
            <button onClick={() => handleClick(idTeam)}>Explore <FontAwesomeIcon icon={faArrowRight} /></button>

        </div>
    );
};

export default Team;
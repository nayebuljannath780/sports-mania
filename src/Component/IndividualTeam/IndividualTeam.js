import React from 'react';
import './IndividualTeam.css';
import malePhoto from '../../Photo/male.png';
import logoFlag from '../../Icon/flag (1) 1.png';
import logoGender from '../../Icon/male-gender-sign 1.png';
import femalePhoto from '../../Photo/female.png'
import logoFootball from '../../Icon/football (1) 1.png';

const IndividualTeam = ({ teamInfo }) => {
    const { strTeamBadge, strCountry, strDescriptionEN, strLeague, strSport, strGender} = teamInfo;

    const photo = strGender === 'Male' ? <img src={malePhoto} alt=""/> : <img src={femalePhoto} alt="" />

    return (
        <div>
            <div className="header-container">
                <img src={strTeamBadge} alt="" />
            </div>
            <div className="league-container">
                <div className="teamDetails">
                    <div className="leagueInfo">
                        <h2>{strLeague}</h2>
                        <div className="teamDetails-flex">
                            <img src={logoFlag} alt="" />
                            <h4>Country: {strCountry}</h4>
                        </div>
                        <div className="teamDetails-flex">
                            <img src={logoFootball} alt="" />
                            <h4>Sports Type: {strSport}</h4>
                        </div>
                        <div className="teamDetails-flex">
                            <img src={logoGender} alt="" />
                            <h4>Gender: {strGender}</h4>
                        </div>
                    </div>
                    <div className="player-img">
                        {
                            photo
                        }
                    </div>
                </div>
                <div className="team-description">
                    <p>{strDescriptionEN}</p>
                </div>
            </div>
           
        </div>
    );
};

export default IndividualTeam;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../Footer/Footer';
import IndividualTeam from '../IndividualTeam/IndividualTeam';

const TeamDetails = () => {
    const{id} = useParams();
    const [teamDetails,setTeamDetails] = useState([])
    useEffect(() =>{
            const url =`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`
            fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetails(data.teams))
    },[id])
    return (
        <div>
             {
                 teamDetails.map(teamInfo => <IndividualTeam teamInfo={teamInfo}></IndividualTeam>)
             }
              <Footer></Footer> 
            
        </div>
    );
};

export default TeamDetails;
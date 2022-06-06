import { match } from 'node:assert/strict';
import { useState } from 'react';
import {player} from './tournaments/2022/TournyOfEight/player_db'
import {matches} from './tournaments/2022/TournyOfEight/match_db'


/*
function displayName({ player_id }) {
    const makeName = 
     player.find(obj => obj.player_id === 1)?.seed
     player.find(obj => obj.player_id === 1)?.name
}
*/

export default function Round1() {


    return (
        <>
            <h1>Round 1</h1>
            <ul>
                {matches.map((play) => <MatchUp key={play.match_id} {...play} />)}
               
            </ul>
            
        </>
    );
}



function MatchUp(play: any) {
    // 

    /*
    const [{ ['pick' + { play.match_id }]}, setPick] = useState('player1');
const handleChange = (e: any) => { setPick(e.target.value); }
*/


///*
    const [pick, setPick] = useState(
        'player1'    );
    const handleChange = (e: any) => {
        setPick(e.target.value)
    };
//*/

    /*
    const handleChange = (e: any) => {
        let obj = {};
        obj[e.target.id] = e.target.value
        this.setPick(obj);
    }

    const handleChange =(e:any) => {
        setPick({
            [e.target.id]: e.target.value
        })
    }
    */

    /*
    const [pick1, setPick1] = useState();
    const [pick2, setPick2] = useState();
    const [pick3, setPick3] = useState();
    const [pick4, setPick4] = useState();
    */


    return (
        <div>
            <form>
                <label>
                    Match {play.match_id}
                </label>

                <div>

                    <input type="radio" value="player1" id="player1" checked={pick == 'player1'} onChange={handleChange} name="pick"  />
                    <label>
                        {player.find(obj => obj.player_id === play.player1)?.name}
                    </label>
                </div>
                <div>
                    <input type="radio" value="player2" id="player2" checked={pick=='player2'} onChange={handleChange} name="pick" />

                    <label>
                        {player.find(obj => obj.player_id === play.player2)?.name}
                    </label>
                </div>



                <p> Pick {pick}</p>
            </form>

        </div>
    )
}
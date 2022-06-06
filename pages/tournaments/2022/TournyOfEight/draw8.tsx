import { useState } from 'react';
import { atom, useAtom, useAtomValue, Provider} from 'jotai'


import { player } from './player_db'
import { matches } from './match_db'
//import { drawPath } from './tournaments/2022/tournament8/bracketOfEight';

/*
type player_data = {
    player_id: number
    name: string
    rank: number
    seed: any
}

type match_data = {
    match_id: number
    player1: number
    player2: number
}
*/

const match1 = matches.find((obj => obj.match_id === 1))
const m1p1 = match1?.player1!
const m1p2 = match1?.player2!
export const s1p1 = atom(m1p1 < m1p2 ? m1p1 : m1p2)
const D8M1 = () => {
    const [, setR64] = useAtom(s1p1);
    const handleChange = (e: any) => setR64(e.target.value)
    return (
        <form>
            <div>
                <input type="radio" value={m1p1} onChange={handleChange} checked={useAtomValue(s1p1) == m1p1} />
                <label>
                    {player.find(obj => obj.player_id === match1?.player1)?.name}
                </label>
            </div>
            <div>
                <input type="radio" value={m1p2} onChange={handleChange} checked={useAtomValue(s1p1) == m1p2} />
                <label>
                    {player.find(obj => obj.player_id === match1?.player2)?.name}
                </label>
            </div>
        </form>
    )
}

const match2 = matches.find((obj => obj.match_id === 2))
const m2p1 = match2?.player1!
const m2p2 = match2?.player2!
export const s1p2 = atom(m2p1 < m2p2 ? m2p1 : m2p2)
const D8M2 = () => {
    const [, setR64] = useAtom(s1p2);
    const handleChange = (e: any) => setR64(e.target.value)
    return (
        <form>
            <div>
                <input type="radio" value={m2p1} onChange={handleChange} checked={useAtomValue(s1p2) == m2p1} />
                <label>
                    {player.find(obj => obj.player_id === match2?.player1)?.name}
                </label>
            </div>
            <div>
                <input type="radio" value={m2p2} onChange={handleChange} checked={useAtomValue(s1p2) == m2p2} />
                <label>
                    {player.find(obj => obj.player_id === match2?.player2)?.name}
                </label>
            </div>
        </form>
    )
}

//export const fav1 = atom(r64m1 < r64m2 ? r64m1 : r64m2)

const match3 = matches.find((obj => obj.match_id === 3))
const m3p1 = match3?.player1!
const m3p2 = match3?.player2!
export const s2p1 = atom(m3p1 < m3p2 ? m3p1 : m3p2)
const D8M3 = () => {
    const [, setR64] = useAtom(s2p1);
    const handleChange = (e: any) => setR64(e.target.value)
    return (
        <form>
            <div>
                <input type="radio" value={m3p1} onChange={handleChange} checked={useAtomValue(s2p1) == m3p1} />
                <label>
                    {player.find(obj => obj.player_id === match3?.player1)?.name}
                </label>
            </div>
            <div>
                <input type="radio" value={m3p2} onChange={handleChange} checked={useAtomValue(s2p1) == m3p2} />
                <label>
                    {player.find(obj => obj.player_id === match3?.player2)?.name}
                </label>
            </div>
        </form>
    )
}

const match4 = matches.find((obj => obj.match_id === 4))
const m4p1 = match4?.player1!
const m4p2 = match4?.player2!
export const s2p2 = atom(m4p1 < m4p2 ? m4p1 : m4p2)
const D8M4 = () => {
    const [, setR64] = useAtom(s2p2);
    const handleChange = (e: any) => setR64(e.target.value)
    return (
        <form>
            <div>
                <input type="radio" value={m4p1} onChange={handleChange} checked={useAtomValue(s2p2) == m4p1} />
                <label>
                    {player.find(obj => obj.player_id === match4?.player1)?.name}
                </label>
            </div>
            <div>
                <input type="radio" value={m4p2} onChange={handleChange} checked={useAtomValue(s2p2) == m4p2} />
                <label>
                    {player.find(obj => obj.player_id === match4?.player2)?.name}
                </label>
            </div>
        </form>
    )
}

export default function Draw8() {

//    const match1 = matches.find((obj => obj.match_id === 1));
//    const [r32m1, setr64p1] = useState(match1?.player1! > match1?.player2! ? match1?.player1 : match1?.player2);
//    const handleChange1 = (e: any) => { setr64p1(e.target.value) };

    return (
        <>
            <h1>Round 64 Men</h1>
            <ul>
                <form>

                    <D8M1/>
                    <p></p>
                    <D8M2/>
                    <p></p>
                    <D8M3 />
                    <p></p>
                    <D8M4 />
                </form>
            </ul>
        </>
    );
}



//export default () => (<Provider><Round64M /></Provider>);

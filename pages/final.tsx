import { useState, useEffect } from 'react';
import { atom, useAtom, useAtomValue, Provider } from 'jotai'
import { player } from './tournaments/2022/TournyOfEight/player_db'
import { f1, f2 } from './semi-final'

//const fp1Atom = atom((get) => get(f1))
//const fp2Atom = atom((get) => get(f2))
//export const champion = atom(fp1Atom < fp2Atom ? fp1Atom : fp2Atom)
export const champion = atom(0)

const FinalMatch = () => {
    const p1 = useAtomValue(atom((get) => get(f1)))
    const p2 = useAtomValue(atom((get) => get(f2)))
    const [pick, setMatch] = useAtom(champion);
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        setSelected(false)
        setMatch(0)
    },   [p1,p2])

    return (
        <form>
            <div >
                <input type="radio" name="player" value={(p1)} onChange={() => {setMatch(p1),setSelected(true)}} checked={((pick) == p1)&&(selected)} />
                <label>
                    {(p1)}   {player.find(obj => obj.player_id == (p1))?.name}
                </label>
            </div>
            <div >
                <input type="radio" name="player" value={(p2)} onChange={() => {setMatch(p2),setSelected(true)}} checked={((pick) == p2)&&(selected)} />
                <label>
                    {(p2)}  {player.find(obj => obj.player_id == (p2))?.name}
                </label>
            </div>
        </form>
    );
}

export default function Final() {
    return (
        <form>
            <h2>Final</h2>
            <div>
                <FinalMatch />
            </div>
        </form>
    );
}
//export default () => (<Provider><Round32M/></Provider>);
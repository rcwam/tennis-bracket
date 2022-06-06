import { useState , useEffect} from 'react';
import { atom, useAtom, useAtomValue, Provider } from 'jotai'
import { player } from './tournaments/2022/TournyOfEight/player_db'
import { s1p1, s1p2} from './tournaments/2022/TournyOfEight/draw8'
import { s2p1, s2p2  } from './tournaments/2022/TournyOfEight/draw8'

const s1p1Atom = atom((get) => get(s1p1))
const s1p2Atom = atom((get) => get(s1p2))
//export const f1 = atom(s1p1Atom < s1p2Atom ? s1p1Atom : s1p2Atom)
export const f1 = atom(0)

const Semi1 = () => {
    const [p1] = useAtom(s1p1Atom)
    const [p2] = useAtom(s1p2Atom)
    const [pick, setMatch] = useAtom(f1);
    const [selected, setSelected] = useState(false);
    //const ff = p1<p2?p1:p2

useEffect(() => {
    setSelected(false)
    setMatch(0)
},   [p1,p2])

    return (
        <form>
            <div >
                <input type="radio" value={(p1)} onChange={() => {setMatch(p1),setSelected(true)}} checked={((pick) == p1)&&(selected)} />
                <label>
                     {(p1)}  {player.find(obj => obj.player_id == (p1))?.name}
                </label>
            </div>
            <div >
                <input type="radio" value={(p2)} onChange={() => {setMatch(p2),setSelected(true)}} checked={((pick) == p2)&&(selected)} />
                <label>
                   {(p2)}  {player.find(obj => obj.player_id == (p2))?.name}
                </label>
            </div>
        </form>
    );
    }


const s2p1Atom = atom((get) => get(s2p1))
const s2p2Atom = atom((get) => get(s2p2))
export const f2 = atom(0)

const Semi2 = () => {
    const [p1] = useAtom(s2p1Atom)
    const [p2] = useAtom(s2p2Atom)
    const [pick, setSemi] = useAtom(f2);
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        setSelected(false)
        setSemi(0)
    },   [p1,p2])

    return (
        <form>
            <div >
                <input type="radio" value={(p1)} onChange={() => {setSemi(p1),setSelected(true)}} checked={((pick) == p1)&&(selected)} />
                <label>
                    {(p1)}   {player.find(obj => obj.player_id == (p1))?.name}
                </label>
            </div>
            <div >
                <input type="radio" value={(p2)} onChange={() => {setSemi(p2),setSelected(true)}} checked={((pick) == p2)&&(selected)} />
                <label>
                    {(p2)}  {player.find(obj => obj.player_id == (p2))?.name}
                </label>
            </div>
        </form>
    );
}

export default function SemiFinal() {
    return (
        <form>
            <h1>Semi Final</h1>
            <div>
                <Semi1 />
                <br />
                <Semi2 />
            </div>
        </form>
    );
}
//export default () => (<Provider><Round32M/></Provider>);
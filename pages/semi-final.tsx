import { useState , useEffect} from 'react';
import { atom, useAtom, useAtomValue, Provider } from 'jotai'
import { player } from './tournaments/2022/TournyOfEight/player_db'
import { s1p1, s1p2} from './tournaments/2022/TournyOfEight/draw8'
import { s2p1, s2p2  } from './tournaments/2022/TournyOfEight/draw8'
import { drawSize } from './tournaments/2022/tournament8/bracketOfEight';
//import { drawSize } from './tournaments/2022/tournament8/bracketOfEight';

//const s1p1Atom = atom((get) => get(s1p1))

//const dSize = useAtom(drawSize)
export const f1 = atom(0)

// check the draw size to get data from either a draw or previous round

/////*
const ds = () => {
    useAtomValue(atom((get) => get(drawSize))) === 8 ? 
    console.log("draw 8") : console.log("draw 64")

    return 8
}
//*/

//const [p1_1, setP1] = useState<number | null>(0 ?? 0);
//const [p2_1, setP2] = useState<number>(0 ?? 0);

const Semi1 = () => {

    
    const [p1] = useAtom(atom((get) => get(s1p1)))
    const [p2] = useAtom(atom((get) => get(s1p2)))
  
    const [pick, setSemi] = useAtom(f1);
    const [selected, setSelected] = useState(false);


//    /*
    useEffect(() => {
        setSelected(false)
        setSemi(0)
    },   [p1,p2])
//*/

/*
    function handleChange(e:any) {

        setSemi(e.target.value);
        setSelected(true);     
    }   
 */ 
/*

*/
//      }



    return (
        <form>
            <div >
                <input type="radio" name="semi1" value={(p1)} onChange={(e) => {setSemi(p1),setSelected(true)}} checked={((pick) == p1)&&(selected)} />
                <label>
                     {(p1)}  {player.find(obj => obj.player_id == (p1))?.name}
                </label>
            </div>
            <div >
                <input type="radio"  name="semi1" value={(p2)}  onChange={(e) => {setSemi(p2),setSelected(true)}} checked={((pick) == p2)&&(selected)} />
                <label>
                   {(p2)}  {player.find(obj => obj.player_id == (p2))?.name}
                </label>
            </div>
        </form>
    );
    }


//const s2p1Atom = atom((get) => get(s2p1))
//const s2p2Atom = atom((get) => get(s2p2))
//export const f2 = atom(s2p1Atom < s2p2Atom ? s2p1Atom : s2p2Atom)
export const f2 = atom(0)

const Semi2 = () => {
    const [p1] = useAtom(atom((get) => get(s2p1)))
    const [p2] = useAtom(atom((get) => get(s2p2)))
    const [pick, setSemi] = useAtom(f2);
    const [selected, setSelected] = useState(false);
///*
    useEffect(() => {
        setSelected(false)
        setSemi( 0)
    },   [p1,p2])
   // */
/*
   function handleChange(e:any) {

    setSemi(e.target.value);
    setSelected(true);     
}   
*/

    return (
        <form>
            <div >
                <input type="radio" name='semi2' value={(p1)} onChange={() => {setSemi(p1),setSelected(true)}} checked={((pick) == p1)&&(selected)} />
                <label>
                    {(p1)}   {player.find(obj => obj.player_id == (p1))?.name}
                </label>
            </div>
            <div >
                <input type="radio" name='semi2' value={(p2)} onChange={() => {setSemi(p2),setSelected(true)}} checked={((pick) == p2)&&(selected)} />
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
            <h2>Semi</h2>
            <div>
                <Semi1 />
                <br />
                <Semi2 />
            </div>
        </form>
    );
}
//export default () => (<Provider><Round32M/></Provider>);
import { useContext } from 'react'
import './Bar.css'

import { ToggleContext } from '../../App'

const Bar = () => {
    const {toggle}= useContext(ToggleContext);
    const {setToggle} = useContext(ToggleContext);

    const toggleHandel = ()=>{
        setToggle(prev => !prev)
    }
<i class="fa-solid fa-xmark"></i>
    return (
        <button type='button' onClick={toggleHandel} className="bar"><i className={`fa-solid ${toggle?'fa-x':'fa-bars'}`}></i></button>
    )
}

export default Bar

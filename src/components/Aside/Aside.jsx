import { useContext } from "react";
import { ToggleContext } from "../../App";
import "./Aside.css"

const Aside = ({children}) => {
    const {toggle}= useContext(ToggleContext);

    return (
        <div className={`aside ${toggle ? 'asideActive' : 'asideNoActive'}`}>
            {children}
        </div>
    )
}

export default Aside

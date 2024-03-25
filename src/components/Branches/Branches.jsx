import { branches } from '../../constants'
import Branche from '../Branche/Branche'
import './Branches.css'

const Branches = () => {
  return (
    <div className='branches'>
      {branches.map(branche=><Branche key={branche.id} info={{title:branche.title,adresse:branche.adresse}}/>)}
    </div>
  )
}

export default Branches

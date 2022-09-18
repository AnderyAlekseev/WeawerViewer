import ValueItem from '../ValueItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import './Wind.css'

const Wind  = ({value=0, dir=''}) =>{
   
    return(<div 
        className="wind">
           
        <FontAwesomeIcon icon={solid('wind')} />
        <ValueItem
            fsz={24}
            value={value}
            unit_string={'м/сек'}
        />
        
    </div>)
}

export default Wind;
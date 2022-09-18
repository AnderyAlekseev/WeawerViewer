import ValueItem from '../ValueItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import './Clouds.css'

const Clouds  = ({value}) =>{
   
    return(<div 
        className="clouds">
           
           <FontAwesomeIcon icon={solid('cloud')} />
        <ValueItem
            fsz={24}
            value={value}
        >
             
        </ValueItem>
        
    </div>)
}

export default Clouds;
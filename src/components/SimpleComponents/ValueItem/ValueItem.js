import './ValueItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { icon } from '@fortawesome/fontawesome-svg-core'
import  '@fortawesome/free-solid-svg-icons'
const ValueItem  = ({fsz=20, value=0, unit_string='', icon_item='arrow', direct=''}) =>{
    const item_style = {
        'fontSize': fsz + 'px'
    };
    // const ic = toString(icon_item);
    const faIcon = icon(icon_item)
    return(<div 
        className="value_item"
        style={item_style}
    >
        {direct}{value}{unit_string}
        {/* <FontAwesomeIcon icon ={solid({icon_item})} /> */}
        <FontAwesomeIcon icon={faIcon} size="sm" />
    </div>)
}

export default ValueItem;
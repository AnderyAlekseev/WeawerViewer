import './SecondaryPanel.css'
import Image from '../SimpleComponents/Image';
import { SecondaryItem } from './SecondaryItem/SecondaryItem';
const SecondaryPanel = () => {
    const baseUrl = 'img/weather/other/';
    const imgUrl = 'air_blow_icon.png'

    return (
        <div className='secondary_panel'>
<SecondaryItem
urlImg={`${baseUrl}${imgUrl}`}
alt={`${imgUrl}`} />
/>
            {/* <Image
                urlImg={`${baseUrl}${imgUrl}`}
                alt={`${imgUrl}`} />
            <Image
                urlImg={`${baseUrl}${imgUrl}`}
                alt={`${imgUrl}`} />
            <Image
                urlImg={`${baseUrl}${imgUrl}`}
                alt={`${imgUrl}`} /> */}
        </div>
    )

}

export default SecondaryPanel;
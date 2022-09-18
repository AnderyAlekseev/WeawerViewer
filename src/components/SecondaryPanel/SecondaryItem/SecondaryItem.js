import './SecondaryItem.css '
import Image from '../../SimpleComponents/Image';
const SecondaryItem = (props) => {
    const { urlIcon, value = '24', dimens = 'м/с', label, name = 'ветер' } = props;
    const baseUrl = 'img/weather/other/';
    const imgUrl = 'air_blow_icon.png';

    return (

        <div className='secondary_item'>
            <Image
                urlImg={`${baseUrl}${imgUrl}`}
                alt={`${imgUrl}`} />
            ${value}${dimens}
            <label>${label}</label>
            <span></span>
            ${name}
        </div>
    )
}
export { SecondaryItem }
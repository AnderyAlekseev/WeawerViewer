// import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
src: ${props => props.src};
alt: ${props => props.alt};
`;

const Image = (props)=>{
    const {urlImg, alt} = props;
    return (
        <Img 
        src={urlImg}
        alt={alt}
        />
    )
}
export default Image
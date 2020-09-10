import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
object-fit:cover;
width:100%;
height:100%;
`;

function Imageunsplash({url,key}) {
    return (
        <div>
            <Img src={url} key ={key} alt=""/>
           </div>
    );
}

export default Imageunsplash;
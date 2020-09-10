import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
object-fit:cover;
width:100%;
height:100%;
`;

function FruitsImage({urls,keys}) {
    return (
        <div>
            <Img src={urls} key ={keys} alt=""/>
           </div>
    );
}

export default FruitsImage;
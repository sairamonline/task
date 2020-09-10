import React from 'react';
import styled from 'styled-components';
import './App.css'

let Head = styled.header`
max-width:85rem;
text-align:center;
`;
const H1 = styled.h1`
font-family:'Oswald',sans-sarif;
margin-bottom:1em;
`;

function Header(props) {
    return (
        <Head className="headstyles">
        <div className="Content"> 
        <div className="container">
            <H1 className="">Unsplash</H1>
            <p>The Internets source of freely usable images</p>
            <p>Powered By Sairam</p>
            <div className="input-group col-12">
  <input type="text" className="form-control" placeholder="Its A dummy Serch bar" aria-label="Recipient's username" aria-describedby="button-addon2" />
  <div className="input-group-append">
    <button className="btn btn-outline-light" type="button" id="button">SEARCH</button>
  </div>

</div>
<p className="text-muted">
  <span>Trending Searches:</span>
        Bussiness,Computer,nature,love,house
  </p>
        </div>

        </div>
        </Head>
    );
}

export default Header;
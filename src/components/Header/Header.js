import React, { Component } from 'react';
import styled from 'styled-components';
import TimeComponet from '../DateTime';

const HeaderContent = styled.div`
margin: 0 auto;
height: 80px;
background-color: #acc4d4;
border 1px solid #81bff4;

text-align: center; `


export default class Header extends Component {
    
    render() {
        const {message} = this.props;
        return (
            <HeaderContent>
              {message}
              <TimeComponet />
            </HeaderContent>

        )
    }

}


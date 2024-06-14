import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  height: 80px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #ccc;
`;


const CustomFooter = () => {
  return (
       <Footer className="cntr-footer">
        <a href="https://github.com/greeshiee/sample-react-project"> 
          Sample project 
        </a>&nbsp;
        by @greeshiee on GitHub
      </Footer>
  )
}

export default CustomFooter

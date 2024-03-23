import styled from "styled-components";


export const HeaderContainer = styled.div`
  position: relative;
  height: 80px;
  color: var(--color-font-main);
  background-color: transparent;
  display: flex;
  align-items: center;
  /* justify-content: space-between; when 3 component */ 
  .wrapper-button{
    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 500;
    text-transform: uppercase;
  }

  .header-title{
    font-size: 22px;
    position: absolute;
    left: calc(50%);
    transform: translateX(-50%);


  }

`
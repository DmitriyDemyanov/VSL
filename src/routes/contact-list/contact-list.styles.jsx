import styled from "styled-components";


export const ContactListContainer = styled.div`
  position: relative;
  background-color: var(--back-ground-main);
  color: var(--color-font-main);
  padding: 0 4%;
  width: 100%;
  height: 100vh;

  /* .column{
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 16px;
  } */
  .user-wrapper{
    margin: 12px 0 28px 4px;
    height: 71%;
    overflow-y: auto;
  }
  .chevron-icon-wrapper{
    width: 36px;
    height: 36px;
    margin: auto;
    display: flex;
    align-items: center;

  }
  .scan-icon-wrapper{
    width: 80px;
    height: 80px;
    position: absolute;
    right: calc(50% - 40px);
    bottom: 40px;
    
  }
`
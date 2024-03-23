import styled from "styled-components";

export const ContactSearchContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--back-ground-main);
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  color: var(--color-font-secondary);
  .bg-header{
    width: 100%;
    height: 20.4vh;
    padding: 0 4%;
    background-color: var(--back-ground-secondary);
  }
  .search-input {
    position:relative;
    width: 100%;
    height:72px;
    margin: 20px 10px 36px;
    padding: 0 20px 0 24px;
    border-radius: 8px;
    background-color: var(--back-ground-search);
    display: flex;
    align-items: center;
  }
  .search-icon{
    margin-left: auto;
  }
  .content-title{
    margin: 16.7% auto;
    width: 80%;
    height: 89px;
    text-align: center;
    color: var(--color-font-main);
    font-size: 28px;
    line-height: 36px;
  }
  .scan-icon {
    margin: 0 auto;
    width: 80px;
    height: 80px;
  }
  .wrapper-keyboard{
    position: absolute;
    bottom: 0;
    height: 34vh;
    margin-top: 40px;
    padding: 20px 25px;
    background-color: var(--back-ground-secondary);
    color:var( --color-font-main);
  }

  .keyboard-button{
    width: 60px;
    height: 54px;
    margin: 0 6.5px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--back-ground-keyboard);
    border-radius: 5px;
    
  }
  .spacial{
    margin: 0;
    width: auto;
  }
  .wrapper-symbols {
    display: flex;
    justify-content: center;
  }
  .wrapper-spacial-symbols {
    display: grid;
    grid-template-columns: 84px 1fr 84px;
    column-gap: 13px;
  }

  .search-dropdown {
    position: absolute;
    width: 50%;
    max-height: 390px;
    top: 20%;
    left: 42px;
    right: 0;
    padding: 20px;
    border-radius: 5px;
    background-color: transparent;
    color:var( --color-font-main);
    overflow-y: auto;
  }
  .description-dropdown {
    margin-bottom: 6px;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    color: #BEBEBE;
  }
  .search-user {
    font-size: 24px;
    font-weight: 400;
    line-height: 28.13px;
    padding: 16px 0;
    color:var( --color-font-main);
  }
`
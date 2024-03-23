import styled from "styled-components";

export const UserCallContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 4%;
  color: var(--color-font-main);
  background-color: var(--back-ground-main);
   text-align: center;
  .wrapper-content-user {
    margin-top: 19%;
    font-size: 44px;
    font-weight: 400;
    line-height: 56px;
    :nth-child(3){
    margin:28px 0 24px 0;
    font-size: 28px;
    font-weight: 500;
    line-height: 36px;
    }
    :last-child{
    font-size: 26px;
    font-weight: 400;
    line-height: 30px;
    }
  }
  .wrapper-icon {
    margin-top: 26%;
    font-size: 28px;
    font-weight: 500;
    line-height: 36px;
  }
  .wrapper-progress-bar {
    position: relative;
    margin: 6% auto 0;
    width: 48%;
    height: 10px;
    border-radius: 2px;
    border: 1.5px solid #717171;
    .progress-bar{
      position: absolute;
      top: 0;
      right: 100%;
      left: 0;
      bottom: 0;
      border-radius: 2px;
      background-color: #fff;
      transition: all 1s;
    }
  }
`
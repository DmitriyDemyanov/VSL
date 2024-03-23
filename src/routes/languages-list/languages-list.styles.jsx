import styled from "styled-components";

export const LanguagesListContainer = styled.div`
  padding: 0 4%;
  width: 100%;
  height: 100vh;
  background-color: #000;
  .language-item-wrapper {
    margin-top: 12px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 16px;
  }
`
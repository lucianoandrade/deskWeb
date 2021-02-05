import { createGlobalStyle } from 'styled-components';
import { lighten, transparentize } from 'polished';
import futuraFont from '../assets/fonts/futura.ttf';
import OxygenBold from '../assets/fonts/Oxygen-Bold.ttf';
import OxygenLIght from '../assets/fonts/Oxygen-Light.ttf';
import OxygenRegular from '../assets/fonts/Oxygen-Regular.ttf';

// import futuraLight from '../assets/fonts/futura-light.otf';

export default createGlobalStyle`
  /* @import url(futuraLight); */

  @font-face {
    font-family: "FuturaLight";
    src: url('${futuraFont}')
  }

  @font-face {
    font-family: "OxygenLIght";
    src: url('${OxygenLIght}')
  }

  @font-face {
    font-family: "Oxygen";
    src: url('${OxygenRegular}')
  }

  @font-face {
    font-family: "OxygenBold";
    src: url('${OxygenBold}')
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    font-family: FuturaLight;
    background-color:${props=>props.theme.palette.white};
  }

  h1, h2, h3, h4, h5, h6 {
    @font-face {
    font-family: "Oxygen";
    src: url('${OxygenRegular}')
  }
    margin: 0;
  }
/* 
  p {
    font-size: 1.2em;
  } */

  body {
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
    /* background-color: #ededed; */
  }

  a {
    text-decoration: none;
  }

  .screen-board {
    /* overflow-y: auto; */
    position: relative;

    > .content {
      flex: 1;
      /* overflow: auto; */
    }

    > header {
      padding: 14px 24px 20px 10px;
      background: #FFF;
      width: 100%;
      min-width: 100%;
      z-index: 1;

      h1 {
        font-size: .9em;
        color: #606060;
      }
    }

    .sidenav {
      display: flex;
      flex: 0.2;
      justify-content: flex-start;
      flex-direction: column;
      background-color: #FFF;

        .brand {
          font-size: 1em;
          color: ${({ theme }) => theme.palette.primary};
          text-align: center;
          padding: 15px 0;
        }

        .box-synthetic-information {

        }
      }

    .content {
      display: flex;
      flex: 1;
    }
  }

  .label {
    font-size: 1em;
    background-color: #f4f5f5;
    color: 000;
    padding: 4px;
    border-radius: 2px;
    margin-right: 4px;
    margin: 0 4px 4px 0;
    margin-left: 4px;
    width: auto;
    white-space: nowrap;
    /* float: left; */
  }

  .btn-priority-normal {
    background-color: #CECECE;
    height: 32px;
    width: 32px;
    border-radius: 3px;
    outline: 0;
    cursor: pointer;
    border: none;
  }

  .btn-priority-active {
    background-color: ${({ theme }) => theme.palette.orange};
    height: 32px;
    width: 32px;
    border-radius: 3px;
    outline: 0;
    cursor: pointer;
    border: none;
  }

  /* ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => lighten(0.01, props.theme.palette.primary)};
    border-radius: 10px;
    border: 4px solid ${(props) => lighten(0.35, props.theme.palette.primary)};
  } */

  /* .recharts-wrapper, .recharts-surface {
    width: auto!important;
    height: auto!important;
  } */

  .header-path-finder {
    ul {
      list-style: none;

      li {
        display: inline-block;
        margin-right: 5px;
        margin-left: 5px;
        font-size: 1em;
        color: #606060;

        &:nth-child(1) {
          margin-left: 0;
        }

        &:nth-last-child() {
          margin-right: 0;
          color: red;
        }

        a {
          text-decoration: none;
          font-size: .9em;
          color: #606060;
        }

        a:visited {
          color: #606060;
        }
      }
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }
`;



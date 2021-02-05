import styled from 'styled-components';
import LogoBG from '../../assets/images/login.jpg';
import { ReactComponent as TaskenLogo } from '../../assets/images/logo.svg';
import { FiUser, FiLock } from 'react-icons/fi';

export const Background = styled.div`
  background: #F1F5FA;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CenterBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  max-height: 1024px;
  background-color: white;
  display: flex;

  @media (min-width: 1441px) {
    border-radius: 25px;
  }

  @media(max-width: 550px) {
    width: 100%
  }

  .box-auth {
      box-sizing: border-box;
      display: flex;
      width: 100%;
      max-width: 720px;
      flex-direction: column;
      justify-content: center;
      padding: 85px;
      margin-left: 62px;

      @media(max-width: 768px) {
        margin: 280px 86px;
        width: 596px;
        height: 635px;
        position: absolute;
        z-index: 1;
        background-color: #fff;
        border-radius: 25px;
      }

      @media(max-width: 550px) {
        margin: 140px 52px 0;
        width: 320px;
        height: 411px;
        padding: 0;
      }
      @media(max-width: 375px) {
        margin: 140px 28px 0;
      }

      h2 {
        font-family: 'OxygenBold', sans-serif;
        font-size: 40px;
        line-height: 51px;
        margin-bottom: 8px;
        color: ${({ theme }) => theme.palette.darkBlue};

        @media (max-width: 550px) {
          display: none;
        }
      }

      p {
        font-family: "Oxygen", sans-serif;
        font-size: 16px;
        width: 100%;
        max-width: 426px;
        margin-bottom: 60px;
        color: #465A78;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0px;
        text-align: left;


        @media (max-width: 550px) {
          display: none;
        }
      }

      .form-auth {
        display: flex;
        flex-direction: column;

        @media (max-width: 550px) {
          margin: 0 auto;
          width: 256px;
        }

        .field-box {
          display: flex;
          width: 100%;
          max-width: 596px;

          label {
            width: 100%;
            padding: 10px 0;
            color: #222222;
            
            span {
              color: #222222;
              font-family: 'Oxygen', sans-serif;
              font-size: 14px;
              margin-bottom: 4px;
              line-height: 150%;
              font-weight: 700;
            }

            .title-input-icon {
              display: flex;
              align-items: center;

              svg {
                font-size: 1em;
              }
            }

            input {
              width: 100%;
              max-width: 426px;
              height: 48px;
              border: 1px solid #E2E2E2;
              border-radius: 3px;
              padding: 13px 36px;
              font-size: 0.9em;

              :focus {
                border-color: ${({ theme }) => theme.palette.primary};
              }

                @media (max-width: 550px) {
                  width: 256px;
                }

                ::placeholder {
                  color: #C0C0C0;
                }
            }

            input[type="text"], input[type="password"] {
              font-family: 'Oxygen', sans-serif;
              font-weight: 400;
              font-size: 14px;
              line-height: 150%;
              color: #222222;
            }
          }
        }

        .action-button {
          margin-top: 8px;
          button {
            cursor: pointer;
            font-family: 'Oxygen', sans-serif;
            width: 426px;
            padding: 10px 75px;
            background-color: ${({ theme }) => theme.palette.primary};
            border-color: ${({ theme }) => theme.palette.primary};
            border-style: solid;
            color: #FFF;
            border-radius: 3px;
            font-size: 14px;
            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.18);
            line-height: 150%;
            
            img {
              width: 25px;
            }

            @media (max-width: 550px) {
              width: 256px;
            }
          }
        }
      }
    }
`;

export const LogoArea = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-image: url('${LogoBG}');
  background-position-x: center;
  background-size: cover;
  width: 100%;
  width: 720px;

  @media (max-width: 768px) {
    width: 834px;
    height: 1195px;
  }

  @media (max-width: 550px) {
    width: 100%;
    height: 640px;  
  }

  @media (min-width: 1441px) {
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
  }

  ::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;

      @media (min-width: 1441px) {
        border-top-left-radius: 25px;
        border-bottom-left-radius: 25px;
    }
  }
`;
export const DarkBackground = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  right: 0px;
  z-index: 0;
`;
export const Logo = styled(TaskenLogo)`
  z-index: 1;
  align-self: flex-start;
  margin: 32px;

  @media (max-width: 768px) {
    margin: 52px auto;
  }
`;
export const MobileLogo = styled(TaskenLogo)`
  z-index: 1;
  margin: 0 auto 24px;
  display: none;
  @media (max-width: 550px) {
    display: unset;
  }
`;

export const FormArea = styled.form`
  padding: 40px;
  display: flex;
  flex-direction: column;
  label {
    font-family: Roboto;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #1a2c3b;
    margin-bottom: 8px;
    margin-top: 20px;
    &:first-child {
      margin-top: 0px;
    }
  }
  input {
    background: #ffffff;
    border: 1px solid #ced4da;
    box-sizing: border-box;
    border-radius: 2px;
    padding: 10px 16px;
    &.error {
      border: 1px solid red;
    }
  }
  .input-error-message {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #c73228;
  }
  button {
    /* Blue */
    background: #1a75ba;
    border: 1px solid #0961a3;
    padding: 16px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
    margin-top: 20px;
  }
  button.forgotten-password {
    background: none;
    border: none;
    padding: 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 16px;

    /* Aqua */
    color: #14a0c1;
    &.inline {
      display: inline-block;
      margin-top: 4px;
    }
  }
  h4 {
    margin-bottom: 20px;
  }
  p.send-again {
    margin-top: 20px;
    text-align: center;
  }
`;

export const IconUser = styled(FiUser)`
  position: absolute;
  height: 20px;
  width: 18px;
  color: ${({ theme }) => theme.palette.lightGray};
  margin: 34px 16px 0;
  @media (max-width: 768px) {
    margin: 66px 16px 0;
  }
`;
export const IconLock = styled(FiLock)`
  position: absolute;
  height: 20px;
  width: 18px;
  color: ${({ theme }) => theme.palette.lightGray};
  margin: 34px 16px 0;
  @media (max-width: 768px) {
    margin: 66px 16px 0;
  }
`;
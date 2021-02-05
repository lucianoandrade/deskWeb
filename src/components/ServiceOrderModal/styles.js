import styled from 'styled-components';
import { FaRegBookmark } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa';
import { RiPlayCircleFill } from 'react-icons/ri';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import { FaListAlt } from 'react-icons/fa';
import { FaExchangeAlt } from 'react-icons/fa';
import { BsFillPauseFill } from 'react-icons/bs';
import { BiCommentDetail } from 'react-icons/bi';
import { FaEdit } from 'react-icons/fa';
import { HiPlus } from 'react-icons/hi';
import { TiArrowBack } from 'react-icons/ti';
import { FaPaperclip } from 'react-icons/fa';
import { ReactComponent as IconDownload } from '../../assets/images/iconDownload.svg';



export const Container = styled.div`
  font-family: "OxygenLight", sans-serif;

  header {
    display: flex;   
    margin-top: -30px;
    align-items: center;
    justify-content: space-between;
    
    p {
      color: ${({ theme }) => theme.palette.black};
      display: block;
      font-family: "OxygenBold", sans-serif;
      font-weight: 700;
      font-size: 20px;
      line-height: 25px;
    }
   
    button {
      display: flex;
      align-items: center;
      margin-right: 35px;
    }
    .btn-priority-normal {
        background-color: transparent;
      }
    .btn-priority-normal:hover {
      background-color: #F1F5FA;
    }

  }
  .priority-hover {
    display: flex;
    justify-content: flex-end;
    transition: 500ms all;
    position: absolute;
    padding: 0 64px;
    width: 100%;
    max-width: 1000px;
    
    .btn-priority-hover {
      padding: 0 8px;
      height: 25px;
      background: rgba(70, 90, 120, 0.9);
      color: #fff;
      border-radius: 13px;
      font-family: "OxygenBold", sans-serif;
      font-size: 12px;
      line-height: 150%;
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
      transition: 500ms all;
    }
  }

  .buttons {
      display: flex;
      flex-direction: row; 
      margin: 16px 0 0;

      .btn-treatments {
        background: #F1F5FA;
        padding: 6px 12px;
        border-radius: 4px;
        outline: 0;
        cursor: pointer;
        border: 2px solid transparent;
        color: ${({ theme }) => theme.palette.gray};
        font-family: "Oxygen", sans-serif;
        font-weight: 900;
        font-size: 12px;
        line-height: 150%;
        margin-right: 12px;
        display: flex;
        align-items: center;          
      }
      .blue {
        background: ${({ theme }) => theme.palette.primary};
        color: ${({ theme }) => theme.palette.white};
      }
    }

  .content {
    margin-top: 17px;
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;

    @media (max-width: 768px) {
      flex-direction: row;
    }

    .status {
      /* position: absolute; */
      box-sizing: border-box;
      width:100%;
      max-width: 360px;
      max-height: 400px;
      overflow: auto;
      display: flex;
      flex-direction: column;
      
      @media (max-width: 768px) {
        position: relative;
        margin: 0 auto;
      }

      @media (max-width: 1024px) {
        max-height: 325px !important;
      }

      .topics {
        display: flex;
        margin-bottom: 12px;
        font-size: 14px;
        color: ${({ theme }) => theme.palette.gray};

        p {
          width: 132px;
          margin-right: 4px;
          font-family: "Oxygen", sans-serif;
          font-weight: 700;
          font-size: 14px;
          line-height: 150%;
          color: ${({ theme }) => theme.palette.gray};
        }

        label { 
          max-width: 192px;
          margin: auto 0;
          font-family: "Oxygen", sans-serif;
          font-size: 14px;
          line-height: 150%;
          color: ${({ theme }) => theme.palette.gray};

          span {
            padding-right: 8px;
          }

          .osDad{
            cursor: pointer;
          }
        }

        .statusTitle {
          display: flex;
          align-items: center;
          text-align: center;
          text-transform: uppercase;
          background-color: ${(props) => props.status.backgroundColor || '#FFF'};
          color: ${(props) => props.status.color || '#FFF'};  
          font-family: "Oxygen", sans-serif;
          font-weight: 700;
          font-size: 12px;
          line-height: 150%;
          border-radius: 4px;
          text-align: center;
          padding: 0 8px;
        }

        .fatherOsModal {
          position: absolute;
          margin-top: 21px;
          height: 221px;
          width: 291px;
          border-radius: 3px;
          background-color: #fff;
          padding: 20px;
          border: 1px solid #E2E2E2;
          box-sizing: border-box;
          box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1);

          .optionsOS {
            display: flex;
            margin-bottom: 12px;
            cursor: pointer;
            
            .osId {
              font-family: "Oxygen", sans-serif;
              font-weight: bold;
              font-size: 12px;
              line-height: 150%;
              text-transform: uppercase;
              color: ${({ theme }) => theme.palette.black};
              margin-right: 12px;
              width: 100%;
              max-width: 59px;
            }
            .oSDescription {
              font-family: "Oxygen", sans-serif;
              font-size: 12px;
              line-height: 150%;
              color: ${({ theme }) => theme.palette.gray};
              width: 100%;
              max-width: 180px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
          .oSlinksFather {
            border-top: 1px solid #E8EDF3;
            display: flex;
            flex-direction: column;
            margin-top: 12px;
            font-family: "Oxygen", sans-serif;
            font-weight: bold;
            font-size: 12px;
            line-height: 150%;
            color: ${({ theme }) => theme.palette.primary};
            cursor: pointer;
            
            .oSlink {
              margin-top: 12px;
            }
          }
        }

      }
      .listOfAttachments {
        border-top: 1px solid #DBE5ED;
        margin-right: 12px;
        p {
          margin-top: 17px;
          display: flex;
          justify-content: space-between;
          font-family: "Oxygen", sans-serif;
          font-weight: 700;
          font-size: 14px;
          line-height: 150%;
          color: ${({ theme }) => theme.palette.gray};
        }
        table {
          margin-top: 4px;
          border-spacing: 0;
          thead {
            font-family: "Oxygen", sans-serif;
            font-weight: 700;
            font-size: 12px;
            line-height: 150%;
            color: ${({ theme }) => theme.palette.gray};

            .tableTitle {
              width: 100%;
              height:32px;
              .name {
                padding: 0 20px 0 8px;
                width: 100%;
                height:32px;
                max-width: 172px;
                height: 32px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis; 
              }
              .size {
                padding-right: 28px;
                width: 100%;
                height:32px;
                max-width: 68px;
                /* overflow: hidden;
                text-overflow: ellipsis; */
              }
              .icon {
                height:32px;
                padding-right: 8px;
              }
            }
          }
          tbody {
            font-family: "Oxygen", sans-serif;
            font-size: 12px;
            line-height: 150%;
            color: #1F191A;

            .tableContent {
              width: 100%;
              height: 32px;
              vertical-align: middle;
              td{
                border-top: 1px solid #DBE5ED;
              }
              .name {
                padding: 0 20px 0 8px;
                max-height:32px;
                width: 100%;
                max-width: 172px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
              .size {
                padding-right: 28px;
                max-height:32px;
                width: 100%;
                max-width: 68px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
              .icon {
                padding-right: 8px;
                max-height:32px;
                cursor: pointer;
                vertical-align: middle;
              }
            }
            .tableContent:nth-child(odd) {         
              background: #F8F8F8;
            }
            .tableContent:nth-child(even) {
              background: #FFFFFF;
            }
          }
        }
      }
    }
    .details {     
      position: relative;
      width: 100%;
      max-width: 552px;
      height: 100%;
      max-height: 400px !important;
      overflow: scroll;
      overflow-x: hidden;
      scroll-behavior: smooth;
      display: flex;
      flex-direction: column;
      margin-right: auto;
      padding-right: 12px;

      @media (max-width: 768px) {
        position: relative;
        margin-right: 0;
        margin: 0 auto;
      }

      @media (max-width: 1024px) {
        max-height: 335px !important;
      }

      .text {
        font-family: "Oxygen", sans-serif;
        font-size: 16px;
        color: ${({ theme }) => theme.palette.black};
        margin-bottom: ${props => props.iconDisplay ? '32px' : '0'};
        line-height: 150%;

        h1 {
          color: ${({ theme }) => theme.palette.gray};
          font-family: "Oxygen";
          font-size: 14px;
          margin-bottom: 8px;
          font-weight: 700;
        }
      }

      .osDaughter {
        h1 {
          color: ${({ theme }) => theme.palette.gray};
          font-size: 14px;
          font-family: "Oxygen", sans-serif;
          margin-bottom: 8px;
          display: flex;
          justify-content: space-between;
        }
        .inputOSDaughter {
          width: 100%;
          display: flex;
          flex-direction: column;
          /* max-width: 523px; */
          margin-right: auto;

          @media (max-width: 768px) {
            position: relative;
            margin-right: 0;
            margin: auto;
          }

          input {
            background: #FFF;
            border: 1px solid #E2E2E2;
            border-radius: 3px;
            width: 100%;
            height: 48px;
            margin: 12px 0;
            padding: 13px 16px 14px 16px;
            resize: none;
            font-family: "Oxygen", sans-serif;
            font-size: 14px;
            line-height: 150%;

            ::placeholder {
              color: #C0C0C0;
            }
          }
        }
        .OnDaughter {
          display: flex;
          justify-content: flex-end;
          height: 32px;
          transition: 500ms all;
          margin: 8px 0 12px;
        }
        .osDaughter-box {
          ul {
            li {
              list-style: none;
              padding: 8px 8px 8px 12px;
              border: 1px solid #E8EDF3;
              margin-bottom: 10px;
              border-radius: 6px;
              transition: 500ms all;
              height: 41px;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: ${props => props.iconDisplay ? '10px' : '0'};
              cursor: pointer;

              div {
                display: flex;
                justify-content: space-between;
                width: 100%;
                .osDaughterTitle {
                  font-family: "Oxygen", sans-serif;
                  font-weight: bold;
                  font-size: 14px;
                  line-height: 18px;
                  text-transform: uppercase;
                  color: ${({ theme }) => theme.palette.black};
                  margin-right: 12px;
                  white-space: nowrap;
                }
                .osDaughterDescription {
                  font-family: "Oxygen", sans-serif;
                  font-size: 12px;
                  line-height: 150%;
                  color: ${({ theme }) => theme.palette.gray};
                  width: 281px;
                  height: 18px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }
                .label {
                  text-align: center;
                  text-transform: uppercase;
                  background-color: ${'rgba(18, 105, 235, 0.15)' || '#FFF'};
                  color: ${({ theme }) => theme.palette.primary || '#FFF'};  
                  font-family: "Oxygen", sans-serif;
                  font-weight: 700;
                  font-size: 12px;
                  line-height: 150%;
                  border-radius: 4px;
                  padding: 0 8px;
                }

                .osDaughterNone {
                  font-family: "Oxygen", sans-serif;
                  font-size: 12px;
                  line-height: 150%;
                  color: ${({ theme }) => theme.palette.gray};
                  margin: auto;

                  .osDaughterPlus {
                    font-family: "Oxygen", sans-serif;
                    font-size: 12px;
                    font-weight: 700;
                    color: ${({ theme }) => theme.palette.primary};
                    cursor: pointer;
                  }
                }
              }
            }
          }
        }
      }      

      .comments {        
        h1 {
          color: ${({ theme }) => theme.palette.gray};
          font-size: 14px;
          font-family: "Oxygen", sans-serif;
          margin: 32px 0 8px;
        }

        .comments-box {
          width: 100%;
          margin-bottom: 12px;

          ul {
            li {
              list-style: none;
              padding: 5px 10px;
              border: 1px solid #E8EDF3;
              margin-bottom: 10px;
              border-radius: 6px;
              transition: 500ms all;

              div {
                .commentTitle {
                  color: ${({ theme }) => theme.palette.gray};
                  font-size: 12px;
                  display: flex;
                  justify-content: space-between;
                  .commentUser {
                    strong {
                      font-family: "Oxygen", sans-serif;
                      margin-right: 8px;
                      font-size: 14px;
                    }
                  }
                  .label {
                    text-align: center;
                    text-transform: uppercase;
                    background-color: ${'rgba(18, 105, 235, 0.15)' || '#FFF'};
                    color: ${({ theme }) => theme.palette.primary || '#FFF'};  
                    font-family: "Oxygen", sans-serif;
                    font-weight: 700;
                    font-size: 12px;
                    line-height: 150%;
                    border-radius: 4px;
                    padding: 0 8px;
                  }
                }

                p {
                  margin-top: 4px;
                  font-size: 14px;
                }
              }
            }
          }
        }
        .moreComments {
          height: 32px;
          width: 100%;
          background: #F1F5FA;
          border-radius: 3px;
          font-family: "Oxygen", sans-serif;
          font-weight: bold;
          font-size: 12px;
          line-height: 150%;
          text-align: center;
          color: #465A78;
          border: none;
          margin-bottom: ${props => props.iconDisplay ? '90px' : '180px'};
          cursor: pointer;
        }      
      }
      .inputComment {
        width: 100%;
        max-width: 525px;
        display: flex;
        flex-direction: column;
        border-top: 2px solid #E8EDF3;
        margin-right: auto;

        position: fixed;
        margin-top: ${props => props.iconDisplay ? '320px' : '230px'} !important;
        padding-bottom: 20px;

        background-color: #fff;

        @media (max-width: 1024px) {
          margin-top: ${props => props.iconDisplay ? '255px' : '155px'} !important;
        } 
          
        @media (max-width: 768px) {
          position: relative;
          margin-right: 0;
          margin: auto;
        }

        label {
          width: 0;
          height: 0;
        }

        textarea {
          background: #FFF;
          border: 1px solid #E2E2E2;
          border-radius: 3px;
          width: 100%;
          height: 48px !important;
          /* height: 110px; */
          margin: 12px 0;
          padding: 12px 14px 0 48px;
          resize: none;
          font-family: "Oxygen", sans-serif;
          font-size: 14px;
          line-height: 150%;

          &.focus {
            height: 110px !important;
            padding: 12px 14px 0;
          }

          :valid {
            height: 110px !important;
            padding: 12px 14px 0;
          }

          ::placeholder {
            color: #C0C0C0;
          }
        }
      }
      .inputOn {
        display: flex;
        justify-content: space-between;
        height: 32px;
        transition: 500ms all;

        .checkboxComment {
          display: flex;
          .checkboxAndLabel{
            margin-right: 12px;
            input[type="checkbox"]{
              position: relative;
              cursor: pointer;
              margin-bottom: 12px;
            }
            input[type=checkbox]:before {
              content: "";
              display: block;
              /* position: absolute; */
              height: 24px;
              width: 24px;
              top: 0;
              left: 0;
              background-color:#fff;
              border: 1px solid #e9e9e9;
              border-radius: 3px;
            }
            input[type=checkbox]:checked:before {
              content: "";
              display: block;
              /* position: absolute; */
              width: 24px;
              height: 24px;
              top: 0;
              left: 0;
              background-color: #fff;
              border: 1px solid #e9e9e9;
              border-radius: 3px;
            }
            input[type=checkbox]:checked:after {
              content: "";
              display: block;
              width: 5px;
              height: 11px;
              border: solid #1269EB;
              border-width: 0 4px 4px 0;
              -webkit-transform: rotate(45deg);
              -ms-transform: rotate(45deg);
              transform: rotate(45deg);
              position: absolute;
              top: 4px;
              left: 8px;
              border-radius: 3px;
            }
            .labelCheckbox {
              font-family: "Oxygen", sans-serif;
              font-weight: bold;
              font-size: 12px;
              line-height: 150%;
              vertical-align: sub;
              margin-left: 20px;
              color: ${({ theme }) => theme.palette.black};
            }
          }
        }
      }
    }
  }
`;
export const IconBookmarkNormal = styled(FaRegBookmark)`
  height: 18px !important;
  width: 14px !important;
  margin: 2px auto 0 auto;
  color: ${({ theme }) => theme.palette.gray};
`;
export const IconBookmarkActive = styled(FaBookmark)`
  height: 16px !important;
  width: 12px !important;
  margin: 2px auto 0 auto;
  color: ${({ theme }) => theme.palette.white};
`;
export const IconPlayCircle = styled(RiPlayCircleFill)`
  height: 12px;
  width: 12px;
  margin-right: 4px;
  vertical-align: baseline;
  color: ${({ theme }) => theme.palette.white};
`;

export const IconPause = styled(BsFillPauseFill)`
  height: 12px;
  width: 12px;
  margin-right: 4px;
  vertical-align: baseline;
  color: ${({ theme }) => theme.palette.white};
`;

export const IconFileInvoiceDollar = styled(FaFileInvoiceDollar)`
  height: 12px;
  width: 12px;
  margin-right: 4px;
  vertical-align: baseline;
  color: ${({ theme }) => theme.palette.gray};
`;
export const IconListAlt = styled(FaListAlt)`
  height: 12px;
  width: 12px;
  margin-right: 4px;
  vertical-align: baseline;
  color: ${({ theme }) => theme.palette.gray};
`

export const IconExchangeAlt = styled(FaExchangeAlt)`
  height: 12px;
  width: 12px;
  margin-right: 4px;
  vertical-align: baseline;
  color: ${({ theme }) => theme.palette.gray};
`

export const IconComment = styled(BiCommentDetail)`
  height: 24px;
  width: 24px;
  color: ${({ theme }) => theme.palette.primary};
  position: relative;
  margin: 26px 14px 0;
  border-radius: 40%;
  transform: scaleX(-1);
  transition: 500ms all;
`
export const Button  = styled.button`
    background:${props=>props.theme.palette.primary};
    border:none;
    color: #fff;
    border: none;
    height: 32px;
    width: 84px;
    border-radius: 3px;
    font-family: "OxygenBold", sans-serif;
    font-size: 12px;
    
    &:hover{
      cursor: pointer;
    }
`;
export const ButtonCancel = styled.button`
    background:#F1F5FA;
    border:none;
    color: ${props=>props.theme.palette.gray};
    border: none;
    height: 32px;
    width: 77px;
    border-radius: 3px;
    font-size: 12px;
    font-family: "OxygenBold", sans-serif;
    &:hover{
      cursor: pointer;
    }
`;

export const IconEdit = styled(FaEdit)`
  height: 16px;
  width: 16px;
  color: ${({ theme }) => theme.palette.primary};
  cursor: pointer;
`
export const IconPlus = styled(HiPlus)`
  height: 24px;
  width: 24px;
  color: ${({ theme }) => theme.palette.primary};
  cursor: pointer;
`
export const IconArrowBack = styled(TiArrowBack)`
  height: 12px;
  width: 12px;
  margin-right: 4px;
  vertical-align: baseline;
  color: ${({ theme }) => theme.palette.gray};
  transform: scaleX(-1);
`
export const IconPaperclip = styled(FaPaperclip)`
  height: 12px;
  width: 12px;
  margin-right: 4px;
  vertical-align: baseline;
  color: ${({ theme }) => theme.palette.gray};
`

export const DownloadIcon = styled(IconDownload)`
  height: 20px;
  width: 20px;
`
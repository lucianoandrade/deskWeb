import { AiOutlineFieldTime } from 'react-icons/ai';
import { FiCalendar, FiUsers } from 'react-icons/fi';
import { Ri24HoursLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const DashboardCardLink = styled(Link)`
    
    background-color: #fff;
    margin-bottom: 30px;
    border: 1px solid #E8EDF3;
    margin-right: 14px;
    border-radius: 16px;
    width: 100%;
    max-width: 428px;
    transition: 500ms all;
    box-shadow: 5px 3px 10px 0 rgba(136,152,170,.15);
    color: inherit;
    height: 100%;
    max-height: 242px;

    @media (max-width: 1165px) {
        width: 100%;
    }

    .header {
        display: flex;
        align-items: center;
        margin-top: 1rem;
        margin-bottom: 17px;

        .info {
        font-size: .6em;
        color: #2393eb;
        }

        .title {
        font-size: 20px;
        font-weight: bold;
        font-family: "Oxygen", sans-serif;
        line-height: 25px;
        color: ${({ theme }) => theme.palette.darkBlue};
        }

        .service-orders-total {
        margin-left: auto;
      
            span {
                font-family: "Oxygen", sans-serif;
                font-size: 12px;
                background: #F1F5FA;
                padding: 7px 12px 8px;
                border-radius: 5px;
                font-weight: 400;
                color: #0E2341;
                line-height: 15px;
                color: ${({ theme }) => theme.palette.darkBlue};       
            }
        }
    }

    .items {
        display: flex;
        flex-wrap: wrap;

        .loading {
        :nth-child(1) {
            margin-right: 10px;
        }

        :nth-last-child() {
            margin-left: 10px;
        }
        }

        .item {
        flex: 1;
        font-size: 12px;
        margin-bottom: 12px;
        font-family: "Oxygen", sans-serif;
        font-size: 12px;
        line-height: 150%;
        color: ${({ theme }) => theme.palette.gray}; 

            .indicator {
                height: 6px;
                width: 6px;
                background-color: red;
                margin-right: 4px;
                border-radius: 100%;
                }

                span {
                    box-sizing: border-box;
                    font-size: 12px;
                    color: #465A78;
                    margin: 0 4px 0 8px;
                    width: 149px;   
                }

                strong {
                    font-size: 14px;
                    font-weight: 700;
                    color: #0E2341;
                }
            }

            .icons {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 24px;
                height: 24px;
                background: #F1F5FA;
                border-radius: 12px;
            }

            .status {
                box-sizing: border-box;
                display: flex;
                margin: 0 0 12px 14px;
                align-items: center;

                span {
                    width: 100%;
                    max-width: 119px;
                    text-transform: uppercase;
                    font-size: 10px;
                }
            }
        }
    }
    .percentage {
        height: 4px;
        display: flex;
        flex-direction: row;
        max-width: 418px;
        margin: 0 auto;

        div:first-child {
            border-bottom-left-radius: 16px;
        }
        
        div:last-child{
            border-bottom-right-radius: 16px;
        }
    }
`;

export const IconUser = styled(FiUsers)`
  width: 16px;
  height: 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.gray};
`;

export const IconHours = styled(Ri24HoursLine)`
  width: 16px;
  height: 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.gray};
`;

export const IconCalendar = styled(FiCalendar)`
  width: 16px;
  height: 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.gray};
`;

export const IconClockCheck = styled(AiOutlineFieldTime)`
  width: 16px;
  height: 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.gray};
`;

export const StatusHead = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: -24px;
  margin-bottom: 24px;
  &.column {
    flex-direction: column;
  }

  .title {
    display: flex;
    align-items: center;
    h4 {
      font-family: 'Oxygen', sans-serif;
    }
  }
  .indicator {
    height: 6px;
    width: 6px;
    background-color: red;
    margin-right: 4px;
    border-radius: 100%;
  }

  span {
    box-sizing: border-box;
    font-size: 12px;
    color: #465a78;
    margin: 0 4px 0 8px;
    width: 149px;
  }

  strong {
    font-size: 14px;
    font-weight: 700;
    color: #0e2341;
  }
  .service-orders-total {
    span {
      font-family: 'Oxygen', sans-serif;
      font-size: 12px;
      background: #f1f5fa;
      padding: 7px 12px 8px;
      border-radius: 5px;
      font-weight: 400;
      color: #0e2341;
      line-height: 15px;
      color: ${({ theme }) => theme.palette.darkBlue};
    }
  }

  .service-order-search-totals {
    font-family: Oxygen;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 150%;
    color: #465a78;
    margin-top: 4px;
  }
`;
export const StatusListNodeName = styled.h5`
  font-family: Oxygen;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 150%;
  color: #465a78;
  margin-top: -20px;
  margin-bottom: 20px;
`;
export const StatusList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 284px);
  grid-column-gap: 20px;
  grid-row-gap: 8px;
`;
export const NoServiceOrderMessage = styled.p`
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  padding: 20px 12px;
  grid-column: span 2;
  text-align: center;

  font-family: Oxygen;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  text-align: center;
  color: #222222;
`;

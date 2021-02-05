import styled from 'styled-components';
import { FiAlertTriangle } from 'react-icons/fi';
import { ReactComponent as IconAlertTriangle } from '../../../assets/images/iconAlertTriangle.svg';
import { ReactComponent as IconRestoreTime } from '../../../assets/images/iconRestoreTime.svg';
import { ReactComponent as IconTodayOutline } from '../../../assets/images/iconTodayOutline.svg';
import { ReactComponent as IconTime } from '../../../assets/images/iconTime.svg';
import { ReactComponent as IconRoundPlusSeven } from '../../../assets/images/iconRoundPlusSeven.svg';
import { ReactComponent as IconCalendarQuestion } from '../../../assets/images/iconCalendarQuestion.svg';

export const DashboardCardLink = styled.a`    
    background-color: #fff;
    width: 100%;

    .header {
        display: flex;
        align-items: center;

        .title {
        font-size: 20px;
        font-weight: bold;
        font-family: "Oxygen", sans-serif;
        line-height: 25px;
        color: ${({theme}) => theme.palette.darkBlue};
        margin-right: 12px;
        }

        .service-orders-total {
            margin-right: 20px;      
            span {
                font-family: "Oxygen", sans-serif;
                font-size: 12px;
                background: #F1F5FA;
                padding: 7px 12px 8px;
                border-radius: 5px;
                font-weight: 400;
                color: #0E2341;
                line-height: 15px;
                color: ${({theme}) => theme.palette.darkBlue};       
            }
        }
        .item {
        display: flex;
        font-size: 12px;
        font-family: "Oxygen", sans-serif;
        font-size: 12px;
        line-height: 150%;
        color: ${({theme}) => theme.palette.gray};

        .itemIndicator {
            display: flex;
            align-items: center;
            margin-right: 20px;

                strong {
                    font-size: 14px;
                    font-weight: 700;
                    color: #0E2341;
                    margin-left: 4px;
                }
            }
        } 
        }
    }
`;
export const IconDelay = styled(IconAlertTriangle)`
  height: 20px;
  width: 20px;
`;

export const IconTimeRestore = styled(IconRestoreTime)`
  height: 20px;
  width: 20px;
`;

export const IconToday = styled(IconTodayOutline)`
  height: 20px;
  width: 20px;
`;

export const IconTimeSeven = styled(IconTime)`
  height: 20px;
  width: 20px;
`;

export const IconPlusSeven = styled(IconRoundPlusSeven)`
  height: 20px;
  width: 20px;
`;


export const IconQuestionCalendar = styled(IconCalendarQuestion)`
  height: 20px;
  width: 20px;
`;

import React from 'react';
import { serviceOrdersColors } from '../../../constants/serviceOrders.constants';
import { 
    DashboardCardLink, 
    IconDelay, 
    IconTimeRestore, 
    IconToday, 
    IconTimeSeven, 
    IconPlusSeven,
    IconQuestionCalendar 
} from './styles';

const DashboardCard = ({ boardReducer, item, link = true }) => {
    return (
        <DashboardCardLink href={link ? `/staff-board/${item.nodeId}` : "#"}>
            <div className="header">
                <span className="title">
                    {boardReducer && boardReducer.nodeBoard ? boardReducer.nodeBoard.name : item.name}
                </span>
                <div className="service-orders-total">
                    <span>
                        Total de OS's: <strong>{item.total}</strong>
                    </span>
                </div>
                <div className="item">
                    <div className="itemIndicator">
                        <IconDelay style={{ color: serviceOrdersColors.priority }}/>
                        <strong>{item.priority ? item.priority : "0"}</strong>
                    </div>
                    <div className="itemIndicator">
                        <IconTimeRestore style={{ color: serviceOrdersColors.delayed }}/>
                        <strong>{item.delayed ? item.delayed : "0"}</strong>
                    </div>
                    <div className="itemIndicator">
                        <IconToday style={{ color: serviceOrdersColors.today }}/>
                        <strong>{item.today ? item.today : "0"}</strong>
                    </div>
                    <div className="itemIndicator">
                        <IconTimeSeven style={{ color: serviceOrdersColors.next7Days }}/>
                        <strong>{item.next7Days ? item.next7Days : "0"}</strong>
                    </div>
                    <div className="itemIndicator">
                        <IconPlusSeven style={{ color: serviceOrdersColors.beyond7Days }}/>
                        <strong>{item.beyond7Days ? item.beyond7Days : "0"}</strong>
                    </div>
                    <div className="itemIndicator">
                        <IconQuestionCalendar style={{ color: serviceOrdersColors.noPreviewDate }}/>
                        <strong>{item.noPreviewDate ? item.noPreviewDate : "0"}</strong>
                    </div>
                </div>
            </div>
        </DashboardCardLink>
        
    )
};

export default DashboardCard;
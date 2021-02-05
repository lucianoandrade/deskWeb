import React from 'react';
import {
    DashboardCardLoading
} from './styles';
import Skeleton from 'react-loading-skeleton';

const DashboardLoadingCard = () => {
    return (
        <DashboardCardLoading>
            <div style={{ padding: '0 1.5rem' }}>
                <div className="header" style={{ display: 'block' }}>
                    <span className="info">
                        <Skeleton />
                    </span>
                    <br />
                    <span className="title">
                        <Skeleton />
                    </span>
                </div>
                <div className="items">
                    <div className="item loading">
                        <div>
                            <Skeleton />
                        </div>
                        <div>
                            <Skeleton />
                        </div>
                        <div>
                            <Skeleton />
                        </div>
                        <div>
                            <Skeleton />
                        </div>
                    </div>
                    <div className="item loading">
                        <div>
                            <Skeleton />
                        </div>
                        <div>
                            <Skeleton />
                        </div>
                        <div>
                            <Skeleton />
                        </div>
                        <div>
                            <Skeleton />
                        </div>
                    </div>
                </div>
            </div>
        </DashboardCardLoading>
    )
};

export default DashboardLoadingCard;
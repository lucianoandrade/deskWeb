import React, { useEffect } from 'react';
import DashboardCard from '../../components/Dashboard/Card/index';
import DashboardLoadingCard from '../../components/Dashboard/LoadingCard/index';
import {DashboardContainer} from './styles';

const DashboardComponent = ({get, dashboard}) => {
  
  useEffect(() => {
    async function handleGet() {
      await get();
    };

    handleGet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderLoading = () => {
    let loading = [];

    for (let i = 0; i < 4; i++) {
      loading.push(
        <DashboardLoadingCard />
      );
    }

    return loading;
  };

  return (
    <DashboardContainer>
      {dashboard.length === 0 && renderLoading()}
      {dashboard.map((item) => {
        return (
          <DashboardCard item={item} />
        );
      })}
    </DashboardContainer>
  )
};

export default DashboardComponent;

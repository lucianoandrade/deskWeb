import React from 'react';
import { ServiceOrdersService } from '../../../services/api/serviceOrders.service';
import generateCardDataMap from '../../../utils/generateCardDataMap';
import {
  NoServiceOrderMessage,
  StatusHead,
  StatusList,
} from '../../Dashboard/Card/styles';
import LoadingCard from '../../Dashboard/LoadingCard';
import Card from '../../Kanban/Card';
import Modal from '../../Modal';

const serviceOrderService = new ServiceOrdersService();

export const ServiceOrderSearchModal = ({ searchString, open, setOpen }) => {
  const [loading, setLoading] = React.useState(false);
  const [serviceOrders, setServiceOrders] = React.useState([]);

  React.useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);
      const { data } = await serviceOrderService.searchServiceOrder(
        searchString
      );
      console.log(data);
      setServiceOrders(data.map(generateCardDataMap));
      setLoading(false);
    };
    fetchSearchResults();
  }, [searchString]);
  return (
    <Modal
      overflow
      stylewidth='660px'
      id='search-modal'
      open={open}
      setOpen={setOpen}
    >
      {loading ? (
        <StatusList>
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
        </StatusList>
      ) : (
        <>
          <StatusHead className='column' style={{ width: '95%' }}>
            <div className='title'>
              <h4>Resultado da busca por: {searchString}</h4>
            </div>
            <div className='service-order-search-totals'>
              Total: {serviceOrders.length} resultados
            </div>
          </StatusHead>
          <StatusList>
            {Array.isArray(serviceOrders) &&
              serviceOrders.length > 0 &&
              serviceOrders.map((card) => (
                <Card
                  card={card}
                  key={card.Id}
                  activeModalOperators={() => {}}
                  handleClickServiceOrder={() => {
                    // handleOSClick(item.nodeId);
                  }}
                />
              ))}
            {Array.isArray(serviceOrders) && serviceOrders.length === 0 && (
              <NoServiceOrderMessage>
                Não encontramos nenhum resultado para essa busca.
              </NoServiceOrderMessage>
            )}
          </StatusList>
        </>
      )}
    </Modal>
  );
};

import moment from 'moment';

const generateCardDataMap = (serviceOrder) => {
  const card = {
    id: serviceOrder.id,
    title: serviceOrder.description,
    description: serviceOrder.description,
    status: serviceOrder.status.id,
    globalPriority: serviceOrder.globalPriority,
    labels: {},
  };

  if (serviceOrder.customer) {
    card.labels.customerName = `${serviceOrder.customer.name}`;
  }

  if (serviceOrder.type) {
    card.labels.type = `${serviceOrder.type.name}`;
  }

  if (serviceOrder.previewDate) {
    card.labels.previewDate = `${moment(serviceOrder.previewDate)
      .utc()
      .format('DD/MM/YYYY')}`;
  }

  if (serviceOrder.totalResponsibleTreatmentTime) {
    card.labels.responsibleStatus = `Duração do responsável: ${moment
      .duration(serviceOrder.totalResponsibleTreatmentTime, 'seconds')
      .format('h[(_)] m[(_)] s[(_)]', { userLocale: 'pt-BR' })}`;
  }

  if (serviceOrder.totalTreatmentTime) {
    card.labels.totalTreatmentTime = `Duração total: ${moment
      .duration(serviceOrder.totalTreatmentTime, 'seconds')
      .format('h[(_)] m[(_)] s[(_)]', { userLocale: 'pt-BR' })}`;
  }

  return card;
};

export default generateCardDataMap;

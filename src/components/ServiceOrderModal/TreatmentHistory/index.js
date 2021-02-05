import moment from 'moment';
import React from 'react';
import Modal from '../../Modal';
import { ArrowLeft, Container, Sort, SortDown, SortUp } from './styles';

/** @typedef {'' | 'Name' | 'BeginDate' | 'EndDate' | 'TotalTreatmentTime'} SortColumn */

const SortIcon = ({ selected = false, asc = true }) => {
  if (!selected) return <Sort />;
  if (selected && asc) return <SortDown />;
  if (selected && !asc) return <SortUp />;
};

const TreatmentHistoryModal = ({ data, open, setOpen }) => {
  /** @type {[SortColumn, Function]} */
  const [sortColumn, setSortColumn] = React.useState('');
  const [sortColumnAsc, setSortColumnAsc] = React.useState(true);

  /** @param {SortColumn} newSortColumn */
  const handleChangeSortColumn = (newSortColumn) => {
    if (sortColumn === newSortColumn) setSortColumnAsc((sca) => !sca);
    else setSortColumnAsc(true);
    setSortColumn(newSortColumn);
  };

  return (
    <Modal open={true} setOpen={setOpen} id={'treatment'} overflow zIndex={'1000'}>
      <Container>
        <header>
          <h1>
            <ArrowLeft onClick={() => setOpen(false)} />
            <strong>Histórico de Atendimento</strong>
          </h1>
        </header>
        <div className='tableData'>
          <table>
            <thead>
              <tr className='tableTitle'>
                <td onClick={() => handleChangeSortColumn('Name')}>
                  <span>
                    Usuário
                    <SortIcon
                      selected={sortColumn === 'Name'}
                      asc={sortColumnAsc}
                    />
                  </span>
                </td>
                <td
                  onClick={() => handleChangeSortColumn('BeginDate')}
                  className='InitDate'
                >
                  <span>
                    Data inicio
                    <SortIcon
                      selected={sortColumn === 'BeginDate'}
                      asc={sortColumnAsc}
                    />
                  </span>
                </td>
                <td onClick={() => handleChangeSortColumn('EndDate')}>
                  <span>
                    Data fim
                    <SortIcon
                      selected={sortColumn === 'EndDate'}
                      asc={sortColumnAsc}
                    />
                  </span>
                </td>
                <td
                  onClick={() => handleChangeSortColumn('TotalTreatmentTime')}
                >
                  <span>
                    Tempo de atendimento
                    <SortIcon
                      selected={sortColumn === 'TotalTreatmentTime'}
                      asc={sortColumnAsc}
                    />
                  </span>
                </td>
              </tr>
            </thead>
            <tbody>
              {data
                .sort((ao, bo) => {
                  switch (sortColumn) {
                    case 'Name':
                      const aName = ao.treatmentUser.name;
                      const bName = bo.treatmentUser.name;
                      if (aName > bName) return sortColumnAsc ? 1 : -1;
                      if (aName < bName) return sortColumnAsc ? -1 : 1;
                      return 0;
                    case 'BeginDate':
                    case 'EndDate':
                      const a = moment(ao[sortColumn]);
                      const b = moment(bo[sortColumn]);
                      return sortColumnAsc ? a.diff(b) : b.diff(a);
                    case 'TotalTreatmentTime':
                      return sortColumnAsc
                        ? ao[sortColumn] - bo[sortColumn]
                        : bo[sortColumn] - ao[sortColumn];
                    default:
                      return 0;
                  }
                })
                .map((item) => {
                  return (
                    <tr className='tableInfo'>
                      <td>{item.treatmentUser.name}</td>
                      <td className='InitDate'>
                        <span>
                          {moment(item.BeginDate).utc().format('DD/MM/yyyy')}
                          {' às '}
                          {moment(item.BeginDate).utc().format('HH:mm:ss')}
                        </span>
                      </td>
                      <td>
                        {item.EndDate ? (
                          <span>
                            {moment(item.EndDate).utc().format('DD/MM/yyyy')}
                            {' às '}
                            {moment(item.EndDate).utc().format('HH:mm:ss')}
                          </span>
                        ) : (
                          '---'
                        )}
                      </td>
                      <td>
                        {item.TotalTreatmentTime ? (
                          <span>
                            {moment
                              .duration(item.TotalTreatmentTime, 'seconds')
                              .format('h[(_)] m[(_)] s[(_)]', {
                                userLocale: 'pt-BR',
                              })}
                          </span>
                        ) : (
                          '---'
                        )}
                      </td>
                    </tr>
                  );
                })}
              <tr className='tableInfo'>
                <td colSpan={3}>Tempo total de atendimento</td>
                <td>
                  {(() => {
                    const totalTime =
                      data?.reduce(
                        (prev, curr) => prev + curr.TotalTreatmentTime,
                        0
                      ) || 0;
                    return moment
                      .duration(totalTime, 'seconds')
                      .format('h[(_)] m[(_)] s[(_)]', { userLocale: 'pt-BR' });
                  })()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </Modal>
  );
};

export default TreatmentHistoryModal;

import React from 'react';
import { ListStatus, ListTotal, ListName } from './styles';
import { useHistory } from 'react-router-dom';

function ListFrames(props) {
  const history = useHistory();
  return (
    <ListStatus expansion={props.expansion} style={props.listView || window.location.href.includes('staff-board') ? {display: 'block'} : {display: 'none'}}>
      <dd 
        onClick={() => history.push(`/node-board`)}
        // className={window.location.href.includes('node-board') ? 'selected' : 'not-selected'}
      >
        <ListTotal className="listTotal">{props.dashboard ? props.dashboard.length : ''}</ListTotal> 
        <ListName className="listName">Todos os Quadros</ListName>
      </dd>
      {props.dashboard ? props.dashboard.map((item, index) => {
        return (
          <>
            <dd 
              key={index} 
              onClick={() => history.push(`/staff-board/${item.nodeId}`, { update: true })}
              className={window.location.pathname === `/staff-board/${item.nodeId}` ? 'selected' : 'not-selected'}
            >
              <ListTotal className="listTotal">{item.total}</ListTotal> 
              <ListName className="listName">{item.name}</ListName>
            </dd>
          </>
        )
      }): ''}
    </ListStatus>
  )
}
export default ListFrames;
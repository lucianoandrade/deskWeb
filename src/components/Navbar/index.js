import React, { useEffect, useState } from 'react';
import { FiLogOut as LogoutIcon } from 'react-icons/all';
import { BiChevronDown } from 'react-icons/bi';
import { BsFillBellFill } from 'react-icons/bs';
import logoImg from '../../assets/images/default.png';
import SearchBar from '../SearchBar';
import ServiceOrderCreationModal from '../ServiceOrderCreation';
import { ServiceOrdersService } from '../../services/api/serviceOrders.service';
import { NodesService } from '../../services/api/nodes.service';
import { DropdownMenu } from './DropdownMenu';
import { DropdownMenuItem } from './DropdownMenuItem';
import { Container, IconCreateOS } from './styles';
import { PasswordModal } from './PasswordModal';
import { ServiceOrderSearchModal } from './ServiceOrderSearchModal';

const Navbar = ({ user, signOut, children }) => {
  const [createServiceOrder, setCreateServiceOrder] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const [pwModal, setPwModal] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [oSInAttendance, setOSInAttendance] = useState([]);
  const [stopServiceHover, setStopServiceHover] = useState();

  const getServiceOrdersInAttendance = async (userId) => {
    const serviceOrdersService = new ServiceOrdersService();
    const serviceOrders = await serviceOrdersService.getServiceOrdersInAttendance(userId);
    setOSInAttendance(serviceOrders)
  }

  useEffect(() => {
    getServiceOrdersInAttendance(user.id);
  },[children])

  const stopService = async (userId, serviceOrderId) => {
    const nodesService = new NodesService();
    await nodesService.stopTreatment(user.id, serviceOrderId)
    getServiceOrdersInAttendance(user.id);
  }

  return (
    <>
      {createServiceOrder && (
        <ServiceOrderCreationModal
          open={false}
          setOpen={() => setCreateServiceOrder()}
        />
      )}
      <Container>
        <div>
          <img alt='Logo' src={logoImg} />
        </div>
        <ul className='actions'>
          <li className="tasksInAttendance">
            {
              oSInAttendance.length > 0 ? 
              <>
                <span className="openTask">Em aberto:</span> 
                <div className="osOpen">
                {
                  oSInAttendance.slice(-3).map((item, index) => (
                    <p key={index}>{`#${item.id}`}
                      <span 
                        onClick={() => stopService(user.id ,item.id)}
                        onMouseOver={() => setStopServiceHover(item.id)}
                        onMouseOut={() => setStopServiceHover('')}
                      >
                        x
                      </span>
                      <div className="stopService-hover" style={stopServiceHover === item.id ? {display: 'flex'} : {display: 'none'}}>
                        Parar atendimento
                      </div>
                    </p>
                  ))
                }
                {/* <div className="stopService-hover" style={stopServiceHover ? {display: 'flex'} : {display: 'none'}}>
                  Parar atendimento
                </div>   */}
                </div>
                {oSInAttendance.length > 3 ? <span className="moreTasks">Mais...</span> : ''} 
              </>
              : ''
            }
          </li>
          <li>
            <span className='search' style={{ marginTop: 14 }}>
              <SearchBar
                text={searchText}
                setText={setSearchText}
                confirm={(text) => setSearchText(text)}
              />
              {!!searchText && (
                <ServiceOrderSearchModal
                  searchString={searchText}
                  open={!!searchText}
                  setOpen={() => setSearchText('')}
                />
              )}
            </span>
          </li>
          <li>
            <span
              className='create-os'
              onClick={() => setCreateServiceOrder(true)}
            >
              <IconCreateOS />
            </span>
          </li>
          <li>
            <span className='icon'>
              <BsFillBellFill
                size={21}
                style={{
                  marginTop: 10,
                  transform: 'rotate(45deg)',
                  color: '#0E2341',
                }}
              />
            </span>
          </li>
          <li>
            <span
              className='btn-signout'
              style={{ marginLeft: 24, height: 40 }}
              onClick={() => setUserDropdown(true)}
            >
              {user.name}
              <BiChevronDown />
            </span>
            <DropdownMenu
              open={userDropdown}
              onClose={() => setUserDropdown(false)}
            >
              <DropdownMenuItem onClick={() => setPwModal(true)}>
                Alterar senha
              </DropdownMenuItem>
              <DropdownMenuItem onClick={signOut} style={{ display: 'flex' }}>
                <LogoutIcon
                  style={{
                    marginRight: '10px',
                    marginTop: '2px',
                    marginBottom: '-2px',
                  }}
                />
                Sair
              </DropdownMenuItem>
            </DropdownMenu>
            {pwModal && <PasswordModal open={pwModal} setOpen={setPwModal} />}
          </li>
          {/* <li>
            <button className="btn-signout" onClick={signOut}>
              Sair <FaSignOutAlt />
            </button>
          </li> */}
        </ul>
      </Container>
    </>
  );
};

export default Navbar;

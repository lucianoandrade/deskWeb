import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DashboardService } from '../../services/api/dashboard.service';
import ListOfFrames from './ListFrames';

import { 
    Wrapper, 
    MenuIcon, 
    IconHouse, 
    IconBoard, 
    IconLineDown, 
    IconWhiteHome, 
    IconReport,
    Temp
} from './styles';

function MenuBar(){

    const history = useHistory();
    const [expansion, setExpansion] = useState(true);
    const [listView, setListView] = useState(false);
    const [reportView, setReportView] = useState(false);
    const handlerSelect = (page) => history.push(`/${page}`);
    const [dashboard, setDashboard] = useState([]);

    const stateToProps = useSelector(({ authReducer }) => ({authReducer}));

    const getDashboard = React.useCallback(async () => {
        const dashboardService = new DashboardService();
        const dashboardApi = await dashboardService.get(
          stateToProps.authReducer.user.id
        );
        if (dashboardApi) {
          setDashboard(dashboardApi);
        }
      }, [stateToProps.authReducer.user.id]);

    React.useEffect(() => {
        getDashboard();
    }, [getDashboard]);

    return(
        <Wrapper expansion={expansion}>
            <div>
                <MenuIcon onClick={()=>setExpansion(!expansion)} expansion={expansion}/>
            </div>
            <div onClick={()=> {
                    handlerSelect('dashboard'); 
                    setReportView(false); 
                    setListView(false)
                }} 
                className={window.location.href.includes('dashboard') ? 'active' : 'not-active'}
            >
                {window.location.href.includes('dashboard') ?
                <IconHouse className="icon"/> 
                : 
                <IconWhiteHome className="icon"/>}
                <span className="titleMenu">Dashboard</span>
            </div>
            <div 
                onClick={()=> {
                    handlerSelect('node-board'); 
                    setListView(!listView); 
                    setReportView(false); 
                    getDashboard()
                }} 
                className={window.location.href.includes('node-board') ? 'active' : 'not-active'}
            >
                <IconBoard className="icon"/> 
                <span className="titleMenu">Quadros</span>
                <IconLineDown style={listView?{transform: 'rotate(180deg)'}:{transform: 'rotate(0deg)'}}/>
            </div>
            <ListOfFrames expansion={expansion} dashboard={dashboard} listView={listView}/>
            <div 
                onClick={()=> {
                    setListView(false); 
                    setReportView(!reportView)
                }} 
                className={'not-active'}
            >
                <IconReport className="icon"/> 
                <span className="titleMenu">Relatórios</span>
                <IconLineDown style={reportView?{transform: 'rotate(180deg)'}:{transform: 'rotate(0deg)'}}/>
            </div>
            <Temp reportView={reportView} expansion={expansion}>
                <span>Relatório Consolidado</span>
            </Temp>
        </Wrapper>
    )
}
export default MenuBar;
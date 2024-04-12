import React, { useState } from 'react';
import './Home.css';
import Search from '../Components/Search';
import { Link, useParams } from 'react-router-dom';
import ApacheAccessLogs from '../Components/ApacheAccessLogs';
import ApacheErrorLogs from '../Components/ApacheErrorLogs';
import ApacheAttackLogs from '../Components/ApacheAttackLogs';
import MysqlStartupLogs from '../Components/MysqlStartupLogs';
import MysqlShutdownLogs from '../Components/MysqlShutdownLogs';
import NginxAccessLogs from '../Components/NginxAccessLogs';
import NginxErrorLogs from '../Components/NginxErrorLogs';

export default function Home() {
    let { logType } = useParams();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const renderLogComponent = () => {
        switch (logType) {
            case 'ApacheAccessLogs':
                return <ApacheAccessLogs />;
            case 'ApacheErrorLogs':
                return <ApacheErrorLogs />;
            case 'ApacheAttackLogs':
                return <ApacheAttackLogs />;
            case 'MysqlStartupLogs':
                return <MysqlStartupLogs />;
            case 'MysqlShutdownLogs':
                return <MysqlShutdownLogs />;
            case 'NginxAccessLogs':
                return <NginxAccessLogs />;
            case 'NginxErrorLogs':
                return <NginxErrorLogs />;
            default:
                return null;
        }
    };

    return (
        <div className="container-fluid">
            <div className="nav">
                <i className="fa fa-bars" onClick={toggleMenu}></i>
                <h1>Log Viewer Application</h1>
            </div>
            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                <i className="fa fa-close" onClick={toggleMenu}></i>
                <div className="menuItems">
                    <h4>Apache</h4>
                    <ul>
                        <li><Link to="/ApacheAccessLogs" onClick={closeMenu}>Access Logs</Link></li>
                        <li><Link to="/ApacheErrorLogs" onClick={closeMenu}>Error Logs</Link></li>
                        <li><Link to="/ApacheAttackLogs" onClick={closeMenu}>Attack Logs</Link></li>
                    </ul>
                </div>
                <div className="menuItems">
                    <h4>MySQL</h4>
                    <ul>
                        <li><Link to="/MysqlStartupLogs" onClick={closeMenu}>Startup Logs</Link></li>
                        <li><Link to="/MysqlShutdownLogs" onClick={closeMenu}>Shutdown Logs</Link></li>
                    </ul>
                </div>
                <div className="menuItems">
                    <h4>Nginx</h4>
                    <ul>
                        <li><Link to="/NginxAccessLogs" onClick={closeMenu}>Access Logs</Link></li>
                        <li><Link to="/NginxErrorLogs" onClick={closeMenu}>Error Logs</Link></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className={`col-md-2 menu ${menuOpen ? 'open' : ''}`}>
                    <div className="menuItems">
                        <h4>Apache</h4>
                        <ul>
                            <li><Link to="/ApacheAccessLogs" onClick={closeMenu}>Access Logs</Link></li>
                            <li><Link to="/ApacheErrorLogs" onClick={closeMenu}>Error Logs</Link></li>
                            <li><Link to="/ApacheAttackLogs" onClick={closeMenu}>Attack Logs</Link></li>
                        </ul>
                    </div>
                    <div className="menuItems">
                        <h4>MySQL</h4>
                        <ul>
                            <li><Link to="/MysqlStartupLogs" onClick={closeMenu}>Startup Logs</Link></li>
                            <li><Link to="/MysqlShutdownLogs" onClick={closeMenu}>Shutdown Logs</Link></li>
                        </ul>
                    </div>
                    <div className="menuItems">
                        <h4>Nginx</h4>
                        <ul>
                            <li><Link to="/NginxAccessLogs" onClick={closeMenu}>Access Logs</Link></li>
                            <li><Link to="/NginxErrorLogs" onClick={closeMenu}>Error Logs</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-10 logViewer">
                    <div className="logs">
                        <Search />
                        <div className="logContent">
                            {renderLogComponent()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

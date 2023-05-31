import React, { useEffect, useState } from 'react';
import { BsFire, BsGearFill,BsChatFill, BsBarChartFill,BsFillGridFill, BsCalendarDateFill} from 'react-icons/bs';
import { RiLogoutCircleRFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const SidebarIcon = ({ icon, tooltip, className, to }) => (
    <Link to={to} className={`sidebarIcon ${className}`}>
      {icon}
      <span className="sidebarTooltip">{tooltip}</span>
    </Link>
  );

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeListener = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return (
    <div className="sidebarContainer">
      <SidebarIcon to="/home" icon={<BsFillGridFill size="26" />} tooltip="Home" className="home"/>
      <SidebarIcon icon={<BsFire size="32" />} tooltip="Tasks" className="tasks"/>
      <SidebarIcon to="/chat" icon={<BsChatFill size="26" />} tooltip="Chat" className="chat"/>
      <SidebarIcon icon={<BsCalendarDateFill size="24" />} tooltip="Calendar" className="calendar"/>
      <SidebarIcon icon={<BsBarChartFill size="24" />} tooltip="Analytics" className="analytics"/>
      {screenWidth > 600 && <SidebarIcon icon={<BsGearFill size="26" />} tooltip="Settings" />}
      {screenWidth > 600 && <SidebarIcon icon={<RiLogoutCircleRFill size="30" />} tooltip="Log Out" />}
    </div>
  );
};

export default Sidebar;

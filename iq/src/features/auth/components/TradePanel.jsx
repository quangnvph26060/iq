import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftPanel from './LeftPanel';
import TradeTabs from './TradeTabs';
import { useOutletContext } from 'react-router-dom';
const TradePanel = () => {
  const { showTradeTabs } = useOutletContext();
  return (
    <div className="d-flex bg-dark text-white w-100 h-100">
      <LeftPanel />
      {showTradeTabs && <TradeTabs />}
    </div>
  );
};

export default TradePanel;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftPanel from './LeftPanel';
import TradeTabs from './TradeTabs';

const TradePanel = () => {
  return (
    <div className="d-flex bg-dark text-white" style={{ width: '100%'}}>
      <LeftPanel />
      <TradeTabs />
    </div>
  );
};

export default TradePanel;

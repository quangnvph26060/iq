import React, { useEffect, useRef } from 'react';

const TradeChart = () => {
  const chartContainer = useRef(null);

  useEffect(() => {
    if (chartContainer.current && !chartContainer.current.innerHTML) {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
      script.type = 'text/javascript';
      script.async = true;
      script.innerHTML = JSON.stringify({
        "symbol": "FX:EURUSD",
        "width": "100%",
        "height": "100%",
        "locale": "en",
        "dateRange": "1D",
        "colorTheme": "dark",
        "trendLineColor": "#37a6ef",
        "underLineColor": "rgba(55, 166, 239, 0.15)",
        "isTransparent": false,
        "autosize": true,
        "largeChartUrl": ""
      });

      chartContainer.current.appendChild(script);
    }
  }, []);

  return (
    <div className="flex-grow-1 bg-secondary text-white p-0 vh-100">
      <div
        className="bg-dark rounded"
        style={{ height: '100vh', overflow: 'hidden' }}
      >
        <div ref={chartContainer} style={{ width: '100%', height: '100%' }} />
      </div>
    </div>
  );
};

export default TradeChart;

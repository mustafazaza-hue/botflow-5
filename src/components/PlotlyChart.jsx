import { useEffect, useRef } from 'react';

const PlotlyChart = ({ data, layout, style, config }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const loadPlotly = async () => {
      if (!chartRef.current || !data) return;

      try {
        // Dynamic import for Plotly
        const Plotly = await import('plotly.js-dist-min');
        
        // Clean up previous chart
        if (chartRef.current && chartRef.current.childNodes.length > 0) {
          Plotly.purge(chartRef.current);
        }

        // Create new chart
        await Plotly.newPlot(chartRef.current, data, layout, {
          responsive: true,
          displayModeBar: false,
          displaylogo: false,
          ...config
        });

        // Handle window resize
        const handleResize = () => {
          if (chartRef.current) {
            Plotly.Plots.resize(chartRef.current);
          }
        };

        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
          if (chartRef.current) {
            Plotly.purge(chartRef.current);
          }
        };
      } catch (error) {
        console.error('Error loading Plotly:', error);
        if (chartRef.current) {
          chartRef.current.innerHTML = '<div class="flex items-center justify-center h-full text-red-500">Error loading chart</div>';
        }
      }
    };

    loadPlotly();
  }, [data, layout, config]);

  return <div ref={chartRef} style={style} />;
};

export default PlotlyChart;
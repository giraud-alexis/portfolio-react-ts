import React, { useEffect } from 'react';
import './spline.scss';

const SplineViewer: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.25/build/spline-viewer.js';
    script.type = 'module';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='spline'>
      <spline-viewer url="https://prod.spline.design/8BawPwJkLfnwwc1q/scene.splinecode" style={{ width: '100%', height: '100vh' }}></spline-viewer>
    </div>
  );
};

export default SplineViewer;

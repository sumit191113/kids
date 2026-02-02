
import React from 'react';
import { AdProps } from '../types';

const AdPlaceholder: React.FC<AdProps> = ({ slot, type = 'mid-content', className = "" }) => {
  // AdSense Policy: Ads must be clearly distinguishable from content.
  // This placeholder simulates a managed ad unit.
  return (
    <div className={`my-8 flex flex-col items-center justify-center border border-dashed border-gray-300 bg-gray-50 rounded-lg p-4 min-h-[100px] sm:min-h-[250px] ${className}`}>
      <span className="text-[10px] uppercase tracking-widest text-gray-400 mb-2 font-medium">Sponsored Advertisement</span>
      <div className="text-gray-400 text-sm flex items-center justify-center">
        {/* Real AdSense code would go here */}
        <p className="text-center italic">Educational content continues below</p>
      </div>
    </div>
  );
};

export default AdPlaceholder;

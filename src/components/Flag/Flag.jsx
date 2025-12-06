import AshokaChakra from '../AshokaChakra/AshokaChakra';
import './Flag.css';

function Flag() {
  // Create 50 vertical slices for realistic wave effect
  const numberOfSlices = 50;
  const slices = Array.from({ length: numberOfSlices }, (_, i) => i);
  
  return (
    <div className="flag-container">
      {/* Steel Flagpole */}
      <div className="flagpole">
        <div className="pole-cap"></div>
        <div className="pole-shaft"></div>
      </div>
      
      {/* Indian Flag with sliced wave effect */}
      <div className="flag-wrapper">
        {/* Ashoka Chakra with absolute positioning and animated separately */}
        <div className="chakra-absolute-container">
          <AshokaChakra />
        </div>
        
        {slices.map((i) => (
          <div
            key={i}
            className="flag-slice"
            style={{
              animationDelay: `-${i * 0.02}s`,
              // Use percentage based positioning 
              backgroundPosition: `${(i / (numberOfSlices - 1)) * 100}% 0`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Flag;

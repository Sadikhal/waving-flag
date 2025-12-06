import './AshokaChakra.css';

function AshokaChakra() {
  // Create 24 spokes for the Ashoka Chakra
  const spokes = Array.from({ length: 24 }, (_, i) => i + 1);

  return (
    <div className="ashoka-chakra">
      <div className="chakra-container">
        {/* Outer rim */}
        <div className="chakra-rim"></div>
        
        {/* 24 spokes */}
        <div className="chakra-spokes">
          {spokes.map((spoke) => (
            <div key={spoke} className="spoke"></div>
          ))}
        </div>
        
        {/* Central hub */}
        <div className="chakra-hub"></div>
      </div>
    </div>
  );
}

export default AshokaChakra;

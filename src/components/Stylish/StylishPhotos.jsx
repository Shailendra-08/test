import React from 'react';
import './StylishPhotos.css'; // Import the CSS file for styling
import photo1 from '../../assets/backlit.png'; // Example photo import
import photo2 from '../../assets/business.png';
import photo3 from '../../assets/hands.png';

const StylishPhotos = () => {
  return (
    <div className="stylish-photos">
      <div className="header-section">
        <h1>Make your photos more stylish</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
      </div>

      <div className="photo-grid">
        <div className="photo-card">
          <img src={photo1} alt="Photo 1" />
          <h3>Sed ut perspiciatis</h3>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
        </div>

        <div className="photo-card">
          <img src={photo2} alt="Photo 2" />
          <h3>Lorem ipsum dolor</h3>
          <p>Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        </div>

        <div className="photo-card">
          <img src={photo3} alt="Photo 3" />
          <h3>Nemo enim ipsam</h3>
          <p>Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
        </div>
      </div>
    </div>
  );
};

export default StylishPhotos;

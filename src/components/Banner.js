import React from 'react';
import './Banner.css'

function Banner(props) {
  var counter = 1;
  setInterval(() => {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
      counter = 1;
    }
  }, 5000)

  return (
    <div className='slider'>
      <div className='slides'>
        <input type='radio' name='radio-btn' id='radio1' />
        <input type='radio' name='radio-btn' id='radio2' />
        <input type='radio' name='radio-btn' id='radio3' />
        <input type='radio' name='radio-btn' id='radio4' />

        <div className='slide first'>
          <img className='slide first' src='http://mauweb.monamedia.net/caycanh/wp-content/uploads/2018/03/project-banner.jpg' alt='' />
        </div>
        <div className='slide'>
          <img className='slide' src='http://mauweb.monamedia.net/caycanh/wp-content/uploads/2018/03/cleancut-installationHD.jpg' alt='' />
        </div>
        <div className='slide'>
          <img className='slide' src='http://mauweb.monamedia.net/caycanh/wp-content/uploads/2018/03/project-banner.jpg' alt='' />
        </div>
        <div className='slide'>
          <img className='slide' src='http://mauweb.monamedia.net/caycanh/wp-content/uploads/2018/03/cleancut-installationHD.jpg' alt='' />
        </div>

        <div className='navigation-auto'>
          <div className='auto-btn1'></div>
          <div className='auto-btn2'></div>
          <div className='auto-btn3'></div>
          <div className='auto-btn4'></div>
        </div>
      </div>

      <div className='navigation-manual'>
        <label for='radio1' className='manual-btn'></label>
        <label for='radio2' className='manual-btn'></label>
        <label for='radio3' className='manual-btn'></label>
        <label for='radio4' className='manual-btn'></label>
      </div>

    </div>
  );
}

export default Banner;
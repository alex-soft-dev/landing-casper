

import * as React from 'react';
import ArrowRightIcon from '../assets/img/gota/arrow-right.png';

function Gota() {
  return (
    <>
      <section className='gota' id="gota">
        <div className='over'></div>
        
        <div className='container'>
          <div className='row py-5 my-5 mx-3'>
            <div className='main'>
              <p className='title'>Got a <br/><b>PROJECT</b> in <br/> mind?</p>
              <button className='fill-btn'>Fill in your application <img src={ArrowRightIcon} alt=""/></button>
            </div>
          </div>
        </div>

        <div className='row b-c-p'>
            <div className='vision py-5 my-5'>
                <h5 className='title mt-5'>Our vision</h5>
                <p className='description my-5'>
                    TO BUILD THE CASPER ECOSYSTEM TO BE ONE OF THE <br/>
                    <b className='green-bold'>HIGHEST REGARDED BLOCKCHAINS AROUND 
                    <br/> THE WORLD.</b>
                </p>
            </div>
          </div>
      </section>
    </>
  );
}

export default Gota;

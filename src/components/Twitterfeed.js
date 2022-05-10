

import * as React from 'react';

import Casper from '../assets/img/tfeed/lists/casper.svg';
import WU from '../assets/img/tfeed/lists/wu.svg';
import FreeFlow from '../assets/img/tfeed/lists/freeflow.webp';
import LelandVentures from '../assets/img/tfeed/lists/lelandventures.svg';
import RockTree from '../assets/img/tfeed/lists/rocktree.webp';
import X from '../assets/img/tfeed/lists/x.webp';
import CabinVC from '../assets/img/tfeed/lists/cabinvc.webp';
import AIT from '../assets/img/tfeed/lists/a-t.svg';
import MintedLab from '../assets/img/tfeed/lists/mintedlab.webp';

function Twitterfeed() {
    React.useEffect(() => {
        const script = document.createElement("script");
        script.setAttribute("src", "https://platform.twitter.com/widgets.js");
        document.getElementsByClassName("lists")[0].appendChild(script);
    }, []);

  return (
    <section className='tfeed' id="tfeed">
        <div className='over'></div>
        <div className='container'>
            <div className='header'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h4 className='title'>TWITTER FEED</h4>
                        <p className='description'>Look at what people are saying about CasperPad on Twitter</p>
                    </div>                    
                </div>
            </div>

            <div className='lists'>
                <div className="tweets row px-3">
                    <div className="tweet col-md-4">
                        <blockquote className="twitter-tweet" data-dnt="true" data-theme="dark" data-chrome="noheader nofooter noborders" data-cards="hidden" data-height="800">
                            <a href="https://twitter.com/Casper_Pad/status/1501592824487235588?ref_src=twsrc%5Etfw">March 9, 2022</a>
                        </blockquote>
                    </div>
                    <div className="tweet col-md-4">
                        <blockquote className="twitter-tweet" data-dnt="true" data-theme="dark" data-chrome="noheader nofooter noborders" data-cards="hidden" data-height="800">
                            <a href="https://twitter.com/TheSwappery/status/1501576260534874114?ref_src=twsrc%5Etfw">March 9, 2022</a>
                        </blockquote>
                    </div>
                    <div className="tweet col-md-4">
                        <blockquote className="twitter-tweet" data-dnt="true" data-theme="dark" data-chrome="noheader nofooter noborders" data-cards="hidden" data-height="800">
                            <a href="https://twitter.com/Casper_Pad/status/1501554051552534531?ref_src=twsrc%5Etfw">March 9, 2022</a>
                        </blockquote>
                    </div>
                </div>
            </div>

            <div className='teches'>
                <div className='card'>
                    <h5 className='title'>Backed and supported by top leading companies in Blockchain Technologies</h5>
                    <div className='row justify-content-between p-2'>
                        <img src={Casper} className='item1 col-md-6' alt='1'/>
                        <img src={AIT} className='item1 col-md-6' alt='4'/>
                    </div>
                    <div className='row justify-content-between p-2'>    
                        <img src={RockTree} className='item col-md-4' alt='1'/>
                        <img src={LelandVentures} className='item col-md-4' alt='4'/>
                        <img src={WU} className='item col-md-4' alt='2'/>
                    </div>
                    <div className='row justify-content-between p-2'>
                        <img src={FreeFlow} className='item col-md-3' alt='3'/>
                        <img src={MintedLab} className='item col-md-3' alt='5'/>
                        <img src={CabinVC} className='item col-md-3' alt='3'/>
                        <img src={X} className='item col-md-3' alt='2'/>
                    </div>
                </div>     
            </div>
        </div>

    </section>
  );
}

export default Twitterfeed;

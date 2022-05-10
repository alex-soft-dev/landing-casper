import * as React from 'react';
import { Button } from '@mui/material';
import { ReactComponent as RabbitIcon } from '../assets/img/icons/rabbit.svg';
import { ArrowForward } from '@mui/icons-material';

function Bottom() {
    return (
        <section className='bottom py-4' id="bottom">
            <div className='down'>
                <div className='container'> 
                    <div className='row main align-items-center'>
                        <div className='col-md-6 col-sm-12 pr-5'>
                            <p className='title'>Access our token and host your projects on casper network today!</p>
                        </div>
                        <div className='col-md-6 col-sm-12'>
                            <div className='row justify-content-center'>
                                <Button className='rbtn col-md-4' variant="contained" endIcon={<RabbitIcon />} onClick={() => {window.open('https://pancakeswap.finance/swap?outputCurrency=0xef9481115ff33e94d3e28a52d3a8f642bf3521e5', "_blank")}}>Buy on PancakeSwap</Button>
                                {/* <div className='col-md-1'></div> */}
                                <Button className='gbtn col-md-4' variant="outline" endIcon={<ArrowForward />} onClick={() => {window.open('https://staking.casper-pad.io/', "_blank")}}>Open CasperPad App</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Bottom;
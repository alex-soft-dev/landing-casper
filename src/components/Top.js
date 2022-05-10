
import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';

import { Button } from '@mui/material';
import { ReactComponent as RabbitIcon } from '../assets/img/icons/rabbit.svg';
import { ArrowForward } from '@mui/icons-material';
import xxLogo from '../assets/img/top/xx.svg';
import { ContentCopy } from '@mui/icons-material';
import Yellipse from '../assets/img/top/yellipse.png';

function Legend ({ title, value}) {
    return (
        <div className='item'>
            <h5 className='tl'>{title}</h5>
            <h5 className='pr'>{value}</h5>
        </div>
    );
}

function Top() {
    const [cardTop, setCardTop] = useState(0);
    const [currency, setCurrency] = useState(0);
    const [address, setAddress] = useState('0xef9481115ff33e94d3e28a52d3a8f642bf3521e5');

    function shortAddress (addr) {
        const startStr = addr.slice(0, 17);
        const lastStr = addr.slice(addr.length - 5, addr.length);
        return (startStr + "..." + lastStr);
    }

    React.useEffect(() => {
        getCurrency();
    }, []);

    const getCurrency = () => {
        axios.get("https://api.coingecko.com/api/v3/simple/price?ids=casperpad&vs_currencies=usd")
        .then((res) => {
            let data = res.data;
            console.log("currency: ", data.casperpad.usd);
            setCurrency(data.casperpad.usd);
        });
    }

    function copyFunc() {
        navigator.clipboard.writeText(address);
        console.log(address);
    }

    window.onscroll = function() {
        if (window.pageYOffset < 30) {
            setCardTop(window.pageYOffset + 'px');
        }
    };

    return (
        <section className='top' id="top">
            <div className='m-container'>                
                <div className='container main'>
                    <div className='row'>
                        <div className='col-md-6 col-sm-12 left mt-5'>  
                            <div className='title'>Launch <b>next level projects</b> on the Casper Network</div>
                            <div className='description mt-5'>CasperPad is the first Casper-supported decentralized Launchpad built to launch next level projects on the Casper Network</div>
                            <div className='row mt-5'>
                                <div className='col-md-9' style={{margin: 'auto'}}>
                                    <div className='justify-content-between buttons'>
                                        <Button className='col-md-4 rbtn' variant="contained" endIcon={<RabbitIcon />} onClick={() => {window.open('https://pancakeswap.finance/swap?outputCurrency=0xef9481115ff33e94d3e28a52d3a8f642bf3521e5', "_blank")}}>Buy on PancakeSwap</Button>
                                        <Button className='col-md-4' variant="outline" endIcon={<ArrowForward />} onClick={() => {window.open('https://staking.casper-pad.io/', "_blank")}}>Open CasperPad App</Button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-6 col-sm-12 right mt-5'>
                            <img src={Yellipse} className='yellipse' alt='yellipse'/>
                            <div className='card t-card' id='tCard' style={{top:`${cardTop}`}}>
                                <div className='current'>
                                    <div className='row'>
                                        <img className='xxLogo' src={xxLogo} alt='xx-logo'/> 
                                    </div>
                                    <Legend title='Currentprice' value={currency} />
                                </div>
                                <div className='detail'>
                                    <Legend title='Token Symbol' value='CSPD' />
                                    <Legend title='Total Supply' value='500,000,000 CSPD' />
                                    <div className='copy-bar'>
                                        <span className='copy-text' id='copyAddress'>{shortAddress(address)}</span>
                                        <Button className='copy-btn' variant="contained" startIcon={<ContentCopy />} onClick={()=>{copyFunc()}}>Copy</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Top;

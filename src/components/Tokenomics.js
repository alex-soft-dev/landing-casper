

import * as React from 'react';

import AdvisoryImg from '../assets/img/tokenomics/icons/Advisory.svg';
import AirdropImg from '../assets/img/tokenomics/icons/Airdrop.svg';
import LiquidityImg from '../assets/img/tokenomics/icons/Liquidity.svg';
import PublicImg from '../assets/img/tokenomics/icons/Public.svg';
import PrivateImg from '../assets/img/tokenomics/icons/Private.svg';
import StakingImg from '../assets/img/tokenomics/icons/Staking.svg';
import TeamImg from '../assets/img/tokenomics/icons/Team.svg';


const TokenItem = (props) => {
    return (
        <div className='card token-item'>
            {/* <div className='token-img'>
                <img src={props.img} className='normal' alt=""/>
                <img src={props.img} className='blur' alt=""/>
            </div> */}
            
            <h5 className='pro-num'>{props.pro}</h5>
            <div className='d-flex flex-row justify-content-center desc-block'>
                <h6 className='desc'>{props.desc}</h6>
            </div>
        </div>
    );
}

function Tokenomics() {
  return (
    <section className='tokenomics py-5' id="tokenomics">
        <div className='over' />
        <div className='header my-5 pt-5'>
            <h5 className='title my-5'>TOKENOMICS</h5>
        </div>

        <div className='main container my-5 py-5'>
            <div className='row justify-content-center'>
                <TokenItem img={PublicImg} pro="20%" desc="Public Sale" />
                <TokenItem img={PrivateImg} pro="20%" desc="Private Sale" />
                <TokenItem img={AirdropImg} pro="5%" desc="Airdrop" />
                <TokenItem img={StakingImg} pro="20%" desc="Staking" />
                <TokenItem img={AdvisoryImg} pro="10%" desc="Advisory" />
                <TokenItem img={LiquidityImg} pro="15%" desc="Liquidity" />
                <TokenItem img={TeamImg} pro="10%" desc="Team" />
            </div>
        </div>
    </section>
  );
}

export default Tokenomics;

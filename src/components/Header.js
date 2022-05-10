import * as React from 'react';

import { Button } from '@mui/material';
import Logo from '../assets/img/top/logos/logo.svg';
import { Navbar, Nav } from 'react-bootstrap';

const BINANCE_NET = "https://bsc-dataseed.binance.org/";
const CHAINID = "0x38";

function Header() {
    const addToken = async () => {
        try {
            await window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: CHAINID }],
            });
        } catch (switchError) {
            // This error code indicates that the chain has not been added to MetaMask.
            if (switchError.code === 4902) {
                try {
                    await window.ethereum.request({
                        method: "wallet_addEthereumChain",
                        params: [{ chainId: CHAINID, rpcUrl: BINANCE_NET /* ... */ }],
                    });
                } catch (addError) {
                    // handle "add" error
                }
            }
            else{
                return;
            }
            // handle other "switch" errors
        }

        // Add Token
        const tokenAddress = '0xef9481115ff33E94d3E28A52D3A8F642bf3521e5';
        const tokenSymbol = 'CSPD';
        const tokenDecimals = 18;
        const tokenImage = 'https://raw.githubusercontent.com/l3oxer/CSPD-ICON/main/CasperPad_New%20Logo.png';

        try {
            // wasAdded is a boolean. Like any RPC method, an error may be thrown.
            const wasAdded = await window.ethereum.request({
                method: 'wallet_watchAsset',
                params: {
                type: 'ERC20', // Initially only supports ERC20, but eventually more!
                options: {
                    address: tokenAddress, // The address that the token is at.
                    symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
                    decimals: tokenDecimals, // The number of decimals in the token
                    image: tokenImage, // A string url of the token logo
                },
                },
            });

            if (wasAdded) {
                console.log('Thanks for your interest!');
            } else {
                console.log('Your loss!');
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (    
        <section className='header' id='header'>
            <div className='container'>
                <div className='header'>
                    <Navbar expand="lg" className='justify-content-left'>
                        <div className='w-100'>
                            <div className='d-flex flex-row align-items-center'>
                                <Navbar.Brand href="/" className='mt-3'><img className='logo-img' src={Logo} alt='logo'/></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggler bg-light ms-auto' />
                            </div>
                            <Navbar.Collapse color='white' id="basic-navbar-nav" className='mt-3 align-self-end justify-content-end'>
                                <Nav className="m-nav align-items-center">
                                    <Nav.Link className='n-link' href="/">HOME</Nav.Link>
                                    <Nav.Link className='n-link' href="#about">ABOUT US</Nav.Link>
                                    <Nav.Link className='n-link' href="#tokenomics">TOKENOMICS</Nav.Link>
                                    <Nav.Link className='n-link' target="_blank" href="https://verify-with.blockpass.org/?clientId=CasperPad&serviceName=CasperPad&env=prod">KYC</Nav.Link>
                                    <Button className='ms-5 t-btn' variant="outline" onClick={addToken}>Add to Wallet</Button>
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                    </Navbar>
                </div>
            </div>
        </section>
    )
}

export default Header;
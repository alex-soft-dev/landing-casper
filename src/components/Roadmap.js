

import * as React from 'react';

function MapItem(props){
    return (
        <div className={`card m-item ${props.direction}`} style={props.style}>
            <div className="card-header">{props.title}</div>
            <div className="card-body">{props.description}</div>
        </div>
    );
}

function DMapItem(props){
    return (
        <div className={`card n-item ${props.direction}`} style={props.style}>
            <div className="card-header">
                {props.slg}
                <br/>
                <span className='color-gry'>{props.title}</span>
            </div>
            <div className="card-body">{props.description}</div>                     
        </div>
    );
}


function Roadmap() {
    return (
        <section className='roadmap my-1' id="roadmap">
            {/* <div className='back'></div> */}
            <div className='m-container'>
                <div className='container'>
                    <div className='header'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <h4 className='title'>ROADMAP</h4>
                                <p className='description'>Follow our journey to the moon</p>
                            </div>
                        </div>
                    </div>

                    <div className='row justify-content-around up my-5 px-4'>
                        <MapItem 
                            title="Q3 2021" 
                            description="The start of the development phase"
                            style={{width: '176px'}}
                            direction='after-line'
                        />
                        <MapItem 
                            title="Q1 2022" 
                            description="Listing of first projects"
                            style={{width: '140px'}}
                            direction='after-line'
                        />
                        <MapItem 
                            title="Q3 2022" 
                            description="Casper ecosystem Development II"
                            style={{width: '167px'}}
                            direction='after-line'
                        />
                    </div>
                    {/* <div className='row line' style={linePadding}></div> */}
                    <div className='row line px-4'></div>
                    <div className='row justify-content-between down px-4'>
                        <MapItem 
                            title="Q2 2021" 
                            description="The Idea"
                            style={{width: '121px'}}
                            direction='before-line'
                        />
                        <MapItem 
                            title="Q4 2021"
                            // slg="Casper goes LIVE!" 
                            description="Partnerships, finalization & Development"
                            // description="Q4"
                            // style={{width: '167px', height: '150px'}}
                            style={{width: '167px'}}
                            direction='before-line'
                        />
                        <MapItem 
                            title="Q2 2022" 
                            description="Casper ecosystem Development I"
                            style={{width: '167px'}}
                            direction='before-line'
                        />
                        <MapItem 
                            title="Q4 2022" 
                            description="Casper ecosystem Development III"
                            style={{width: '167px'}}
                            direction='before-line'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Roadmap;

import * as React from 'react';
import Member1 from '../assets/img/team/member1.png';
import Member2 from '../assets/img/team/member2.png';
import Member3 from '../assets/img/team/member3.png';
import Twitter from '../assets/img/team/twitter.png';
import LinkedIn from '../assets/img/team/linkedIn.png';
import { Nav } from 'react-bootstrap';

function Member (props) {
    return (
        <div className={`member ${props.className}`}>
            <div className='image-panel'>
                <img src={`${props.imgPath}`} alt="member" width="100%" className="image"/>
            </div>
            <div className='main-panel p-3'>
                <div className='row main-inner mb-3'>
                    <div className='col-md-6 profile'>
                        <div className='name'>{props.name}</div>
                        <div className='position'>{props.position}</div>
                    </div>
                    <div className='col-md-4 social'>
                        <a href='#'><img src={LinkedIn} alt="member" className="linkedIn"/></a>
                        <a href='#'><img src={Twitter} alt="member" className="twitter"/></a>
                    </div>
                </div>
            </div>
            <div className='footer-panel p-3'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
        </div>
    );
}

function Team() {
    const onSelectNav = (id) => {
        for(let i = 0; i < 3; i++) {
            document.getElementsByClassName('team-header')[0].getElementsByClassName('m-nav')[0].getElementsByTagName('a')[i].classList.remove('bright');
        }
        document.getElementsByClassName('team-header')[0].getElementsByClassName('m-nav')[0].getElementsByTagName('a')[id].classList.add('bright');
    };

  return (
    <section className='team mt-5' id="team">
        <div className='team-header pt-3'>
            <div className='container'>
                <h2 className='title'>MEET OUR TEAM & ADVISORS</h2>
                <div className='navbar'>
                    <Nav className="m-nav align-items-center">
                        <Nav.Link onClick={ ()=>{ onSelectNav(0); } } className='n-link bright' href="#">All members</Nav.Link>
                        <Nav.Link onClick={ ()=>{ onSelectNav(1); } } className='n-link' href="#">Team</Nav.Link>
                        {/* <Nav.Link onClick={ ()=>{ onSelectNav(2); } } className='n-link' href="#">Advisors</Nav.Link> */}
                    </Nav>
                </div>
            </div>
        </div>
        <div className='team-main py-2'>
            <div className='container'>
                <div className='row member-panel py-2'>
                    <Member className='col-sm-3' imgPath={Member1} name={"Theresa Webb"} position={"Founder"} />
                    <Member className='col-sm-3' imgPath={Member2} name={"Devon Lane"} position={"Founder"} />
                    <Member className='col-sm-3' imgPath={Member3} name={"Kathryn Murphy"} position={"Founder"} />
                    <Member className='col-sm-3' imgPath={Member1} name={"Theresa Webb"} position={"Founder"} />
                    <Member className='col-sm-3' imgPath={Member2} name={"Devon Lane"} position={"Founder"} />
                </div>
            </div>
        </div>
    </section>
  );
}

export default Team;

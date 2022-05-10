export default function ManCard(props) {
    return (
        <div className='card mt-5'>
            <div className='row'>
                <div className='col-md-4'>
                    <img src={props.avatar} className='avatar'/>
                </div>
                <div className='col-md-6'>
                    <h4 className='name'>{props.name}</h4>
                    <h5 className='email'>{props.email}</h5>
                </div>
                <div className='col-md-2'>
                    <i className="fab fa-twitter social-icon"></i>
                </div>
            </div>
            <div className='row'>
                <p className='text'>
                    {props.children}
                </p>
            </div>
        </div>
    );
}

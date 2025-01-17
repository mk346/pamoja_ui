import './Packages.css';
import Title from './Title';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const Packages = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => { 
        navigate('/contact');
    }
    return (
        <section className="pt-12 pb-12 lg:pt-[120px] lg:pb-[90px] overflow-hidden bg-gray-200" data-te-animation-init="" data-te-animation-start="onScroll" data-te-animation-on-scroll="repeat" data-te-animation-reset="true" data-te-animation="[slide-right_1s_ease-in-out]">
        <Title />
            <div className='p-card-container'>
                <div className='p-card'>
                    <div className='p-card-header-bronze'>
                        <h2>BRONZE</h2>
                    </div>
                    <div className='p-card-body'>
                        <h3>10 Mbps</h3>
                        <ul>
                            <li><FontAwesomeIcon icon={faCheck} className="checkmark" /> Fast web browsing</li>
                            <li><FontAwesomeIcon icon={faCheck} className="checkmark" /> SD Movie & music streaming</li>
                            <li><FontAwesomeIcon icon={faCheck} className="checkmark" /> Internet surfing, social media & email</li>
                            <li><FontAwesomeIcon icon={faTimes} className="crossmark" /> Video Conferencing</li>
                            <li><FontAwesomeIcon icon={faTimes} className="crossmark" /> Multiple device streaming</li>
                            <li><FontAwesomeIcon icon={faTimes} className="crossmark" /> Superfast video downloads</li>
                            <li><FontAwesomeIcon icon={faTimes} className="crossmark" /> CCTV devices Capability</li>
                        </ul>
                        <p className='price'>Ksh 2,000 / 30 days</p>
                    </div>
                    <div className="card-footer">
                        <button onClick={handleButtonClick} className="packge-btn">Get Connected</button>
                    </div>
                </div>
                <div className='p-card'>
                    <div className='p-card-header-silver'>
                        <h2>SILVER</h2>
                    </div>
                    <div className='p-card-body'>
                        <h3>15 Mbps</h3>
                        <ul>
                            <li><FontAwesomeIcon icon={faCheck} className="checkmark" /> Fast web browsing</li>
                            <li><FontAwesomeIcon icon={faCheck} className="checkmark" /> HD Movie & music streaming</li>
                            <li><FontAwesomeIcon icon={faCheck} className="checkmark" /> Internet surfing, social media & email</li>
                            <li><FontAwesomeIcon icon={faCheck} className="checkmark" /> Video Conferencing</li>
                            <li><FontAwesomeIcon icon={faTimes} className="crossmark" /> Multiple device streaming</li>
                            <li><FontAwesomeIcon icon={faTimes} className="crossmark" /> Superfast video downloads</li>
                            <li><FontAwesomeIcon icon={faTimes} className="crossmark" /> CCTV devices Capability</li>
                        </ul>
                        <p className='price'>Ksh 2,500 / 30 days</p>
                    </div>
                    <div className="card-footer">
                        <button onClick={handleButtonClick} className="packge-btn">Get Connected</button>
                    </div>
                </div>
                <div className='p-card'>
                    <div className='p-card-header-gold'>
                        <h2>GOLD</h2>
                    </div>
                    <div className='p-card-body'>
                        <h3>25 Mbps</h3>
                        <ul>
                            <li><FontAwesomeIcon icon={faCheck} className="checkmark" /> Fast web browsing</li>
                            <li><FontAwesomeIcon icon={faCheck} className="checkmark" /> SD Movie & music streaming</li>
                            <li><FontAwesomeIcon icon={faCheck} className="checkmark" /> Internet surfing, social media & email</li>
                            <li><FontAwesomeIcon icon={faCheck} className="checkmark" /> Video Conferencing</li>
                            <li><FontAwesomeIcon icon={faCheck} className="checkmark" /> Multiple device streaming</li>
                            <li><FontAwesomeIcon icon={faCheck} className="checkmark" /> Superfast video downloads</li>
                            <li><FontAwesomeIcon icon={faCheck} className="checkmark" /> CCTV devices Capability</li>
                        </ul>
                        <p className='price'>Ksh 2,800 / 30 days</p>
                    </div>
                    <div className="card-footer">
                        <button onClick={handleButtonClick} className="packge-btn">Get Connected</button>
                    </div>
                </div>
                <div className='p-card'>
                    <div className='p-card-header-diamond'>
                        <h2>DIAMOND</h2>
                    </div>
                    <div className='p-card-body'>
                        <h3>40 Mbps</h3>
                        <ul>
                            <li><FontAwesomeIcon icon={faCheck} className="checkmark" /> Fast web browsing</li>
                            <li><FontAwesomeIcon icon={faCheck} className="checkmark" /> SD Movie & music streaming</li>
                            <li><FontAwesomeIcon icon={faCheck} className="checkmark" /> Internet surfing, social media & email</li>
                            <li><FontAwesomeIcon icon={faCheck} className="checkmark" /> Video Conferencing</li>
                            <li><FontAwesomeIcon icon={faCheck} className="checkmark" /> Multiple device streaming</li>
                            <li><FontAwesomeIcon icon={faCheck} className="checkmark" /> Superfast video downloads</li>
                            <li><FontAwesomeIcon icon={faCheck} className="checkmark" /> CCTV devices Capability</li>
                        </ul>
                        <p className='price'>Ksh 3,500 / 30 days</p>
                    </div>
                    <div className="card-footer">
                        <button onClick={handleButtonClick} className="packge-btn">Get Connected</button>
                    </div>
                </div>
                <div className='p-card'>
                    <div className='p-card-header-platinum'>
                        <h2>PLATINUM</h2>
                    </div>
                    <div className='p-card-body'>
                        <h3>60 Mbps</h3>
                        <ul>
                            <li><FontAwesomeIcon icon={faCheck} className="checkmark" /> Fast web browsing</li>
                            <li><FontAwesomeIcon icon={faCheck} className="checkmark" /> SD Movie & music streaming</li>
                            <li><FontAwesomeIcon icon={faCheck} className="checkmark" /> Internet surfing, social media & email</li>
                            <li><FontAwesomeIcon icon={faCheck} className="checkmark" /> Video Conferencing</li>
                            <li><FontAwesomeIcon icon={faCheck} className="checkmark" /> Multiple device streaming</li>
                            <li><FontAwesomeIcon icon={faCheck} className="checkmark" /> Superfast video downloads</li>
                            <li><FontAwesomeIcon icon={faCheck} className="checkmark" /> CCTV devices Capability</li>
                        </ul>
                        <p className='price'>Ksh 4449 / 30 days</p>
                    </div>
                    <div className="card-footer">
                        <button onClick={handleButtonClick} className="packge-btn">Get Connected</button>
                    </div>
                </div>
                <div className='p-card'>
                    <div className='p-card-header-palladium'>
                        <h3>PALLADIUM</h3>
                    </div>
                    <div className='p-card-body'>
                        <h3>80 Mbps</h3>
                        <ul>
                            <li><FontAwesomeIcon icon={faCheck} className="checkmark" /> Fast web browsing</li>
                            <li><FontAwesomeIcon icon={faCheck} className="checkmark" /> SD Movie & music streaming</li>
                            <li><FontAwesomeIcon icon={faCheck} className="checkmark" /> Internet surfing, social media & email</li>
                            <li><FontAwesomeIcon icon={faCheck} className="checkmark" /> Video Conferencing</li>
                            <li><FontAwesomeIcon icon={faCheck} className="checkmark" /> Multiple device streaming</li>
                            <li><FontAwesomeIcon icon={faCheck} className="checkmark" /> Superfast video downloads</li>
                            <li><FontAwesomeIcon icon={faCheck} className="checkmark" /> CCTV devices Capability</li>
                        </ul>
                        <p className='price'>Ksh 7,500 / 30 days</p>
                    </div>
                    <div className="card-footer">
                        <button onClick={handleButtonClick} className="packge-btn">Get Connected</button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Packages;
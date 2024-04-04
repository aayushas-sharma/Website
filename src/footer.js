import React from 'react'

export const Footer = () => {
    const footerStyle = {
        marginTop: '50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };
    const imageStyle = {
        width: '10%',
    };
    const columnStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
    };
    const listStyle = {
        listStyleType: 'none',
        padding: 7,
    };

    const listItemStyle = {
        textDecoration: 'none',
        color: '#000',
    };
    const reachUs = {
        display: 'flex',
        gap: 5,
    }
    const logoStyle = {
        width: '30px',
    }
    const iconListStyle = {
        display:'flex',
        listStyleType: 'none',
        padding: 7,
        gap: 17,
    }
    return (
        <>
            <div className="Footer" style={footerStyle} >
                <img src="compLogo.jpg" alt="..." style={imageStyle} />
                <hr style={{ width: '87%', borderTop: '3px solid rgb(60, 179, 113)' }} />
                <div className="container">
                    <div className="row" style={columnStyle}>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5><strong>Quick Link</strong></h5>
                            <ul style={listStyle}>
                                <li className="nav-item" >
                                    <a className="" href="/" style={listItemStyle}>Home</a>
                                </li>
                                <li className="nav-item" >
                                    <a className="" href="/" style={listItemStyle}>About</a>
                                </li>
                                <li className="nav-item" >
                                    <a className="" href="/" style={listItemStyle}>Product</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/" style={listItemStyle}>Infrastructure</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/" style={listItemStyle}>Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5><strong>REACH US AT</strong></h5>
                            <p><i class="fa-solid fa-paper-plane"></i>Plot No. D-122, Prem Nagar, Jhotwara, Jaipur-302012</p>
                            <p><i class="fa-solid fa-phone-volume"></i>Call us at +91 9166789067</p>
                            <p><i class="fa-solid fa-envelope"></i>Email: Info@ekshuinsulators.com</p>
                            <div style={reachUs}>
                                <ul style={iconListStyle}>
                                    <li>
                                        <a href="https://www.instagram.com/ekshuinsulators/" target="_blank" style={listItemStyle}>
                                            <img src="insta.png" alt="" style={logoStyle} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://m.indiamart.com/ekshu-insulators/" target="_blank" style={listItemStyle}>
                                            <img src="indiamart.png" alt="error" style={logoStyle} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
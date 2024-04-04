export const Home = () => {
    const boxStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '20vh', // Set the height to full viewport height
        padding: '0 20px', // Adjust padding as needed
        textAlign: 'center',
    };
    const WhyUs = {
        padding: '20px 80px',
    }
    const Container = {
        display: 'flex',
    }
    const SubContnet = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: ' 20px 140px 20px',
    }

    return (
        <>
            <img src="battery.jpg" className="d-block w-100" alt="..." />
            <div style={boxStyle}>
                <h1>
                    Welcome to
                    <br />
                    Ekshu Insulators
                </h1>
                <p>
                    We welcome you to the website of Ekshu Insulators. As a <strong>leading manufacturer of lead acid batteries,</strong> we offer energy storage solutions for your home, vehicles, and solar applications. Our batteries are robust, reliable, and deliver power-packed performance. Explore our wide range of batteries and find the best for your needs.
                </p>
            </div>
            <div style={WhyUs}>
                <h3 style={{ textAlign: 'right' }}>
                    Why Us
                </h3>
                <hr style={{ width: '100%', borderTop: '3px solid rgb(60, 179, 113)' }} />
                <div style={Container}>
                    <div style={SubContnet}>
                        <img src="thumb.png" style={{ width: '50px' }} alt="..." />
                        <p>Our products are made using the finest quality raw materials, be it the chemicals for pasting, alloy grids or containers.</p>
                    </div>
                    <div style={SubContnet}>
                        <img src="verify.png" style={{ width: '100px' }} alt="..." />
                        <p>With an aim to make our environment safer and greener, we follow measures so as to reduce wastage and use our resources judiciously.</p>
                    </div>

                </div>
            </div>
        </>
    );
};

export const Infrastructure = () => {
    const isMobile = window.innerWidth <= 768;
    const InfrastructureContainer = {
        marginTop: '50px',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
            };
    const InfrastructureContent = {
        display: 'flex',
        flexDirection: isMobile?'column':'row',
        gap: '20px',
        padding: isMobile?'40px':'0px 200px 0px 200px',
    };
    const InfrastructureDetails={
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',

    }
    return (
        <>
            <img src="infrastructure2.jpg" class="d-block w-100" alt="..." />
            <div style={InfrastructureContainer}>
                <div style={InfrastructureContent}>
                    <img src="factory1.jpg" class={isMobile?"d-block w-45":"d-block w-25"} alt="..." />
                    <div style={InfrastructureDetails}>
                        <h3>COMPANY</h3>
                        <p>Ekshu Insulators is a noted battery manufacturer that delivers a wide range of powerful batteries to be used in inverters, cars and E-rickshaw. As a trusted battery brand, we fulfill the power requirements of the different sectors with our reliable batteries. We constantly keep ourselves updated with what is new in our industry, be it a technique or a machinery and accordingly adapt to put them to a good use for delivering quality products.</p>
                    </div>
                </div>
                <div style={InfrastructureContent}>
                <div style={InfrastructureDetails}>
                        <h3>WHY US</h3>
                        <p>We want to empower the society by delivering the best of our services and products. We deliver good quality energy storage solutions to be used as inverter, car, solar and E-rickshaw battery. We have a dedicated team behind every activity, right from the R&D to sales and manufacturing and management. Our manufacturing facilities are equipped with the latest technology and the best of talent to bring out the best of the products to the table.</p>
                    </div>
                    <img src="factory2.jpg" class={isMobile?"d-block w-45":"d-block w-25"} alt="..." />
                </div>
            </div>
        </>
    );
}
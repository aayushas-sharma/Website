import emailjs from 'emailjs-com';

export const ContactUs = () => {
    const Container = {
        display: 'flex',
        padding: '100px',
        gap:'450px',
        backgroundColor: 'rgb(60, 179, 113)',
        borderRadius: '160px',
    };
    const LeftContainer = {
        display: 'flex',
        flexDirection: 'column',
    };
    const RightContainer = {
        display: 'flex',
        flexDirection: 'column',
    };
    const RightContainerContent = {
        display: 'flex',
        flexDirection: 'column',
    };
    const Box={
        padding:' 100px 100px 0px 100px',
    }
    return (
        <div style={Box}>
            
            <div style={Container}>
            <div style={LeftContainer}>
                <h1>Contact Us</h1>
                <p>Please fill out this quick form and we will be in touch with you.</p>
                <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Email" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
                        <input type="tel" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Mobile" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Enter your message"></textarea>
                    </div>
                    <button type="button" class="btn btn-success">Submit</button>
                </div>
                <div style={RightContainer}>
                    <div style={RightContainerContent}>
                        <h3>Talk To Us</h3>
                        <p>Call us at +91 9166789067</p>
                    </div>
                    <div style={RightContainerContent}>
                        <h3>SOCIAL PRESENCE</h3>
                        <p>Find us at:</p>
                    </div>
                    <div style={RightContainerContent}>
                        <h5>OFFICE ADDRESS:</h5>
                        <p>Ekshu Insulators</p>
                        <p>Address Here :</p>
                        <p>D, 122, Prem Nagar, Jhotwara, Jaipur, Rajasthan 302012</p>
                        <p>(India)</p>
                    </div>

                </div>
            </div>
        </div>
    );
};
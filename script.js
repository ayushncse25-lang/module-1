<html>
<head>
    <meta charset="UTF-8">
    <title>Contact Us - FLY BUSINESS</title>
    <link rel="stylesheet" href="exp.css">
</head>
<body>    
    <nav>
        <h2 align="center">FLY BUSINESS</h2>
        <ul>
            <li><a href="exp.html">Home</a></li>
            <li><a href="Career.html">Careers</a></li>
        </ul>
    </nav>
    <hr>
    <header>
        <h1>Contact FLY BUSINESS</h1>
        <p>Get in touch with our experts to transform your business. We provide strategy, consulting, technology, interactive, and operations services. We help you in organizations improve performance and undergo digital transformation.</p>
    </header>
    <hr> 
    <section>
        <h2>Get in Touch</h2>
        <p><strong>Phone:</strong> 986650000</p>
        <p><strong>Email:</strong> contact@flybusiness.com</p>
        <p><strong>Office Address:</strong> Mumbai, Maharashtra, India</p>
        <p><strong>Working Hours:</strong> Monday - Friday, 9:00 AM to 6:00 PM</p>
    </section>
    <hr>

    <section>
        <h2>Our Location</h2>
        <div>
            <iframe 
                src="https://www.google.com/maps?q=Mumbai&output=embed"
                width="100%" 
                height="300" 
                style="border:0;"
                allowfullscreen=""
                loading="lazy">
            </iframe>
        </div>
    </section>
    
    <section>
        <h2>Send an Inquiry</h2>
        <form id="inquiryForm">

            <fieldset>
                <legend>Personal Information</legend>

                <label for="name">Full Name:</label><br>
                <input type="text" id="name" name="name" required><br><br>

                <label for="email">Email Address:</label><br>
                <input type="email" id="email" name="email" required><br><br>

                <label for="phone">Phone Number:</label><br>
                <input type="tel" id="phone" name="phone"><br><br>
            </fieldset>

            <br>

            <fieldset>
                <legend>Service Details</legend>

                <label for="service">Service of Interest:</label><br>
                <select id="service" name="service" required>
                    <option value="">-- Select Service --</option>
                    <option value="digital">Digital Transformation</option>
                    <option value="cloud">Cloud Services</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="consulting">Consulting & Strategy</option>
                </select><br><br>

                <label for="message">Your Message:</label><br>
                <textarea id="message" name="message" rows="5" required></textarea><br><br>
            </fieldset>

            <button type="submit">Submit Inquiry</button>
            <button type="reset">Reset</button>

</form>
    </section>
    <hr>
    <section>
        <h2>Frequently Asked Questions</h2>
        <details>
            <summary>What services does FLY BUSINESS provide?</summary>
            <p>Accenture provides services in digital, cloud, security, consulting, and operations.</p>
        </details>
        <details>
            <summary>How can I contact FLY BUSINESS?</summary>
            <p>You can reach us via phone, email, or by submitting the inquiry form above.</p>
        </details>
        <details>
            <summary>Where is FLY BUSINESS located in India?</summary>
            <p>Accenture has offices across India including Mumbai, Pune, Bangalore, and Hyderabad.</p>
        </details>
        <details>
            <summary>Does FLY BUSINESS offer career opportunities?</summary>
            <p>Yes, FLY BUSINESS offers a wide range of career opportunities for freshers and experienced professionals.</p>
        </details>
    </section>
    <hr>
    <script>
        document.getElementById("inquiryForm").addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Thank you for your inquiry! We will get back to you soon.");
            this.reset();
        });
    </script>
</body>

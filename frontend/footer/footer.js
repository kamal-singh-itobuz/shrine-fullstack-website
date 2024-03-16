const footerComponent = () => {
    return ` <div class="container pt-5">
        <div class="footer-logo-text row justify-content-between align-items-center ">
            <img class="col-5 col-md-4 col-lg-3" src="./footer/footerImages/shrine-white.svg" alt="Shrine Logo">
            <p class="col-12 col-md-6 col-lg-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt</p>
        </div>
        <hr>
        <div class="footer-links-form row row-gap-5">
            <div class="footer-links col-12 col-md-8 row">
                <div class="footer-quicklinks col-4 d-flex flex-column gap-2 ">
                    <p class="footer-field text-white">Quick Links</p>
                    <a class="text-decoration-none " href="#">Features</a>
                    <a class="text-decoration-none " href="#">Pricing</a>
                    <a class="text-decoration-none " href="#">Case Studies</a>
                    <a class="text-decoration-none " href="#">Reviews</a>
                    <a class="text-decoration-none " href="#">Updates</a>
                </div>
                <div class="footer-company col-4 d-flex flex-column gap-2">
                    <p class="footer-field text-white">Company</p>
                    <a class="text-decoration-none " href="#">About</a>
                    <a class="text-decoration-none " href="#">Contact us</a>
                    <a class="text-decoration-none " href="#">Careers</a>
                    <a class="text-decoration-none " href="#">Culture</a>
                    <a class="text-decoration-none " href="#">Blog</a>
                </div>
                <div class="footer-support col-4 d-flex flex-column gap-2">
                    <p class="footer-field text-white">Support</p>
                    <a class="text-decoration-none " href="#">Getting Started</a>
                    <a class="text-decoration-none " href="#">Help Center</a>
                    <a class="text-decoration-none " href="#">Server Status</a>
                    <a class="text-decoration-none " href="#">Report a Bug</a>
                    <a class="text-decoration-none " href="#">Chat Support</a>
                </div>
            </div>
            <div class="footer-form col-12 col-md-4">
                <p class="footer-field text-white mb-4">Subscribe to our newsletter</p>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam.</p>
                <div class="d-flex flex-column align-items-start gap-4 mt-4">
                    <input class="ps-4 py-2 py-sm-3 w-100 border-0 " type="email" placeholder="Enter Your Email">
                    <button class="w-50 p-2 p-sm-3 text-white border-0 ">Subscribe</button>
                </div>
            </div>
        </div>
        <hr>
        <div
            class="copyright-icons d-flex flex-column align-items-center flex-md-row justify-content-md-between py-3">
            <p>Copyright &copy; 2022 Shrine. All Rights Reserved.</p>
            <div class="d-flex justify-content-center gap-3">
                <img role="button" src="./footer/footerImages/instagram.svg" alt="Instagram">
                <img role="button" src="./footer/footerImages/twitter.svg" alt="Twitter">
                <img role="button" src="./footer/footerImages/whatsapp.svg" alt="Whatsapp">
                <img role="button" src="./footer/footerImages/youtube.svg" alt="Youtube">
                <img role="button" src="./footer/footerImages/facebook.svg" alt="Facebook">
            </div>
        </div>
    </div>`
}

export default footerComponent;
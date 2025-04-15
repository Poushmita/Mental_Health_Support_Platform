import logo from "../assets/logo_down.webp";

export default function Footer() {
  return (
    <footer className="container-fluid py-5 border-top" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="row px-5">
        {/* Left Side - Logo & Copyright */}
        <div className="col-md-3 d-flex flex-column align-items-start">
          <img src={logo} alt="Logo" width="50" height="40" className="mb-3" />
          <span className="text-muted fs-6">© 2024 Company, Inc</span>
        </div>

        {/* Center - Navigation Links with Increased Spacing */}
        <div className="col-md-6 d-flex justify-content-center">
          <div className="row w-100 text-center">
            {["Section", "Section", "Section"].map((section, index) => (
              <div key={index} className="col-4">
                <h6 className="fw-bold mb-3">{section}</h6>
                <ul className="list-unstyled">
                  <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Home</a></li>
                  <li className="mb-2"><a href="#" className="text-muted text-decoration-none">About Us</a></li>
                  <li className="mb-2"><a href="#" className="text-muted text-decoration-none">Contact</a></li>
                  <li className="mb-2"><a href="#" className="text-muted text-decoration-none">FAQs</a></li>
                  <li><a href="#" className="text-muted text-decoration-none">More</a></li>
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Social Media Icons with Spacing */}
        <div className="col-md-3 d-flex align-items-center justify-content-end">
          <a href="#" className="me-4 text-muted"><i className="bi bi-twitter fs-3"></i></a>
          <a href="#" className="me-4 text-muted"><i className="bi bi-facebook fs-3"></i></a>
          <a href="#" className="me-4 text-muted"><i className="bi bi-instagram fs-3"></i></a>
          <a href="#" className="text-muted"><i className="bi bi-linkedin fs-3"></i></a>
        </div>
      </div>
    </footer>
  );
}

import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faB, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer text-center">
      <div className="container">
        <div className="row">
          {/* <!-- Footer Location--> */}
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Location</h4>
            <p className="lead mb-0">
              2215 John Daniel Drive
              <br />
              Clark, MO 65243
            </p>
          </div>
          {/* <!-- Footer Social Icons--> */}
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Around the Web</h4>
            <Link className="btn btn-outline-light btn-social mx-1" href="#!">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link className="btn btn-outline-light btn-social mx-1" href="#!">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link className="btn btn-outline-light btn-social mx-1" href="#!">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
            <Link className="btn btn-outline-light btn-social mx-1" href="#!">
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
          </div>
          {/* <!-- Footer About Text--> */}
          <div className="col-lg-4">
            <h4 className="text-uppercase mb-4">About Freelancer</h4>
            <p className="lead mb-0">
              Freelance is a free to use, MIT licensed Bootstrap theme created
              by
              <Link href="http://startbootstrap.com">Start Bootstrap</Link>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

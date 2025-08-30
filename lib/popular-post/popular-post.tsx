import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function PopularPost({
  link,
  icon,
  image,
  title,
  desc,
}: {
  link: string;
  icon: IconProp;
  image: string | StaticImport;
  title: string;
  desc: string;
}) {
  return (
    <div className="col-lg-4 col-sm-6 mb-4">
      <div className="portfolio-item">
        <Link className="portfolio-link" data-bs-toggle="modal" href={link}>
          <div className="portfolio-hover">
            <div className="portfolio-hover-content">
              <FontAwesomeIcon icon={icon} className="fa-3x" />
            </div>
          </div>
          <Image src={image} className="img-fluid" alt="..." />
        </Link>
        <div className="portfolio-caption">
          <div className="portfolio-caption-heading">{title}</div>
          <div className="portfolio-caption-subheading text-muted">{desc}</div>
        </div>
      </div>
    </div>
  );
}

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import PopularPost from "../popular-post/popular-post";

export default function Popular({
  title,
  desc,
  content,
}: {
  title: string;
  desc: string;
  content?: {
    link: string;
    icon: IconProp;
    image: string | StaticImport;
    title: string;
    desc: string;
  }[];
}) {
  function RenderPopularContent() {
    return (content || []).length > 0 ? (
      (content || []).map((item, index) => (
        <PopularPost
          key={index}
          title={item.title}
          icon={item.icon}
          image={item.image}
          link={item.link}
          desc={item.desc}
        />
      ))
    ) : (
      <div className="col text-center text-muted">No post yet</div>
    );
  }
  return (
    <div>
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">{title}</h2>
            <h3 className="section-subheading text-muted">{desc}</h3>
          </div>
          <div className="row">
            <RenderPopularContent />
          </div>
        </div>
      </section>
    </div>
  );
}

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Categories({
  title,
  desc,
  notFound,
  content,
}: {
  title: string;
  desc: string;
  notFound: string;
  content?: {
    mainIcon: IconDefinition;
    bgIcon: IconDefinition;
    title: string;
    desc: string;
  }[];
}) {
  function RenderAchievements() {
    return (
      <div className="row text-center">
        {(content || []).length > 0 ? (
          (content || []).map((item, index) => (
            <div className="col-md-4" key={index}>
              <span className="fa-stack fa-4x">
                <FontAwesomeIcon
                  icon={item.bgIcon}
                  className="fa-stack-2x text-primary"
                />
                <FontAwesomeIcon
                  icon={item.mainIcon}
                  className="fa-stack-1x fa-inverse"
                />
              </span>
              <h4 className="my-3">{item.title}</h4>
              <p className="text-muted">{item.desc}</p>
            </div>
          ))
        ) : (
          <div className="col text-center text-muted">{notFound}</div>
        )}
      </div>
    );
  }
  return (
    <div>
      <section className="page-section" id="categories">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">{title}</h2>
            <h3 className="section-subheading text-muted">{desc}</h3>
          </div>
          <RenderAchievements />
        </div>
      </section>
    </div>
  );
}

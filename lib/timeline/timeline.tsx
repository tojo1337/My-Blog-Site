import { TimelineModel } from "@/model/timeline-model";
import Image from "next/image";

export default function Timeline({
  timelineArr,
}: {
  timelineArr?: TimelineModel[];
}) {
  function RenderTimeLine() {
    return (timelineArr || []).length > 0 ? (
      <ul className="timeline">
        {timelineArr?.map((item, index) =>
          index % 2 == 0 ? (
            <li key={index}>
              <div className="timeline-image">
                <Image
                  className="rounded-circle img-fluid"
                  src={item.image.src}
                  alt={item.image.alt}
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>{item.periode}</h4>
                  <h4 className="subheading">{item.title}</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">{item.body}</p>
                </div>
              </div>
            </li>
          ) : (
            <li className="timeline-inverted" key={index}>
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src={item.image.src}
                  alt={item.image.alt}
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>{item.periode}</h4>
                  <h4 className="subheading">{item.title}</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">{item.body}</p>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    ) : (
      <div className="text-center text-muted">
        My journey hasn't started yet
      </div>
    );
  }

  return (
    <div>
      <section className="page-section" id="about">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Journey</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consectetur.
            </h3>
          </div>
          <RenderTimeLine />
        </div>
      </section>
    </div>
  );
}

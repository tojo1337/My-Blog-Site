import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AchievementTemplate({
  coverIcon,
  designIcon,
  title,
  body,
}: {
  coverIcon: IconProp;
  designIcon: IconProp;
  title: string;
  body: string;
}) {
  return (
    <div className="col-md-4">
      <span className="fa-stack fa-4x">
        <FontAwesomeIcon
          icon={coverIcon}
          className="fa-stack-2x text-primary"
        />
        <FontAwesomeIcon icon={designIcon} className="fa-stack-1x fa-inverse" />
      </span>
      <h4 className="my-3">{title}</h4>
      <p className="text-muted">{body}</p>
    </div>
  );
}

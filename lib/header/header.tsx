import { ReactNode } from "react";

export default function Header({
  title = "Clean Blog",
  subtitle = "A Blog Theme by Start Bootstrap",
  bg,
  children,
}: {
  title?: string;
  subtitle?: string;
  bg: any;
  children?: ReactNode;
}) {
  return (
    <header
      className="masthead img-mask"
      style={{
        backgroundImage: `url(${bg.src})`,
        width: "100%",
        height: "100%",
      }}
    >
      <div className="container position-relative px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <div className="site-heading">
              <h1>{title}</h1>
              <span className="subheading">{subtitle}</span>
              {children}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

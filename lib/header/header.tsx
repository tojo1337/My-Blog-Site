export default function Header({ bg }: { bg: any }) {
  return (
    <header
      className="masthead"
      //   style="background-image: url('assets/img/home-bg.jpg')"
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
              <h1>Clean Blog</h1>
              <span className="subheading">
                A Blog Theme by Start Bootstrap
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

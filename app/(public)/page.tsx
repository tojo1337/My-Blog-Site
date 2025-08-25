import Footer from "@/lib/footer/footer";
import Header from "@/lib/header/header";
import Nav from "@/lib/nav/nav";
import PostPreview from "@/lib/post-preview/post-preview";
import { PostModel } from "@/model/post-model";
import bg from "../../public/placable/home-bg.webp";

const postsList: PostModel[] = [
  {
    title: "Man must explore, and this is exploration at its greatest",
    subtitle: "Problems look mighty small from 150 miles up",
    meta: {
      user: "Start Bootstrap",
      date: "September 24, 2024",
    },
  },

  {
    title:
      "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
    subtitle: "",
    meta: {
      user: "Start Bootstrap",
      date: "September 26, 2023",
    },
  },

  {
    title: "Science has not yet mastered prophecy",
    subtitle:
      "We predict too much for the next year and yet far too little for the next ten.",
    meta: {
      user: "Start Bootstrap",
      date: "September 28, 2022",
    },
  },

  {
    title: "Failure is not an option",
    subtitle:
      "Many say exploration is part of our destiny, but it's actually our duty to future generations.",
    meta: {
      user: "Start Bootstrap",
      date: "September 30, 2022",
    },
  },

  {
    title:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    subtitle:
      "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...",
    meta: {
      user: "Start Bootstrap",
      date: "September 22, 2020",
    },
  },
];

export default function page() {
  return (
    <div>
      <Nav></Nav>
      <Header bg={bg}></Header>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <PostPreview data={postsList} />
            <div className="d-flex justify-content-end mb-4">
              <a className="btn btn-primary text-uppercase" href="#!">
                Older Posts →
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

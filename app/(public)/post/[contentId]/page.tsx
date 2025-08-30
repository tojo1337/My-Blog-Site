import bg from "../../../../public/placable/post-bg.webp";
import Footer from "@/lib/footer/footer";
import Header from "@/lib/header/header";
import Posts from "@/lib/post/Posts";
import Nav from "@/lib/nav/nav";

export default async function page({
  params,
}: {
  params: Promise<{ contentId: string }>;
}) {
  const { contentId } = await params;

  return (
    <div>
      <Nav></Nav>
      <Header bg={bg}></Header>

      {/* Post Content */}
      <article className="mb-4">
        <Posts postId={contentId}></Posts>
      </article>

      <Footer></Footer>
    </div>
  );
}

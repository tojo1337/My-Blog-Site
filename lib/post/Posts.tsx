"use client";

import { useEffect, useState } from "react";

export default function Posts({ postId }: { postId: string }) {
  let [richText, setRichText] = useState<any>();

  useEffect(() => {
    fetchPost(postId).catch((err) => console.error(err));
  }, []);

  async function fetchPost(postId: string) {
    let url = ``;
    try {
      let data = await fetch(url);
      if (data.ok) {
        let respData = data.json();
        // setRichText(respData.data);
      } else {
        throw new Error(`Network Response : ${data.statusText}`);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            {/* This should render the ruch text data */}
            <div dangerouslySetInnerHTML={richText}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

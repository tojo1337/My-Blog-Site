"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { PostModel } from "@/model/post-model";
import bg from "../../public/placable/post-bg.webp";
import { MouseEvent } from "react";
import { redirect, RedirectType } from "next/navigation";

function PostRender({ title, subtitle, meta }: PostModel) {
  function handleClick(e: MouseEvent<HTMLDivElement>) {
    redirect("/post/1", RedirectType.push);
  }

  return (
    <div className="col-md-3 mb-4" onClick={handleClick}>
      <div
        className="card post-card"
        style={{ width: "18rem", minHeight: "10rem" }}
      >
        <div className="post-prev-img-border">
          <Image
            className="card-img-top post-prev-img"
            alt="Card image cap"
            src={bg}
          ></Image>
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{subtitle}</p>

          {/* Add it after the design is fixed */}
          {/* <p className="post-meta">
            <span className="mb-0">
              Created At : {meta.date} <br /> By {meta.user}
            </span>
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default function PostPreview({ data }: { data: PostModel[] }) {
  const [previewList, setPreviewList] = useState<PostModel[]>([]);

  useEffect(() => {
    setPreviewList(data);
  }, []);

  return (
    <div className="container">
      <div className="row">
        {...previewList.map((item: PostModel, index: number) => (
          <PostRender
            key={index}
            meta={item.meta}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </div>
    </div>
  );
}

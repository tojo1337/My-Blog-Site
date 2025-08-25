"use client";

import { PostModel } from "@/model/post-model";
import Link from "next/link";
import { useEffect, useState } from "react";

function PostRender({ title, subtitle, meta }: PostModel) {
  return (
    <div>
      <div className="post-preview">
        <a href="post.html">
          <h2 className="post-title">{title}</h2>
          <h3 className="post-subtitle">{subtitle}</h3>
        </a>
        <p className="post-meta">
          Posted by
          <Link href="#!">{meta.user}</Link>
          on {meta.date}
        </p>
      </div>
      <hr className="my-4" />
    </div>
  );
}

export default function PostPreview({ data }: { data: PostModel[] }) {
  const [previewList, setPreviewList] = useState<PostModel[]>([]);

  useEffect(() => {
    setPreviewList(data);
  }, []);

  return (
    <div>
      {...previewList.map((item: PostModel, index: number) => (
        <PostRender
          key={index}
          meta={item.meta}
          title={item.title}
          subtitle={item.subtitle}
        />
      ))}
    </div>
  );
}

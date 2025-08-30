"use client";
import { redirect, RedirectType } from "next/navigation";
import { MouseEvent } from "react";

export default function ExploreMore() {
  function exploreMore(e: MouseEvent<HTMLButtonElement>) {
    redirect("/posts", RedirectType.push);
  }

  return (
    <button
      type="button"
      className="btn btn-outline-warning header-btn"
      onClick={exploreMore}
    >
      Explore More
    </button>
  );
}

import React from "react";
import cssobj from "@/css/cmtitem.css"

export default function CMTItem(props) {
  return (
    <div className={cssobj.cmtbox}>
      <h1 className={cssobj.title}>评论人：{props.user}</h1>
      <p className={cssobj.content}>评论内容：{props.content}</p>
    </div>
  );
}

import React from "react";


import cssobj from '@/css/cmtlist.css'

import CMTItem from "@/components/CMTItem";

export default class CMTList extends React.Component {
  constructor() {
    super();
    this.state = {
      CommentList: [
        { id: 1, user: "张三", content: "沙发" },
        { id: 2, user: "李四", content: "沙发" },
        { id: 3, user: "王五", content: "沙发" },
        { id: 4, user: "赵柳", content: "沙发" },
        { id: 5, user: "刘琦", content: "沙发" },
        { id: 6, user: "哦吧", content: "沙发" }
      ]
    };
  }
  show(props){
    console.log(props)
  }
  render() {
    return (
      <div>
        <button onClick={()=>this.show(666)}>按钮</button>
        <h1 className={cssobj.title}>这是评论列表组件</h1>
        {this.state.CommentList.map(item => (
          <CMTItem key={item.id} {...item} />
        ))}
      </div>
    );
  }
}

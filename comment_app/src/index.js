import { faker } from "@faker-js/faker";
import React from "react";
import ReactDOM from "react-dom";
// import { faker } from "@faker-js/faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          <p>Are you sure you want to do this ?</p>
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sam"
          comment="Wow! Very good!"
          timeAgo="Today at 4:45PM"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          comment="Nice post!"
          timeAgo="Today at 2:00AM"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jane"
          comment="Thank You for this post!"
          timeAgo="Yesterday at 5:00PM"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);

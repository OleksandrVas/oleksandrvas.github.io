import React from "react";
import BoardItem from "./BoardItem";

interface Props {
  user: any;
  setProgress: any;
  status: string;
  inProgress: any;
  setProgressInItem: any;
  isProgress: boolean;
}

const BoardItemCreator: React.FC<Props> = ({
  isProgress,
  user,
  setProgressInItem,
  inProgress,
  status,
  setProgress,
}) => {
  return (
    <div className="boardItemCreator">
      <h3 className="boardItemStatus">{status}</h3>
      {inProgress.length !== 0
        ? inProgress.map((item: any) => (
            <BoardItem
              userAvatar={user.userAvatar}
              users={user.users}
              setProgress={setProgressInItem(
                isProgress,
                setProgress,
                item.id,
                item.title
              )}
              key={item.id}
              text={item.title}
              id={item.id}
            />
          ))
        : "it's empty "}
    </div>
  );
};

export default BoardItemCreator;

import { FC } from "react";
import { ITree } from "../../entities/Tree/ITree";
import TreeItem from "./TreeItem/TreeItem";

import "./style.css";

interface IProps {
  data: ITree[];
  onDelete: (key: string) => void;
}
const Tree: FC<IProps> = ({ data, onDelete }) => {
  return (
    <ul style={{ padding: "32px" }}>
      {data.map((node) => (
        <div className="item-wrapper" key={node.key}>
          <TreeItem node={node} onDelete={onDelete} />
        </div>
      ))}
    </ul>
  );
};

export default Tree;

import { FC } from "react";
import { ITree } from "../../entities/Tree/ITree";
import TreeItem from "./TreeItem/TreeItem";

import "./style.css";

interface IProps {
  data: ITree[];
  onDelete: (key: string) => void;
  onEdit: (key:string, value: string) => void;
}
const Tree: FC<IProps> = ({ data, onDelete, onEdit }) => {
  return (
    <ul className="tree-list">
      {data.map((node) => (
        <div className="item-wrapper" key={node.key}>
          <TreeItem node={node} onDelete={onDelete} onEdit={onEdit} />
        </div>
      ))}
    </ul>
  );
};

export default Tree;

import { FC, useState } from "react";
import Tree from "../Tree";
import { ITree } from "../../../entities/Tree/ITree";
import { TreeItemLabel } from "../TreeItemLabel/TreeItemLabel";

interface IProps {
  node: ITree;
  onDelete: (key: string) => void;
}

const styles = { paddingLeft: "10px", borderLeft: "1px solid black" };

const TreeItem: FC<IProps> = ({ node, onDelete }) => {
  const [children, setChildren] = useState(node.children);
  const [isOpen, setIsOpen] = useState(false);

  const handleDeleteChildren = (key: string) => {
    setChildren((prevChildren) =>
      prevChildren.filter((item) => item.key !== key)
    );
  };

  const handleAddChildren = () => {
    setChildren((prevChildren) => [
      ...prevChildren,
      {
        key: `${prevChildren.length}-${new Date().getTime()}`,
        label: "Added children",
        children: [],
      },
    ]);
  };

  const toggleOpen = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  const handleDeleteRoot = () => {
    onDelete(node.key);
  };

  return (
    <>
      <TreeItemLabel
        isOpen={isOpen}
        onLabelClick={toggleOpen}
        onAddChildren={handleAddChildren}
        onDelete={handleDeleteRoot}
        node={node}
      />

      <ul style={styles}>
        {isOpen && <Tree data={children} onDelete={handleDeleteChildren} />}
      </ul>
    </>
  );
};

export default TreeItem;

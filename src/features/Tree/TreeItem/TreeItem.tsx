import {FC, useEffect, useState} from "react";
import Tree from "../Tree";
import { ITree } from "../../../entities/Tree/ITree";
import { TreeItemLabel } from "../TreeItemLabel/TreeItemLabel";
import './style.css'

interface IProps {
  node: ITree;
  onDelete: (key: string) => void;
  onEdit: (key: string, value: string) => void;
}


const TreeItem: FC<IProps> = ({ node, onDelete, onEdit }) => {

  const [children, setChildren] = useState([]);
  const [isEditable, setIsEditable] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setChildren(node.children)
  }, [node])

  const handleDeleteChildren = (key: string) => {
    setChildren((prevChildren) =>
      prevChildren.filter((item) => item.key !== key)
    );
  };

  const handleEditItem = (key:string, value: string) => {
    const newTreeData = [...children]
    const findedIndex = newTreeData.findIndex((item) => item.key == key)
    newTreeData[findedIndex].label = value
    setChildren(newTreeData)
  }

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

  const toggleEdit = () => {
    setIsEditable((prevEditable) => !prevEditable);
  }

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
        isEditable={isEditable}
        onArrowClick={toggleOpen}
        onLabelClick={toggleEdit}
        onAddChildren={handleAddChildren}
        onDelete={handleDeleteRoot}
        onEdit={onEdit}
        node={node}
      />

      <ul className="item-list">
        {isOpen && <Tree data={children} onDelete={handleDeleteChildren} onEdit={handleEditItem} />}
      </ul>
    </>
  );
};

export default TreeItem;

import { FC } from "react";
import { AppButton } from "../../../shared/ui/AppButton/AppButton";
import { ITree } from "../../../entities/Tree/ITree";
import './style.css'

interface ITreeItemLabelProps {
  isOpen: boolean;
  onLabelClick: () => void;
  onDelete: () => void;
  onAddChildren: () => void;
  node: ITree;
}
export const TreeItemLabel: FC<ITreeItemLabelProps> = ({
  isOpen,
  onLabelClick,
  onDelete,
  onAddChildren,
  node,
}) => {
  return (
    <div className="label">
      <div className={`${isOpen ? 'label__arrow_open' : 'label__arrow'}`}>
        &#10095;
      </div>
      <span onClick={onLabelClick}>{node.label}</span>
      <AppButton text="&#215;" onClick={onDelete} />
      <AppButton text="add children" onClick={onAddChildren} />
    </div>
  );
};

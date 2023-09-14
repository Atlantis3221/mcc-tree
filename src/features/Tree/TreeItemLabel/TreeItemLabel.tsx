import {FC, useState} from "react";
import { AppButton } from "../../../shared/ui/AppButton/AppButton";
import { ITree } from "../../../entities/Tree/ITree";
import './style.css'

interface ITreeItemLabelProps {
  isOpen: boolean;
  isEditable: boolean;
  onArrowClick: () => void;
  onLabelClick: () => void;
  onEdit: (key,value) => void;
  onDelete: () => void;
  onAddChildren: () => void;
  node: ITree;
}
export const TreeItemLabel: FC<ITreeItemLabelProps> = ({
  isOpen,
  isEditable,
  onArrowClick,
  onLabelClick,
  onDelete,
  onEdit,
  onAddChildren,
  node,
}) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="label">
      <div className={`${isOpen ? 'label__arrow_open' : 'label__arrow'}`} onClick={onArrowClick}>
        &#10095;
      </div>
      <span>{isEditable ? <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} /> : node.label}</span>
      <AppButton text="&#215;" onClick={onDelete} />
      <AppButton text="&#9998;" onClick={() => {onLabelClick();onEdit(node.key, inputValue);console.log(inputValue)}} />
      <AppButton text="add children" onClick={onAddChildren} />
    </div>
  );
};

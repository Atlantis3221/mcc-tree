import { FC } from "react";
import { AppButton } from "../../../shared/ui/AppButton/AppButton";
import { ITree } from "../../../entities/Tree/ITree";

const styles = { marginBottom: "10px" };
interface ITreeItemLabelProps {
    onLabelClick: () => void;
    onDelete: () => void;
    node: ITree;
}
export const TreeItemLabel: FC<ITreeItemLabelProps> = ({
    onLabelClick, onDelete, node,
}) => {
    return (
        <div style={styles}>
            <span onClick={onLabelClick}>{node.label}</span>
            <AppButton text="delete" onClick={onDelete} />
        </div>
    );
};

import { useState } from "react";
import Tree from "../../../widgets/Tree/Tree";
import { AppButton } from "../AppButton/AppButton";

export default function TreeItem({ node, deleteItem }: any) {
    const mutableItem = {...node};
    const [children, setChildren] = useState(mutableItem.children)
    const [showChildren, setShowChildren] = useState(false);


    const deleteChildren = (key: string) => {
        setChildren(children.filter((item) => item.key !== key))
    }

    const handleClick = () => {
        setShowChildren(!showChildren);
    };

    return (
        <>
            <div onClick={node.children && handleClick} style={{ marginBottom: "10px" }}>
                <span>{mutableItem.label}</span>
                <AppButton text="delete" onClick={() => deleteItem(node.key, node)} />
            </div>
            <ul style={{ paddingLeft: "10px", borderLeft: "1px solid black" }}>
                {showChildren && <Tree mutableTree={children} deleteItem={deleteChildren} />}
            </ul>
        </>
    );
}
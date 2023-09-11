import TreeItem from "../../shared/ui/TreeItem/TreeItem";

export default function Tree({ treeData }) {
    return (
        <ul>
            {treeData.map((node:any) => (
                <TreeItem node={node} key={node.key} />
            ))}
        </ul>
    );
}
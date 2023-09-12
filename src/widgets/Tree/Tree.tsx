import { useEffect, useState } from "react";
import { AppButton } from "../../shared/ui/AppButton/AppButton";
import TreeItem from "../../shared/ui/TreeItem/TreeItem";
import './style.css'

export default function Tree({ mutableTree, deleteItem }: any) {

    return (
        <>
            <ul style={{ padding: '32px' }}>
                {mutableTree.map((node: any) => (
                    <div className="item-wrapper">
                    <TreeItem node={node} key={node.key} deleteItem={deleteItem} />
                    </div>
                ))}
            </ul>
        </>
    );
}
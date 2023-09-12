import Tree from "../features/Tree/Tree";
import { AppButton } from "../shared/ui/AppButton/AppButton";
import { useState } from "react";
import { TREE_DEFAULT_DATA } from "../entities/Tree/TREE_DEFAULT_DATA";

const TreeRoot = () => {
  const [treeData, setTreeData] = useState(TREE_DEFAULT_DATA);

  //по ключу удаляет родительский элемент
  const deleteItem = (key: string) => {
    setTreeData((prevTree) => prevTree.filter((item) => item.key !== key));
  };

  //возвращает дерево к первоначальному виду
  const resetTree = () => {
    setTreeData(treeData);
  };

  //добавляет объект на верхний уровень дерева, в перспективе добавил бы форму для редактирования глубины дочерних элементов и уникальный ключ
  const addItem = () => {
    setTreeData((prevTree) => [
      ...prevTree,
      {
        key: `${prevTree.length}-${new Date().getTime()}`,
        label: "2nd Downloads",
        children: [],
      },
    ]);
  };

  return (
    <>
      <div>
        <AppButton onClick={resetTree} text="reset" />
        <AppButton onClick={addItem} text="add item" />
      </div>
      
      <Tree data={treeData} onDelete={deleteItem} />
    </>
  );
};

export default TreeRoot;

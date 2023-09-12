import Header from '../../widgets/Header/Header'
import Footer from '../../widgets/Footer/Footer'
import Tree from '../../widgets/Tree/Tree'
import { AppButton } from '../ui/AppButton/AppButton'
import { useState } from 'react'

export interface ITree {
  key: string
  label: string
  children?: ITree[]
}

export default function Layout() {

  const treeData: ITree[] = [
    {
      key: "0",
      label: "Documents",
      children: [
        {
          key: "1",
          label: "Document 0-0",
          children: [
            {
              key: "2",
              label: "Document-0-0-1.doc",
            },
            {
              key: "3",
              label: "Document-0-0-2.doc",
            },
          ],
        },
      ],
    },
    {
      key: "4",
      label: "Desktop",
      children: [
        {
          key: "5",
          label: "document-1.doc",
        },
        {
          key: "6",
          label: "document-2.doc",
        },
      ],
    },
    {
      key: "7",
      label: "Downloads",
      children: [],
    },
  ];

  const [mutableTree, setMutableTree] = useState([...treeData])

  //по ключу удаляет родительский элемент
  function deleteItem(key: string) {
    setMutableTree(mutableTree.filter((item) => item.key !== key))
  }

  //возвращает дерево к первоначальному виду
  const resetTree = () => {
    setMutableTree(treeData)
  }

  //добавляет объект на верхний уровень дерева, в перспективе добавил бы форму для редактирования глубины дочерних элементов и уникальный ключ
  const addItem = () => {
    setMutableTree([...mutableTree, {
      key: "8",
      label: "2nd Downloads",
      children: [],
    }])
  }

  return (
    <>
      <Header />
      <div>
        <AppButton onClick={resetTree} text='reset' />
        <AppButton onClick={addItem} text='add item' />
      </div>
      <Tree mutableTree={mutableTree} deleteItem={deleteItem} />
      <Footer />
    </>
  )
}
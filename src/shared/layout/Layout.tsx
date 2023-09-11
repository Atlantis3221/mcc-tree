import Header from '../../widgets/Header/Header'
import Footer from '../../widgets/Footer/Footer'
import Tree from '../../widgets/Tree/Tree'

export default function Layout() {

    const treeData = [
        {
          key: "0",
          label: "Documents",
          children: [
            {
              key: "0-0",
              label: "Document 1-1",
              children: [
                {
                  key: "0-1-1",
                  label: "Document-0-1.doc",
                },
                {
                  key: "0-1-2",
                  label: "Document-0-2.doc",
                },
              ],
            },
          ],
        },
        {
          key: "1",
          label: "Desktop",
          children: [
            {
              key: "1-0",
              label: "document1.doc",
            },
            {
              key: "0-0",
              label: "documennt-2.doc",
            },
          ],
        },
        {
          key: "2",
          label: "Downloads",
          children: [],
        },
      ];

    return (
        <>
            <Header />
            <Tree treeData={treeData} />
            <Footer />
        </>
    )
}
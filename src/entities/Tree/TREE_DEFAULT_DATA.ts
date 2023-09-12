import { ITree } from "./ITree";

export const TREE_DEFAULT_DATA: ITree[] = [
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
            label: "Document-0-0-1",
            children: [],
          },
          {
            key: "3",
            label: "Document-0-0-2",
            children: [],
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
        label: "document-1",
        children: [],
      },
      {
        key: "6",
        label: "document-2",
        children: [],
      },
    ],
  },
  {
    key: "7",
    label: "Downloads",
    children: [],
  },
];

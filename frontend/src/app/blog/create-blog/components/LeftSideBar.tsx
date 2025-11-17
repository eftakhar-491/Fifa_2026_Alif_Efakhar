"use client";
import { X } from "lucide-react";
import React from "react";
import { EnComponent } from "../../../../helpers/EnComponent";

type LeftSideBarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  setActiveTab: (tab: string) => void;
  activeTab: string;
  navItems: string[];
  sectionStructure: any[];
  setSectionStructure: React.Dispatch<React.SetStateAction<any[]>>;
  newGridLayout: any;
};

const LeftSideBar: React.FC<LeftSideBarProps> = ({
  sidebarOpen,
  setSidebarOpen,
  setActiveTab,
  activeTab,
  navItems,
}) => {
  const root = new EnComponent("Root", "div");
  root.print();
  const com1 = root.createComponent("Header", {
    parentId: root.$$en,
    element: "header",
    props: { className: "header-class" },
  });
  const com2 = root.createComponent("Header", {
    parentId: root.$$en,
    element: "header",
    props: { className: "header-class" },
  });
  root.createComponent("Header", {
    parentId: com1.$$en,
    element: "header",
    props: { className: "header-class" },
  });

  return (
    <>
      <div
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } xl:translate-x-0 fixed xl:static z-50 xl:z-0 w-60 h-full transition-transform duration-300 bg-neutral-950 border-r border-neutral-800`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Menu</h2>
            <button
              onClick={() => setSidebarOpen(false)}
              className="xl:hidden p-2 rounded-md hover:bg-neutral-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveTab(item);
                  setSidebarOpen(false);
                }}
                className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                  activeTab === item
                    ? "bg-neutral-800 text-white"
                    : "text-neutral-400 hover:bg-neutral-900 hover:text-neutral-200"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default LeftSideBar;

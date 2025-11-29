"use client";
import { X } from "lucide-react";
import React, { useState } from "react";
import { EnComponent } from "../../../../helpers/EnComponent";
import {
  Eye,
  EyeOff,
  Plus,
  Trash2,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
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
  root.addStyle(com2.$$en, "background-color: red;");
  root.createComponent("Header", {
    parentId: com1.$$en,
    element: "header",
    props: { className: "header-class" },
  });

  console.log("=== Regular print ===");
  root.print();

  return (
    <>
      <div
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } overflow-y-auto xl:translate-x-0 fixed xl:static z-50 xl:z-0 w-80 h-full transition-transform duration-300 bg-neutral-950 border-r border-neutral-800`}
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
        </div>

        <RootComponent>
          <ChildComponent title="Header">
            <ChildComponent title="Logo Section">
              <p className="text-sm text-gray-600 py-2">Logo and branding</p>
            </ChildComponent>

            <ChildComponent title="Navigation">
              <ChildComponent title="Main Menu" />
              <ChildComponent title="User Menu" />
            </ChildComponent>
          </ChildComponent>

          <ChildComponent title="Main Content">
            <ChildComponent title="Hero Section">
              <p className="text-sm text-gray-600 py-2">Hero content here</p>
            </ChildComponent>

            <ChildComponent title="Features">
              <ChildComponent title="Feature 1" />
              <ChildComponent title="Feature 2" />
              <ChildComponent title="Feature 3" />
            </ChildComponent>
          </ChildComponent>

          <ChildComponent title="Footer" />
          {/* <ChildComponent>
            <ChildComponent>hello</ChildComponent>
            <ChildComponent>hello</ChildComponent>
            <ChildComponent>
              {" "}
              <ChildComponent>hello</ChildComponent>
            </ChildComponent>
          </ChildComponent>
          <ChildComponent>hello</ChildComponent>
          <ChildComponent>hello</ChildComponent> */}
        </RootComponent>
      </div>
    </>
  );
};

export default LeftSideBar;

function RootComponent({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <div className="border-y border-l">{children}</div>
    </>
  );
}

// function ChildComponent({ children }: { children?: React.ReactNode }) {
//   if (!children) return null;
//   return (
//     <>
//       <div className="relative border-y border-l pl-4">
//         <div className="group  flex w-full">
//           <span>{children}</span> <span>del</span>{" "}
//         </div>
//         <div className="absolute top-2 right-1/2">+</div>
//       </div>
//     </>
//   );
// }

// import { Button } from "@/components/ui/button";

// function Button({
//   variant = "default",
//   size = "default",
//   className = "",
//   children,
//   onClick,
// }) {
//   const baseStyles =
//     "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

//   const variants = {
//     default: "bg-blue-600 text-white hover:bg-blue-700",
//     ghost: "hover:bg-gray-100 hover:text-gray-900",
//     outline:
//       "border border-gray-300 bg-white hover:bg-gray-50 hover:text-gray-900",
//   };

//   const sizes = {
//     default: "h-10 px-4 py-2",
//     icon: "h-8 w-8",
//   };

//   return (
//     <button
//       className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// }

function ChildComponent({
  title = "Section Title",
  children,
}: {
  title?: string;
  children?: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);
  const [preview, setPreview] = useState(true);

  return (
    <div className="border-l border-gray-800 w-full ">
      {/* Top Bar */}
      <div className="flex items-center gap-2 px-3 py-2  transition-colors group">
        {/* Left: Arrow + Icon + Title */}
        <button className="flex-shrink-0 " onClick={() => setOpen(!open)}>
          {open ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </button>

        <div
          className="flex items-center gap-2 flex-1 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <div className="flex-shrink-0 ">
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
            </svg>
          </div>
          <span className="text-sm ">{title}</span>
        </div>

        {/* Right: Icons - Hidden by default, shown on hover */}
        <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
          {/* Preview Toggle */}
          <button
            className="p-1  rounded"
            onClick={(e) => {
              e.stopPropagation();
              setPreview(!preview);
            }}
          >
            {preview ? (
              <Eye className="h-3.5 w-3.5 " />
            ) : (
              <EyeOff className="h-3.5 w-3.5 " />
            )}
          </button>

          {/* Delete */}
          <button
            className="p-1  rounded"
            onClick={(e) => {
              e.stopPropagation();
              alert("Delete section");
            }}
          >
            <Trash2 className="h-3.5 w-3.5 " />
          </button>
        </div>
      </div>

      {/* Body */}
      {open && (
        <div className="pl-9 pr-3 pb-3 space-y-2">
          {children && <div className="mb-2">{children}</div>}

          {/* Add block Button */}
          <button
            className="flex items-center gap-2 text-sm text-green-600 hover:text-green-700 py-1"
            onClick={() => alert("Add block")}
          >
            <div className="w-4 h-4 rounded-full border-2 border-green-600 flex items-center justify-center">
              <Plus className="h-2.5 w-2.5" />
            </div>
            <span>Add block</span>
          </button>

          {/* Add section Button */}
          <button
            className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 py-1 -ml-5"
            onClick={() => alert("Add section")}
          >
            <div className="w-4 h-4 rounded-full border-2 border-blue-600 flex items-center justify-center">
              <Plus className="h-2.5 w-2.5" />
            </div>
            <span>Add section</span>
          </button>
        </div>
      )}
    </div>
  );
}

// Demo

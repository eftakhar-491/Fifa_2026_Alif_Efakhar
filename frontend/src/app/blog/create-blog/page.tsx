// final findings after manupulate the obj we need to store
"use client";

// let root = {
//   children : ["shiblings :{
//     children: ["shiblings :{
//     children: []
//   }","shiblings :{
//     children: []
//   }","shiblings :{
//     children: []
//   }"]
//   }" ,"shiblings :{
//     children: ["shiblings :{
//     children: []
//   }"]
//   }"]
// }

export function GridLayoutManagera() {
  // ✅ create class only once
  const layoutRef = useRef(new GridLayoutClass());

  // ✅ use state only to trigger re-render
  const [, setTick] = useState(0);

  const rerender = () => setTick((x) => x + 1); // force refresh

  const handleAdd = () => {
    layoutRef.current.addComponent(<div>New Component</div>);
    rerender(); // refresh UI after manipulation
  };

  return (
    <div>
      <button onClick={handleAdd}>Add</button>
      <div>{layoutRef.current.render()}</div>
    </div>
  );
}

import React, { useRef, useState } from "react";

import LeftSideBar from "./components/LeftSideBar";
import MainContent from "./components/MainContent";
import MobileOuterDiv from "./components/MobileOuterDiv";

// class GridLayoutClass {
//   component: React.ReactElement | null = null;
//   children: React.ReactNode[] | null = [];
//   shibling: any[] = [];

//   constructor(sectionStructure?: any[]) {
//     sectionStructure?.forEach((section) => {
//       this.shibling.push(section);
//     });
//   }

//   addComponent(component: React.ReactElement) {
//     this.component = component;
//     this.shibling.push(component);
//     return this;
//   }
//   addShibling(shibling: any) {
//     this.shibling = this.shibling ? [...this.shibling, shibling] : [shibling];
//     return this;
//   }

//   addChild(child: React.ReactNode) {
//     this.children = this.children ? [...this.children, child] : [child];
//     return this;
//   }

//   render() {
//     console.dir(this.shibling.join());
//     if (!this.component) return null;
//     // Clone the component with updated children

//     return this.shibling;
//     // return React.cloneElement(this.component, {}, this.children);
//   }
// }

import GridLayout from "./childComponent/gridLayout/GridLayout";

class GridLayoutClass {
  component: React.ReactElement | null = null;
  children: React.ReactNode[] = [];
  siblings: React.ReactElement[] = [];

  constructor(sectionStructure?: React.ReactElement[]) {
    if (sectionStructure && Array.isArray(sectionStructure)) {
      this.siblings = [...sectionStructure];
    }
  }

  addComponent(component: React.ReactElement) {
    this.component = component;
    if (!this.siblings.includes(component)) {
      this.siblings.push(component);
    }
    return this;
  }

  addSibling(sibling: React.ReactElement) {
    this.siblings.push(sibling);
    return this;
  }

  addChild(child: React.ReactNode) {
    this.children.push(child);
    return this;
  }

  render() {
    if (!this.component) return null;

    // Combine siblings + component with children correctly
    const allElements = [
      ...this.siblings,
      React.cloneElement(this.component, {}, this.children),
    ];

    return <>{allElements}</>;
  }
}

// export default GridLayoutClass;

const page = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [rightPanelOpen, setRightPanelOpen] = useState(false);
  const [sectionStructure, setSectionStructure] = useState<any[]>([
    <GridLayout></GridLayout>,
  ]);
  const [layout, setLayout] = useState(new GridLayoutClass());

  const newGridLayout = new GridLayoutClass(sectionStructure);
  const [activeTab, setActiveTab] = useState("Playground");

  const navItems = [
    "Examples",
    "Dashboard",
    "Tasks",
    "Playground",
    "Authentication",
  ];

  return (
    <>
      {/* Mobile Overlay */}
      <MobileOuterDiv
        sidebarOpen={sidebarOpen}
        rightPanelOpen={rightPanelOpen}
        setSidebarOpen={setSidebarOpen}
        setRightPanelOpen={setRightPanelOpen}
      />

      {/* Left Sidebar */}
      <LeftSideBar
        sectionStructure={sectionStructure}
        setSectionStructure={setSectionStructure}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        navItems={navItems}
        newGridLayout={newGridLayout}
      />

      {/* Main Content */}
      <MainContent
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        newGridLayout={newGridLayout}
      />
    </>
  );
};

export default page;

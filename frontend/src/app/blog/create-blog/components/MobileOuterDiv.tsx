import React from "react";

type TMobileOuterDivProps = {
  sidebarOpen: boolean;
  rightPanelOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  setRightPanelOpen: (open: boolean) => void;
};

const MobileOuterDiv = ({
  sidebarOpen,
  rightPanelOpen,
  setSidebarOpen,
  setRightPanelOpen,
}: TMobileOuterDivProps) => {
  return (
    <>
      {(sidebarOpen || rightPanelOpen) && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => {
            setSidebarOpen(false);
            setRightPanelOpen(false);
          }}
        />
      )}
    </>
  );
};

export default MobileOuterDiv;

"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Copy, MoreHorizontal, Menu, Settings, X } from "lucide-react";
import RightSideBar from "./RightSideBar";

interface MainContentProps {
  setSidebarOpen: (open: boolean) => void;
  sidebarOpen: boolean;
  newGridLayout: any;
}

const MainContent: React.FC<MainContentProps> = ({ setSidebarOpen }) => {
  const [rightPanelOpen, setRightPanelOpen] = useState(false);
  const [prompt, setPrompt] = useState("Write a tagline for an ice cream shop");
  const [mode, setMode] = useState("complete");
  const [model, setModel] = useState("text-davinci-003");
  const [temperature, setTemperature] = useState([0.56]);
  const [maxLength, setMaxLength] = useState([256]);
  const [topP, setTopP] = useState([0.9]);
  const [activeTab, setActiveTab] = useState("Playground");

  const navItems = [
    "Examples",
    "Dashboard",
    "Tasks",
    "Playground",
    "Authentication",
  ];

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Top Navigation */}
      <div className="border-b border-neutral-800 px-4 xl:px-6 py-3 flex items-center justify-between bg-neutral-950">
        <div className="flex items-center gap-4">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="xl:hidden p-2 rounded-md hover:bg-neutral-800"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`text-sm transition-colors ${
                  activeTab === item
                    ? "text-white font-medium"
                    : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Active Tab Display */}
          <span className="xl:hidden text-sm font-medium">{activeTab}</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden md:inline text-sm text-neutral-400">
            Theme: Neutral
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 hidden md:flex"
          >
            <Copy className="w-4 h-4" />
          </Button>
          {/* Mobile Settings Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="xl:hidden h-8 w-8"
            onClick={() => setRightPanelOpen(true)}
          >
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Playground Header */}
      <div className="border-b border-neutral-800 px-4 xl:px-6 py-4 bg-neutral-950">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">Playground</h1>
          <div className="flex items-center gap-2">
            <Select value="preset-1">
              <SelectTrigger className="w-32 md:w-48 bg-neutral-900 border-neutral-700 text-xs md:text-sm">
                <SelectValue placeholder="Load a preset..." />
              </SelectTrigger>
              <SelectContent className="bg-neutral-900 border-neutral-700">
                <SelectItem value="preset-1">Load a preset...</SelectItem>
                <SelectItem value="preset-2">Creative Writing</SelectItem>
                <SelectItem value="preset-3">Code Generation</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex bg-neutral-900 border-neutral-700"
            >
              Save
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex bg-neutral-900 border-neutral-700"
            >
              View code
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex bg-neutral-900 border-neutral-700"
            >
              Share
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Playground Area */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Left Panel - Editor */}
        <div className="flex-1 flex flex-col p-4 xl:p-6 overflow-auto">
          <Card className="flex-1 flex flex-col bg-neutral-950 border-neutral-800">
            <Textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your prompt here..."
              className="flex-1 bg-transparent border-none resize-none focus-visible:ring-0 text-neutral-100 p-4"
            />
            <div className="border-t border-neutral-800 p-3 flex gap-2">
              <Button
                size="sm"
                className="bg-white text-black hover:bg-neutral-200"
              >
                Submit
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Right Panel - Controls */}
        <RightSideBar
          rightPanelOpen={rightPanelOpen}
          setRightPanelOpen={setRightPanelOpen}
        ></RightSideBar>
      </div>
    </div>
  );
};

export default MainContent;

"use client";

import { Button } from "@/components/ui/button";

import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import React, { useState } from "react";

type RightSideBarProps = {
  rightPanelOpen: boolean;
  setRightPanelOpen: (open: boolean) => void;
};

const RightSideBar = ({
  rightPanelOpen,
  setRightPanelOpen,
}: RightSideBarProps) => {
  const [mode, setMode] = useState("complete");
  const [model, setModel] = useState("text-davinci-003");
  const [temperature, setTemperature] = useState([0.56]);
  const [maxLength, setMaxLength] = useState([256]);
  const [topP, setTopP] = useState([0.9]);

  return (
    <div
      className={`${
        rightPanelOpen ? "translate-x-0" : "translate-x-full"
      } xl:translate-x-0 fixed xl:static right-0 top-0 z-50 xl:z-0 h-full w-80 border-l border-neutral-800 p-4 xl:p-6 overflow-auto bg-neutral-950 transition-transform duration-300`}
    >
      <div className="flex items-center justify-between mb-6 xl:hidden">
        <h2 className="text-lg font-semibold">Settings</h2>
        <button
          onClick={() => setRightPanelOpen(false)}
          className="p-2 rounded-md hover:bg-neutral-800"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-6">
        {/* Mode Selection */}
        <div>
          <Label className="text-sm font-medium mb-3 block">Mode</Label>
          <div className="flex gap-2">
            {["Complete", "Insert", "Edit"].map((m) => (
              <Button
                key={m}
                variant={mode === m.toLowerCase() ? "default" : "outline"}
                size="sm"
                onClick={() => setMode(m.toLowerCase())}
                className={
                  mode === m.toLowerCase()
                    ? "bg-white text-black hover:bg-neutral-200"
                    : "bg-neutral-900 border-neutral-700 hover:bg-neutral-800"
                }
              >
                {m}
              </Button>
            ))}
          </div>
        </div>

        {/* Model Selection */}
        <div>
          <Label className="text-sm font-medium mb-3 block">Model</Label>
          <Select value={model} onValueChange={setModel}>
            <SelectTrigger className="bg-neutral-900 border-neutral-700">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-neutral-900 border-neutral-700">
              <SelectItem value="text-davinci-003">text-davinci-003</SelectItem>
              <SelectItem value="text-davinci-002">text-davinci-002</SelectItem>
              <SelectItem value="text-curie-001">text-curie-001</SelectItem>
              <SelectItem value="text-babbage-001">text-babbage-001</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Temperature */}
        <div>
          <div className="flex justify-between mb-3">
            <Label className="text-sm font-medium">Temperature</Label>
            <span className="text-sm text-neutral-400">{temperature[0]}</span>
          </div>
          <Slider
            value={temperature}
            onValueChange={setTemperature}
            max={1}
            step={0.01}
            className="[&_[role=slider]]:bg-white"
          />
        </div>

        {/* Maximum Length */}
        <div>
          <div className="flex justify-between mb-3">
            <Label className="text-sm font-medium">Maximum Length</Label>
            <span className="text-sm text-neutral-400">{maxLength[0]}</span>
          </div>
          <Slider
            value={maxLength}
            onValueChange={setMaxLength}
            max={4000}
            step={1}
            className="[&_[role=slider]]:bg-white"
          />
        </div>

        {/* Top P */}
        <div>
          <div className="flex justify-between mb-3">
            <Label className="text-sm font-medium">Top P</Label>
            <span className="text-sm text-neutral-400">{topP[0]}</span>
          </div>
          <Slider
            value={topP}
            onValueChange={setTopP}
            max={1}
            step={0.01}
            className="[&_[role=slider]]:bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;

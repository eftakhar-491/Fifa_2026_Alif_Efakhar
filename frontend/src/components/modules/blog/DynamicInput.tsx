"use client";

import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Link as LinkIcon,
  ListOrdered,
  List,
  Code,
  Quote,
  Plus,
  Type,
  Smile,
  AtSign,
  Video,
  Mic,
  PenTool,
  Send,
  ChevronDown,
  Lightbulb,
} from "lucide-react";

interface DynamicInputProps {
  placeholder?: string;
  channel?: string;
  onSend?: (content: string) => void;
  className?: string;
}

const DynamicInput: React.FC<DynamicInputProps> = ({
  placeholder = "Message",
  channel = "social",
  onSend,
  className,
}) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [content, setContent] = useState<string>("");
  const [activeFormats, setActiveFormats] = useState<Set<string>>(new Set());
  console.log(content);
  // Check which formats are currently active using DOM traversal and computed styles
  const checkActiveFormats = () => {
    if (!editorRef.current) return;
    const formats = new Set<string>();
    const selection = window.getSelection();

    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const startContainer = range.startContainer;

      // Get the focused node (could be text node or element)
      let node: Node | null = startContainer;

      // If it's a text node, get its parent
      if (node.nodeType === Node.TEXT_NODE) {
        node = node.parentNode;
      }

      // Traverse up to find formatting tags and check computed styles
      while (
        node &&
        node !== editorRef.current &&
        node.nodeType === Node.ELEMENT_NODE
      ) {
        const element = node as HTMLElement;
        const tagName = element.tagName.toUpperCase();
        const computedStyle = window.getComputedStyle(element);

        // Check tag names
        if (tagName === "STRONG" || tagName === "B") formats.add("bold");
        if (tagName === "EM" || tagName === "I") formats.add("italic");
        if (tagName === "U") formats.add("underline");
        if (tagName === "S" || tagName === "STRIKE")
          formats.add("strikethrough");
        if (tagName === "CODE") formats.add("code");
        if (tagName === "BLOCKQUOTE") formats.add("quote");
        if (tagName === "OL") formats.add("orderedList");
        if (tagName === "UL") formats.add("unorderedList");
        if (tagName === "A") formats.add("link");

        // Check computed styles for inline formatting
        const fontWeight = computedStyle.fontWeight;
        const fontStyle = computedStyle.fontStyle;
        const textDecoration = computedStyle.textDecoration;
        const textDecorationLine = computedStyle.textDecorationLine;

        // Check for bold (font-weight >= 600 or 'bold')
        if (fontWeight === "bold" || fontWeight === "bolder") {
          formats.add("bold");
        } else {
          const weightNum = parseInt(fontWeight, 10);
          if (!isNaN(weightNum) && weightNum >= 600 && weightNum <= 900) {
            formats.add("bold");
          }
        }

        // Check for italic
        if (fontStyle === "italic" || fontStyle === "oblique") {
          formats.add("italic");
        }

        // Check for underline
        if (
          (textDecoration && textDecoration.includes("underline")) ||
          (textDecorationLine && textDecorationLine.includes("underline"))
        ) {
          formats.add("underline");
        }

        // Check for strikethrough
        if (
          (textDecoration && textDecoration.includes("line-through")) ||
          (textDecorationLine && textDecorationLine.includes("line-through"))
        ) {
          formats.add("strikethrough");
        }

        // Check if we're inside a list
        const listParent = element.closest("ol, ul");
        if (listParent) {
          if (listParent.tagName === "OL") formats.add("orderedList");
          if (listParent.tagName === "UL") formats.add("unorderedList");
        }

        // Check if we're inside a blockquote
        if (element.closest("blockquote")) {
          formats.add("quote");
        }

        node = node.parentNode;
      }
    }

    setActiveFormats(formats);
  };

  // Handle format command
  const handleFormat = (command: string, value?: string) => {
    if (!editorRef.current) return;
    editorRef.current.focus();

    if (command === "createLink") {
      const url = prompt("Enter URL:");
      if (url) {
        document.execCommand(command, false, url);
      }
    } else if (command === "formatBlock") {
      // Check if current selection is in a blockquote
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        let node: Node | null = range.commonAncestorContainer;

        if (node.nodeType === Node.TEXT_NODE) {
          node = node.parentNode;
        }

        const blockquote = (node as HTMLElement)?.closest("blockquote");
        if (blockquote) {
          // Remove blockquote formatting
          document.execCommand("formatBlock", false, "div");
        } else {
          // Add blockquote formatting
          document.execCommand("formatBlock", false, "blockquote");
        }
      }
    } else if (command === "formatCode") {
      // Wrap selection in code tags
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const codeElement = document.createElement("code");
        try {
          range.surroundContents(codeElement);
        } catch (e) {
          // If surroundContents fails, insert code element
          codeElement.textContent = range.toString();
          range.deleteContents();
          range.insertNode(codeElement);
        }
        selection.removeAllRanges();
        selection.addRange(range);
      }
    } else {
      document.execCommand(command, false, value);
    }

    setTimeout(() => {
      checkActiveFormats();
      updateContent();
    }, 0);
  };

  // Update content state
  const updateContent = () => {
    if (!editorRef.current) return;
    setContent(editorRef.current.innerHTML);
  };

  // Handle send
  const handleSend = () => {
    if (!editorRef.current) return;
    const textContent = editorRef.current.innerText.trim();
    if (textContent && onSend) {
      onSend(content);
      editorRef.current.innerHTML = "";
      setContent("");
      setActiveFormats(new Set());
    }
  };

  // Handle key events
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Toolbar button component
  const ToolbarButton = ({
    command,
    icon: Icon,
    label,
    isActive = false,
  }: {
    command: string;
    icon: React.ElementType;
    label: string;
    isActive?: boolean;
  }) => (
    <button
      type="button"
      onClick={() => handleFormat(command)}
      className={cn(
        "h-8 w-8 flex items-center justify-center rounded transition-colors",
        "text-gray-400 hover:text-gray-200 hover:bg-gray-700/50",
        "border-0 outline-none focus-visible:ring-2 focus-visible:ring-teal-500/50 focus-visible:ring-offset-0",
        "dark:text-gray-400 dark:hover:text-gray-200",
        isActive && "text-gray-200 bg-gray-700/70 dark:bg-gray-700/70"
      )}
      aria-label={label}
    >
      <Icon className="h-4 w-4" />
    </button>
  );

  return (
    <div
      className={cn(
        "w-full rounded-lg border bg-[#282c34] border-[#3a3a3a]",
        "shadow-sm",
        className
      )}
    >
      {/* Top Toolbar */}
      <div className="flex items-center gap-1 px-2 py-1.5 border-b border-[#3a3a3a] bg-[#282c34]">
        <div className="flex items-center gap-0.5">
          <ToolbarButton
            command="bold"
            icon={Bold}
            label="Bold"
            isActive={activeFormats.has("bold")}
          />
          <ToolbarButton
            command="italic"
            icon={Italic}
            label="Italic"
            isActive={activeFormats.has("italic")}
          />
          <ToolbarButton
            command="underline"
            icon={Underline}
            label="Underline"
            isActive={activeFormats.has("underline")}
          />
          <ToolbarButton
            command="strikeThrough"
            icon={Strikethrough}
            label="Strikethrough"
            isActive={activeFormats.has("strikethrough")}
          />
        </div>

        <div className="h-4 w-px bg-[#3a3a3a] mx-1" />

        <div className="flex items-center gap-0.5">
          <ToolbarButton
            command="createLink"
            icon={LinkIcon}
            label="Link"
            isActive={activeFormats.has("link")}
          />
          <ToolbarButton
            command="insertOrderedList"
            icon={ListOrdered}
            label="Numbered List"
            isActive={activeFormats.has("orderedList")}
          />
          <ToolbarButton
            command="insertUnorderedList"
            icon={List}
            label="Bulleted List"
            isActive={activeFormats.has("unorderedList")}
          />
          <ToolbarButton
            command="formatCode"
            icon={Code}
            label="Code Block"
            isActive={activeFormats.has("code")}
          />
          <ToolbarButton
            command="formatBlock"
            icon={Quote}
            label="Quote"
            isActive={activeFormats.has("quote")}
          />
        </div>
      </div>

      {/* Main Input Area */}
      <div className="relative min-h-[120px] p-4 bg-[#282c34]">
        <div
          ref={editorRef}
          contentEditable
          onInput={updateContent}
          onKeyDown={handleKeyDown}
          onMouseUp={checkActiveFormats}
          onKeyUp={checkActiveFormats}
          className={cn(
            "w-full min-h-[80px] outline-none text-gray-200",
            "placeholder:text-gray-500",
            "[&:empty::before]:content-[attr(data-placeholder)]",
            "[&:empty::before]:text-gray-500",
            "[&_code]:bg-gray-800 [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-teal-400",
            "[&_blockquote]:border-l-4 [&_blockquote]:border-gray-600 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-300",
            "[&_strong]:font-bold",
            "[&_em]:italic",
            "[&_u]:underline",
            "[&_s]:line-through",
            "[&_a]:text-teal-400 [&_a]:underline",
            "[&_ul]:list-disc [&_ul]:ml-6 [&_ul]:my-2",
            "[&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:my-2"
          )}
          data-placeholder={`${placeholder} #${channel}`}
          suppressContentEditableWarning
          style={{ caretColor: "#4fd1c7" }}
        />

        {/* Badges on the right */}
        <div className="absolute right-4 top-4 flex items-center gap-2">
          <div className="flex items-center justify-center px-2 py-1 rounded-full bg-white border border-gray-300 shadow-sm">
            <Lightbulb className="h-3.5 w-3.5 text-teal-500" />
          </div>
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-teal-500 border border-teal-600 shadow-sm">
            <span className="text-xs font-semibold text-white">G</span>
          </div>
        </div>
      </div>

      {/* Bottom Toolbar */}
      <div className="flex items-center justify-between px-2 py-2 border-t border-[#3a3a3a] bg-[#282c34]">
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon-sm"
            className="h-8 w-8 text-gray-400 hover:text-gray-200 hover:bg-gray-700/50 border-0"
          >
            <Plus className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            className="h-8 w-8 text-gray-200 bg-gray-700/70 hover:bg-gray-700/90 border-0"
          >
            <Type className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            className="h-8 w-8 text-gray-400 hover:text-gray-200 hover:bg-gray-700/50 border-0"
          >
            <Smile className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            className="h-8 w-8 text-gray-400 hover:text-gray-200 hover:bg-gray-700/50 border-0"
          >
            <AtSign className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            className="h-8 w-8 text-gray-400 hover:text-gray-200 hover:bg-gray-700/50 border-0"
          >
            <Video className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            className="h-8 w-8 text-gray-400 hover:text-gray-200 hover:bg-gray-700/50 border-0"
          >
            <Mic className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            className="h-8 w-8 text-gray-400 hover:text-gray-200 hover:bg-gray-700/50 border-0"
          >
            <PenTool className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-1">
          <Button
            onClick={handleSend}
            size="icon-sm"
            className="h-8 w-8 bg-gray-600 text-gray-200 hover:bg-gray-500 rounded-md border-0"
          >
            <Send className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            className="h-8 w-8 text-gray-400 hover:text-gray-200 hover:bg-gray-700/50 border-0"
          >
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DynamicInput;

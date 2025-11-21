// const dummy = {
//   $$en: "UUID()",
//   name: "EnComponent",
//   element: "div",
//   "props?": {
//     "className?": "string",
//     "state?": {},
//   },
//   children: [this, this],
// };

// jodi db theke ami koto already kono tree pai tahole oita render korte hobe

export interface IEnComponentProps {
  className?: string;
  style?: {
    display?: string;
    flexDirection?: string;
    justifyContent?: string;
  };
}

export interface IComponent {
  name: string;
  element: string;
  props?: IEnComponentProps;
  children?: IComponent[] | string[];
}
type CreateComponentParams = {
  parentId: string;
  element: string;
  props?: IEnComponentProps;
};

export class EnComponent {
  $$en: string;
  name: string;
  element: string;
  children: IComponent[] | string[] = [];
  constructor(name: string, element: string) {
    this.$$en = this.generateUUID();
    this.name = name;
    this.element = element;
    this.children = [];
  }
  static fromDBData(data: any): EnComponent {
    // Create the new EnComponent instance
    const component = new EnComponent(data.name, data.element);
    component.$$en = data.$$en;

    // Rehydrate children, if any
    if (data.children && Array.isArray(data.children)) {
      component.children = data.children.map((child: any) => {
        // Check if the child is a string or another component
        if (typeof child === "string") {
          return child;
        } else {
          // Recreate the child as an EnComponent instance
          return EnComponent.fromDBData(child);
        }
      });
    }

    return component;
  }
  findComponentById(id: string, visited = new Set()): IComponent | null {
    if (visited.has(this)) return null;
    visited.add(this);

    if (this.$$en === id) return this;

    for (const child of this.children) {
      if (child instanceof EnComponent) {
        const found = child.findComponentById(id, visited);
        if (found) return found;
      }
    }

    return null;
  }
  createComponent(
    name: string,
    { parentId, element, props } = {} as CreateComponentParams
  ) {
    const componentId = this.generateUUID();

    // Create the new component
    const newComponent = {
      $$en: componentId,
      name,
      element: element || "div",
      props: props || {},
      children: [],
    };

    // If parentId is provided, add to parent's children
    if (parentId) {
      const parentComponent = this.findComponentById(parentId);
      if (parentComponent?.children) {
        parentComponent.children[parentComponent.children.length] =
          newComponent;
      } else {
        console.warn(`Parent component with ID ${parentId} not found`);
      }
    }

    return newComponent;
  }

  // Helper method to generate UUID (if needed)
  generateUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }
  print() {
    console.log(this);
  }
}

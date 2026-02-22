// For SVGR (using SVG as a React component)
declare module '*.svg' {
  import * as React from 'react';

  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

// Optional: For specific URL imports (e.g., import url from './image.svg?url')
declare module '*.svg?url' {
  const content: string;
  export default content;
}

/// <reference types="vite-plugin-svgr/client" />

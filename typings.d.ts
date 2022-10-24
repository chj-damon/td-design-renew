import 'react';

declare module '*.css';
declare module '*.less';

type ChildrenType = JSX.Element | number | boolean | Element | ReactFragment | null;

declare module 'react' {
  interface RefAttributes {
    children?: ChildrenType;
  }
}

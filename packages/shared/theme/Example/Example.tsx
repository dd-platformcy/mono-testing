//Contains the implementation of an Example component

import React, { FunctionComponent } from 'react';

interface ExampleProps {
  title?: string;
}
export const Example: FunctionComponent<ExampleProps> = ({
  title
}: ExampleProps) => {
  return <div>{title}</div>;
};

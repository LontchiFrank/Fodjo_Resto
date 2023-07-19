import React, { FunctionComponent, PropsWithChildren } from "react";

interface Props {
  children?: React.ReactNode | React.ReactElement[];
}

const Wrapper: FunctionComponent<PropsWithChildren> = ({ children }: Props) => {
  return <>{children}</>;
};

export default Wrapper;

import React from "react";
import { IconName } from "boxicons";

interface IconProps {
  name: IconName;
  size?: string;
  color?: string;
  rotate?:string;
  type?:string;
}

const Icon: React.FC<IconProps> = ({ name, size = "24px", color = "", rotate = "" }) => {
  return <i className={`bx ${name}`} style={{ fontSize: size, color, rotate }} />;
};

export default Icon;
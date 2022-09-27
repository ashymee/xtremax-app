import { BareComponent } from "index";
import type { FC } from "react";

const Main: FC<BareComponent> = ({ children }) => {
  return (
    <div className="px-4 w-full h-[calc(100%_-_7.7rem)]">
      <div className="w-full h-full flex items-center justify-center border rounded-xl">
        {children}
      </div>
    </div>
  );
};

export default Main;

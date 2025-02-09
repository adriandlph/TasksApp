import { ReactNode } from "react";
import NavBar from "../NavBar.tsx";

interface BasePageProps {
  children?: ReactNode;
}

function BasePage({ children }: BasePageProps) {
  return (
    <div className="bg-transparent box-border pt-5">
      <header className="w-5/6 mx-auto">
        <NavBar />
      </header>
      {children}
    </div>
  );
}

export default BasePage;

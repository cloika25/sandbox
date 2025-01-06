import { ReactNode } from "react";
import "./styles.css";
import { sections } from "../sections";

type LayoutProps = {
  children?: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <div className="flex flex-grow" id="layout">
    <aside>
      <a href="/">Домой</a>
      <ul>
        {sections.map((section) => (
          <li key={section.route}>
            <a href={section.route}>{section.name}</a>
          </li>
        ))}
      </ul>
    </aside>
    <div id="contentWrapper">
      <div id="content">{children}</div>
    </div>
  </div>
);

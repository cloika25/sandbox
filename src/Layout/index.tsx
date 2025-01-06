import { ReactNode } from "react";
import "./styles.css";
import { sections } from "../sections";
import { Link } from "react-router";
import { baseUrl } from "../routes";

type LayoutProps = {
  children?: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <div className="flex flex-grow" id="layout">
    <aside>
      <a href={baseUrl}>Домой</a>
      <ul>
        {sections.map((section) => (
          <li key={section.route}>
            <Link to={section.route}>{section.name}</Link>
          </li>
        ))}
      </ul>
    </aside>
    <div id="contentWrapper">
      <div id="content">{children}</div>
    </div>
  </div>
);

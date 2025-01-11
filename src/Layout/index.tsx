import "./styles.css";
import { sections } from "../sections";
import { Link, Outlet } from "react-router";
import { baseUrl } from "../routes";

export const Layout = () => (
  <div className="flex flex-grow" id="layout">
    <aside>
      <Link to={baseUrl}>Домой</Link>
      <ul>
        {sections.map((section) => (
          <li key={section.route}>
            <Link to={section.route}>{section.name}</Link>
          </li>
        ))}
      </ul>
    </aside>
    <main id="contentWrapper">
      <div id="content">
        <Outlet />
      </div>
    </main>
  </div>
);

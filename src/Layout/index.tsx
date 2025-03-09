import "./styles.css";
import { sections } from "../sections";
import { Link, Outlet } from "react-router";
import { baseUrl } from "../routes";
import { MenuIcon } from "../components/MenuIcon";
import { MouseEventHandler, useRef } from "react";

const LeftMenuItems = ({ onClickLink }: { onClickLink?: () => void }) => {
  return (
    <ul>
      <Link onClick={onClickLink} to={baseUrl}>
        Домой
      </Link>
      {sections.map((section) => (
        <li key={section.route}>
          <Link onClick={onClickLink} to={section.route}>
            {section.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const Layout = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const onClickHandle: MouseEventHandler<HTMLDialogElement> = ({
    currentTarget,
    target,
  }) => {
    const dialogElement = currentTarget;
    const isClickedOnBackDrop = target === dialogElement;

    if (isClickedOnBackDrop) {
      dialogRef.current?.close();
    }
  };

  return (
    <div className="flex flex-grow" id="layout">
      <aside className="asideContent">
        <LeftMenuItems />
      </aside>
      <div className="mobileAside">
        <MenuIcon
          className="menuIcon"
          onClick={() => {
            dialogRef.current?.showModal();
          }}
        />
      </div>
      <dialog ref={dialogRef} className="menuDialog" onClick={onClickHandle}>
        <LeftMenuItems onClickLink={() => dialogRef.current?.close()} />
      </dialog>
      <main id="contentWrapper">
        <div id="content">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

import React, { MouseEventHandler, useRef } from "react";

const DialogView = () => {
  const dialogRef1 = useRef<HTMLDialogElement>(null);
  const dialogRef2 = useRef<HTMLDialogElement>(null);

  const onClickHandle: MouseEventHandler<HTMLDialogElement> = ({
    currentTarget,
    target,
  }) => {
    const dialogElement = currentTarget;
    const isClickedOnBackDrop = target === dialogElement;

    if (isClickedOnBackDrop) {
      dialogRef1.current?.close();
    }
  };

  return (
    <div className="flex gap-2 min-h-[300px] items-center">
      <div>
        <button
          onClick={() => {
            dialogRef1.current?.showModal();
          }}
          type="button"
        >
          show modal
        </button>
      </div>
      <dialog ref={dialogRef1} onClick={onClickHandle}>
        <div className="flex flex-col gap-4 p-2">
          content
          <button
            onClick={() => {
              dialogRef1.current?.close();
            }}
          >
            close dialog
          </button>
        </div>
      </dialog>

      <div className="relative">
        <button
          onClick={() => {
            if (dialogRef2.current?.open) {
              dialogRef2.current.close();
            } else {
              dialogRef2.current?.show();
            }
          }}
          type="button"
        >
          show dialog
        </button>
        <dialog ref={dialogRef2}>
          <div>Dialog content</div>
        </dialog>
      </div>
    </div>
  );
};

export default DialogView;

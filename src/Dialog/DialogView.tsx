import React, { useRef } from 'react';

const DialogView = () => {
  const dialogRef1 = useRef<HTMLDialogElement>(null);
  const dialogRef2 = useRef<HTMLDialogElement>(null);

  return (
    <div style={{ display: 'flex' }}>
      <button
        onClick={() => {
          dialogRef1.current?.showModal();
        }}
        type="button"
      >
        show modal
      </button>
      <dialog ref={dialogRef1}>
        content
        <div onClick={() => {
          dialogRef1.current?.close();
        }}
        >
          close dialog
        </div>
      </dialog>
      <div style={{ position: 'relative' }}>
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

import { useEffect, useRef, type RefObject } from 'react';

export const DIALOG_LIGHT_DISMISS: Record<string, string> = { closedby: 'any' };

interface UseNativeModalOptions {
  open: boolean;
  onClose: () => void;
}

function isOutsideDialog(e: PointerEvent, dialog: HTMLDialogElement): boolean {
  const r = dialog.getBoundingClientRect();
  return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
}

export function useNativeModal({
  open,
  onClose,
}: UseNativeModalOptions): RefObject<HTMLDialogElement | null> {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      dialog.returnValue = '';
      onCloseRef.current();
    };

    dialog.addEventListener('close', handleClose);

    if ('closedBy' in HTMLDialogElement.prototype) {
      return () => {
        dialog.removeEventListener('close', handleClose);
      };
    }

    let pressedOutside = false;

    const handlePointerDown = (e: PointerEvent) => {
      pressedOutside = isOutsideDialog(e, dialog);
    };

    const handlePointerUp = (e: PointerEvent) => {
      if (pressedOutside && isOutsideDialog(e, dialog)) {
        dialog.close();
      }
      pressedOutside = false;
    };

    dialog.addEventListener('pointerdown', handlePointerDown);
    dialog.addEventListener('pointerup', handlePointerUp);

    return () => {
      dialog.removeEventListener('close', handleClose);
      dialog.removeEventListener('pointerdown', handlePointerDown);
      dialog.removeEventListener('pointerup', handlePointerUp);
    };
  }, []);

  return dialogRef;
}

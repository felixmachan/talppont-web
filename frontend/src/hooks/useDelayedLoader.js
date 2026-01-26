import { useEffect, useRef, useState } from "react";

/**
 * showIfLoading:
 *  - csak akkor lesz true, ha a loading tovább tart, mint delayMs
 *  - ha már true lett, minimum minVisibleMs ideig true marad
 */
export function useDelayedLoader(isLoading, delayMs = 250, minVisibleMs = 500) {
  const [show, setShow] = useState(false);

  const delayTimer = useRef(null);
  const hideTimer = useRef(null);
  const shownAt = useRef(0);

  useEffect(() => {
    // cleanup helper
    const clearAll = () => {
      if (delayTimer.current) clearTimeout(delayTimer.current);
      if (hideTimer.current) clearTimeout(hideTimer.current);
      delayTimer.current = null;
      hideTimer.current = null;
    };

    if (isLoading) {
      // Ne villanjunk: csak delay után mutatjuk
      if (!show && !delayTimer.current) {
        delayTimer.current = setTimeout(() => {
          shownAt.current = Date.now();
          setShow(true);
          delayTimer.current = null;
        }, delayMs);
      }
    } else {
      // Ha még meg se jelent, csak töröljük a késleltetést
      if (delayTimer.current) {
        clearTimeout(delayTimer.current);
        delayTimer.current = null;
      }

      // Ha már látszik, tartsuk minimum ideig
      if (show) {
        const elapsed = Date.now() - shownAt.current;
        const remaining = Math.max(0, minVisibleMs - elapsed);

        if (!hideTimer.current) {
          hideTimer.current = setTimeout(() => {
            setShow(false);
            hideTimer.current = null;
          }, remaining);
        }
      }
    }

    return clearAll;
  }, [isLoading, delayMs, minVisibleMs, show]);

  return show;
}

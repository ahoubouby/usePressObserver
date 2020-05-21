import { useEffect, useState } from "react";

function fromEventCode(code): string {
  const prefixRegex = /Key|Digit/gi;
  return code.replace(prefixRegex, "");
}

function equal(watchedKey, eventCode): boolean {
  return fromEventCode(eventCode).toUpperCase() === watchedKey.toUpperCase();
}
export const usePressObserver = ({ watchKey }) => {
  const [pressed, setPressed] = useState(false);

  const handlePressStart = ({ code }) => {
    if (pressed || !equal(watchKey, code)) return;
    setPressed(true);
  };

  const handlePressFinish = ({ code }) => {
    if (!pressed || !equal(watchKey, code)) return;
    setPressed(false);
  };

  useEffect(() => {
    //You can listen to any key press by listening to the "keydown" event
    document.addEventListener("keydown", handlePressStart);
    //you can listen to any key release by listening to the "keyup" event
    document.addEventListener("keyup", handlePressFinish);

    return () => {
      document.removeEventListener("keydown", handlePressStart);
      document.removeEventListener("keyup", handlePressFinish);
    };
  });
  // to keep in mind hooks are tables ;)
  return pressed;
};

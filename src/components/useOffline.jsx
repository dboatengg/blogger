import { useState, useEffect } from "react";
// A custom hook that returns a boolean value indicating whether
// the browser is online or offline, and a setter function to update
// that value manually if needed.
export default function useOffline() {
  // Initialize the state with the navigator.onLine property
  const [online, setIsOnline] = useState(navigator.onLine);

  // Define a functions to handle the online and offline events
  const setOffline = () => {
    alert("You appear to be offline. Posts cannot load offline!");
    setIsOnline(false);
  };

  // Register the event listeners in a useEffect hook
  useEffect(() => {
    window.addEventListener("offline", setOffline);

    // cleanup if we unmount
    return () => {
      window.removeEventListener("offline", setOffline);
    };
  }, []);

  // Return the state and setter as an object
  return { online, setOffline };
}

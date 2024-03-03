import { component$, useSignal } from "@builder.io/qwik";

import qwikLogo from "./assets/qwik.svg";
import viteLogo from "/vite.svg";
import "./app.css";

export const App = component$(() => {
  const count = useSignal(0);

  return (
    <>
      <div className="container"></div>
    </>
  );
});

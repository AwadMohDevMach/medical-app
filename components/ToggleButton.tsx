"use client";

import { ToggleSwitch } from "flowbite-react";
import { useState } from "react";

export default function ToggleButton() {
  const [switch1, setSwitch1] = useState(false);
  return (
    <ToggleSwitch checked={switch1} label="With 2 Hours" onChange={setSwitch1} />

  );
}

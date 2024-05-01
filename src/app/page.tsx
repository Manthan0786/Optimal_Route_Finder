"use client";

import Image from "next/image";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useState } from "react";
import RouteFinder from "./components/routedata";


export default function Home() {
  const [showContent, setShowContent] = useState(true);

  const handleDown = () => {
    setShowContent(!showContent)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header className="fixed w-full bg-white size-16 left-0 top-0 text-lg flex justify-center items-center">
        <p className="text-3xl text-sky-600">Route Finder</p>
      </header>
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="text-6xl text-sky-600">
          Your Optimal Path Finder Application
        </p>
      </div>
      <button onClick={handleDown} className="animate-bounce border border-sky-500 rounded-full p-2 absolute bottom-0">
          <ArrowDownwardIcon fontSize="large" color="primary"/>
      </button>
      {
        showContent && <RouteFinder />
      }
    </main>
  );
}

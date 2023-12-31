import { useState } from "react";
import SendForm from "./components/SendForm";
import emailjs from "@emailjs/browser";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-200 p-10 rounded-lg w-1/2 h-100">
        <h1 className="text-2xl text-indigo-700  pt-6 font-bold uppercase mb-5">
          Send your email
        </h1>
        <SendForm />
      </div>
    </div>
  );
}

export default App;

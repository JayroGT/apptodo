"use client";

import { Form } from '../components/Form';
import { Tasks } from '../components/Tasks';

const ToDos = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-[32px] sm:text-[48px] pb-8 font-sans font-[750] text-blue-950 text-center">Daily To Do List</h1>
      <div className="w-full max-w-[600px]">
        <Form />
      </div>
      <div className="w-full max-w-[600px]">
        <Tasks />
      </div>
    </div>
  );
}

export default ToDos;

import Link from 'next/link'
import { Form } from './components/Form';
import { Tasks } from './components/Tasks';


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-auto">
      <h1 className=' w-[600px] text-[48px] pb-8 font-sans font-[750] text-blue-950'>Daily To Do List</h1>
      <div className='w-[600px]'>
        <Form />
      </div>
      <div className='w-[600px]'>
        <Tasks />
      </div>
      
    </div>


  );
}

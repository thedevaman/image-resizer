import React from "react";

const App = () =>{
  return (
    <div className="bg-gray-200 min-h-screen py-12">
      <div className="mx-auto w-10/12 bg-white rounded-xl p-8 grid grid-cols-2 flex gap-4">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Image Resizer</h1>
        <img 
          src="/sam.png"
          className="rounded-lg"
        />
        <div>
          <form className="flex gap-4">
            <input 
              name="width"
              placeholder="width"
              className="border border-gray-300 p-2 rounded"
              required
            />
            <input 
              name="height"
              placeholder="height"
              className="border border-gray-300 p-2 rounded"
              required
            />
            <button className="bg-indigo-600 text-white font-medium py-2 px-8 rounded hover:bg-green-500 duration-300 hover:scale-105 transtion-transform">Resize</button>
          </form>
        </div>
      </div>
      <div className="space-y-6">
          <h1 className="text-2xl font-bold">Image Result</h1>
         <img 
          src="/sam.png"
          className="rounded-lg"
        />
      </div>
      </div>

    </div>
  )
}

export default App
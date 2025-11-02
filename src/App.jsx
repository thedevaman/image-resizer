import React, { useState } from "react";

const App = () =>{

  const [originalImage,setOriginalImage] = useState('/sam.png')
  const [resizedImage,setResizedImage] = useState('/sam.png')
  const [form, setForm] = useState({
    width:'',
    height:''
  })

  const handleForm = (e) =>{

   const input = e.target
   const name = input.name
   const value = input.value
   setForm({...form,
    [name]:value
   })

  }

  const showImage = (e)=>{
  const input = e.target
  const file = input.files[0]
  const url =  URL.createObjectURL(file)
  setOriginalImage(url)

  }

  const resizeImage = (e)=>{
    e.preventDefault()
    const image = new Image()
    image.src = originalImage
    image.onload = () =>{
    const canvas = document.createElement("canvas")
    const targetHeight = Number(form.height)
    const targetWidth = Number(form.width)
    canvas.width = targetWidth
    canvas.height = targetHeight
    const ctx = canvas.getContext("2d")
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = "high"
    ctx.drawImage(image, 0, 0, targetWidth,targetHeight)
    const imageString = canvas.toDataURL("image/png",0.92)
    
    setResizedImage(imageString)
    }

  }

  return (
    <div className="bg-gray-200 min-h-screen py-12">
      <div className="mx-auto w-10/12 bg-white rounded-xl p-8 grid grid-cols-2 flex gap-4">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Image Resizer</h1>
        <div className="relative h-[500px] bg-gradient-to-br from-slate-900 via-slate-600 to-slate-900 rounded-lg p-4">
        <img 
          src={originalImage}
          className="rounded-lg object-contain w-full h-full"
        />
        <input onChange={showImage} accept="image/*" type="file" className="absolute top-0 left-0 w-full h-full opacity-0"/>
        </div>
        <div>
          <form className="flex gap-4" onSubmit={resizeImage}>
            <input 
              name="width"
              placeholder="width"
              className="border border-gray-300 p-2 rounded"
              required
              onChange={handleForm}
              disabled = {originalImage === "/sam.png"}
              type="number"
            />
            <input 
              name="height"
              placeholder="height"
              className="border border-gray-300 p-2 rounded"
              required
              onChange={handleForm}
              disabled = {originalImage === "/sam.png"}
              type="number"
            />
            <button className="bg-indigo-600 text-white font-medium py-2 px-8 rounded hover:bg-green-500 duration-300 hover:scale-105 transtion-transform">Resize</button>
          </form>
        </div>
      </div>
      <div className="space-y-6">
          <h1 className="text-2xl font-bold">Image Result </h1>
          <div className="h-[500px] bg-slate-900 rounded-lg p-4 flex items-center justify-center overflow-auto">
            <img 
              src={resizedImage}
              className="rounded-lg"
              style={{
                width:form.width,
                height:form.height
              }}
            />
          </div>
      </div>
      </div>

    </div>
  )
}

export default App
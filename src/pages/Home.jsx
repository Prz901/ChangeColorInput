import React, { useState } from 'react'

import image from '../utils/Img_home.svg'

export default function Home() {
  const [words, setWords] = useState([])

  function handleTextInput(event) {
    // if (event[event.length - 1] === ' ' && event[event.length - 2] !== ' ') {
    const palavras = event.split(' ')
    const novasPalavras = palavras.map((element, index) => {
      return { text: element, color: getColor(index) }
    })
    // }
    setWords(novasPalavras)
    console.log('words', words)
  }

  const TextColor = ({ text, color }) => {
    const title = {
      color: color,
      text: text,
    }

    return (
      <>
        <h1 style={{ color: title.color }}>{title.text}</h1>
      </>
    )
  }

  const getColor = (index) => {
    const colors = ['#0d0f16', '#053C78', '#1BC8FC', '#D72483', '#FD3E81']
    return colors[index % colors.length]
  }

  return (
    <div className='h-screen w-full'>
      <div className='flex flex-col items-center'>
        <img src={image} alt='home' className='w-1/4' />
        <div className='mt-10 flex flex-col items-center'>
          <TextColor text={'Insira um texto legal'} color={getColor()} />
          <label className='flex flex-col items-center'>
            <textarea className='outline-none' rows='7' cols='100' onChange={(e) => handleTextInput(e.target.value)} />
          </label>
        </div>
        <div className='flex space-x-5'>
          {words.map((element) => (
            <TextColor text={element.text} color={element.color} />
          ))}
        </div>
      </div>
    </div>
  )
}

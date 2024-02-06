'use client'
import { Text } from '@gravity-ui/uikit'

import './Animation.scss'
import block from 'bem-cn-lite'
import { useState, useRef, useEffect } from 'react'
import React from 'react'
import { serializePageInfos } from 'next/dist/build/utils'

const b = block('big-animation')

type splittedText = {
  char: string
  active: boolean
  visible: boolean
  index: number
}

export default function MainPageAnimation() {
  const baseText = 'console.log("Привет мир!")'.split('')

  const splitText = baseText.map((el, index) => {
    return { char: el, active: false, visible: false, index: index }
  })

  const [splittedText, setSplittedText] =
    React.useState<splittedText[]>(splitText)

  let currentIndex = 0

  useEffect(() => {
    setTimeout(() => {
      const newSplitMassive = splittedText.slice()

      if (currentIndex > 0) {
        newSplitMassive[currentIndex - 1].active = false
      }

      newSplitMassive[currentIndex].visible = true
      newSplitMassive[currentIndex].active = true
      setSplittedText(newSplitMassive)

      if (currentIndex === 0) {
        const id = setInterval(() => {
          const newSplitMassive = splittedText.slice()

          if (currentIndex > 0) {
            newSplitMassive[currentIndex - 1].active = false
          }

          newSplitMassive[currentIndex].visible = true
          newSplitMassive[currentIndex].active = true
          setSplittedText(newSplitMassive)

          currentIndex += 1

          if (currentIndex === splittedText.length) {
            clearInterval(id)
          }
        }, 300)
      }

      currentIndex += 1
    }, 5000)
  }, [])

  return (
    <>
      <div className={b()}>
        <div className={b('working-field')}>
          <div id="phraseElement" className={b('phrase')}>
            {splittedText.map((el) => {
              if (el.char == ' ') {
                return (
                  <div
                    style={{ visibility: 'hidden' }}
                    key={el.index}
                    className="space"
                  >
                    -
                  </div>
                )
              }
              return (
                <Text
                  key={el.index}
                  variant="code-3"
                  className={b('char', {
                    active: el.active,
                    visible: el.visible,
                  })}
                >
                  {el.char}
                </Text>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

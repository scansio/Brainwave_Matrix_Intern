import fs from 'fs'
import { resolve } from 'path'
import IMessage from '../types/messaging/IMessage'

const MESSAGE_FILE_PATH = resolve(__dirname, 'message-ipc')

// Function to trigger the message socket listener
export const startNewMessageListener = (cb: (message: IMessage) => Promise<void>) => {
  fs.watchFile(MESSAGE_FILE_PATH, (curr, prev) => {
    if (curr.mtime > prev.mtime) {
      const data = fs.readFileSync(MESSAGE_FILE_PATH)
      if (!data) return
      const decodedMessage = JSON.parse(`${data}`)
      cb(decodedMessage)
    }
  })
}

export const triggerNewMessageEvent = (message: IMessage) =>
  fs.writeFileSync(MESSAGE_FILE_PATH, `${JSON.stringify(message)}`)

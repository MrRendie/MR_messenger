export type MessageStatus = 'pending' | 'sent' | 'read'

export type MessageType = 'text' | 'image' | 'file' | 'voice'

export type Message = {
  id: string
  chatId: string
  senderId: string
  type: MessageType
  content: string
  createdAt: Date
  status: MessageStatus
  reactions: Record<string, string[]>
  replyTo?: string
}

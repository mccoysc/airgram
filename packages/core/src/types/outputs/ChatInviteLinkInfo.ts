import { ChatPhotoInfo, ChatTypeUnion } from './index'

export type ChatInviteLinkInfoUnion = ChatInviteLinkInfo

/** Contains information about a chat invite link */
export interface ChatInviteLinkInfo {
  _: 'chatInviteLinkInfo'
  /**
   * Chat identifier of the invite link; 0 if the user has no access to the chat before
   * joining
   */
  chatId: number
  /**
   * If non-zero, the remaining time for which read access is granted to the chat, in
   * seconds
   */
  accessibleFor: number
  /** Contains information about the type of the chat */
  type: ChatTypeUnion
  /** Title of the chat */
  title: string
  /** Chat photo; may be null */
  photo?: ChatPhotoInfo
  /** Number of members in the chat */
  memberCount: number
  /** User identifiers of some chat members that may be known to the current user */
  memberUserIds: number[]
  /**
   * True, if the chat is a public supergroup or channel, i.e. it has a username or it
   * is a location-based supergroup
   */
  isPublic: boolean
}

export interface Story {
  link?: string;
  text?: string;
  background?: string;
  color?: string;
  duration?: string;
}

export interface UsersStoryBoard {
  userImage: string;
  userName: string;
  hasNewStories: boolean;
  startIndex: number;
  stories: (string | Story)[];
}

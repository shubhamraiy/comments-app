export interface Comment {
  userId: number;
  id: number;
  title: string;
  body: string;
  rating: number;
}

export interface CommentsState {
  comments: Comment[];
  loading: boolean;
  error: string | null;
}

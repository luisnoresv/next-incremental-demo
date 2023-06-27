export type ResponseContent<T> = {
  data: T[]
}

// * interfaces created only for demo purposes
export interface Post {
  userId: number
  id: number
  title: string
  content: string
}

export interface Todo {
  id: number
  title: string
  completed: boolean
}

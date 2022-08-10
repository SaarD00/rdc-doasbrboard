

export type PostBody = {
    text: string
    username: string
    profileImg: string
    image?: string
    link?: string
    excerpt?: string
  }
  
  
  
  
  export interface Post extends PostBody {
    _id: string
    _createdAt: string
    _updatedAt: string
    _rev: string
    _type: 'post'
  }
  

  

export type DetailBody = {
  username: string
  profileImg: string
  image?: string
  firstext?: string
  secondtext?: string
  categories?: Array
}




export interface Detail extends DetailBody {
  _id: string
  _createdAt: string
  _updatedAt: string
  _rev: string
  _type: 'detail'
}


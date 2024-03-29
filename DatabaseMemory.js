import { randomUUID } from "crypto"


export class databasememory {
  #videos = new Map()

list(){

 return Array.from(this.#videos.entries()).map((videoarray)=>{
  const id = videoarray[0]
  const data = videoarray[1]
  return{
    id,
    ...data,
  }
 })

}

  create(video) {
    const videoID = randomUUID()

    this.#videos.set(videoID, video)
  }

  update(id, video) {
    this.#videos.set(id, video)
  }

  delete(id) {
    this.#videos.delete(id)
  }

}

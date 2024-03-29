//import { createServer } from "node:http"

//request tras as informações
//response devolve uma resposta

//const server = createServer((request, response) => {
//response.write("aaaaaaa")

//return response.end()
//})

//server.listen(3333)

import { fastify } from "fastify"
import { databasememory } from "./DatabaseMemory.js"

const database = new databasememory()
const server = fastify()



server.post("/videos", (request, reply) => {

 const{title, description, duration} = request.body

  database.create({
    title: title,
    description: description,
    duration: duration,
  })
  

  return reply.status(201).send
})

server.get("/videos", () => {
  const videos = database.list()
  
  
  
  return videos
})

server.put("/videos/:id",
  (request, reply) => {
    const videoID = request.params.id
    const { title, description, duration } = request.body

    database.update(videoID, {
      title: title,
      description: description,
      duration: duration,
    })
    return reply.status(204).send()
  })

  server.delete("/videos/:id", (request,reply) => {
    const videoID = request.params.id
    database.delete(videoID)
    return reply.status(204).send()


  })

server.listen({
  port: 3333,
})

import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import { convertHourStringToMinutesad } from './utils/convertHourStringToMinutesad';
import { convertMnutesToHourString } from './utils/convertMnutesToHourString';
const app = express();
const prismaClient = new PrismaClient({
  log: ['query']
})

app.use(express.json());
app.use(cors())

app.get('/games', async (request, response) => {
  const games = await prismaClient.game.findMany({
    include: {
      _count: {
        select:{
          Ad: true,
        }
      }
    }
  })
  return response.status(201).json(games);
});

app.post('/games/:id/ads', async (request, response) => {
  const gameId = request.params.id;
  const body = request.body;

  const ad = await prismaClient.ad.create({
    data:{
      gameId,
      name: body.name,
      yearsplaying: body.yearsplaying,
      discord: body.discord,
      weekDays: body.weekDays.join(','),
      hourStart: convertHourStringToMinutesad(body.hourStart),
      hourEnd: convertHourStringToMinutesad(body.hourEnd),
      seVoiceChannel: body.seVoiceChannel,
    }
  })

  return response.status(201).json(ad)

})

app.get('/games/:id/ads', async (request, response) => {
  const gameId = request.params.id
  const ads = await prismaClient.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      seVoiceChannel: true,
      yearsplaying: true,
      hourStart: true,
      hourEnd: true,
    },
    where: {
      gameId
    },
     orderBy:{
      createdAt: 'desc'
     }
  })
  return response.status(201).json(ads.map(ad => {
    return {
      ...ad,
      weekDays: ad.weekDays.split(','),
      hourStart: convertMnutesToHourString(ad.hourStart),
      hourEnd: convertMnutesToHourString(ad.hourEnd),
    }
  }));
});

app.get('/games/:id/discord', async (request, response) => {
  const adId = request.params.id;

  const ad = await prismaClient.ad.findUniqueOrThrow({
    select:{
      discord: true,
    },
    where:{
      id:adId
    }
  })

  return response.status(201).json(ad);

  
});

app.listen(3333)
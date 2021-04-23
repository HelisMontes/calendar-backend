import express from 'express';
import Events from '../models/Events'

const getEvents = (req: express.Request, res: express.Response ) => {
  return res.status(201).json({
    ok: true,
    msg: 'getEventos'
  });
}
const createEvent = (req: express.Request, res: express.Response ) => {
  // console.log(req.body)  
  return res.status(201).json({
    ok: true,
    msg: 'createEventos'
  });
}
const updateEvent = (req: express.Request, res: express.Response ) =>{
  console.log(req.params);
  return res.status(201).json({
    ok: true,
    msg: 'updateEventos'
  });
}
const deleteEvent = (req: express.Request, res: express.Response ) =>{
  console.log(req.params);
  return res.status(201).json({
    ok: true,
    msg: 'deleteEventos'
  });
}

export {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
}
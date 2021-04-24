import express from 'express';
import Events from '../models/Events'

const getEvents = (req: express.Request, res: express.Response ) => {
  return res.status(201).json({
    ok: true,
    msg: 'getEventos'
  });
}
const createEvent = async(req: express.Request, res: express.Response ) => {
  //console.log(req.body)
  const events = new Events(req.body);
  try {
    const eventsSave = await events.save();
    return res.status(201).json({
      ok: true,
      event: eventsSave
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      ok: true,
      msg: 'Por favor comunicarse con el administrador'
    });
  }

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
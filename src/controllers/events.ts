import express from 'express';
import Events from '../models/Events'

const getEvents = async(req: express.Request, res: express.Response ) => {
 try {
  const listEvents = await Events
    .find()
    .populate('user_id', 'name');
  
  return res.status(201).json({
    ok: true,
    events: listEvents 
  });
   
 } catch (error) {
  console.log(error)
  return res.status(500).json({
    ok: true,
    msg: 'Por favor comunicarse con el administrador'
  });
 }
}
const createEvent = async(req: express.Request, res: express.Response ) => {
  //console.log(req.body)
  const events = new Events(req.body);
  try {
    const eventSave = await events.save();
    return res.status(201).json({
      ok: true,
      event: eventSave
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      ok: true,
      msg: 'Por favor comunicarse con el administrador'
    });
  }
}
const updateEvent = async(req: express.Request, res: express.Response ) =>{
  const user_id = req.body.user_id;
  const eventId = req.params.id;
  try {
    const event:any = await Events.findById(eventId);
    if (!event) {
      return res.status(404).json({
        ok: true,
        msg: 'Este evento no existe'
      });
    }
    if(event.user_id.toString() !== user_id){
      return res.status(401).json({
        ok: true,
        msg: 'No cuenta con los privilegios para realizar esta acción'
      });
    }
    const eventUpdated = {
      ...req.body,
      user_id
    }
    const updated = await Events.findByIdAndUpdate(eventId, eventUpdated, {new: true});
    return res.status(201).json({
      ok:true,
      event: updated
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      ok: true,
      msg: 'Por favor comunicarse con el administrador'
    });
  }
  
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
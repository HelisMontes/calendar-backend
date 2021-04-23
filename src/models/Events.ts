import { model, Schema } from "mongoose"

// Schema
const EventSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  note: {
    type: String,
  },
  start: {
    type: Date,
    require: true,
  },
  end: {
    type: Date,
    require: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario'
  }
});

export default model('Events', EventSchema);
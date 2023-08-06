import type { IAirParticulate } from '../../types/airParticulate.type';
import mongoose, {Document, Schema} from 'mongoose';

export interface IAirParticulateModel extends IAirParticulate, Document {}

const airParticulateSchema: Schema = new Schema({
    date: { type: String, required: true },
    pm1: { type: String, required: true },
    pm25: { type: String, required: true },
    pm10: { type: String, required: true }
});

const AirParticulate = mongoose.model<IAirParticulateModel>('airParticulate', airParticulateSchema);

export default AirParticulate;

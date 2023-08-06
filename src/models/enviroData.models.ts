import type { IEnviroData } from '../../types/enviroData.type';
import mongoose, {Document, Schema} from 'mongoose';

export interface IEnviroDataModel extends IEnviroData, Document {}

const enviroDataSchema: Schema = new Schema({
    date: { type: String, required: true },
    temperature: { type: String, required: true },
    pressure: { type: String, required: true },
    humidity: { type: String, required: true },
    oxidising: { type: String, required: true },
    reducing: { type: String, required: true },
    nh3: { type: String, required: true }
});

export default mongoose.model<IEnviroDataModel>('enviroData', enviroDataSchema);

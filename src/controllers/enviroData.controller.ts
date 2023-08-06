import { Request, Response } from 'express';
import mongoose from 'mongoose';
import EnviroData from '../models/enviroData.models';

const createEnviroData = (req: Request, res: Response) => {
    const enviroData = new EnviroData({
        _id: new mongoose.Types.ObjectId(),
        date: req.body.date,
        temperature: req.body.temperature,
        pressure: req.body.pressure,
        humidity: req.body.humidity,
        oxidising: req.body.oxidising,
        reducing: req.body.reducing,
        nh3: req.body.nh3
    });
    return enviroData
        .save()
        .then((newEnviroData) => {
            return res.status(201).json({
                success: true,
                message: 'New enviro data created successfully',
                EnviroData: newEnviroData,
            });
        })
        .catch((error) => {
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.',
                error: error.message,
            });
        });
}

const getAllEnviroData = (req: Request, res: Response) => {
    EnviroData.find()
        .select('_id date temperature pressure humidity oxidising reducing nh3')
        .then((allEnviroData) => {
            return res.status(200).json({
                success: true,
                message: 'A list of all enviro data',
                EnviroData: allEnviroData,
            });
        })
        .catch((error) => {
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.',
                error: error.message,
            });
        });
}

const getLatestEnviroData = (req: Request, res: Response) => {
    EnviroData.find()
        .findOne()
        .sort({date: -1 })
        .then((latestEnviroData) => {
            return res.status(200).json({
                success: true,
                message: 'Latest enviro data',
                airParticulate: latestEnviroData,
            });
        })
        .catch((error) => {
            res.status(500).json({
                success: false,
                message: 'Server error. Please try again.',
                error: error.message,
            });
        });
}

export default { createEnviroData, getAllEnviroData, getLatestEnviroData};

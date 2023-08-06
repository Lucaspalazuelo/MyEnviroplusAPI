import { Request, Response } from 'express';
import mongoose from 'mongoose';
import AirParticulate from '../models/airParticulate.models';

const createAirParticulateData = (req: Request, res: Response) => {
    const airParticulate = new AirParticulate({
        _id: new mongoose.Types.ObjectId(),
        date: req.body.date,
        pm1: req.body.pm1,
        pm25: req.body.pm25,
        pm10: req.body.pm10
    });
    return airParticulate
        .save()
        .then((newAirParticulate) => {
            return res.status(201).json({
                success: true,
                message: 'New air particulate data created successfully',
                airParticulate: newAirParticulate,
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

const getAllAirParticulate = (req: Request, res: Response) => {
    AirParticulate.find()
        .select('_id date pm1 pm25 pm10')
        .then((allAirParticulate) => {
            return res.status(200).json({
                success: true,
                message: 'A list of all air particulate data',
                airParticulate: allAirParticulate,
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

const getLatestAirParticulate = (req: Request, res: Response) => {
    AirParticulate.find()
        .findOne()
        .sort({date: -1 })
        .then((latestAirParticulate) => {
            return res.status(200).json({
                success: true,
                message: 'Latest air particulate data',
                airParticulate: latestAirParticulate,
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

export default { createAirParticulateData, getAllAirParticulate, getLatestAirParticulate};

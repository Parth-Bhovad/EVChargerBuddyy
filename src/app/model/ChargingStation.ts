import mongoose from "mongoose";

const ChargingStationSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    stationName: { type: String, default: 'Unnamed Station' },
    location: {
        type: { type: String, enum: ['Point'], required: true },
        coordinates: { type: [Number], required: true }
    }
});
// Create a geospatial index on the location field
ChargingStationSchema.index({ location: '2dsphere' });

export const ChargingStation = mongoose.models.ChargingStation || mongoose.model("ChargingStation", ChargingStationSchema);
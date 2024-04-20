import mongoose from 'mongoose'

const { MONGODB_URI, MONGODB_DB_NAME } = process.env

const connectMongoDb = async () => {
  try {
    if (!MONGODB_URI)
      throw new Error('MongoDB connection URI is not specified.')

    if (!MONGODB_DB_NAME) throw new Error('No MongoDB DB name specified.')

    await mongoose.connect(MONGODB_URI, { dbName: MONGODB_DB_NAME })
    console.log('Connected to MongoDB')
  } catch (error) {
    console.log(error)
  }
}

export default connectMongoDb

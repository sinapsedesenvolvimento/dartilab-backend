import { app } from './app.js'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 3000

app.listen(PORT, (error) => {
    if (error) console.log('Error starting server:', error)
    console.log('Server started successfully in PORT:', PORT)
})
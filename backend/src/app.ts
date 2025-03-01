import express from "express"

// Routes
import authRouter from "./api/v1/routes/authRoutes"

const app = express()
app.use(express.json())

app.use("/auth",authRouter)
export default app
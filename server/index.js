import 'dotenv/config'
import express from 'express'
import rateLimit from 'express-rate-limit'
import nodemailer from 'nodemailer'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const app = express()
const port = Number(process.env.PORT || 4174)
const host = process.env.HOST || (process.env.NODE_ENV === 'production' ? '0.0.0.0' : '127.0.0.1')
const smtpPort = Number(process.env.SMTP_PORT || 587)
const contactEmail = process.env.CONTACT_EMAIL || 'shashikalac558@gmail.com'
const allowedOrigins = (process.env.FRONTEND_ORIGINS || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)
const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

app.disable('x-powered-by')
app.use(express.json({ limit: '10kb' }))
app.use('/api/contact', (req, res, next) => {
  const origin = req.get('Origin')
  if (!origin || allowedOrigins.length === 0) return next()
  if (!allowedOrigins.includes(origin)) {
    return res.status(403).json({ error: 'This website is not allowed to use the contact service.' })
  }

  res.set('Access-Control-Allow-Origin', origin)
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.set('Access-Control-Allow-Headers', 'Content-Type')
  res.vary('Origin')
  if (req.method === 'OPTIONS') return res.sendStatus(204)
  return next()
})
app.use(
  '/api/contact',
  rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 5,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
    message: { error: 'Too many messages. Please try again later.' },
  }),
)

const hasMailConfig = Boolean(
  process.env.SMTP_HOST &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASSWORD &&
    contactEmail &&
    Number.isInteger(smtpPort) &&
    smtpPort > 0,
)

const mailer = hasMailConfig
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: smtpPort,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })
  : null

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body ?? {}
  const cleanName = typeof name === 'string' ? name.trim() : ''
  const cleanEmail = typeof email === 'string' ? email.trim() : ''
  const cleanSubject = typeof subject === 'string' ? subject.trim() : ''
  const cleanMessage = typeof message === 'string' ? message.trim() : ''

  if (
    !cleanName ||
    cleanName.length > 100 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail) ||
    cleanEmail.length > 254 ||
    (subject !== undefined && typeof subject !== 'string') ||
    cleanSubject.length > 150 ||
    /[\r\n]/.test(cleanSubject) ||
    !cleanMessage ||
    cleanMessage.length > 5000
  ) {
    return res.status(400).json({ error: 'Enter a valid name, email address, and message.' })
  }

  if (!mailer) {
    return res.status(503).json({ error: `Email delivery is not configured yet. Please email ${contactEmail} directly.` })
  }

  try {
    await mailer.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: contactEmail,
      replyTo: { name: cleanName, address: cleanEmail },
      subject: cleanSubject ? `Portfolio contact: ${cleanSubject}` : `Portfolio contact from ${cleanName}`,
      text: `Name: ${cleanName}\nEmail: ${cleanEmail}${cleanSubject ? `\nSubject: ${cleanSubject}` : ''}\n\n${cleanMessage}`,
    })
    return res.status(202).json({ message: 'Your message has been sent.' })
  } catch (error) {
    console.error('Contact email delivery failed:', error)
    return res.status(502).json({ error: 'I could not send your message just now. Please try again later.' })
  }
})

app.use('/api', (_req, res) => {
  res.status(404).json({ error: 'API route not found.' })
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(rootDir, 'dist')))
  app.get('*', (_req, res) => {
    res.sendFile(path.join(rootDir, 'dist', 'index.html'))
  })
}

app.listen(port, host, () => {
  console.log(`Portfolio server listening at http://${host}:${port}`)
})

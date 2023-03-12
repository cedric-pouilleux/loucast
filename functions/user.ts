// const { PrismaClient } = require('@prisma/client')
// const prisma = new PrismaClient()

exports.handler = () => {
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      user: 'admin'
    })
  }
}

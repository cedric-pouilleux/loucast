// const { PrismaClient } = require('@prisma/client')
// const prisma = new PrismaClient()

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ name: 'test' }),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    }
  }
}

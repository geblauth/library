import mongoose from 'mongoose'

mongoose.Schema.Types.String.set('validate', {
  validator: (valor) => valor !== '',
  message: ({ path }) => `null field provided on ${path}`
})

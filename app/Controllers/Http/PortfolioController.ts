import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PortfoliosController {
   async index ({ view }: HttpContextContract) {
      return view.render('sections/index')
   }
}

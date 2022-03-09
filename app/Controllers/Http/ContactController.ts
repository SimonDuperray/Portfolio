import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ContactService } from 'App/Services/ContactService'

export default class ContactsController {
   async store({ request, session, response }: HttpContextContract) {
      ContactService.send(request.all() as any)
      session.flash('success', 'Your email has been sent successfully !')
      return response.redirect().back()
   }
}

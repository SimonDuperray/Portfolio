import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { ContactService } from 'App/Services/ContactService'
import ContactMeValidator from 'App/Validators/ContactMeValidator'

export default class ContactsController {
   async store({ request, session, response }: HttpContextContract) {
      ContactService.send(await request.validate(ContactMeValidator) as any)
      session.flash('success', 'Your email has been sent successfully !')
      return response.redirect().back()
   }
}

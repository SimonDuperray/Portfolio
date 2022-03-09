import { rules, schema, validator } from '@ioc:Adonis/Core/Validator';
import Mail from '@ioc:Adonis/Addons/Mail';

export class ContactService {
   static async send (params: Record<string, any>) {
      const payload = await validator.validate({
         schema: schema.create({
            name: schema.string({ trim: true }),
            email: schema.string({ trim: true }, [
               rules.email()
            ]),
            message: schema.string({ trim: true }),
         }),
         data: params
      })
      await Mail.send((message) => {
         message
            .from(payload.email)
            .to('contact.simonduperray@gmail.com')
            .subject('demande de contact')
            .htmlView('emails/contact', payload)
      })
   }
} 
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ContactMeValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    name: schema.string({ trim: true }),
    email: schema.string({ trim: true }, [
      rules.email(),
    ]),
    subject: schema.string({ trim: true }, [
      rules.maxLength(100),
      rules.minLength(5)
    ]),
    message: schema.string({ trim: true }, [
      rules.minLength(5),
    ]),
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages = {
    'name.required': 'You have to fill your name.',
    'email.required': 'You have to fill your email.',
    'email': 'Your mail does not seems to a valid one...',
    'subject.required': 'You have to fill a subject.',
    'subject.minLength': 'Your subject must be at least 5 characters long.',
    'subject.maxLength': 'Your subject must be at most 100 characters long.',
    'message.required': 'You have to fill your message.',
    'message.minLength': 'Your message must be at least 5 characters long.'
  }
}

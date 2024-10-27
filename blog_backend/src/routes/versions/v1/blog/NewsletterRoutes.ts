import { getObject } from '../../../../common'
import { AuthenticationLevel } from '../../../../configs/constants'
import Newsletter from '../../../../controllers/blog/Newsletter'
import { NewsletterSchema } from '../../../../models/blog/NewsletterModel'
import { IControllerRoute } from '../../../interfaces/IControllerRoute'
import { RequestMethods } from '../../../RequestMethods'

const NewsletterRoutes: IControllerRoute = {
  tag: 'Newsletter',
  controller: Newsletter,
  baseUrl: '/newsletter',
  routes: [
    {
      path: '/newsletter/all',
      validation: { query: { q: {} } },

      controllerMemberFunctionIdentifier: Newsletter.prototype.all,
      method: RequestMethods.GET,
      metadata: {
        summary: 'Get all newsletters',
      },
      requireAuthentication: AuthenticationLevel.END_USER,
    },
    {
      path: '/newsletter/:id([0-9a-fA-F]{24})',
      validation: {
        param: {
          id: {
            notEmpty: {},
          },
        },
      },
      method: RequestMethods.GET,
      metadata: {
        summary: 'Get newsletter by id',
      },
      requireAuthentication: AuthenticationLevel.END_USER,
    },
    {
      path: '/newsletter',
      method: RequestMethods.POST,
      metadata: {
        summary: 'Create newsletter',
      },
      requireAuthentication: AuthenticationLevel.END_USER,
    },
    {
      path: '/newsletter',
      method: RequestMethods.PATCH,
      metadata: {
        summary: 'Update newsletter',
      },
      requireAuthentication: AuthenticationLevel.ADMIN,
    },
    {
      path: '/newsletter/:id([0-9a-fA-F]{24})',
      validation: {
        param: {
          id: {
            notEmpty: {},
          },
        },
      },
      method: RequestMethods.DELETE,
      metadata: {
        summary: 'Delete newsletter',
      },
      requireAuthentication: AuthenticationLevel.ADMIN,
    },
  ],
  schema: getObject(NewsletterSchema),
  description: 'Operation on newsletter',
}

export default NewsletterRoutes

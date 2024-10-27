import { getObject } from '../../../../common'
import { AuthenticationLevel } from '../../../../configs/constants'
import Reply from '../../../../controllers/blog/Reply'
import { ReplySchema } from '../../../../models/blog/ReplyModel'
import { IControllerRoute } from '../../../interfaces/IControllerRoute'
import { RequestMethods } from '../../../RequestMethods'

const ReplyRoutes: IControllerRoute = {
  tag: 'Reply',
  controller: Reply,
  baseUrl: '/reply',
  routes: [
    {
      path: '/reply/all',
      validation: { query: { q: {} } },

      controllerMemberFunctionIdentifier: Reply.prototype.all,
      method: RequestMethods.GET,
      metadata: {
        summary: 'Get all replys',
      },
      requireAuthentication: AuthenticationLevel.END_USER,
    },
    {
      path: '/reply/:id([0-9a-fA-F]{24})',
      validation: {
        param: {
          id: {
            notEmpty: {},
          },
        },
      },
      method: RequestMethods.GET,
      metadata: {
        summary: 'Get reply by id',
      },
      requireAuthentication: AuthenticationLevel.END_USER,
    },
    {
      path: '/reply',
      method: RequestMethods.POST,
      metadata: {
        summary: 'Create reply',
      },
      requireAuthentication: AuthenticationLevel.END_USER,
    },
    {
      path: '/reply',
      method: RequestMethods.PATCH,
      metadata: {
        summary: 'Update reply',
      },
      requireAuthentication: AuthenticationLevel.ADMIN,
    },
    {
      path: '/reply/:id([0-9a-fA-F]{24})',
      validation: {
        param: {
          id: {
            notEmpty: {},
          },
        },
      },
      method: RequestMethods.DELETE,
      metadata: {
        summary: 'Delete reply',
      },
      requireAuthentication: AuthenticationLevel.ADMIN,
    },
  ],
  schema: getObject(ReplySchema),
  description: 'Operation on reply',
}

export default ReplyRoutes

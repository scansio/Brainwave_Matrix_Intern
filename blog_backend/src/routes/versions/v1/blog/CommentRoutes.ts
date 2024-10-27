import { getObject } from '../../../../common'
import { AuthenticationLevel } from '../../../../configs/constants'
import Comment from '../../../../controllers/blog/Comment'
import { CommentSchema } from '../../../../models/blog/CommentModel'
import { IControllerRoute } from '../../../interfaces/IControllerRoute'
import { RequestMethods } from '../../../RequestMethods'

const CommentRoutes: IControllerRoute = {
  tag: 'Comment',
  controller: Comment,
  baseUrl: '/article',
  routes: [
    {
      path: '/article/all',
      validation: { query: { q: {} } },

      controllerMemberFunctionIdentifier: Comment.prototype.all,
      method: RequestMethods.GET,
      metadata: {
        summary: 'Get all articles',
      },
      requireAuthentication: AuthenticationLevel.END_USER,
    },
    {
      path: '/article/:id([0-9a-fA-F]{24})',
      validation: {
        param: {
          id: {
            notEmpty: {},
          },
        },
      },
      method: RequestMethods.GET,
      metadata: {
        summary: 'Get article by id',
      },
      requireAuthentication: AuthenticationLevel.END_USER,
    },
    {
      path: '/article',
      method: RequestMethods.POST,
      metadata: {
        summary: 'Create article',
      },
      requireAuthentication: AuthenticationLevel.END_USER,
    },
    {
      path: '/article',
      method: RequestMethods.PATCH,
      metadata: {
        summary: 'Update article',
      },
      requireAuthentication: AuthenticationLevel.ADMIN,
    },
    {
      path: '/article/:id([0-9a-fA-F]{24})',
      validation: {
        param: {
          id: {
            notEmpty: {},
          },
        },
      },
      method: RequestMethods.DELETE,
      metadata: {
        summary: 'Delete article',
      },
      requireAuthentication: AuthenticationLevel.ADMIN,
    },
  ],
  schema: getObject(CommentSchema),
  description: 'Operation on article',
}

export default CommentRoutes

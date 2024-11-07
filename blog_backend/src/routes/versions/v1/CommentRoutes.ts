import { getObject } from '../../../common'
import { AuthenticationLevel } from '../../../configs/constants'
import Comment from '../../../controllers/blog/Comment'
import { CommentSchema } from '../../../models/blog/CommentModel'
import { IControllerRoute } from '../../interfaces/IControllerRoute'
import { RequestMethods } from '../../RequestMethods'

const CommentRoutes: IControllerRoute = {
  tag: 'Comment',
  controller: Comment,
  baseUrl: '/comment',
  routes: [
    {
      path: '/comment/all',
      validation: { query: { q: {} } },

      controllerMemberFunctionIdentifier: Comment.prototype.all,
      method: RequestMethods.GET,
      metadata: {
        summary: 'Get all comments',
      },
      requireAuthentication: AuthenticationLevel.END_USER,
    },
    {
      path: '/comment/like/:id([0-9a-fA-F]{24})',
      controllerMemberFunctionIdentifier: Comment.prototype.like,
      validation: {
        param: {
          id: {
            notEmpty: {},
          },
        },
      },
      method: RequestMethods.GET,
      metadata: {
        summary: 'Like a Comment by id',
      },
      requireAuthentication: AuthenticationLevel.END_USER,
    },
    {
      path: '/comment/:id([0-9a-fA-F]{24})',
      validation: {
        param: {
          id: {
            notEmpty: {},
          },
        },
      },
      method: RequestMethods.GET,
      metadata: {
        summary: 'Get comment by id',
      },
      requireAuthentication: AuthenticationLevel.END_USER,
    },
    {
      path: '/comment',
      method: RequestMethods.POST,
      metadata: {
        summary: 'Create comment',
      },
      requireAuthentication: AuthenticationLevel.END_USER,
    },
    {
      path: '/comment',
      method: RequestMethods.PATCH,
      metadata: {
        summary: 'Update comment',
      },
      requireAuthentication: AuthenticationLevel.ADMIN,
    },
    {
      path: '/comment/:id([0-9a-fA-F]{24})',
      validation: {
        param: {
          id: {
            notEmpty: {},
          },
        },
      },
      method: RequestMethods.DELETE,
      metadata: {
        summary: 'Delete comment',
      },
      requireAuthentication: AuthenticationLevel.ADMIN,
    },
  ],
  schema: getObject(CommentSchema),
  description: 'Operation on comment',
}

export default CommentRoutes

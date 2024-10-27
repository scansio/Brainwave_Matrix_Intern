import { getObject } from '../../../common'
import { AuthenticationLevel } from '../../../configs/constants'
import Tag from '../../../controllers/blog/Tag'
import { TagSchema } from '../../../models/blog/TagModel'
import { IControllerRoute } from '../../interfaces/IControllerRoute'
import { RequestMethods } from '../../RequestMethods'

const TagRoutes: IControllerRoute = {
  tag: 'Tag',
  controller: Tag,
  baseUrl: '/tag',
  routes: [
    {
      path: '/tag/all',
      validation: { query: { q: {} } },

      controllerMemberFunctionIdentifier: Tag.prototype.all,
      method: RequestMethods.GET,
      metadata: {
        summary: 'Get all tags',
      },
    },
    {
      path: '/tag/:id([0-9a-fA-F]{24})',
      validation: {
        param: {
          id: {
            notEmpty: {},
          },
        },
      },
      method: RequestMethods.GET,
      metadata: {
        summary: 'Get tag by id',
      },
    },
    {
      path: '/tag',
      method: RequestMethods.POST,
      metadata: {
        summary: 'Create tag',
      },
      requireAuthentication: AuthenticationLevel.END_USER,
    },
    {
      path: '/tag',
      method: RequestMethods.PATCH,
      metadata: {
        summary: 'Update tag',
      },
      requireAuthentication: AuthenticationLevel.END_USER,
    },
    {
      path: '/tag/:id([0-9a-fA-F]{24})',
      validation: {
        param: {
          id: {
            notEmpty: {},
          },
        },
      },
      method: RequestMethods.DELETE,
      metadata: {
        summary: 'Delete tag',
      },
      requireAuthentication: AuthenticationLevel.ADMIN,
    },
  ],
  schema: getObject(TagSchema),
  description: 'Operation on tag',
}

export default TagRoutes

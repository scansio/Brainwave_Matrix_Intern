import { getObject } from '../../../common'
import { AuthenticationLevel } from '../../../configs/constants'
import Article from '../../../controllers/blog/Article'
import { ArticleSchema } from '../../../models/blog/ArticleModel'
import { IControllerRoute } from '../../interfaces/IControllerRoute'
import { RequestMethods } from '../../RequestMethods'

const ArticleRoutes: IControllerRoute = {
  tag: 'Article',
  controller: Article,
  baseUrl: '/article',
  routes: [
    {
      path: '/article/all',
      validation: { query: { q: {} } },

      controllerMemberFunctionIdentifier: Article.prototype.all,
      method: RequestMethods.GET,
      metadata: {
        summary: 'Get all articles',
      },
    },
    {
      path: '/article/slug/:slug',
      validation: { param: { slug: {} } },

      controllerMemberFunctionIdentifier: Article.prototype.slug,
      method: RequestMethods.GET,
      metadata: {
        summary: 'Get an article by slug',
      },
    },
    {
      path: '/article/like/:id([0-9a-fA-F]{24})',
      controllerMemberFunctionIdentifier: Article.prototype.like,
      validation: {
        param: {
          id: {
            notEmpty: {},
          },
        },
      },
      method: RequestMethods.GET,
      metadata: {
        summary: 'Like a Article by id',
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
    },
    {
      path: '/article/read',
      method: RequestMethods.POST,
      controllerMemberFunctionIdentifier: Article.prototype.read,
      metadata: {
        summary: 'Mark article read for a user',
      },
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
      method: RequestMethods.DELETE,
      metadata: {
        summary: 'Delete article',
      },
      requireAuthentication: AuthenticationLevel.ADMIN,
    },
  ],
  schema: getObject(ArticleSchema),
  description: 'Operation on article',
}

export default ArticleRoutes

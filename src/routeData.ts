
import { defineRouteMiddleware } from '@astrojs/starlight/route-data';
import { isProjectResource } from './projectResources';

export const onRequest = defineRouteMiddleware((context) => {
  const route = context.locals.starlightRoute;
  const pathname = context.url.pathname;
  if (isProjectResource(pathname)) route.hasSidebar = true;

  if (['/learn', '/join', '/build', '/resources/history'].includes(pathname.replace(/\/$/, ''))) {
    route.hasSidebar = false;
  }

});

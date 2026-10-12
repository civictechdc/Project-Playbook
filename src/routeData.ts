
import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

export const onRequest = defineRouteMiddleware((context) => {
  const route = context.locals.starlightRoute;
  const pathname = context.url.pathname;

  if (['/learn', '/join', '/build', '/resources/history'].includes(pathname.replace(/\/$/, ''))) {
    route.hasSidebar = false;
  }

});

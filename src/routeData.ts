
import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

export const onRequest = defineRouteMiddleware((context) => {
  const route = context.locals.starlightRoute;
  const pathname = context.url.pathname;

  if (pathname.startsWith('/build/incubatortrack')) {
    route.sidebar = route.sidebar.filter(
      (item) => item.type === 'group' && item.label === 'Incubator'
    );
  } else if (pathname.startsWith('/resources/')) {
    route.sidebar = route.sidebar.filter(
      (item) => item.type === 'group' && item.label === 'Project Guides'
    );
  }
});

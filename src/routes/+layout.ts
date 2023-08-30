import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ route }) => {
  return {
    route: route && route.id ? route.id : '/',
  };
};

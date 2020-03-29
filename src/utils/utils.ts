const SCHEME = /^[a-z][a-z0-9+\-.]*:/;

export const openURL = async (url: string | undefined | null, ev: Event | undefined | null,): Promise<boolean> => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router') as any;
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, 'forward');
    }
  }
  return false;
};
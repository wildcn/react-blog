export const LOAD_APPS = 'mis/global/LOAD_APPS';
export const LOAD_APPS_SUCCESS = 'mis/global/LOAD_APPS_SUCCESS';

/* ----- app ----- */
export function loadApps(uid) {
  return {
    type: LOAD_APPS,
    uid,
  };
}

export function appLoaded(apps, permission) {
  return {
    type: LOAD_APPS_SUCCESS,
    apps,
    permission,
  };
}

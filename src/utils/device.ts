export type DeviceOS = 'ios' | 'android' | 'unknown'

export function getOS(): DeviceOS {
  const ua = navigator.userAgent || navigator.vendor

  if (/iPad|iPhone|iPod/.test(ua)) return 'ios'
  if (/android/i.test(ua)) return 'android'
  return 'unknown'
}

import { useEffect, useState } from 'react'
import { getOS, type DeviceOS } from './utils/device'
import APP_CONFIG from './utils/deeplink'
import './App.css'

type Status = 'detecting' | 'redirecting' | 'fallback'

function App() {
  const [os, setOs] = useState<DeviceOS | null>(null)
  const [status, setStatus] = useState<Status>('detecting')

  useEffect(() => {
    const detected = getOS()
    setOs(detected)

    if (detected === 'unknown') {
      setStatus('fallback')
      return
    }

    setStatus('redirecting')

    // 딥링크로 앱 열기 시도
    window.location.href = APP_CONFIG.deepLink[detected]

    // 앱이 없으면 2초 후 스토어로 이동
    const timer = setTimeout(() => {
      setStatus('fallback')
      window.location.href = APP_CONFIG.storeUrl[detected]
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="container">
      <div className="card">
        <img src={APP_CONFIG.icon} alt={APP_CONFIG.name} className="app-icon" />
        <h1 className="app-name">{APP_CONFIG.name}</h1>

        {status === 'detecting' && (
          <div className="status">
            <div className="spinner" />
            <p>디바이스 확인 중...</p>
          </div>
        )}

        {status === 'redirecting' && (
          <div className="status">
            <div className="spinner" />
            <p>앱을 여는 중...</p>
            <p className="sub">앱이 열리지 않으면 아래 버튼을 눌러주세요</p>
          </div>
        )}

        {status === 'fallback' && os === 'unknown' && (
          <div className="status">
            <p>모바일 기기에서 접속해주세요</p>
            <div className="store-buttons">
              <a href={APP_CONFIG.storeUrl.ios} className="store-btn ios">
                App Store에서 열기
              </a>
              <a href={APP_CONFIG.storeUrl.android} className="store-btn android">
                Play Store에서 열기
              </a>
            </div>
          </div>
        )}

        {status !== 'detecting' && os !== 'unknown' && os !== null && (
          <div className="store-buttons">
            <a href={APP_CONFIG.storeUrl[os]} className={`store-btn ${os}`}>
              {os === 'ios' ? 'App Store' : 'Play Store'}에서 열기
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default App

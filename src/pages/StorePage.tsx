import { useLocation, Navigate } from 'react-router-dom'
import type { DeviceOS } from '../utils/device'
import APP_CONFIG from '../utils/deeplink'
import '../App.css'

function StorePage() {
  const location = useLocation()
  const os = (location.state as { os?: DeviceOS })?.os

  if (!os || os === 'unknown') {
    return <Navigate to="/" replace />
  }

  const storeName = os === 'ios' ? 'App Store' : 'Play Store'

  return (
    <div className="container">
      <div className="card">
        <img src={APP_CONFIG.icon} alt={APP_CONFIG.name} className="app-icon" />
        <h1 className="app-name">{APP_CONFIG.name}</h1>

        <div className="status">
          <p>아래 버튼을 눌러주세요</p>
        </div>

        <div className="store-buttons">
          <a href={APP_CONFIG.storeUrl[os]} className={`store-btn ${os}`}>
            {storeName}에서 열기
          </a>
        </div>
      </div>
    </div>
  )
}

export default StorePage

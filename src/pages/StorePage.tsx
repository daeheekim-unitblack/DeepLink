import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import type { DeviceOS } from '../utils/device'
import APP_CONFIG from '../utils/deeplink'
import '../App.css'

function StorePage() {
  const location = useLocation()
  const navigate = useNavigate()
  const os = (location.state as { os?: DeviceOS })?.os

  useEffect(() => {
    if (!os || os === 'unknown') {
      navigate('/')
      return
    }

    window.location.href = APP_CONFIG.storeUrl[os]
  }, [os, navigate])

  if (!os || os === 'unknown') return null

  return (
    <div className="container">
      <div className="card">
        <img src={APP_CONFIG.icon} alt={APP_CONFIG.name} className="app-icon" />
        <h1 className="app-name">{APP_CONFIG.name}</h1>

        <div className="status">
          <div className="spinner" />
          <p>{os === 'ios' ? 'App Store' : 'Play Store'}로 이동 중...</p>
        </div>

        <div className="store-buttons">
          <a href={APP_CONFIG.storeUrl[os]} className={`store-btn ${os}`}>
            {os === 'ios' ? 'App Store' : 'Play Store'}에서 열기
          </a>
        </div>
      </div>
    </div>
  )
}

export default StorePage

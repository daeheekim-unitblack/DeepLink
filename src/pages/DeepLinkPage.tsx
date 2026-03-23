import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getOS } from '../utils/device'
import APP_CONFIG from '../utils/deeplink'
import '../App.css'

function DeepLinkPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const detected = getOS()
    if (detected !== 'unknown') {
      navigate('/store', { state: { os: detected } })
    }
  }, [navigate])

  return (
    <div className="container">
      <div className="card">
        <img src={APP_CONFIG.icon} alt={APP_CONFIG.name} className="app-icon" />
        <h1 className="app-name">{APP_CONFIG.name}</h1>

        <div className="status">
          <div className="spinner" />
          <p>디바이스 확인 중...</p>
        </div>

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
      </div>
    </div>
  )
}

export default DeepLinkPage

import { Link } from 'react-router-dom'
import { getOS } from '../utils/device'
import APP_CONFIG from '../utils/deeplink'
import '../App.css'

function DeepLinkPage() {
  const os = getOS()

  return (
    <div className="container">
      <div className="card">
        <img src={APP_CONFIG.icon} alt={APP_CONFIG.name} className="app-icon" />
        <h1 className="app-name">{APP_CONFIG.name}</h1>

        {os === 'ios' && (
          <div className="store-buttons">
            <Link to="/store" state={{ os: 'ios' }} className="store-btn ios">
              App Store에서 열기
            </Link>
          </div>
        )}

        {os === 'android' && (
          <div className="store-buttons">
            <Link to="/store" state={{ os: 'android' }} className="store-btn android">
              Play Store에서 열기
            </Link>
          </div>
        )}

        {os === 'unknown' && (
          <div className="status">
            <p>모바일 기기에서 접속해주세요</p>
            <div className="store-buttons">
              <Link to="/store" state={{ os: 'ios' }} className="store-btn ios">
                App Store에서 열기
              </Link>
              <Link to="/store" state={{ os: 'android' }} className="store-btn android">
                Play Store에서 열기
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default DeepLinkPage

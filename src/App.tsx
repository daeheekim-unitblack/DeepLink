import { useState } from 'react'
import { getOS } from './utils/device'
import APP_CONFIG from './utils/deeplink'
import './App.css'

function App() {
  // index.html에서 모바일은 이미 리다이렉트됨
  // 여기는 PC 등 리다이렉트 안 된 경우의 fallback UI
  const [os] = useState(() => getOS())

  return (
    <div className="container">
      <div className="card">
        <img src={APP_CONFIG.icon} alt={APP_CONFIG.name} className="app-icon" />
        <h1 className="app-name">{APP_CONFIG.name}</h1>

        {os === 'unknown' && (
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

        {os !== 'unknown' && (
          <div className="status">
            <div className="spinner" />
            <p>스토어로 이동 중...</p>
            <div className="store-buttons">
              <a href={APP_CONFIG.storeUrl[os]} className={`store-btn ${os}`}>
                {os === 'ios' ? 'App Store' : 'Play Store'}에서 열기
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App

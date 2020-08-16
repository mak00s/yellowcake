import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Theme by{' '}
          <a href="https://thriveweb.com.au/">Thrive</a>.
        </span>
        <span>　<a href="/contact/">お問い合わせ</a></span>
      </div>
    </footer>
  </div>
)

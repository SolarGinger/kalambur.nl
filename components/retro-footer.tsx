'use client'

import { useState, useEffect } from 'react'

export function RetroFooter() {
  const [count, setCount] = useState('000000')

  useEffect(() => {
    const num = Math.floor(Math.random() * 50000) + 134567
    setCount(num.toString().padStart(6, '0'))
  }, [])

  return (
    <footer className="retro-footer">
      <div style={{ marginBottom: '8px' }}>
        <span style={{
          fontFamily: 'Arial Black, Arial, sans-serif',
          fontSize: '12px',
        }}>
          {'Счётчик посещений:'}
        </span>
      </div>
      <div className="visitor-counter" style={{ justifyContent: 'center' }}>
        {count.split('').map((digit, i) => (
          <span key={i} className="digit">{digit}</span>
        ))}
      </div>
      <div style={{ margin: '10px 0' }}>
        <span className="blink" style={{ color: '#d84315', fontSize: '14px' }}>{'★'}</span>
        {' '}
        <a href="#" style={{
          fontFamily: 'Arial Black, Arial, sans-serif',
          fontSize: '12px',
          color: '#d84315',
        }}>
          {'[ Гостевая книга ]'}
        </a>
        {' '}
        <span className="blink" style={{ color: '#d84315', fontSize: '14px' }}>{'★'}</span>
      </div>
      <div style={{
        border: '2px inset #bcaaa4',
        background: '#efebe9',
        padding: '10px',
        margin: '8px auto',
        maxWidth: '400px',
        borderRadius: '4px',
        fontSize: '12px',
        fontFamily: 'Verdana, sans-serif',
      }}>
        <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
          {'Гостевая книга (последняя запись):'}
        </div>
        <div style={{ fontStyle: 'italic', color: '#5d4037' }}>
          {'"Классный сайт!!! Добавьте ещё рецептов хинкали плиз))) — ЛенОк_87, Роттердам"'}
        </div>
      </div>
      <div style={{ marginTop: '10px', fontSize: '11px', color: '#8d6e63' }}>
        <div>
          {'Сделано на HTML с любовью ♥'}
        </div>
        <div style={{ marginTop: '4px', fontWeight: 'bold' }}>
          {'© каламбур.nl, 2004-2026'}
        </div>
        <div style={{ marginTop: '2px', fontSize: '10px' }}>
          {'Оптимизировано для Internet Explorer 6.0 | Разрешение 1024×768'}
        </div>
      </div>
    </footer>
  )
}

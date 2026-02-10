const menuItems = [
  { label: 'Главная', href: '/' },
  { label: 'Новости', href: '#news' },
  { label: 'Астрология', href: '#horoscope' },
  { label: 'Объявления', href: '#' },
  { label: 'Хинкальные', href: '#' },
  { label: 'Азиатки (18+)', href: '#' },
]

export function LeftMenu() {
  return (
    <div className="retro-panel">
      <div className="retro-panel-header">
        {'☰ МЕНЮ'}
      </div>
      <div style={{ padding: '8px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {menuItems.map((item) => (
            <a key={item.label} href={item.href} className="xp-button">
              {'▸ '}{item.label}
            </a>
          ))}
        </div>
        <div style={{
          marginTop: '12px',
          padding: '8px',
          background: '#fff9c4',
          border: '1px dashed #ffb74d',
          borderRadius: '4px',
          fontSize: '11px',
          textAlign: 'center',
          fontFamily: 'Verdana, sans-serif'
        }}>
          <div style={{ fontWeight: 'bold', color: '#d84315', marginBottom: '4px' }}>
            {'На сайте сейчас:'}
          </div>
          <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#e65100' }}>
            {'14'}
          </div>
          <div>{'посетителей'}</div>
        </div>
        <div style={{
          marginTop: '10px',
          textAlign: 'center',
          fontSize: '20px',
          lineHeight: '1'
        }}>
          <span className="sparkle">{'✦'}</span>
          {' '}
          <span className="sparkle" style={{ animationDelay: '0.3s' }}>{'★'}</span>
          {' '}
          <span className="sparkle" style={{ animationDelay: '0.6s' }}>{'✦'}</span>
        </div>
      </div>
    </div>
  )
}

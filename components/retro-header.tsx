export function RetroHeader() {
  return (
    <>
      <header className="site-header">
        <div style={{ fontSize: '18px', color: '#ff6d00' }}>
          {'~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~'}
        </div>
        <h1>
          {'{ '}<span style={{ color: '#e65100' }}>Каламбур</span>.nl{' }'}
        </h1>
        <p>{'Ваш любимый портал с 2004 года! ★ Новости ★ Астрология ★ Объявления ★'}</p>
        <div style={{ fontSize: '18px', color: '#ff6d00' }}>
          {'~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~'}
        </div>
      </header>
      <div className="retro-marquee">
        <marquee scrollamount={4}>
          <a href="/vote">
            {'>>> ★★★ ГОЛОСУЕМ ЗА НОВЫЙ КОСТЮМ ДЛЯ ДАВИДА! Нажми сюда! ★★★ <<<'}
          </a>
          {'     |||     '}
          <span className="blink" style={{ color: '#fff176' }}>{'НОВОЕ!'}</span>
          {' Топ 5 хинкальных Бенелюкса — читай в новостях!     |||     '}
          {'Верка Сердючка едет в Амстердам! Не пропусти! ★'}
        </marquee>
      </div>
    </>
  )
}

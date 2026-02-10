'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const calendarEvents: Record<number, string> = {
  12: 'перенос блинов с января',
  21: 'перенос чая с декабря',
  26: 'встреча отменена',
}

const zodiacSigns = [
  { sign: 'Овен', symbol: '\u2648' },
  { sign: 'Телец', symbol: '\u2649' },
  { sign: 'Близнецы', symbol: '\u264A' },
  { sign: 'Рак', symbol: '\u264B' },
  { sign: 'Лев', symbol: '\u264C' },
  { sign: 'Дева', symbol: '\u264D' },
  { sign: 'Весы', symbol: '\u264E' },
  { sign: 'Скорпион', symbol: '\u264F' },
  { sign: 'Стрелец', symbol: '\u2650' },
  { sign: 'Козерог', symbol: '\u2651' },
  { sign: 'Водолей', symbol: '\u2652' },
  { sign: 'Рыбы', symbol: '\u2653' },
]

const horoscopes = [
  'Сегодня тебе повезёт, если не возьмёшь трубку от бывшего.',
  'Звёзды говорят: не ходи сегодня в IKEA, вернёшься с тележкой ненужного.',
  'Финансовый прорыв возможен, если найдёшь 2 евро в старой куртке.',
  'Любовь ждёт тебя за углом. Буквально. У соседнего подъезда.',
  'Сегодня отличный день для новых начинаний. Например, можно наконец помыть посуду.',
  'Ретроградный Меркурий закончился, но ваш Wi-Fi всё равно будет глючить.',
  'Удачный день для шопинга! Особенно если у вас нет денег — тогда вы ничего не потратите.',
  'Сегодня вас ждёт сюрприз на работе. Скорее всего, внеплановое совещание.',
  'Звёзды рекомендуют: ешьте больше хинкали. Это не астрология, просто совет.',
  'Ваша харизма сегодня на максимуме. Используйте это, чтобы убедить кота слезть со стола.',
  'Творческая энергия зашкаливает! Время написать пост в гостевую книгу.',
  'Будьте осторожны с огнём. Особенно если готовите на корейском барбекю.',
]

const menuItems = [
  { label: 'Главная', href: '/', external: false },
  { label: 'Новости', href: '/news/', external: false },
  { label: 'Астрология', href: '/astrology/', external: false },
  { label: 'Азиатки (18+)', href: 'https://123av.com', external: true },
]

const newsItems = [
  {
    id: 1,
    title: '12 секретов знакомства с азиатками, автор И. Пугачёв',
    text: 'Игорь Пугачёв (@spnlck) раскрывает 12 шокирующих секретов!',
    image: null as string | null,
    headerBg: '#ffcc80',
    bodyBg: '#fffde7',
    link: '/news/asian-secrets' as string | undefined,
  },
  {
    id: 2,
    title: 'Голосуем за костюм для Давида!',
    text: 'Друзья! Давид снова выступает аниматором на нашем корпоративе, и ему нужен НОВЫЙ костюм! Голосование уже открыто — выбирай из 5 шедевров!',
    image: null,
    headerBg: '#ef9a9a',
    bodyBg: '#fce4ec',
    link: '/vote',
  },
  {
    id: 3,
    title: 'Топ 5 хинкальных Бенелюкса',
    text: 'Олег Нижник (@Odomontois) тестировал все хинкальные \u2014 \u21161 шокирует!',
    image: '/images/khinkali.jpg',
    headerBg: '#a5d6a7',
    bodyBg: '#e8f5e9',
    link: '/news/hinkali-top',
  },
  {
    id: 4,
    title: 'Мы посетили корейскую барбекюшную: фотоотчёт',
    text: '@ilon_essa: мясо жарится САМО! Тайны корейского дыма!',
    image: '/images/asian-food.jpg',
    headerBg: '#ffcc80',
    bodyBg: '#fff8e1',
    link: '/news/kbbq-report',
  },
  {
    id: 5,
    title: 'В Амстердам едет Верка Сердючка!',
    text: 'Верка на Red Light District? Твиттер в шоке!',
    image: '/images/serduchka.jpg',
    headerBg: '#ce93d8',
    bodyBg: '#f3e5f5',
    link: '/news/verkka-amsterdam',
  },
]

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [zodiac, setZodiac] = useState<typeof zodiacSigns[0] | null>(null)
  const [horoscope, setHoroscope] = useState('')
  const [visitorCount, setVisitorCount] = useState('000000')
  const [weather, setWeather] = useState<{ temp: number; description: string; icon: string } | null>(null)
  const [moon, setMoon] = useState<{ phase: string; emoji: string; illumination: number } | null>(null)

  useEffect(() => {
    setZodiac(zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)])
    setHoroscope(horoscopes[Math.floor(Math.random() * horoscopes.length)])
    setVisitorCount((Math.floor(Math.random() * 50000) + 134567).toString().padStart(6, '0'))

    fetch('/api/weather')
      .then(r => r.json())
      .then(data => setWeather(data))
      .catch(() => setWeather({ temp: 6, description: 'облачно', icon: '04d' }))

    fetch('/api/moon')
      .then(r => r.json())
      .then(data => setMoon(data))
      .catch(() => setMoon({ phase: 'убывающая луна', emoji: '\uD83C\uDF16', illumination: 65 }))
  }, [])

  const daysInMonth = 28
  const startDay = 6 // Feb 1, 2026 is Sunday (index 6 in Mon-based week)
  const weeks: (number | null)[][] = []
  let day = 1
  let currentWeek: (number | null)[] = []
  for (let i = 0; i < startDay; i++) currentWeek.push(null)
  while (day <= daysInMonth) {
    currentWeek.push(day)
    if (currentWeek.length === 7) { weeks.push(currentWeek); currentWeek = [] }
    day++
  }
  while (currentWeek.length > 0 && currentWeek.length < 7) currentWeek.push(null)
  if (currentWeek.length > 0) weeks.push(currentWeek)

  return (
    <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
      {/* HEADER */}
      <header className="site-header">
        {/* Top row: Moon (left) + Title (center) + Weather (right) */}
        <div className="header-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: '60px', gap: '8px' }}>
          {/* Moon - left corner */}
          <div className="moon-widget header-moon" style={{ width: '140px', flexShrink: 0, padding: '6px' }}>
            {moon ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ fontSize: '50px', lineHeight: '1', width: '50px', height: '50px', textAlign: 'center' }}>
                  {moon.emoji}
                </div>
                <div>
                  <div style={{ fontFamily: "'Comic Sans MS', 'Comic Sans', cursive", fontSize: '14px', color: '#1a237e', lineHeight: '1.2' }}>
                    {`Луна: ${moon.phase}`}
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ fontFamily: "'Comic Sans MS', cursive", fontSize: '12px', color: '#7986cb', textAlign: 'center' }}>{'загрузка...'}</div>
            )}
          </div>

          {/* Title - center */}
          <div className="header-title" style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ fontSize: '18px', color: '#ff6d00' }}>
              {'~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~'}
            </div>
            <h1>
              {'{ '}<span style={{ color: '#e65100' }}>{'Каламбур'}</span>{'.nl }'}
            </h1>
            <p>{'Ваш любимый портал с 2004 года! \u2605 Новости \u2605 Астрология \u2605 Объявления \u2605'}</p>
            <div style={{ fontSize: '18px', color: '#ff6d00' }}>
              {'~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~'}
            </div>
          </div>

          {/* Weather - right corner */}
          <div className="weather-header-widget header-weather" style={{ width: '180px', flexShrink: 0 }}>
            {weather ? (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                <img
                  src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                  alt={weather.description}
                  width={40}
                  height={40}
                />
                <div>
                  <div style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '16px', color: '#fff', lineHeight: '1' }}>
                    {`${weather.temp}\u00B0C`}
                  </div>
                  <div style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '11px', color: '#fff3e0', textTransform: 'capitalize' }}>
                    {weather.description}
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '12px', color: '#fff', textAlign: 'center' }}>{'загрузка...'}</div>
            )}
          </div>
        </div>
      </header>

      {/* MARQUEE */}
      <div className="retro-marquee">
        <marquee scrollamount={4}>
          <a href="/vote">
            {'>>> \u2605\u2605\u2605 ГОЛОСУЕМ ЗА НОВЫЙ КОСТЮМ ДЛЯ ДАВИДА! Нажми сюда! \u2605\u2605\u2605 <<<'}
          </a>
          {'     |||     '}
          <span className="blink" style={{ color: '#fff176' }}>{'НОВ��Е!'}</span>
          {' Топ 5 хинкальных Бенелюкса \u2014 читай в новостях!     |||     '}
          {'Верка Сердючка едет в Амстердам! Не проп��сти! \u2605'}
        </marquee>
      </div>

      {/* MAIN 3-COLUMN LAYOUT */}
      <div className="main-columns" style={{ display: 'flex', gap: '10px', padding: '10px', alignItems: 'flex-start' }}>
        {/* LEFT COLUMN - MENU */}
        <div className="col-left" style={{ width: '180px', flexShrink: 0 }}>
          {/* Burger button - mobile only */}
          <button
            className="burger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {'\u2630 \u041C\u0415\u041D\u042E'}
          </button>
          <div className={`menu-content ${menuOpen ? 'menu-open' : ''}`} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

            {/* Menu */}
            <div className="retro-panel">
              <div className="retro-panel-header">{'\u2630 \u041C\u0415\u041D\u042E'}</div>
              <div style={{ padding: '8px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {menuItems.map((item) => (
                    <a key={item.label} href={item.href} className="xp-button" {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                      {'\u25B8 '}{item.label}
                    </a>
                  ))}
                </div>
                <div style={{ marginTop: '12px', padding: '8px', background: '#fff9c4', border: '1px dashed #ffb74d', borderRadius: '4px', fontSize: '11px', textAlign: 'center', fontFamily: 'Verdana, sans-serif' }}>
                  <div style={{ fontWeight: 'bold', color: '#d84315', marginBottom: '4px' }}>{'На сайте сейчас:'}</div>
                  <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#e65100' }}>{'14'}</div>
                  <div>{'посетителей'}</div>
                </div>
                <div style={{ marginTop: '10px', textAlign: 'center', fontSize: '20px', lineHeight: '1' }}>
                  <span className="sparkle">{'\u2726'}</span>{' '}
                  <span className="sparkle" style={{ animationDelay: '0.3s' }}>{'\u2605'}</span>{' '}
                  <span className="sparkle" style={{ animationDelay: '0.6s' }}>{'\u2726'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CENTER COLUMN - NEWS */}
        <div className="col-center" style={{ flex: 1, minWidth: 0 }} id="news">
          <div className="retro-panel">
            <div className="retro-panel-header">{'\uD83D\uDCF0 НОВОСТИ ПОРТАЛА'}</div>
            <div style={{ padding: '10px' }}>
              {newsItems.map((news) => (
                <table key={news.id} className="news-table">
                  <thead>
                    <tr>
                      <th colSpan={2} style={{ background: news.headerBg }}>
                        {news.link ? (
                          <a href={news.link} style={{ color: '#4e342e', textDecoration: 'none' }}>{news.title}</a>
                        ) : news.title}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ background: news.bodyBg }}>
                      {news.image && (
                        <td style={{ width: '120px' }}>
                          <Image src={news.image} alt={news.title} width={110} height={80} style={{ border: '2px solid #bcaaa4', borderRadius: '2px', objectFit: 'cover' }} />
                        </td>
                      )}
                      <td colSpan={news.image ? 1 : 2}>
                        <span style={{ fontFamily: 'Verdana, sans-serif' }}>{news.text}</span>
                        <br />
                        <span style={{ fontSize: '11px', color: '#888', fontStyle: 'italic', fontFamily: 'Verdana, sans-serif' }}>
                          {'Опубликовано: 10.02.2026'}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - CALENDAR + HOROSCOPE */}
        <div className="col-right" style={{ width: '200px', flexShrink: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

            {/* Calendar */}
            <div className="retro-panel" style={{ maxWidth: '220px' }}>
              <div className="retro-panel-header" style={{ fontSize: '11px', padding: '4px 6px' }}>{'\uD83D\uDCC5 ВСТРЕЧИ У ИЛОНЫ'}</div>
              <div style={{ padding: '4px' }}>
                <div style={{ textAlign: 'center', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '11px', color: '#4e342e', padding: '2px 0' }}>
                  {'Февраль 2026'}
                </div>
                <table className="calendar-table">
                  <thead>
                    <tr>
                      <th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th><th>Вс</th>
                    </tr>
                  </thead>
                  <tbody>
                    {weeks.map((week, i) => (
                      <tr key={i}>
                        {week.map((d, j) => {
                          const event = d ? calendarEvents[d] : undefined
                          return (
                            <td
                              key={j}
                              title={event || ''}
                              style={{
                                width: '30px',
                                height: '30px',
                                background: event ? '#FFB6C1' : undefined,
                                cursor: event ? 'help' : undefined,
                                fontSize: '12px',
                                textAlign: 'center',
                                verticalAlign: 'middle',
                                border: '1px solid #ccc',
                                position: 'relative',
                              }}
                              className={event ? 'cal-event-cell' : ''}
                            >
                              {d && <span>{d}</span>}
                            </td>
                          )
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Horoscope */}
            <div className="horoscope-block" id="horoscope">
              <h3>{'\u2605 ГОРОСКОП ДНЯ \u2605'}</h3>
              {zodiac && (
                <>
                  <div style={{ fontSize: '28px', textAlign: 'center', margin: '6px 0' }}>{zodiac.symbol}</div>
                  <div style={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'Arial Black, Arial, sans-serif', color: '#01579b', marginBottom: '6px' }}>{zodiac.sign}</div>
                  <div style={{ fontFamily: 'Verdana, sans-serif', fontStyle: 'italic', lineHeight: '1.5' }}>{`"${horoscope}"`}</div>
                </>
              )}
            </div>

            {/* Mini ad */}
            <div style={{ background: '#fff9c4', border: '2px dashed #ffd54f', borderRadius: '6px', padding: '8px', textAlign: 'center', fontSize: '11px', fontFamily: 'Verdana, sans-serif' }}>
              <div style={{ fontWeight: 'bold', color: '#d84315', fontFamily: 'Arial Black, Arial, sans-serif', fontSize: '12px' }}>{'РЕКЛАМА'}</div>
              <div style={{ margin: '4px 0' }}>{'Хинкальная "У Гиви"'}</div>
              <div style={{ fontSize: '10px', color: '#795548' }}>{'Damrak 42, Amsterdam'}<br />{'Скидка 10% по коду КАЛАМБУР'}</div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="retro-footer">
        <div style={{ marginBottom: '8px' }}>
          <span style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontSize: '12px' }}>{'Счётчик посещений:'}</span>
        </div>
        <div className="visitor-counter" style={{ justifyContent: 'center' }}>
          {visitorCount.split('').map((digit, i) => (
            <span key={i} className="digit">{digit}</span>
          ))}
        </div>
        <div style={{ margin: '10px 0' }}>
          <span className="blink" style={{ color: '#d84315', fontSize: '14px' }}>{'\u2605'}</span>{' '}
          <a href="#" style={{ fontFamily: 'Arial Black, Arial, sans-serif', fontSize: '12px', color: '#d84315' }}>{'[ Гостевая книга ]'}</a>{' '}
          <span className="blink" style={{ color: '#d84315', fontSize: '14px' }}>{'\u2605'}</span>
        </div>
        <div style={{ border: '2px inset #bcaaa4', background: '#efebe9', padding: '10px', margin: '8px auto', maxWidth: '400px', borderRadius: '4px', fontSize: '12px', fontFamily: 'Verdana, sans-serif' }}>
          <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>{'Гостевая книга (последняя запись):'}</div>
          <div style={{ fontStyle: 'italic', color: '#5d4037' }}>{'"Классный сайт!!! Добавьте ещё рецептов хинкали плиз))) \u2014 ЛенОк_87, Роттердам"'}</div>
        </div>
        <div style={{ marginTop: '10px', fontSize: '11px', color: '#8d6e63' }}>
          <div>{'Сделано на HTML с любовью \u2665'}</div>
          <div style={{ marginTop: '4px', fontWeight: 'bold' }}>{'\u00A9 Каламбур.nl, 2004-2026'}</div>
          <div style={{ marginTop: '2px', fontSize: '10px' }}>{'Оптимизировано для Internet Explorer 6.0 | Разрешение 1024\u00D7768'}</div>
        </div>
      </footer>
    </div>
  )
}

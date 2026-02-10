'use client'

import { useState, useEffect } from 'react'

const calendarEvents: Record<number, string> = {
  3: 'чай у Илоны',
  7: 'просмотр сериала',
  10: 'поездка в IKEA',
  14: 'чай у Илоны',
  18: 'караоке-вечер',
  21: 'просмотр сериала',
  25: 'чай у Илоны',
  28: 'поездка в IKEA',
}

const zodiacSigns = [
  { sign: 'Овен', symbol: '♈' },
  { sign: 'Телец', symbol: '♉' },
  { sign: 'Близнецы', symbol: '♊' },
  { sign: 'Рак', symbol: '♋' },
  { sign: 'Лев', symbol: '♌' },
  { sign: 'Дева', symbol: '♍' },
  { sign: 'Весы', symbol: '♎' },
  { sign: 'Скорпион', symbol: '♏' },
  { sign: 'Стрелец', symbol: '♐' },
  { sign: 'Козерог', symbol: '♑' },
  { sign: 'Водолей', symbol: '♒' },
  { sign: 'Рыбы', symbol: '♓' },
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

export function RightColumn() {
  const [zodiac, setZodiac] = useState<typeof zodiacSigns[0] | null>(null)
  const [horoscope, setHoroscope] = useState('')

  useEffect(() => {
    const randomSign = zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)]
    const randomHoroscope = horoscopes[Math.floor(Math.random() * horoscopes.length)]
    setZodiac(randomSign)
    setHoroscope(randomHoroscope)
  }, [])

  const daysInMonth = 28
  const startDay = 5 // Friday (0=Mon)
  const weeks: (number | null)[][] = []
  let day = 1
  let currentWeek: (number | null)[] = []

  for (let i = 0; i < startDay; i++) {
    currentWeek.push(null)
  }

  while (day <= daysInMonth) {
    currentWeek.push(day)
    if (currentWeek.length === 7) {
      weeks.push(currentWeek)
      currentWeek = []
    }
    day++
  }

  while (currentWeek.length > 0 && currentWeek.length < 7) {
    currentWeek.push(null)
  }
  if (currentWeek.length > 0) weeks.push(currentWeek)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {/* Calendar */}
      <div className="retro-panel">
        <div className="retro-panel-header">
          {'📅 ВСТРЕЧИ У ИЛОНЫ — Февраль'}
        </div>
        <div style={{ padding: '6px' }}>
          <table className="calendar-table">
            <thead>
              <tr>
                <th>Пн</th>
                <th>Вт</th>
                <th>Ср</th>
                <th>Чт</th>
                <th>Пт</th>
                <th>Сб</th>
                <th>Вс</th>
              </tr>
            </thead>
            <tbody>
              {weeks.map((week, i) => (
                <tr key={i}>
                  {week.map((d, j) => {
                    const event = d ? calendarEvents[d] : undefined
                    return (
                      <td key={j} className={event ? 'highlight' : ''}>
                        {d && (
                          <>
                            <strong>{d}</strong>
                            {event && <span>{event}</span>}
                          </>
                        )}
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
        <h3>
          {'★ Гороскоп дня ★'}
        </h3>
        {zodiac && (
          <>
            <div style={{
              fontSize: '28px',
              textAlign: 'center',
              margin: '6px 0',
            }}>
              {zodiac.symbol}
            </div>
            <div style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontFamily: 'Arial Black, Arial, sans-serif',
              color: '#01579b',
              marginBottom: '6px',
            }}>
              {zodiac.sign}
            </div>
            <div style={{
              fontFamily: 'Verdana, sans-serif',
              fontStyle: 'italic',
              lineHeight: '1.5',
            }}>
              {`"${horoscope}"`}
            </div>
          </>
        )}
        <div style={{
          marginTop: '8px',
          fontSize: '10px',
          color: '#546e7a',
          textAlign: 'center',
          fontFamily: 'Verdana, sans-serif',
        }}>
          {'Обновляется при каждом посещении!'}
        </div>
      </div>

      {/* Mini ad */}
      <div style={{
        background: '#fff9c4',
        border: '2px dashed #ffd54f',
        borderRadius: '6px',
        padding: '8px',
        textAlign: 'center',
        fontSize: '11px',
        fontFamily: 'Verdana, sans-serif',
      }}>
        <div style={{
          fontWeight: 'bold',
          color: '#d84315',
          fontFamily: 'Arial Black, Arial, sans-serif',
          fontSize: '12px',
        }}>
          {'РЕКЛАМА'}
        </div>
        <div style={{ margin: '4px 0' }}>
          {'Хинкальная "У Гиви"'}
        </div>
        <div style={{ fontSize: '10px', color: '#795548' }}>
          {'Damrak 42, Amsterdam'}
          <br />
          {'Скидка 10% по коду КАЛАБМУР'}
        </div>
      </div>
    </div>
  )
}

import Image from 'next/image'

export const metadata = {
  title: 'Топ 5 хинкальных Бенелюкса - Каламбур.nl',
  description: 'Рейтинг лучших хинкальных от Амстердама до Брюсселя. Редакция Каламбур.nl провела масштабное исследование!',
}

export default function HinkaliTopPage() {
  const restaurants = [
    {
      rank: 1,
      name: 'Хинкальная "У Гиви"',
      location: 'Damrak 42, Amsterdam',
      rating: '9.5/10',
      color: '#ffd700',
      review: 'Абсолютный чемпион! Хинкали сочные, тесто тонкое как бумага, бульон внутри обжигающий. Дядя Гиви лично выходит к каждому столу и спрашивает "Вкусно, да?". Цены демократичные \u2014 8 хинкали за 12 евро. Бонус: скидка 10% по коду КАЛАМБУР!',
    },
    {
      rank: 2,
      name: 'Генацвале Deluxe',
      location: 'Rue du Marché 15, Brussels',
      rating: '8.8/10',
      color: '#c0c0c0',
      review: 'Брюссельская жемчужина! Хинкали по рецепту прабабушки шеф-повара. Тесто чуть толще чем у Гиви, но начинка \u2014 божественна. Особенно хвалим хинкали с сыром сулугуни. Минус: длинная очередь по субботам.',
    },
    {
      rank: 3,
      name: 'Тбилиси на Маасе',
      location: 'Witte de Withstraat 88, Rotterdam',
      rating: '8.5/10',
      color: '#cd7f32',
      review: 'Роттердамский фаворит! Огромные порции, хинкали размером с кулак. Атмосфера \u2014 как будто попал в тбилисский дворик. Живая музыка по пятницам. Минус: иногда пересаливают.',
    },
    {
      rank: 4,
      name: 'Хинкали & Co',
      location: 'Meir 201, Antwerp',
      rating: '7.9/10',
      color: '#ffcc80',
      review: 'Антверпенский новичок, но уже завоевал сердца. Модный интерьер, хинкали с необычными начинками (креветки, трюфель!). Цены чуть выше среднего, но за качество. Для любителей экспериментов.',
    },
    {
      rank: 5,
      name: 'Мамина кухня',
      location: 'Luxemburgstraat 7, Luxembourg City',
      rating: '7.5/10',
      color: '#a5d6a7',
      review: 'Единственная хинкальная в Люксембурге! Хинкали честные, домашние, без претензий. Хозяйка Нана готовит всё сама. Порции щедрые. Минус: работает только 4 дня в неделю и закрывается в 20:00.',
    },
  ]

  return (
    <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
      {/* HEADER */}
      <header className="site-header">
        <h1>{'{ '}<span style={{ color: '#e65100' }}>{'Каламбур'}</span>{'.nl }'}</h1>
        <p>{'Ваш любимый портал с 2004 года!'}</p>
      </header>

      {/* BACK LINK */}
      <div style={{ padding: '8px 12px', background: 'linear-gradient(to bottom, #ffb74d, #ffa726)', borderBottom: '2px solid #e65100' }}>
        <a href="/" style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '13px', color: '#4e342e', textDecoration: 'none' }}>
          {'\u2190 Назад к новостям'}
        </a>
      </div>

      {/* ARTICLE */}
      <div style={{ padding: '10px' }}>
        <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, border: '3px solid #a5d6a7', background: '#e8f5e9', boxShadow: '3px 3px 8px rgba(0,0,0,0.15)' }}>
          <thead>
            <tr>
              <th style={{ background: 'linear-gradient(to bottom, #a5d6a7, #81c784)', color: '#1b5e20', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '18px', padding: '10px 14px', textAlign: 'left', borderBottom: '3px solid #388e3c' }}>
                {'ТОП 5 ХИНКАЛЬНЫХ БЕНЕЛЮКСА'}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '14px', fontFamily: 'Verdana, sans-serif', fontSize: '13px', lineHeight: '1.7' }}>
                {/* Intro */}
                <div style={{ background: '#fff9c4', border: '2px dashed #a5d6a7', padding: '10px', marginBottom: '14px', borderRadius: '4px' }}>
                  <div style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '12px', color: '#1b5e20' }}>
                    {'Автор: Марина, специальный корреспондент kalambur.nl'}
                  </div>
                  <div style={{ fontSize: '11px', color: '#795548', fontStyle: 'italic', marginTop: '2px' }}>
                    {'Масштабное исследование | Февраль 2026'}
                  </div>
                </div>

                <p style={{ marginBottom: '10px' }}>
                  {'Редакция Каламбур.nl провела беспрецедентное расследование: наш корреспондент Марина обошла ВСЕ хинкальные Бенелюкса за 3 недели. Было съедено 847 хинкали, выпито 23 литра ткемали и набрано 4 кг. Но результат того стоил!'}
                </p>

                <div style={{ textAlign: 'center', margin: '10px 0' }}>
                  <Image src="/images/hinkali-closeup.jpg" alt="Хинкали крупным планом" width={350} height={250} style={{ border: '3px solid #a5d6a7', borderRadius: '4px' }} />
                  <div style={{ fontSize: '10px', color: '#888', fontStyle: 'italic', marginTop: '4px' }}>{'Фото: Хинкали из "У Гиви" \u2014 абсолютный чемпион!'}</div>
                </div>

                {/* Restaurants */}
                {restaurants.map((r) => (
                  <table key={r.rank} style={{ width: '100%', border: '2px solid #81c784', marginBottom: '12px', background: '#fff' }}>
                    <tbody>
                      <tr>
                        <td style={{ background: r.color, fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '15px', color: '#333', padding: '8px 12px', borderBottom: '2px solid #388e3c' }}>
                          <span style={{ fontSize: '20px' }}>{`#${r.rank}`}</span>{` ${r.name}`}
                          <span style={{ float: 'right', fontSize: '14px' }}>{`\u2605 ${r.rating}`}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: '10px 12px', fontSize: '13px' }}>
                          <div style={{ fontSize: '11px', color: '#795548', marginBottom: '6px', fontStyle: 'italic' }}>
                            {`\uD83D\uDCCD ${r.location}`}
                          </div>
                          <p>{r.review}</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ))}

                {/* Methodology */}
                <div style={{ background: '#e8eaf6', border: '2px solid #7986cb', padding: '10px', borderRadius: '4px', marginBottom: '14px' }}>
                  <div style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '12px', color: '#283593', marginBottom: '4px' }}>
                    {'МЕТОДОЛОГИЯ ИССЛЕДОВАНИЯ'}
                  </div>
                  <p style={{ fontSize: '11px' }}>
                    {'Критерии оценки: толщина теста, сочность начинки, количество бульона внутри, размер порции, атмосфера заведения, цена/качество. Все хинкали были съедены лично корреспондентом. Ни одна хинкалина не пострадала напрасно.'}
                  </p>
                </div>

                <div style={{ textAlign: 'center', fontSize: '11px', color: '#888', fontStyle: 'italic', borderTop: '1px dashed #a5d6a7', paddingTop: '10px' }}>
                  {'Опубликовано: 08.02.2026 | Просмотров: 8 432 | Комментариев: 156'}
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div style={{ textAlign: 'center', padding: '12px' }}>
          <a href="/" className="xp-button" style={{ display: 'inline-block', width: 'auto', padding: '8px 20px', textAlign: 'center' }}>
            {'\u2190 Назад к новостям'}
          </a>
        </div>
      </div>

      <footer className="retro-footer">
        <div style={{ fontWeight: 'bold' }}>{'\u00A9 Каламбур.nl, 2004-2026'}</div>
        <div style={{ fontSize: '10px', marginTop: '2px' }}>{'Оптимизировано для Internet Explorer 6.0 | Разрешение 1024\u00D7768'}</div>
      </footer>
    </div>
  )
}

import Image from 'next/image'

export const metadata = {
  title: 'Топ 5 хинкальных Бенелюкса - Каламбур.nl',
  description: 'Олег Нижник раскрывает хинкальный скандал в Нидерландах! Рейтинг от @Odomontois.',
}

export default function HinkaliTopPage() {
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
                {'ТОП\u20115 ХИНКАЛКИ БЕНЕЛЮКСА! ОЛЕГ НИЖНИК РАСКРЫВАЕТ ШОК!'}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '14px', fontFamily: 'Verdana, sans-serif', fontSize: '13px', lineHeight: '1.7' }}>
                {/* Author */}
                <div style={{ background: '#fff9c4', border: '2px dashed #a5d6a7', padding: '10px', marginBottom: '14px', borderRadius: '4px' }}>
                  <div style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '12px', color: '#1b5e20' }}>
                    {'Автор: Олег Нижник (@Odomontois)'}
                  </div>
                </div>

                {/* Intro */}
                <div style={{ background: '#ff5252', color: '#fff', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '14px', textAlign: 'center', padding: '8px', marginBottom: '14px', borderRadius: '4px' }}>
                  <span className="blink">{'\u26A1 ВНИМАНИЕ! ХИНКАЛЬНЫЙ СКАНДАЛ В НИДЕРЛАНДАХ! \u26A1'}</span>
                </div>

                <p style={{ marginBottom: '12px' }}>
                  {'Пока вы жуёте горячую собаку из FEBO, настоящий грузинский вкус прятался у вас под носом! @Odomontois объездил ВСЕ забегаловки Бенелюкса и составил рейтинг, от которого редакция в ШОКЕ!'}
                </p>

                <div style={{ textAlign: 'center', margin: '10px 0' }}>
                  <Image src="/images/hinkali-closeup.jpg" alt="Хинкали" width={350} height={250} style={{ border: '3px solid #a5d6a7', borderRadius: '4px' }} />
                </div>

                {/* #1 */}
                <table style={{ width: '100%', border: '2px solid #81c784', marginBottom: '12px', background: '#fff' }}>
                  <tbody>
                    <tr>
                      <td style={{ background: '#ffd700', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '15px', color: '#333', padding: '8px 12px', borderBottom: '2px solid #388e3c' }}>
                        <span style={{ fontSize: '20px' }}>{'#1'}</span>{' \u2014 "ГРУЗИЯ В ХААРЛЕМЕ" (Haarlem, Grote Markt 12)'}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '10px 12px', fontSize: '13px' }}>
                        <p>{'Тесто тоньше, чем обещания политиков! Секретный ингредиент из секретной грузинской горы. "Они НЕ добавляют картошку!" \u2014 шокирован @Odomontois.'}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* #2 */}
                <table style={{ width: '100%', border: '2px solid #81c784', marginBottom: '12px', background: '#fff' }}>
                  <tbody>
                    <tr>
                      <td style={{ background: '#c0c0c0', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '15px', color: '#333', padding: '8px 12px', borderBottom: '2px solid #388e3c' }}>
                        <span style={{ fontSize: '20px' }}>{'#2'}</span>{' \u2014 "ЛЕБЕДИНЫЙ ХИНКАЛ" (Роттердам)'}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '10px 12px', fontSize: '13px' }}>
                        <p>{'Суп так густой, что ложка стоит! Но СКАНДАЛ: в №3 нашли человеческий волос (не наш).'}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* #3 */}
                <table style={{ width: '100%', border: '2px solid #81c784', marginBottom: '12px', background: '#fff' }}>
                  <tbody>
                    <tr>
                      <td style={{ background: '#cd7f32', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '15px', color: '#333', padding: '8px 12px', borderBottom: '2px solid #388e3c' }}>
                        <span style={{ fontSize: '20px' }}>{'#3'}</span>{' \u2014 "ТБИЛИСИ В АМСТЕРДАМЕ" (Jordaan)'}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '10px 12px', fontSize: '13px' }}>
                        <p>{'Борщ вместо супа! Заговор или просто повар перепутал рецепты?'}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* #4 */}
                <table style={{ width: '100%', border: '2px solid #81c784', marginBottom: '12px', background: '#fff' }}>
                  <tbody>
                    <tr>
                      <td style={{ background: '#ffcc80', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '15px', color: '#333', padding: '8px 12px', borderBottom: '2px solid #388e3c' }}>
                        <span style={{ fontSize: '20px' }}>{'#4'}</span>{' \u2014 "КАВКАЗСКИЙ ДОМ" (Утрехт)'}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '10px 12px', fontSize: '13px' }}>
                        <p>{'Хинкали летают к столу! Олег лично заснял полёт на видео.'}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* #5 */}
                <table style={{ width: '100%', border: '2px solid #81c784', marginBottom: '12px', background: '#fff' }}>
                  <tbody>
                    <tr>
                      <td style={{ background: '#a5d6a7', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '15px', color: '#333', padding: '8px 12px', borderBottom: '2px solid #388e3c' }}>
                        <span style={{ fontSize: '20px' }}>{'#5'}</span>{' \u2014 "СТАРАЯ ГРУЗИЯ" (Антверпен)'}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '10px 12px', fontSize: '13px' }}>
                        <p>{'Слабовато, но дешево. Идеально для студентов.'}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Conspiracy */}
                <table style={{ width: '100%', border: '2px solid #ef9a9a', marginBottom: '12px', background: '#fce4ec' }}>
                  <tbody>
                    <tr>
                      <td style={{ background: '#ef9a9a', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '13px', color: '#b71c1c', padding: '6px 10px' }}>
                        {'КОНСПИРАЦИЯ ГРУЗИНСКИХ ПОВАРОВ'}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '10px 12px', fontSize: '13px' }}>
                        <p style={{ marginBottom: '8px' }}>{'Почему лучшие хинкали прячут рецепты? @Odomontois утверждает: "Они охраняют древнюю магию Кавказа от голландцев!"'}</p>
                        <p style={{ fontStyle: 'italic' }}>{'Бабушка Нина из Тбилиси (живёт в Den Haag): "Настоящий хинкали делают с молитвой, а не с шаурмой!"'}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>

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

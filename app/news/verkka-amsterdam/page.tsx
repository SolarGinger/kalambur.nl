import Image from 'next/image'

export const metadata = {
  title: 'Верка Сердючка едет в Амстердам! - Каламбур.nl',
  description: 'СЕНСАЦИЯ! Верка Сердючка подтвердила концерт в Амстердаме 15 марта в Paradiso!',
}

export default function VerkkAmsterdamPage() {
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
        <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, border: '3px solid #ce93d8', background: '#f3e5f5', boxShadow: '3px 3px 8px rgba(0,0,0,0.15)' }}>
          <thead>
            <tr>
              <th style={{ background: 'linear-gradient(to bottom, #ce93d8, #ba68c8)', color: '#fff', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '18px', padding: '10px 14px', textAlign: 'left', borderBottom: '3px solid #8e24aa' }}>
                {'\u2605 В АМСТЕРДАМ ЕДЕТ ВЕРКА СЕРДЮЧКА! \u2605'}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '14px', fontFamily: 'Verdana, sans-serif', fontSize: '13px', lineHeight: '1.7' }}>
                {/* Breaking news banner */}
                <div style={{ background: '#ff5252', color: '#fff', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '16px', textAlign: 'center', padding: '8px', marginBottom: '14px', borderRadius: '4px' }}>
                  <span className="blink">{'\u26A1 СЕНСАЦИЯ! \u26A1 ЭКСКЛЮЗИВ КАЛАМБУР.NL \u26A1'}</span>
                </div>

                <div style={{ textAlign: 'center', margin: '10px 0' }}>
                  <Image src="/images/serduchka-concert.jpg" alt="Концертный зал" width={400} height={280} style={{ border: '3px solid #ce93d8', borderRadius: '4px' }} />
                </div>

                <p style={{ marginBottom: '10px', fontWeight: 'bold', fontSize: '14px', color: '#8e24aa' }}>
                  {'Андрей Данилко (он же ВЕРКА СЕРДЮЧКА) подтвердил грандиозное шоу в Амстердаме! Дата, от которой вся русскоязычная община Нидерландов сошла с ума: 15 МАРТА 2026 ГОДА!'}
                </p>

                {/* Event details */}
                <table style={{ width: '100%', border: '2px solid #ce93d8', marginBottom: '12px', background: '#fff' }}>
                  <tbody>
                    <tr>
                      <td style={{ background: '#e1bee7', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '14px', color: '#4a148c', padding: '8px 12px', textAlign: 'center' }}>
                        {'ДЕТАЛИ МЕРОПРИЯТИЯ'}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '12px' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                          <tbody>
                            <tr style={{ borderBottom: '1px dashed #ce93d8' }}>
                              <td style={{ padding: '6px 8px', fontWeight: 'bold', width: '120px' }}>{'\uD83D\uDCC5 Дата:'}</td>
                              <td style={{ padding: '6px 8px', fontFamily: "'Arial Black', Arial, sans-serif", color: '#8e24aa' }}>{'15 марта 2026 (суббота)'}</td>
                            </tr>
                            <tr style={{ borderBottom: '1px dashed #ce93d8' }}>
                              <td style={{ padding: '6px 8px', fontWeight: 'bold' }}>{'\uD83D\uDD52 Время:'}</td>
                              <td style={{ padding: '6px 8px' }}>{'Двери: 19:00 | Начало: 20:00'}</td>
                            </tr>
                            <tr style={{ borderBottom: '1px dashed #ce93d8' }}>
                              <td style={{ padding: '6px 8px', fontWeight: 'bold' }}>{'\uD83D\uDCCD Место:'}</td>
                              <td style={{ padding: '6px 8px' }}>{'Paradiso, Weteringschans 6-8, Amsterdam'}</td>
                            </tr>
                            <tr>
                              <td style={{ padding: '6px 8px', fontWeight: 'bold' }}>{'\uD83C\uDFAB Билеты:'}</td>
                              <td style={{ padding: '6px 8px' }}>{'от 45 до 120 евро'}</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Program */}
                <table style={{ width: '100%', border: '2px solid #ffcc80', marginBottom: '12px', background: '#fffde7' }}>
                  <tbody>
                    <tr>
                      <td style={{ background: '#ffcc80', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '13px', color: '#4e342e', padding: '6px 10px' }}>
                        {'\uD83C\uDFB5 ЧТО ОЖИДАЕТСЯ'}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '10px' }}>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                          <li style={{ padding: '4px 0' }}>{'\u2605 "Всё будет хорошо!" \u2014 гимн всех вечеринок'}</li>
                          <li style={{ padding: '4px 0' }}>{'\u2605 "Dolce & Gabbana" (та самая "ла-ла-ла")'}</li>
                          <li style={{ padding: '4px 0' }}>{'\u2605 "Dancing Lasha Tumbai" \u2014 евровизийный хит'}</li>
                          <li style={{ padding: '4px 0' }}>{'\u2605 НОВЫЕ ПЕСНИ из нового альбома 2026!'}</li>
                          <li style={{ padding: '4px 0' }}>{'\u2605 Знаменитые танцы и смена костюмов (до 7 нарядов за вечер!)'}</li>
                          <li style={{ padding: '4px 0' }}>{'\u2605 Интерактив с залом \u2014 Верка выбирает "жертву" из публики!'}</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Why this is important */}
                <table style={{ width: '100%', border: '2px solid #ef9a9a', marginBottom: '12px', background: '#fce4ec' }}>
                  <tbody>
                    <tr>
                      <td style={{ background: '#ef9a9a', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '13px', color: '#b71c1c', padding: '6px 10px' }}>
                        {'ПОЧЕМУ ЭТО ВАЖНО'}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '10px' }}>
                        <p style={{ marginBottom: '8px' }}>
                          {'Последний раз Верка Сердючка выступала в Нидерландах аж в 2019 году! С тех пор русскоязычная община Амстердама, Роттердама и Гааги ждала этого момента с нетерпением.'}
                        </p>
                        <p>
                          {'"Это будет БОМБА!" \u2014 прокомментировал организатор мероприятия. \u2014 "Paradiso уже почти распродан. Кто не купит билеты сейчас \u2014 будет кусать локти!"'}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Reactions */}
                <table style={{ width: '100%', border: '2px solid #a5d6a7', marginBottom: '12px', background: '#e8f5e9' }}>
                  <tbody>
                    <tr>
                      <td style={{ background: '#a5d6a7', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '13px', color: '#1b5e20', padding: '6px 10px' }}>
                        {'РЕАКЦИИ ЧИТАТЕЛЕЙ КАЛАМБУР.NL'}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '10px' }}>
                        <div style={{ fontStyle: 'italic', marginBottom: '8px', paddingBottom: '8px', borderBottom: '1px dashed #a5d6a7' }}>
                          {'"Наконец-то!!! Уже купила 4 билета \u2014 на себя, мужа, свекровь и кота!" \u2014 ОльгаNL_2003, Амстердам'}
                        </div>
                        <div style={{ fontStyle: 'italic', marginBottom: '8px', paddingBottom: '8px', borderBottom: '1px dashed #a5d6a7' }}>
                          {'"Я специально возьму отпуск ради этого концерта. Еду из Маастрихта!" \u2014 Sergey_BBQ, Маастрихт'}
                        </div>
                        <div style={{ fontStyle: 'italic' }}>
                          {'"Верка \u2014 это не просто концерт, это ТЕРАПИЯ! После последнего шоу я неделю ходила с улыбкой." \u2014 ЛенОк_87, Роттердам'}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Ticket warning */}
                <div style={{ background: '#fff9c4', border: '3px dashed #d84315', padding: '12px', marginBottom: '14px', borderRadius: '4px', textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '16px', color: '#d84315', marginBottom: '4px' }}>
                    <span className="blink">{'\u26A0 ВНИМАНИЕ! \u26A0'}</span>
                  </div>
                  <p style={{ fontSize: '13px' }}>
                    {'Билеты раскупают ОЧЕНЬ быстро! Не покупайте с рук \u2014 только через официальный сайт Paradiso. Редакция kalambur.nl не несёт ответственности за поддельные билеты!'}
                  </p>
                </div>

                <div style={{ textAlign: 'center', fontSize: '11px', color: '#888', fontStyle: 'italic', borderTop: '1px dashed #ce93d8', paddingTop: '10px' }}>
                  {'Опубликовано: 07.02.2026 | Просмотров: 22 541 | Комментариев: 487'}
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

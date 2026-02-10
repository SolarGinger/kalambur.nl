import Image from 'next/image'

export const metadata = {
  title: 'Корейская барбекюшная: что они скрывают?! - Каламбур.nl',
  description: 'Эксклюзивный фотоотчёт от Илоны (@ilon_essa) из корейской барбекюшной на Zeedijk!',
}

export default function KbbqReportPage() {
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
        <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, border: '3px solid #ffb74d', background: '#fff8e1', boxShadow: '3px 3px 8px rgba(0,0,0,0.15)' }}>
          <thead>
            <tr>
              <th style={{ background: 'linear-gradient(to bottom, #ffcc80, #ffa726)', color: '#4e342e', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '18px', padding: '10px 14px', textAlign: 'left', borderBottom: '3px solid #e65100' }}>
                {'КОРЕЙСКАЯ БАРБЕКЮШНАЯ В АМСТЕРДАМЕ: ЧТО ОНИ СКРЫВАЮТ?!'}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '14px', fontFamily: 'Verdana, sans-serif', fontSize: '13px', lineHeight: '1.7' }}>
                {/* Author info */}
                <div style={{ background: '#fff9c4', border: '2px dashed #ffb74d', padding: '10px', marginBottom: '14px', borderRadius: '4px' }}>
                  <div style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '12px', color: '#d84315' }}>
                    {'Автор: Илона (@ilon_essa)'}
                  </div>
                </div>

                {/* Breaking */}
                <div style={{ background: '#ff5252', color: '#fff', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '14px', textAlign: 'center', padding: '8px', marginBottom: '14px', borderRadius: '4px' }}>
                  <span className="blink">{'\u26A1 ЭКСКЛЮЗИВНЫЙ ФОТООТЧЁТ ИЗ АДА КОРЁНЦЕВ! \u26A1'}</span>
                </div>

                <p style={{ marginBottom: '12px' }}>
                  {'Редакция kalambur.nl рискнула жизнью и зашла в корейскую барбекюшную на Zeedijk. ЧТО МЫ УВИДЕЛИ \u2014 это ТРЕБУЕТ РАССЛЕДОВАНИЯ!'}
                </p>

                <div style={{ textAlign: 'center', margin: '10px 0' }}>
                  <Image src="/images/asian-food.jpg" alt="Корейская барбекюшная" width={400} height={280} style={{ border: '3px solid #ffcc80', borderRadius: '4px' }} />
                </div>

                {/* Fact 1 */}
                <table style={{ width: '100%', border: '2px solid #ef9a9a', marginBottom: '12px', background: '#fce4ec' }}>
                  <tbody>
                    <tr>
                      <td style={{ background: '#ef9a9a', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '13px', color: '#b71c1c', padding: '6px 10px' }}>
                        {'ФАКТ №1: МЯСО ЖАРИТСЯ САМО!'}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '10px 12px', fontSize: '13px' }}>
                        <p>{'Стол превращается в вулкан! "Они используют вулканическую лаву!" \u2014 уверена @ilon_essa после полулитра соджу.'}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Fact 2 */}
                <table style={{ width: '100%', border: '2px solid #ce93d8', marginBottom: '12px', background: '#f3e5f5' }}>
                  <tbody>
                    <tr>
                      <td style={{ background: '#ce93d8', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '13px', color: '#4a148c', padding: '6px 10px' }}>
                        {'ФАКТ №2: ДЫМ ГИПНОТИЗИРУЕТ!'}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '10px 12px', fontSize: '13px' }}>
                        <p>{'Все клиенты выходят с остекленевшим взглядом. Корейская магия?'}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Fact 3 */}
                <table style={{ width: '100%', border: '2px solid #ffcc80', marginBottom: '12px', background: '#fffde7' }}>
                  <tbody>
                    <tr>
                      <td style={{ background: '#ffcc80', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '13px', color: '#4e342e', padding: '6px 10px' }}>
                        {'ФАКТ №3: ПАЛОЧКИ \u2014 ОРУЖИЕ!'}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '10px 12px', fontSize: '13px' }}>
                        <p>{'Илона лично видела, как палочками протыкают мясо насквозь!'}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div style={{ textAlign: 'center', margin: '10px 0' }}>
                  <Image src="/images/kbbq-grill.jpg" alt="Мясо на гриле" width={400} height={280} style={{ border: '3px solid #ef9a9a', borderRadius: '4px' }} />
                  <div style={{ fontSize: '10px', color: '#888', fontStyle: 'italic', marginTop: '4px' }}>{'Фото: вулкан на столе'}</div>
                </div>

                {/* Secret formula */}
                <table style={{ width: '100%', border: '2px solid #a5d6a7', marginBottom: '12px', background: '#e8f5e9' }}>
                  <tbody>
                    <tr>
                      <td style={{ background: '#a5d6a7', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '13px', color: '#1b5e20', padding: '6px 10px' }}>
                        {'СЕКРЕТНАЯ ФОРМУЛА МОЛОДОСТИ'}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '10px 12px', fontSize: '13px' }}>
                        <p>{'Корейцы не стареют! Секрет в соусе или в рисе? @ilon_essa провела эксперимент: съела 2 порции \u2014 кожа стала как у 20-летней!'}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Witnesses */}
                <table style={{ width: '100%', border: '2px solid #81d4fa', marginBottom: '12px', background: '#e1f5fe' }}>
                  <tbody>
                    <tr>
                      <td style={{ background: '#81d4fa', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '13px', color: '#01579b', padding: '6px 10px' }}>
                        {'СВИДЕТЕЛЬСТВА ОЧЕВИДЦЕВ'}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '10px 12px', fontSize: '13px' }}>
                        <div style={{ fontStyle: 'italic', marginBottom: '8px', paddingBottom: '8px', borderBottom: '1px dashed #81d4fa' }}>
                          {'"После корейского барбекю я вижу сны про Сеул!" \u2014 Тётя Клава из Amstelveen'}
                        </div>
                        <div style={{ fontStyle: 'italic' }}>
                          {'"Дым вызывает видения будущего!" \u2014 Петя из IT'}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Twitter */}
                <div style={{ background: '#fff9c4', border: '3px dashed #d84315', padding: '12px', marginBottom: '14px', borderRadius: '4px', textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '13px', color: '#d84315', marginBottom: '4px' }}>
                    {'ТВИТТЕР МОЛЧИТ'}
                  </div>
                  <p style={{ fontSize: '13px' }}>
                    {'Почему @ilon_essa единственная пишет правду? Заговор азиатских ресторанов или цензура алгоритмов?'}
                  </p>
                </div>

                <div style={{ textAlign: 'center', fontSize: '11px', color: '#888', fontStyle: 'italic', borderTop: '1px dashed #ffb74d', paddingTop: '10px' }}>
                  {'Опубликовано: 09.02.2026 | Просмотров: 5 671 | Комментариев: 89'}
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

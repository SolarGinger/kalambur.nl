import Image from 'next/image'

export const metadata = {
  title: 'Корейская барбекюшная: фотоотчёт - Каламбур.nl',
  description: 'Редакция Каламбур.nl посетила новую корейскую барбекюшную в De Pijp. Полный фотоотчёт!',
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
                {'МЫ ПОСЕТИЛИ КОРЕЙСКУЮ БАРБЕКЮШНУЮ: ФОТООТЧЁТ'}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '14px', fontFamily: 'Verdana, sans-serif', fontSize: '13px', lineHeight: '1.7' }}>
                {/* Author info */}
                <div style={{ background: '#fff9c4', border: '2px dashed #ffb74d', padding: '10px', marginBottom: '14px', borderRadius: '4px' }}>
                  <div style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '12px', color: '#d84315' }}>
                    {'Фотоотчёт от редакции Каламбур.nl'}
                  </div>
                  <div style={{ fontSize: '11px', color: '#795548', fontStyle: 'italic', marginTop: '2px' }}>
                    {'De Pijp, Amsterdam | 9 февраля 2026'}
                  </div>
                </div>

                <p style={{ marginBottom: '10px', fontWeight: 'bold', color: '#e65100' }}>
                  {'Вчера вся редакция Каламбур.nl отправилась тестировать новую корейскую барбекюшную "Seoul BBQ" в модном районе De Pijp. Вот что из этого вышло!'}
                </p>

                {/* Photo 1 */}
                <table style={{ width: '100%', border: '2px solid #ffcc80', marginBottom: '12px', background: '#fffde7' }}>
                  <tbody>
                    <tr>
                      <td style={{ background: '#ffcc80', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '13px', color: '#4e342e', padding: '6px 10px' }}>
                        {'18:30 \u2014 Прибытие'}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '10px', textAlign: 'center' }}>
                        <Image src="/images/asian-food.jpg" alt="Корейский BBQ" width={400} height={280} style={{ border: '3px solid #ffcc80', borderRadius: '4px' }} />
                        <p style={{ marginTop: '8px' }}>
                          {'Заведение встретило нас ароматом жареного мяса ещё с улицы. Интерьер \u2014 минимализм по-корейски: деревянные столы, встроенные грили, приглушённый свет. На каждом столе \u2014 вытяжка прямо над грилем. Цивилизация!'}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Photo 2 */}
                <table style={{ width: '100%', border: '2px solid #ef9a9a', marginBottom: '12px', background: '#fce4ec' }}>
                  <tbody>
                    <tr>
                      <td style={{ background: '#ef9a9a', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '13px', color: '#b71c1c', padding: '6px 10px' }}>
                        {'19:00 \u2014 Заказ и первое мясо на гриле!'}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '10px', textAlign: 'center' }}>
                        <Image src="/images/kbbq-grill.jpg" alt="Мясо на гриле" width={400} height={280} style={{ border: '3px solid #ef9a9a', borderRadius: '4px' }} />
                        <p style={{ marginTop: '8px' }}>
                          {'Заказали "All You Can Eat" за 29.50 евро с человека. Официант принёс 8 видов мяса: булгоги, самгёпсаль, галби, курицу в соусе, свиную шейку и ещё что-то, что мы не смогли произнести. Всё МРАМОРНОЕ. Жарим сами, переворачиваем щипцами. Ощущение \u2014 как шеф-повар на каникулах!'}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Side dishes */}
                <table style={{ width: '100%', border: '2px solid #a5d6a7', marginBottom: '12px', background: '#e8f5e9' }}>
                  <tbody>
                    <tr>
                      <td style={{ background: '#a5d6a7', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '13px', color: '#1b5e20', padding: '6px 10px' }}>
                        {'19:30 \u2014 Банчан (закуски) \u2014 БЕСКОНЕЧНЫЕ!'}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '10px' }}>
                        <p style={{ marginBottom: '8px' }}>
                          {'К мясу принесли 12 (!!!) видов банчан: кимчи (3 вида!), маринованный дайкон, шпинат в кунжутном масле, бобовые ростки, острый тофу, japchae (стеклянная лапша) и ещё кучу всего. И ВСЁ ЭТО \u2014 БЕСПЛАТНО и с бесконечными рефиллами!'}
                        </p>
                        <p>{'Наш Игорь (да, тот самый @spnlck) съел 4 порции кимчи и заявил: "Это лучший способ познакомиться с кореянкой \u2014 показать, что ты любишь кимчи". Классика.'}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>

                {/* Rating */}
                <table style={{ width: '100%', border: '2px solid #ce93d8', marginBottom: '12px', background: '#f3e5f5' }}>
                  <tbody>
                    <tr>
                      <td style={{ background: '#ce93d8', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '13px', color: '#4a148c', padding: '6px 10px' }}>
                        {'21:00 \u2014 Итоги и оценка'}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '10px' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px', margin: '8px 0' }}>
                          <tbody>
                            <tr style={{ borderBottom: '1px solid #ce93d8' }}>
                              <td style={{ padding: '4px 8px', fontWeight: 'bold' }}>{'Мясо:'}</td>
                              <td style={{ padding: '4px 8px' }}>{'\u2605\u2605\u2605\u2605\u2605 9/10'}</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #ce93d8' }}>
                              <td style={{ padding: '4px 8px', fontWeight: 'bold' }}>{'Банчан:'}</td>
                              <td style={{ padding: '4px 8px' }}>{'\u2605\u2605\u2605\u2605\u2605 10/10'}</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #ce93d8' }}>
                              <td style={{ padding: '4px 8px', fontWeight: 'bold' }}>{'Атмосфера:'}</td>
                              <td style={{ padding: '4px 8px' }}>{'\u2605\u2605\u2605\u2605 8/10'}</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid #ce93d8' }}>
                              <td style={{ padding: '4px 8px', fontWeight: 'bold' }}>{'Цена:'}</td>
                              <td style={{ padding: '4px 8px' }}>{'\u2605\u2605\u2605 7/10'}</td>
                            </tr>
                            <tr>
                              <td style={{ padding: '4px 8px', fontWeight: 'bold', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '14px' }}>{'ИТОГО:'}</td>
                              <td style={{ padding: '4px 8px', fontWeight: 'bold', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '14px', color: '#e65100' }}>{'8/10 \u2014 РЕКОМЕНДУЕМ!'}</td>
                            </tr>
                          </tbody>
                        </table>
                        <p style={{ marginTop: '8px' }}>
                          <strong>{'Адрес: '}</strong>{'Ferdinand Bolstraat 178, De Pijp, Amsterdam'}
                          <br />
                          <strong>{'Часы работы: '}</strong>{'Вт-Вс 17:00-23:00'}
                          <br />
                          <strong>{'Бронирование: '}</strong>{'обязательно на выходных!'}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>

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

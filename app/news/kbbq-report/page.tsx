'use client'

import Image from 'next/image'
import { ArticleLayout } from '@/components/article-layout'

export default function KbbqReportPage() {
  return (
    <ArticleLayout>
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
              <div style={{ background: '#fff9c4', border: '2px dashed #ffb74d', padding: '10px', marginBottom: '14px', borderRadius: '4px' }}>
                <div style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '12px', color: '#d84315' }}>
                  {'Автор: Илона (@ilon_essa)'}
                </div>
              </div>

              <div style={{ background: '#ff5252', color: '#fff', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '14px', textAlign: 'center', padding: '8px', marginBottom: '14px', borderRadius: '4px' }}>
                <span className="blink">{'\u26A1 ЭКСКЛЮЗИВНЫЙ ФОТООТЧЁТ ИЗ АДА КОРЁНЦЕВ! \u26A1'}</span>
              </div>

              <p style={{ marginBottom: '12px' }}>
                {'Редакция kalambur.nl рискнула жизнью и зашла в корейскую барбекюшную на Zeedijk. ЧТО МЫ УВИДЕЛИ \u2014 это ТРЕБУЕТ РАССЛЕДОВАНИЯ!'}
              </p>

              {/* Photos 2x2 */}
              <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '14px' }}>
                <tbody>
                  <tr>
                    <td style={{ padding: '4px', textAlign: 'center', width: '50%' }}>
                      <Image src="/images/asian-food.jpg" alt="Корейская барбекюшная" width={240} height={170} style={{ border: '3px solid #ffcc80', borderRadius: '4px', objectFit: 'cover', width: '100%', height: 'auto' }} />
                      <div style={{ fontSize: '9px', color: '#888', fontStyle: 'italic' }}>{'Вулкан на столе!'}</div>
                    </td>
                    <td style={{ padding: '4px', textAlign: 'center', width: '50%' }}>
                      <Image src="/images/kbbq-grill.jpg" alt="Мясо на гриле" width={240} height={170} style={{ border: '3px solid #ef9a9a', borderRadius: '4px', objectFit: 'cover', width: '100%', height: 'auto' }} />
                      <div style={{ fontSize: '9px', color: '#888', fontStyle: 'italic' }}>{'Дым гипнотизирует!'}</div>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '4px', textAlign: 'center', width: '50%' }}>
                      <Image src="/images/chopsticks.jpg" alt="Палочки" width={240} height={170} style={{ border: '3px solid #ce93d8', borderRadius: '4px', objectFit: 'cover', width: '100%', height: 'auto' }} />
                      <div style={{ fontSize: '9px', color: '#888', fontStyle: 'italic' }}>{'Палочки-оружие'}</div>
                    </td>
                    <td style={{ padding: '4px', textAlign: 'center', width: '50%' }}>
                      <Image src="/images/sushi-table.jpg" alt="Тайное меню" width={240} height={170} style={{ border: '3px solid #a5d6a7', borderRadius: '4px', objectFit: 'cover', width: '100%', height: 'auto' }} />
                      <div style={{ fontSize: '9px', color: '#888', fontStyle: 'italic' }}>{'Секретное меню?!'}</div>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Fact 1 */}
              <table style={{ width: '100%', border: '2px solid #ef9a9a', marginBottom: '12px', background: '#fce4ec' }}>
                <tbody>
                  <tr><td style={{ background: '#ef9a9a', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '13px', color: '#b71c1c', padding: '6px 10px' }}>{'ФАКТ \u21161: МЯСО ЖАРИТСЯ САМО!'}</td></tr>
                  <tr><td style={{ padding: '10px 12px', fontSize: '13px' }}>{'Стол превращается в вулкан! "Они используют вулканическую лаву!" \u2014 уверена @ilon_essa после полулитра соджу.'}</td></tr>
                </tbody>
              </table>

              {/* Fact 2 */}
              <table style={{ width: '100%', border: '2px solid #ce93d8', marginBottom: '12px', background: '#f3e5f5' }}>
                <tbody>
                  <tr><td style={{ background: '#ce93d8', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '13px', color: '#4a148c', padding: '6px 10px' }}>{'ФАКТ \u21162: ДЫМ ГИПНОТИЗИРУЕТ!'}</td></tr>
                  <tr><td style={{ padding: '10px 12px', fontSize: '13px' }}>{'Все клиенты выходят с остекленевшим взглядом. Корейская магия?'}</td></tr>
                </tbody>
              </table>

              {/* Fact 3 */}
              <table style={{ width: '100%', border: '2px solid #ffcc80', marginBottom: '12px', background: '#fffde7' }}>
                <tbody>
                  <tr><td style={{ background: '#ffcc80', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '13px', color: '#4e342e', padding: '6px 10px' }}>{'ФАКТ \u21163: ПАЛОЧКИ \u2014 ОРУЖИЕ!'}</td></tr>
                  <tr><td style={{ padding: '10px 12px', fontSize: '13px' }}>{'Илона лично видела, как палочками протыкают мясо насквозь!'}</td></tr>
                </tbody>
              </table>

              {/* Secret formula */}
              <table style={{ width: '100%', border: '2px solid #a5d6a7', marginBottom: '12px', background: '#e8f5e9' }}>
                <tbody>
                  <tr><td style={{ background: '#a5d6a7', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '13px', color: '#1b5e20', padding: '6px 10px' }}>{'СЕКРЕТНАЯ ФОРМУЛА МОЛОДОСТИ'}</td></tr>
                  <tr><td style={{ padding: '10px 12px', fontSize: '13px' }}>{'Корейцы не стареют! Секрет в соусе или в рисе? @ilon_essa провела эксперимент: съела 2 порции \u2014 кожа стала как у 20-летней!'}</td></tr>
                </tbody>
              </table>

              {/* Witnesses */}
              <table style={{ width: '100%', border: '2px solid #81d4fa', marginBottom: '12px', background: '#e1f5fe' }}>
                <tbody>
                  <tr><td style={{ background: '#81d4fa', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '13px', color: '#01579b', padding: '6px 10px' }}>{'СВИДЕТЕЛЬСТВА ОЧЕВИДЦЕВ'}</td></tr>
                  <tr><td style={{ padding: '10px 12px', fontSize: '13px' }}>
                    <div style={{ fontStyle: 'italic', marginBottom: '8px', paddingBottom: '8px', borderBottom: '1px dashed #81d4fa' }}>{'"После корейского барбекю я вижу сны про Сеул!" \u2014 Тётя Клава из Amstelveen'}</div>
                    <div style={{ fontStyle: 'italic' }}>{'"Дым вызывает видения будущего!" \u2014 Петя из IT'}</div>
                  </td></tr>
                </tbody>
              </table>

              {/* Twitter */}
              <div style={{ background: '#fff9c4', border: '3px dashed #d84315', padding: '12px', marginBottom: '14px', borderRadius: '4px', textAlign: 'center' }}>
                <div style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '13px', color: '#d84315', marginBottom: '4px' }}>{'ТВИТТЕР МОЛЧИТ'}</div>
                <p style={{ fontSize: '13px' }}>{'Почему @ilon_essa единственная пишет правду? Заговор азиатских ресторанов или цензура алгоритмов?'}</p>
              </div>

              <div style={{ textAlign: 'center', fontSize: '11px', color: '#888', fontStyle: 'italic', borderTop: '1px dashed #ffb74d', paddingTop: '10px' }}>
                {'Опубликовано: 09.02.2026 | Просмотров: 5 671 | Комментариев: 89'}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </ArticleLayout>
  )
}

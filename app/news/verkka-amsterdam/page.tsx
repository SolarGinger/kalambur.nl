'use client'

import Image from 'next/image'
import { ArticleLayout } from '@/components/article-layout'

export default function VerkkAmsterdamPage() {
  return (
    <ArticleLayout>
      <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, border: '3px solid #ce93d8', background: '#f3e5f5', boxShadow: '3px 3px 8px rgba(0,0,0,0.15)' }}>
        <thead>
          <tr>
            <th style={{ background: 'linear-gradient(to bottom, #ce93d8, #ba68c8)', color: '#fff', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '18px', padding: '10px 14px', textAlign: 'left', borderBottom: '3px solid #8e24aa' }}>
              {'\u2605 ВЕРКА СЕРДЮЧКА В АМСТЕРДАМЕ! ГРАНДИОЗНЫЙ ЗАГОВОР! \u2605'}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '14px', fontFamily: 'Verdana, sans-serif', fontSize: '13px', lineHeight: '1.7' }}>
              <div style={{ background: '#fff9c4', border: '2px dashed #ce93d8', padding: '10px', marginBottom: '14px', borderRadius: '4px' }}>
                <div style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '12px', color: '#8e24aa' }}>
                  {'Автор: Редакция каламбур.nl'}
                </div>
              </div>

              <div style={{ background: '#ff5252', color: '#fff', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '16px', textAlign: 'center', padding: '8px', marginBottom: '14px', borderRadius: '4px' }}>
                <span className="blink">{'\u26A1 СЕНСАЦИЯ МИРОВОГО МАСШТАБА! \u26A1'}</span>
              </div>

              {/* Photos 2x2 */}
              <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '14px' }}>
                <tbody>
                  <tr>
                    <td style={{ padding: '4px', textAlign: 'center', width: '50%' }}>
                      <Image src="/images/serduchka-concert.jpg" alt="Концерт Верки" width={240} height={170} style={{ border: '3px solid #ce93d8', borderRadius: '4px', objectFit: 'cover', width: '100%', height: 'auto' }} />
                      <div style={{ fontSize: '9px', color: '#888', fontStyle: 'italic' }}>{'Сцена в Paradiso'}</div>
                    </td>
                    <td style={{ padding: '4px', textAlign: 'center', width: '50%' }}>
                      <Image src="/images/serduchka.jpg" alt="Верка Сердючка" width={240} height={170} style={{ border: '3px solid #ba68c8', borderRadius: '4px', objectFit: 'cover', width: '100%', height: 'auto' }} />
                      <div style={{ fontSize: '9px', color: '#888', fontStyle: 'italic' }}>{'Верка в костюме'}</div>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '4px', textAlign: 'center', width: '50%' }}>
                      <Image src="/images/vondelpark.jpg" alt="Vondelpark" width={240} height={170} style={{ border: '3px solid #ef9a9a', borderRadius: '4px', objectFit: 'cover', width: '100%', height: 'auto' }} />
                      <div style={{ fontSize: '9px', color: '#888', fontStyle: 'italic' }}>{'Секретная репетиция?'}</div>
                    </td>
                    <td style={{ padding: '4px', textAlign: 'center', width: '50%' }}>
                      <Image src="/images/chopsticks.jpg" alt="Backstage" width={240} height={170} style={{ border: '3px solid #ffcc80', borderRadius: '4px', objectFit: 'cover', width: '100%', height: 'auto' }} />
                      <div style={{ fontSize: '9px', color: '#888', fontStyle: 'italic' }}>{'За кулисами'}</div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <p style={{ marginBottom: '10px', fontWeight: 'bold', fontSize: '14px', color: '#8e24aa' }}>
                {'ВЕРКА СЕРДЮЧКА ПРИЛЕТАЕТ В АМСТЕРДАМ! Но зачем? Простые гастроли или часть глобального плана?'}
              </p>

              {/* Shocking facts */}
              <table style={{ width: '100%', border: '2px solid #ef9a9a', marginBottom: '12px', background: '#fce4ec' }}>
                <tbody>
                  <tr><td style={{ background: '#ef9a9a', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '13px', color: '#b71c1c', padding: '6px 10px' }}>{'ФАКТЫ, КОТОРЫЕ ПОТРЯСУТ ВАС:'}</td></tr>
                  <tr><td style={{ padding: '10px 12px', fontSize: '13px' }}>
                    <div style={{ marginBottom: '6px' }}>{'1. Верка заказала костюм цвета голландского флага!'}</div>
                    <div style={{ marginBottom: '6px' }}>{'2. Репетирует "Hop hop hop" на DAM Square!'}</div>
                    <div>{'3. Встречается с тайными агентами в coffeeshop!'}</div>
                  </td></tr>
                </tbody>
              </table>

              {/* Twitter */}
              <table style={{ width: '100%', border: '2px solid #81d4fa', marginBottom: '12px', background: '#e1f5fe' }}>
                <tbody>
                  <tr><td style={{ background: '#81d4fa', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '13px', color: '#01579b', padding: '6px 10px' }}>{'ТВИТТЕР ВЗОРВАЛСЯ (ну почти):'}</td></tr>
                  <tr><td style={{ padding: '10px 12px', fontSize: '13px' }}>
                    <div style={{ fontStyle: 'italic', marginBottom: '6px' }}>{'@spnlck: "Это отвлекающий манёвр!"'}</div>
                    <div style={{ fontStyle: 'italic' }}>{'@Odomontois: "Грузины тоже готовят сюрприз!"'}</div>
                  </td></tr>
                </tbody>
              </table>

              {/* Eyewitnesses */}
              <table style={{ width: '100%', border: '2px solid #a5d6a7', marginBottom: '12px', background: '#e8f5e9' }}>
                <tbody>
                  <tr><td style={{ background: '#a5d6a7', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '13px', color: '#1b5e20', padding: '6px 10px' }}>{'ГЛАЗАМИ ОЧЕВИДЦЕВ'}</td></tr>
                  <tr><td style={{ padding: '10px 12px', fontSize: '13px' }}>
                    <div style={{ fontStyle: 'italic', marginBottom: '8px', paddingBottom: '8px', borderBottom: '1px dashed #a5d6a7' }}>{'Бабушка Рая из Amstelveen: "Я видела её в Albert Heijn! Покупала Dutchie печенье!"'}</div>
                    <div style={{ fontStyle: 'italic' }}>{'Таксист Саша: "Вез её из аэропорта Schiphol \u2014 пела nonstop!"'}</div>
                  </td></tr>
                </tbody>
              </table>

              {/* Conspiracy */}
              <table style={{ width: '100%', border: '2px solid #ffcc80', marginBottom: '12px', background: '#fffde7' }}>
                <tbody>
                  <tr><td style={{ background: '#ffcc80', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '13px', color: '#4e342e', padding: '6px 10px' }}>{'КОНСПИРОЛОГИЧЕСКАЯ ВЕРСИЯ'}</td></tr>
                  <tr><td style={{ padding: '10px 12px', fontSize: '13px' }}>
                    <p style={{ marginBottom: '8px' }}>{'Верка \u2014 агент украинской разведки? Или просто соскучилась по stroopwafel?'}</p>
                    <p>{'Почему полиция усилила патрули на Red Light District?'}</p>
                  </td></tr>
                </tbody>
              </table>

              {/* What to expect */}
              <table style={{ width: '100%', border: '2px solid #ce93d8', marginBottom: '12px', background: '#fff' }}>
                <tbody>
                  <tr><td style={{ background: '#e1bee7', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '14px', color: '#4a148c', padding: '8px 12px', textAlign: 'center' }}>{'ЧТО ЖДАТЬ АМСТЕРДАМЦАМ?'}</td></tr>
                  <tr><td style={{ padding: '12px' }}>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      <li style={{ padding: '4px 0' }}>{'\u2605 Концерт на плавучем рынке?'}</li>
                      <li style={{ padding: '4px 0' }}>{'\u2605 Дуэт с местными рэперами?'}</li>
                      <li style={{ padding: '4px 0' }}>{'\u2605 Секретный перформанс в Vondelpark?'}</li>
                    </ul>
                  </td></tr>
                </tbody>
              </table>

              {/* Final shout */}
              <div style={{ background: '#ff5252', color: '#fff', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '20px', textAlign: 'center', padding: '12px', marginBottom: '14px', borderRadius: '4px' }}>
                <span className="blink">{'НЕ ПУПС! ВЕРКА СЕРДЮЧКА!'}</span>
              </div>

              <div style={{ textAlign: 'center', fontSize: '11px', color: '#888', fontStyle: 'italic', borderTop: '1px dashed #ce93d8', paddingTop: '10px' }}>
                {'Опубликовано: 07.02.2026 | Просмотров: 22 541 | Комментариев: 487'}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </ArticleLayout>
  )
}

'use client'

import Image from 'next/image'
import { ArticleLayout } from '@/components/article-layout'

export default function HinkaliTopPage() {
  return (
    <ArticleLayout>
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
              <div style={{ background: '#fff9c4', border: '2px dashed #a5d6a7', padding: '10px', marginBottom: '14px', borderRadius: '4px' }}>
                <div style={{ fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '12px', color: '#1b5e20' }}>
                  {'Автор: Олег Нижник (@Odomontois)'}
                </div>
              </div>

              <div style={{ background: '#ff5252', color: '#fff', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '14px', textAlign: 'center', padding: '8px', marginBottom: '14px', borderRadius: '4px' }}>
                <span className="blink">{'\u26A1 ВНИМАНИЕ! ХИНКАЛЬНЫЙ СКАНДАЛ В НИДЕРЛАНДАХ! \u26A1'}</span>
              </div>

              <p style={{ marginBottom: '12px' }}>
                {'Пока вы жуёте горячую собаку из FEBO, настоящий грузинский вкус прятался у вас под носом! @Odomontois объездил ВСЕ забегаловки Бенелюкса и составил рейтинг, от которого редакция в ШОКЕ!'}
              </p>

              {/* Photos 2x2 */}
              <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '14px' }}>
                <tbody>
                  <tr>
                    <td style={{ padding: '4px', textAlign: 'center', width: '50%' }}>
                      <Image src="/images/khinkali.jpg" alt="Хинкали подача" width={240} height={170} style={{ border: '3px solid #a5d6a7', borderRadius: '4px', objectFit: 'cover', width: '100%', height: 'auto' }} />
                      <div style={{ fontSize: '9px', color: '#888', fontStyle: 'italic' }}>{'Хинкали в "Грузия в Хаарлеме"'}</div>
                    </td>
                    <td style={{ padding: '4px', textAlign: 'center', width: '50%' }}>
                      <Image src="/images/hinkali-closeup.jpg" alt="Хинкали крупный план" width={240} height={170} style={{ border: '3px solid #81c784', borderRadius: '4px', objectFit: 'cover', width: '100%', height: 'auto' }} />
                      <div style={{ fontSize: '9px', color: '#888', fontStyle: 'italic' }}>{'Секретная начинка'}</div>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '4px', textAlign: 'center', width: '50%' }}>
                      <Image src="/images/asian-food.jpg" alt="Кавказская кухня" width={240} height={170} style={{ border: '3px solid #ffcc80', borderRadius: '4px', objectFit: 'cover', width: '100%', height: 'auto' }} />
                      <div style={{ fontSize: '9px', color: '#888', fontStyle: 'italic' }}>{'Кавказский пир'}</div>
                    </td>
                    <td style={{ padding: '4px', textAlign: 'center', width: '50%' }}>
                      <Image src="/images/kbbq-grill.jpg" alt="Застолье" width={240} height={170} style={{ border: '3px solid #ef9a9a', borderRadius: '4px', objectFit: 'cover', width: '100%', height: 'auto' }} />
                      <div style={{ fontSize: '9px', color: '#888', fontStyle: 'italic' }}>{'Тайная дегустация'}</div>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* #1 */}
              <table style={{ width: '100%', border: '2px solid #81c784', marginBottom: '12px', background: '#fff' }}>
                <tbody>
                  <tr><td style={{ background: '#ffd700', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '15px', color: '#333', padding: '8px 12px', borderBottom: '2px solid #388e3c' }}><span style={{ fontSize: '20px' }}>{'#1'}</span>{' \u2014 "ГРУЗИЯ В ХААРЛЕМЕ" (Haarlem, Grote Markt 12)'}</td></tr>
                  <tr><td style={{ padding: '10px 12px', fontSize: '13px' }}>{'Тесто тоньше, чем обещания политиков! Секретный ингредиент из секретной грузинской горы. "Они НЕ добавляют картошку!" \u2014 шокирован @Odomontois.'}</td></tr>
                </tbody>
              </table>

              {/* #2 */}
              <table style={{ width: '100%', border: '2px solid #81c784', marginBottom: '12px', background: '#fff' }}>
                <tbody>
                  <tr><td style={{ background: '#c0c0c0', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '15px', color: '#333', padding: '8px 12px', borderBottom: '2px solid #388e3c' }}><span style={{ fontSize: '20px' }}>{'#2'}</span>{' \u2014 "ЛЕБЕДИНЫЙ ХИНКАЛ" (Роттердам)'}</td></tr>
                  <tr><td style={{ padding: '10px 12px', fontSize: '13px' }}>{'Суп так густой, что ложка стоит! Но СКАНДАЛ: в \u21163 нашли человеческий волос (не наш).'}</td></tr>
                </tbody>
              </table>

              {/* #3 */}
              <table style={{ width: '100%', border: '2px solid #81c784', marginBottom: '12px', background: '#fff' }}>
                <tbody>
                  <tr><td style={{ background: '#cd7f32', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '15px', color: '#333', padding: '8px 12px', borderBottom: '2px solid #388e3c' }}><span style={{ fontSize: '20px' }}>{'#3'}</span>{' \u2014 "ТБИЛИСИ В АМСТЕРДАМЕ" (Jordaan)'}</td></tr>
                  <tr><td style={{ padding: '10px 12px', fontSize: '13px' }}>{'Борщ вместо супа! Заговор или просто повар перепутал рецепты?'}</td></tr>
                </tbody>
              </table>

              {/* #4 */}
              <table style={{ width: '100%', border: '2px solid #81c784', marginBottom: '12px', background: '#fff' }}>
                <tbody>
                  <tr><td style={{ background: '#ffcc80', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '15px', color: '#333', padding: '8px 12px', borderBottom: '2px solid #388e3c' }}><span style={{ fontSize: '20px' }}>{'#4'}</span>{' \u2014 "КАВКАЗСКИЙ ДОМ" (Утрехт)'}</td></tr>
                  <tr><td style={{ padding: '10px 12px', fontSize: '13px' }}>{'Хинкали летают к столу! Олег лично заснял полёт на видео.'}</td></tr>
                </tbody>
              </table>

              {/* #5 */}
              <table style={{ width: '100%', border: '2px solid #81c784', marginBottom: '12px', background: '#fff' }}>
                <tbody>
                  <tr><td style={{ background: '#a5d6a7', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '15px', color: '#333', padding: '8px 12px', borderBottom: '2px solid #388e3c' }}><span style={{ fontSize: '20px' }}>{'#5'}</span>{' \u2014 "СТАРАЯ ГРУЗИЯ" (Антверпен)'}</td></tr>
                  <tr><td style={{ padding: '10px 12px', fontSize: '13px' }}>{'Слабовато, но дешево. Идеально для студентов.'}</td></tr>
                </tbody>
              </table>

              {/* Conspiracy */}
              <table style={{ width: '100%', border: '2px solid #ef9a9a', marginBottom: '12px', background: '#fce4ec' }}>
                <tbody>
                  <tr><td style={{ background: '#ef9a9a', fontFamily: "'Arial Black', Arial, sans-serif", fontSize: '13px', color: '#b71c1c', padding: '6px 10px' }}>{'КОНСПИРАЦИЯ ГРУЗИНСКИХ ПОВАРОВ'}</td></tr>
                  <tr><td style={{ padding: '10px 12px', fontSize: '13px' }}>
                    <p style={{ marginBottom: '8px' }}>{'Почему лучшие хинкали прячут рецепты? @Odomontois утверждает: "Они охраняют древнюю магию Кавказа от голландцев!"'}</p>
                    <p style={{ fontStyle: 'italic' }}>{'Бабушка Нина из Тбилиси (живёт в Den Haag): "Настоящий хинкали делают с молитвой, а не с шаурмой!"'}</p>
                  </td></tr>
                </tbody>
              </table>

              <div style={{ textAlign: 'center', fontSize: '11px', color: '#888', fontStyle: 'italic', borderTop: '1px dashed #a5d6a7', paddingTop: '10px' }}>
                {'Опубликовано: 08.02.2026 | Просмотров: 8 432 | Комментариев: 156'}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </ArticleLayout>
  )
}
